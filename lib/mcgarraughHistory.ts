// From Carrick to the Frontier — A History of the McGarraugh Family
// Compiled by Charles McGarraugh, 2026

export type TagKind = 'record' | 'inference' | 'tradition'

export const tagLabels: Record<TagKind, string> = {
  record: 'Verified Record',
  inference: 'Well-Supported Inference',
  tradition: 'Family Tradition — Unverified',
}

export interface Generation {
  number: string
  yearLabel: string
  name: string
  dates: string
  spouse?: string
  spouseDates?: string
  note?: string
  parents?: string
  verifiedChip?: string
  isYou?: boolean
}

export interface HistoryBlock {
  type: 'p' | 'quote' | 'tag' | 'gen' | 'table'
  text?: string
  citation?: string
  tagKind?: TagKind
  tagNote?: string
  gen?: Generation
  table?: { headers: string[]; rows: string[][] }
}

export interface HistoryChapter {
  numeral: string
  title: string
  kicker: string
  blocks: HistoryBlock[]
}

export const historyTitle = `From Carrick to the Frontier`
export const historySubtitle = `A history of the McGarraugh family, compiled for those who carry the name — and those who will`
export const historyIntroNote = `Every family history is really two books wearing one cover: the part that can be footnoted, and the part that has only ever been spoken aloud at a kitchen table. Both are worth keeping. But they are not the same kind of true, and a book meant to outlive its author owes its readers the difference. So this book marks its claims three ways — Verified Record, Well-Supported Inference, and Family Tradition — Unverified — and says plainly where the evidence runs out.`
export const historyClosingNote = `This book is not finished, and it isn't supposed to be. Add to it.`

