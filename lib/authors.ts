export interface Author {
  id: string
  name: string
  role: string
  photo?: string
  bio: string[]
  bookIds: string[]
}

export const authors: Author[] = [
  {
    id: 'theodore-edwards',
    name: 'Theodore Edwards',
    role: 'Founder & Author — EkklesiaAgora Publishing',
    bio: [
      'Theodore Edwards is the founder and owner of EkklesiaAgora Publishing. His novels explore the intersections of history, faith, and moral consequence — stories set in the margins of recorded events, where ordinary people face choices that cost them something real.',
      'His debut novel, The Fence Between Us, is set in the shadow of the Blue Ridge Mountains during the Civil War era — a story of two neighboring families, a fence that becomes a fault line, and the long road back to forgiveness. Prisoners of Fort Reno draws on the documented history of German POW camps on Oklahoma soil, following a reluctant guard who cannot look away from a man about to die. His third novel, Effie on the Tenth Floor, inhabits the haunted history of Oklahoma City\'s legendary Skirvin Hotel, weaving together a story a century apart.',
      'Edwards publishes through Amazon KDP and IngramSpark, bringing his work to readers through major retailers worldwide.',
    ],
    bookIds: ['fence-between-us', 'prisoners-of-fort-reno', 'effie-on-the-tenth-floor'],
  },
]
