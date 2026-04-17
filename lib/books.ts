export interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  genre: string
  shortDescription: string
  fullDescription: string
  retailers: {
    amazon?: string
    barnesAndNoble?: string
    appleBooks?: string
    googlePlay?: string
    kobo?: string
  }
  formats: string[]
}

export const books: Book[] = [
  {
    id: 'fence-between-us',
    title: 'The Fence Between Us',
    author: 'Theodore Edwards',
    coverImage: '/covers/fence-between-us.png',
    genre: 'Historical Fiction',
    shortDescription:
      'In the shadow of the Blue Ridge Mountains, a cedar fence marks the boundary between two families bound by both kinship and circumstance.',
    fullDescription: `In the shadow of the Blue Ridge Mountains, a cedar fence marks the boundary between two families bound by both kinship and circumstance. When Elias Whitmore and Daniel Conroy rebuild that fence together on an April morning, they do not know it will become the measure of all that divides and unites them in the years to come.

Martha keeps her home and her heart open to a community that gathers at her table—a space where neighbors, strangers, and those seeking refuge find a kind of grace in ordinary time. But as the nation tears itself apart, the fence between the two properties becomes a line that cannot hold: a line crossed by soldiers in gray, by a man who arrives at midnight seeking shelter, by letters and secrets and the terrible knowledge of war.

Four years of conflict will scatter these people across battlefields and into hiding. It will cost them blood, faith, and conviction. And when it finally ends, the way home is longer than any of them can imagine.

This is a story about the fences we build and the boundaries we must cross to find what it means to be forgiven, to forgive, and to come home to love.`,
    retailers: {
      amazon: '#',
      barnesAndNoble: '#',
      appleBooks: '#',
      googlePlay: '#',
    },
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
  },
  {
    id: 'prisoners-of-fort-reno',
    title: 'Prisoners of Fort Reno',
    author: 'Theodore Edwards',
    coverImage: '/covers/prisoners-of-fort-reno.png',
    genre: 'Historical Fiction',
    shortDescription:
      'Fort Reno, Oklahoma. 1944. The war is somewhere else. Here there is only flat land, red dirt, a ring of wire, and searchlights that sweep the dark every forty seconds.',
    fullDescription: `Fort Reno, Oklahoma. 1944.

The war is somewhere else. Here there is only flat land, red dirt, a ring of wire, and searchlights that sweep the dark every forty seconds like something trying to remember what it's looking for.

Corporal Ray Decker is twenty-four, nearsighted, stateside. His job is to watch the German prisoners sleep. That's all it is supposed to be. Then one of them turns up dead.

The paperwork says suicide. The Germans say the same. But Werner Hess is a cabinetmaker from Hamburg who carves birds from wood scraps and has survived two years in the desert and another year behind wire—afraid in a way that has nothing to do with grief. There is something inside the compound. It walks in the body of a man named Brandt. It speaks quietly and keeps records and enforces the laws of a country that is losing the war eight thousand miles away. And it has decided that Werner is next.

Decker is not a hero. That is the whole point. He is the kind of man who keeps his head down, does his job, and goes home. But Werner is going to die, and Decker knows it, and the knowing sits in him like a stone he cannot put down.

What happens when a man like that refuses, just once, to barely look away?

Rooted in documented history: the real enforcement network that operated inside Allied POW camps, the deaths staged as suicides, the men who carried the Reich's terror with them into captivity. It is a war story without a battlefield. It is a ghost story without easy ghosts. And it is a question that will not let go of you after the last page: How much does one act of mercy actually weigh?`,
    retailers: {
      amazon: '#',
      barnesAndNoble: '#',
      appleBooks: '#',
      googlePlay: '#',
    },
    formats: ['Hardcover', 'Paperback', 'eBook'],
  },
  {
    id: 'effie-on-the-tenth-floor',
    title: 'Effie on the Tenth Floor',
    author: 'Theodore Edwards',
    coverImage: '/covers/effie-on-tenth-floor.jpg',
    genre: 'Literary Fiction',
    shortDescription:
      'The Skirvin Hilton, Oklahoma City. 2019. Marcus Devereux Cole is a man who has slept in three hundred hotel rooms in sixteen years and knows what a hotel sounds like at 3 AM. This one sounds different.',
    fullDescription: `The Skirvin Hilton, Oklahoma City. 2019.

The hotel opened in 1910 and it is still there: ten stories of red brick and limestone on Park Avenue, English Gothic detail above the entrance, the marble lobby restored to what it once was. Marcus Devereux Cole is thirty-eight, a power forward in his final NBA season, a man who has slept in three hundred hotel rooms in sixteen years and knows what a hotel sounds like at 3 AM. This one sounds different.

Something wakes him at 11:47. He cannot say what. Then again at 3:14. He is not a superstitious man. He is not given to imagination. He is in Oklahoma City for forty-two hours and something in this building does not want him to sleep.

In 1911, a young woman came to work at the Skirvin. She was nineteen years old, from a small town sixty miles south, and she climbed the stairs every morning and cleaned the rooms and learned the corridors and believed that she had arrived at her life. The man who built the building noticed her. What followed is not in any official record. What is certain is that she lived on the tenth floor for a time, and then she did not. What is certain is that no one who knew her was told what happened. What is certain is that her name was Effie.

One hundred and eight years separate them. They are in the same building. They are, in some way that the building seems to insist upon, in the same room.

Rooted in documented accounts: the NBA players who have refused to stay here, the hotel's verified history, the legend that has circulated since before the renovations and has never been confirmed or put to rest. It is a novel about what is owed to the dead. It is a ghost story about whether ghost is the right word.

What does a person carry out of a building where someone was never allowed to leave?`,
    retailers: {
      amazon: '#',
      barnesAndNoble: '#',
      appleBooks: '#',
      googlePlay: '#',
    },
    formats: ['Hardcover', 'Paperback', 'eBook'],
  },
]