export const historyChapters: HistoryChapter[] = [
  {
    numeral: 'I',
    title: `The Name`,
    kicker: `Carrick, Ayrshire · before 1607`,
    blocks: [
      { type: 'p', text: `Long before there were parish registers or tax rolls, there was Carrick — the southern third of Ayrshire, in southwestern Scotland, where the Water of Stinchar and the Water of Girvan cut their valleys down toward the Firth of Clyde. Carrick was Gaelic-speaking Lowland Scotland, which is a phrase that surprises people who assume Gaelic stopped at the Highland line. It didn't. Carrick and neighboring Galloway held on to their Gaelic speech and their loose, kin-based landholding customs — not clans in the Highland military sense, but *septs*: families bound by blood, by a shared valley, and by a name — later than most of the Scottish Lowlands.` },
      { type: 'p', text: `It is in this landscape, sometime before written records reached this corner of Scotland, that a name was first given to a man, and stuck to his descendants.` },
      { type: 'p', text: `Here the honest version of this book has to be less tidy than the family-tree version. The research draft this book started from claimed the McGarraugh surname descends from Gaelic *Mac Ciothruadha* ("son of the auburn-haired one") or *Mac Cearrach* ("son of the gambler"), citing the Irish surname scholar Patrick Woulfe. That etymology is real — Woulfe does derive a surname from *Mac Ciothruadha*, "son of Ciothruaidh" (a personal name, per Woulfe, of Norse origin rather than a simple color-description), with *Mac Cearrach* / *Mac Cearrbhaich*, "son of the gambler," offered as an alternative anglicization.` },
      { type: 'tag', tagKind: 'record', tagNote: `Woulfe, Irish Names and Surnames, 1923` },
      { type: 'p', text: `But independent checking turned up an inconvenient fact: that etymology belongs to the surname **McKerrow**, not McGarroch, McGarrah, or McGarraugh. It is a different — if similarly spelled — Gaelic name. The name this family's spelling actually descends from is better explained by a different entry entirely, from the Scottish surname historian George F. Black: **McJarrow**. Black traces McJarrow (recorded also as MacJarrow, McGeorge, and McJerrow) to the pre-10th-century Gaelic *deoireach*, "a pilgrim," which by the 14th century had softened in speech to "jore," and from there split into the surnames *George*, *Jarrow*, and *Jerrow*.` },
      { type: 'tag', tagKind: 'record', tagNote: `Black, The Surnames of Scotland, 1946` },
      { type: 'p', text: `Why does McJarrow — "pilgrim's son" — fit this family better than McKerrow's "auburn-haired" or "gambler"? Two reasons. First, geography and timing: McJarrow is a Carrick-and-Ayrshire name, recorded in exactly the district and century this family's oral tradition places it. Second, and more decisively, the documented spelling drift. Black's own record shows McJarrow softening toward *McGeorge* on one branch — and the same soft "J"-to-"G" slide, heard by ears unused to Gaelic and written down by Ulster clerks a century later, is a far shorter, more plausible walk to **McGarroch → McGarrah → McGarraugh** than anything starting from McKerrow.` },
      { type: 'p', text: `So: this book tells the McJarrow story as the family's likely origin, not because it is the more flattering tale — a pilgrim is a quieter inheritance than a red-haired gambler — but because it is the one the paper trail actually supports. If a descendant one day finds a document that closes the gap the other way, this page should be the one that gets rewritten.` },
      { type: 'p', text: `The earliest specific documentary trace of this name is genuinely there to be found, which is not something this book can say about every claim in its early chapters:` },
      { type: 'tag', tagKind: 'record', tagNote: `Robert McJarrow, recorded at Hoihous, Ayrshire, in 1607 — George F. Black, The Surnames of Scotland` },
      { type: 'p', text: `Later Ayrshire records carry the name forward through the century: Henry Makegeore (1662, likely the McGeorge branch), and — of real importance to the next chapter of this story — John McJorrie, prosecuted for "rebellion" in 1686, and John and Henry McJorrie of Altrawarie, prosecuted for rebellion in 1681. A Hendry McJerrow appears as a merchant in Ayr in 1704, and a John McJorrow of Pingerroch as a surgeon and burgess of Prestwick by 1732 — the name climbing, by then, into trade and the professions as much as the land.` },
      { type: 'tag', tagKind: 'record', tagNote: `Black, The Surnames of Scotland` },
      { type: 'p', text: `By the 1600s, this was a family that wove its own cloth rather than buying it: not a standardized "clan tartan" — that is a much later, largely 19th-century invention — but the everyday **shepherd's check**, sometimes called the border plaid: a plain two-tone check of undyed cream wool against wool dyed dark with bog myrtle, alder bark, or lichen, worn as a heavy *maud* thrown over the shoulder against the Ayrshire rain.` },
      { type: 'tag', tagKind: 'inference', tagNote: `Documented general material culture of 17th-century rural Ayrshire and Galloway, not a record of this family specifically` },
      { type: 'p', text: `And it is that same generation of McJorries — prosecuted for "rebellion" in Ayrshire in the early 1680s — that carries this story into its second chapter.` },
    ],
  },
  {
    numeral: 'II',
    title: `The Killing Times`,
    kicker: `Ayrshire · 1679 – 1688`,
    blocks: [
      { type: 'p', text: `A word needs unpacking before the story can continue: **rebellion**. In an English court record from almost any other decade, "rebellion" might mean an armed uprising against the crown. In Ayrshire between 1679 and 1688, when the word appears next to an ordinary farming family's name, it almost always meant something more specific and, in hindsight, more sympathetic: refusing to accept a bishop.` },
      { type: 'p', text: `Scotland's Presbyterian church had spent decades resisting the Stuart monarchy's insistence on imposing bishops and a king-controlled liturgy on a church that believed Christ alone was its head. Ministers who would not conform were thrown out of their parishes; congregations who would not accept the replacements met instead in the open hills, at illegal outdoor services called **conventicles**. Ayrshire and Galloway — Carrick country — were the hardest core of this resistance, and the government's response to it, especially in the years 1684–85, earned its own grim name in Scottish memory: **the Killing Times**. Soldiers under commanders like John Graham of Claverhouse were given wide authority to fine, imprison, transport, or in the worst-documented cases summarily execute Covenanters found in the field. Whole parishes were fined into ruin for the crime of not attending the king's church.` },
      { type: 'tag', tagKind: 'record', tagNote: `General historical fact of the Killing Times; documented contemporaneously in Robert Wodrow's The History of the Sufferings of the Church of Scotland, 1721, and confirmed by modern Scottish historiography` },
      { type: 'p', text: `This is exactly the moment — 1681 and 1686 — that Ayrshire's courts recorded John and Henry McJorrie of Altrawarie and John McJorrie prosecuted for "rebellion."` },
      { type: 'p', text: `No surviving document quoted in this book's research states outright, in so many words, "the McJorries were Covenanters." That specific sentence would be a family-tradition claim dressed up as a citation, and this book promised not to do that. What can honestly be said is this: in Ayrshire, in exactly those two years, "prosecuted for rebellion" was the era's standard court language for exactly one thing — nonconformity to the government's church, prosecuted under the Killing Times' emergency legal powers. A family of that name, in that district, in that decade, caught in that specific legal machinery, fits the Covenanter pattern about as tightly as a family can fit a pattern without their minister's sermon notes surviving to prove it outright.` },
      { type: 'tag', tagKind: 'inference', tagNote: `The McJorrie prosecutions are real court records; their specific religious character is inferred from the well-documented legal vocabulary of the Killing Times, not stated explicitly in the record itself` },
      { type: 'p', text: `Families convicted, fined, or simply worn down by a decade of this pressure had a well-worn escape route, and thousands of Ayrshire and Galloway Presbyterians took it in these same years: the short, rough crossing of the North Channel to **Ulster**, in the north of Ireland, where a Scottish Presbyterian population — planted there since James VI and I's official Ulster Plantation scheme of 1609–1610, and swelled continuously since by exactly this kind of religious refugee — already gave a fleeing family somewhere to land among people who spoke their language, in both senses.` },
      { type: 'tag', tagKind: 'inference', tagNote: `Standard, well-documented escape route for Covenanter families in this period; no individual travel record for this family has yet been found` },
      { type: 'p', text: `Whether it was this specific prosecution, in this specific decade, that sent this family across the water, or whether it happened a generation earlier or later as part of the same long current, the destination and the century are not in serious doubt. By the time the family surfaces again in documents anyone can check, it is in Ulster — and the name has changed shape again.` },
    ],
  },
  {
    numeral: 'III',
    title: `Ulster, and the Long Crossing`,
    kicker: `County Antrim / Down · c. 1690 – 1750`,
    blocks: [
      { type: 'p', text: `Surnames in this period belonged less to the people who carried them than to the clerks who wrote them down. An Ulster land agent, a Presbyterian session clerk, an estate surveyor — hearing a Scots-Gaelic-accented "McJarrow" or "McGarroch" for the first time and reaching for a pen — did not consult the family for the correct spelling. He wrote what he heard. Over two or three generations of leases, baptismal entries, and tithe lists, that produced exactly the kind of spelling drift Chapter I traced on paper: **McJarrow → McGarroch → McGarrah → McGarraugh** — the last of these being, as far as this research has found, the specific spelling that crossed the Atlantic and has been carried in this family ever since.` },
      { type: 'tag', tagKind: 'inference', tagNote: `Standard, extensively documented mechanism of Scots-Irish surname drift in Ulster, consistent with the spelling sequence Black records; this family's specific Ulster-period documents have not yet been located` },
      { type: 'p', text: `In Ulster, families of this background — Presbyterian, Scots-speaking, generally tenant farmers rather than landowners — settled thickest in Antrim, Down, and Londonderry, working land leased from Anglo-Irish landlords under the **Ulster Custom**, a locally negotiated tenant-right arrangement that gave Presbyterian tenants somewhat more security than Irish Catholic tenants elsewhere on the island — while still leaving them shut out of full civic and political life by the **Penal Laws**, which reserved office-holding, and much else, for members of the established Church of Ireland. It was a strange, specific kind of citizenship: Protestant enough to be useful to the Crown as a buffer population, not Anglican enough to be treated as first-class subjects.` },
      { type: 'p', text: `By the early 1700s, a string of poor harvests, sharply rising rents as leases came up for renewal, and a downturn in the linen trade that many of these families depended on pushed a new wave of Ulster Scots — several hundred thousand of them across the century — back across another ocean, this time the Atlantic.` },
      { type: 'tag', tagKind: 'inference', tagNote: `Well-documented general condition of Ulster Presbyterian tenant families in this period; this family's specific lease and congregation records in Ulster have not yet been located` },
      { type: 'p', text: `Most Ulster-Scots emigration in this period ran through the port of **Philadelphia**, and from there fanned out along two well-worn paths: north and west into the Pennsylvania backcountry, or south along the **Great Wagon Road** through the Shenandoah Valley into the Carolina backcountry. This family's line took the first path.` },
      { type: 'p', text: `This is the point in the story where the family's own record — the tree kept and passed down through eleven generations, reproduced in full in Chapter V — picks up the thread with two names the archives have not yet independently confirmed, but which the family holds as its founding American couple: **Alexander McGarraugh (c. 1715–1790)** and **Mary McGarraugh (c. 1715–1790)**, who made the crossing from Ulster to colonial Pennsylvania in the mid-18th century.` },
      { type: 'tag', tagKind: 'tradition', tagNote: `The family tree's dates and the fact of an Ulster-to-Pennsylvania crossing; no Pennsylvania land warrant, ship passenger list, or naturalization record specifically naming Alexander or Mary McGarraugh has yet been located. This is the single largest open research question this book leaves — see the closing chapter.` },
      { type: 'p', text: `What can be said with real confidence is what Alexander and Mary's son did next — and there, the paper trail returns.` },
    ],
  },
  {
    numeral: 'IV',
    title: `The First American McGarraughs`,
    kicker: `Westmoreland County, Pennsylvania · 1738 – 1839`,
    blocks: [
      { type: 'p', text: `Here the book gets to stand on solid ground again.` },
      { type: 'p', text: `**Joseph McGarraugh (1738–1810)**, son of Alexander and Mary, appears in the official research guide of the Pennsylvania Historical & Museum Commission, Pennsylvania State Archives, under the record of the **Westmoreland County Revolutionary War Militia** — as **Major Joseph McGerraugh**, listed among the commanding officers of the **3rd Battalion**, in **1778**.` },
      { type: 'tag', tagKind: 'record', tagNote: `Pennsylvania Historical & Museum Commission, PA State Archives, "Westmoreland County Revolutionary War Militia" research guide — note the archive's spelling, "McGerraugh"` },
      { type: 'p', text: `That single line of a militia roster is worth pausing on, because of exactly what a Westmoreland County major's commission meant in 1778. Westmoreland County was the raw edge of the Pennsylvania frontier — carved out of Bedford County only in 1773, its county seat at Hannastown burned by British-allied raiders in 1782. A militia commission there was not a rear-echelon honor; it was frontier defense in the most literal sense, organizing farmers to muster against the very real threat of raids while the war against Britain was fought, for these families, on two fronts at once. Joseph did not simply live through the Revolution on the Pennsylvania frontier — by 1778 he held a field officer's rank in the force responsible for defending it.` },
      { type: 'p', text: `Joseph married **Elizabeth K. Pennock** and, by the family's own tree, raised at least one son who carried the family into its next chapter — and into a pulpit.` },
      { type: 'p', text: `**Robert McGarraugh (1777–1839)** — Joseph and Elizabeth's son — appears independently in a documented history of the Presbytery of Clarion of the Presbyterian Church, which names John McPherrin and Robert McGarraugh as two members of the Presbytery of Redstone sent as missionaries into the then-frontier territory known as Stump Creek, in what is now Clarion and Jefferson Counties, Pennsylvania. A related church history of the Beechwoods congregation records "Rev. Cyrus Riggs and Dr. Robert M'Garrough" making regular visits to that community in **1831–1832**, in the years before it organized as its own church.` },
      { type: 'tag', tagKind: 'record', tagNote: `History of the Presbytery of Clarion of the Presbyterian Church of the U.S.A. — dates (1831–32) are internally consistent with Robert McGarraugh's 1777–1839 lifespan, placing him in his mid-fifties on this mission field` },
      { type: 'p', text: `It is a striking pair of records to find sitting one generation apart: a father who defended the Pennsylvania frontier with a militia commission, and a son who, a generation later, carried a different kind of authority — a Bible and a mission — into the same kind of raw frontier territory once the fighting had passed. Whatever else is uncertain in this family's earlier chapters, by the turn of the 19th century the McGarraughs were unmistakably, documentably part of the story of how western Pennsylvania was defended, settled, and churched.` },
      { type: 'p', text: `Robert married **Lavina Jane Stille** (1773–1837). Their son Joseph carries the family into Chapter V, and into the fuller, name-by-name record of everyone between that generation and the writing of this book.` },
    ],
  },
  {
    numeral: 'V',
    title: `Eleven Generations`,
    kicker: `Alexander McGarraugh, b. c.1715 → Charles McGarraugh, b. 1995`,
    blocks: [
      { type: 'p', text: `What follows is the direct male line of descent from Alexander McGarraugh to the compiler of this book, generation by generation, drawn from the family tree maintained by the McGarraugh family and corrected against living family memory where the two disagreed. Spouses and their known parents are included where recorded. Where a fact is independently verified in an outside record, that record is marked; everything else here is the family's own kept memory, which is its own kind of evidence and does not need an archive's permission to belong in this book.` },
      { type: 'p', text: `This chapter is deliberately left with room to grow. A line at the end of each generation invites whoever next opens this book to add what they know: an occupation, a farm, a photograph, a story told at a funeral. A family history that only looks backward stops being useful the moment it's printed. This one shouldn't.` },
      { type: 'gen', gen: { number: '1', yearLabel: '1715', name: 'Alexander McGarraugh', dates: 'c.1715–1790', spouse: 'Mary McGarraugh', spouseDates: 'c.1715–1790', note: 'The immigrant generation. Crossed from Ulster to colonial Pennsylvania. See Chapter III.' } },
      { type: 'gen', gen: { number: '2', yearLabel: '1738', name: 'Joseph McGarraugh', dates: '1738–1810', spouse: 'Elizabeth K. Pennock', spouseDates: '1735–?', note: 'Major, 3rd Battalion, Westmoreland County Revolutionary War Militia, 1778. See Chapter IV.', verifiedChip: 'Verified Record · PA State Archives' } },
      { type: 'gen', gen: { number: '3', yearLabel: '1777', name: 'Rev. Robert McGarraugh', dates: '1777–1839', spouse: 'Lavina Jane Stille', spouseDates: '1773–1837', note: 'Presbyterian missionary, Presbytery of Redstone, to the Stump Creek territory (Clarion/Jefferson Co., PA), documented active 1831–32. See Chapter IV.', verifiedChip: 'Verified Record · Presbytery of Clarion history' } },
      { type: 'gen', gen: { number: '4', yearLabel: '1792', name: 'Joseph McGarraugh', dates: '1792–?', spouse: 'Hannah Milligan', spouseDates: '1797–1859' } },
      { type: 'gen', gen: { number: '5', yearLabel: '1824', name: 'Lyanias McGarraugh', dates: '1824–1869', spouse: 'Elizabeth Ann Anderson', spouseDates: '1827–1867', parents: "Elizabeth Ann's parents: Benjamin Franklin Anderson (1794–1876) & Rhoda Marie Dimmitt (1796–1853)" } },
      { type: 'gen', gen: { number: '6', yearLabel: '1865', name: 'J. Albert McGarraugh', dates: '1865–1929', spouse: 'Sarah Elizabeth Sands', spouseDates: '1870–1943' } },
      { type: 'gen', gen: { number: '7', yearLabel: '1889', name: 'Clyde Edward McGarraugh', dates: '1889–1952', spouse: 'Bessie Kaulp', spouseDates: '1893–1953', parents: "Bessie's father: David Kaup (1858–1924)" } },
      { type: 'gen', gen: { number: '8', yearLabel: '1915', name: 'Lloyd Edward McGarraugh', dates: '1915–1997', spouse: 'Sylvia Marie Wing', spouseDates: '1918–2014', parents: "Sylvia's parents: George Edward Wing (1894–1960) & Alida May Murray (1899–1926)" } },
      { type: 'gen', gen: { number: '9', yearLabel: '1942', name: 'Ronald McGarraugh', dates: '1942–2025', spouse: 'Carolyn Sherrill McGarraugh', spouseDates: 'living', parents: "Carolyn's parents: Charles Neely Sherrill (1910–1979) & Shelan Juanita Stephens (1909–1995)" } },
      { type: 'gen', gen: { number: '10', yearLabel: '—', name: 'Steven McGarraugh', dates: 'living', spouse: 'Sandra McCutchen', spouseDates: 'b.1964', parents: "Sandra's parents: Ellis Bain McCutchen (1913–1993) & Thelma McCutchen (1918–?)" } },
      { type: 'gen', gen: { number: '11', yearLabel: '1995', name: 'Charles McGarraugh', dates: 'b.1995', note: 'Compiler of this book.', isYou: true } },
    ],
  },
  {
    numeral: 'VI',
    title: `How This Book Was Checked`,
    kicker: `A note on sources, for the next researcher in the family`,
    blocks: [
      { type: 'p', text: `This book began as a research draft produced with the help of an AI research assistant (Google Gemini), which the family then brought to a second AI (Claude) to write into narrative form. Before writing a single chapter, that second pass independently checked the draft's claims against real, searchable sources — because a document meant to sit on a shelf for a hundred years deserves better sourcing than a first draft, however confident it sounds.` },
      { type: 'p', text: `**What held up:** Robert McJarrow at Hoihous, Ayrshire, 1607 (Black); the McJorrie prosecutions for "rebellion" in Ayrshire, 1681 and 1686 (Black); the general history of the Killing Times and Ulster-Scots migration to Pennsylvania (broad historical consensus); Major Joseph McGerraugh, 3rd Battalion, Westmoreland County Militia, 1778 (PA State Archives) — found independently, not in the original draft's citation list at all; and Rev. Robert McGarraugh, Presbytery of Redstone missionary, active 1831–32 (History of the Presbytery of Clarion) — likewise found independently.` },
      { type: 'p', text: `**What was corrected:** the surname etymology (*Mac Ciothruadha* / *Mac Cearrach*) was real scholarship, but for the wrong surname — it belongs to McKerrow, not McGarroch/McGarrah/McGarraugh. Chapter I now uses the correctly attributed McJarrow ("pilgrim") etymology instead. Several specific archival citations in the original draft — a precise Register of the Privy Council volume number, a specific Barr parish landholding record, a named PRONI lease — could not be independently located and have been removed rather than repeated on faith. They may well exist; they simply weren't confirmed in this pass, so they aren't presented here as settled.` },
      { type: 'p', text: `**What's still open:** no Ulster-period record (a Hearth Money Roll entry, a congregation roll, a lease) has yet been found naming this family before the crossing. No passenger list, naturalization record, or Pennsylvania land warrant has yet been found for Alexander or Mary McGarraugh specifically. Elizabeth K. Pennock's death date, Joseph McGarraugh's (b. 1792) death date, and full details on David Kaup and the McCutchen family are open. If you are the one to close any of these gaps — ScotlandsPeople, PRONI's online catalogue, and Ancestry/FamilySearch's Pennsylvania land and church collections are the logical next stops — please add the record here, with its citation.` },
      {
        type: 'table',
        table: {
          headers: ['Source', 'Archive / Publisher', 'What It Confirms'],
          rows: [
            ['George F. Black, The Surnames of Scotland (1946)', 'New York Public Library', 'McJarrow etymology; Robert McJarrow, Hoihous, 1607; McJorrie prosecutions, 1681 & 1686'],
            ['Patrick Woulfe, Irish Names and Surnames (1923)', 'Dublin', 'Mac Ciothruadha / Mac Cearrach etymology (correctly attributed to McKerrow; discussed in Ch. I for context)'],
            ['Robert Wodrow, The History of the Sufferings of the Church of Scotland (1721)', '—', 'Documents the Killing Times generally'],
            ['PHMC, PA State Archives — Westmoreland County Revolutionary War Militia', 'Harrisburg, PA', 'Maj. Joseph McGerraugh, 3rd Battalion, 1778'],
            ['History of the Presbytery of Clarion of the Presbyterian Church of the U.S.A.', '—', 'Rev. Robert McGarraugh, Presbytery of Redstone missionary, 1831–32'],
            ['McGarraugh family tree', 'Family-maintained', 'Generations 1–11, Chapter V'],
          ],
        },
      },
    ],
  },
]
