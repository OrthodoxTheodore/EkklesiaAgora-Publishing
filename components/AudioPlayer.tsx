'use client'

import { useRef, useState, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
  label: string
}

function formatTime(s: number) {
  if (!s || isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src, label }: AudioPlayerProps) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const a = ref.current
    if (!a) return
    const onTime = () => setCurrent(a.currentTime)
    const onMeta = () => setDuration(a.duration)
    const onEnd = () => setPlaying(false)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
    }
  }, [])

  function toggle() {
    const a = ref.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = ref.current
    if (!a) return
    const t = Number(e.target.value)
    a.currentTime = t
    setCurrent(t)
  }

  const pct = duration > 0 ? (current / duration) * 100 : 0

  return (
    <div className="bg-navy border border-gold/30 p-5">
      <audio ref={ref} src={src} preload="metadata" />

      <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold mb-4">{label}</p>

      <div className="flex items-center gap-4">
        {/* Big play/pause button */}
        <button
          onClick={toggle}
          aria-label={playing ? 'Pause' : 'Play'}
          className="w-12 h-12 flex-shrink-0 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-gold-light transition-colors"
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="3" y="2" width="4" height="14" rx="1" />
              <rect x="11" y="2" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M5 3l11 6-11 6V3z" />
            </svg>
          )}
        </button>

        {/* Progress + timestamps */}
        <div className="flex-1 flex items-center gap-3">
          <span className="font-cinzel text-xs text-parchment/50 w-9 text-right tabular-nums">
            {formatTime(current)}
          </span>
          <div className="relative flex-1 h-1.5 bg-gold/20 rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-gold rounded-full"
              style={{ width: `${pct}%` }}
            />
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={current}
              onChange={seek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
              aria-label="Seek"
            />
          </div>
          <span className="font-cinzel text-xs text-parchment/50 w-9 tabular-nums">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  )
}
