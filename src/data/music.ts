export interface MusicTrack {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  releaseYear: string
  platforms: {
    spotify?: string
    appleMusic?: string
    youtube?: string
    audiomack?: string
  }
}

export const musicTracks: MusicTrack[] = [
  {
    id: 'nkiruka',
    slug: 'nkiruka',
    title: 'Nkiruka',
    excerpt:
      '“Nkeiruka”—an Igbo name meaning “What Lies Ahead Is Greater”—is an uplifting musical expression of optimism, perseverance, and forward movement. Chi Akomas encourages people to look beyond present limitations and believe that their finest days are still waiting to unfold. Anchored in African heritage and enriched by an energizing sound, the piece addresses moments when progress feels slow and past experiences threaten to weaken one’s courage. It urges the audience not to remain imprisoned by yesterday, because a difficult beginning does not cancel a remarkable destination. “Nkeiruka” carries the spirit of possibility. It inspires dreamers, survivors, and visionaries to keep walking, keep building, and keep expecting better. The road may be demanding, but the horizon holds fresh opportunities, meaningful accomplishments, and a brighter future.',
    image: '/images/music/nkiruka-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2026',
    platforms: {
      spotify: 'https://open.spotify.com/album/3ZgtiMzbPgyblzbAm5VZIW',
      // appleMusic: 'https://music.apple.com/...',
      youtube: 'https://www.youtube.com/watch?v=mPxeMhZKovQ',
    },
  },
  {
    id: 'recover',
    slug: 'recover',
    title: 'Recover',
    excerpt:
      '“Recover” is a stirring anthem of restoration for anyone rebuilding after loss, heartbreak, failure, or hardship. Through compelling vocals and an energizing sound, Chi Akomas announces that painful experiences do not have the authority to determine how a person’s journey will end. The music captures the courageous transition from surviving to rising again. It acknowledges seasons when confidence is shaken and valuable things appear lost, yet insists that broken places can be rebuilt, stolen joy can return, and wounded dreams can breathe again. Bold, empowering, and filled with renewed expectation, “Recover” calls people out of despair and into a fresh beginning. It is the soundtrack of resilience—a fearless proclamation that what was damaged can be restored, what was interrupted can resume, and life can become fruitful again.',
    image: '/images/music/recover-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2025',
    platforms: {
      spotify: 'https://open.spotify.com/album/516bFH8EVgsUxnfIInnypv',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  {
    id: 'chinecherem',
    slug: 'chinecherem',
    title: 'Chinecherem',
    excerpt:
      '“Chinecherem”—an Igbo phrase translated as “God Thinks of Me” or “God Remembers Me”—is an intimate testimony of being seen, remembered, and cherished by the Almighty. Chi Akomas marvels at the personal attention of a limitless God who notices each tear, understands every silent prayer, and never overlooks His own. The track speaks tenderly to those who have felt forgotten, abandoned, or insignificant. Its comforting message affirms that heaven has not lost sight of anyone: behind apparent delays, God is arranging outcomes, preserving destinies, and preparing unexpected answers. Steeped in gratitude and wonder, “Chinecherem” offers reassurance that each life matters deeply to God. Even when circumstances suggest otherwise, He remains mindful of His people—holding them close, attending to their needs, and writing their stories with purposeful care.',
    image: '/images/music/chinecherem-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2024',
    platforms: {
      spotify: 'https://open.spotify.com/album/1h62tqDehFdlbQUgdk2lEe',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  {
    id: 'onye-oma',
    slug: 'onye-oma',
    title: 'Onye Oma (Exceptional)',
    excerpt:
      '“Onye Oma”—meaning “The Good One” in Igbo—is a joyful tribute to God’s extraordinary kindness and generous nature. Rooted in African praise and carried by vibrant rhythms, Chi Akomas recounts the countless ways God cares for His children, opens doors, lifts burdens, and turns sorrow into celebration. The composition springs from a heart that has personally encountered divine goodness. It captures the excitement of looking back and realizing that grace was present through every difficult chapter, providing help when human ability had reached its limit. With its rich cultural flavor and contagious atmosphere, “Onyeoma” inspires singing, dancing, and thanksgiving. It leaves one resounding truth in the hearts of its audience: God is truly good, and His benevolence deserves to be proclaimed from generation to generation.',
    image: '/images/music/onye-oma-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2023',
    platforms: {
      spotify: 'https://open.spotify.com/album/7rB5IFYHQ6FHrKiBx3aZyK',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  {
    id: 'your-name',
    slug: 'your-name',
    title: 'Your Name',
    excerpt:
      '“Your Name” is a powerful worship anthem celebrating the majesty, authority, and unmatched power of God’s name. Inspired by the declaration, “Mountains bow down, kings tremble at Your name,” the song portrays a God whose presence commands all creation and whose name stands above every earthly power, throne, and authority. Through reverent lyrics and a soul-stirring melody, Chi Akomas invites listeners to recognize that no obstacle is too great and no situation is beyond God’s control. Mountains represent the challenges that must surrender before Him, while trembling kings reveal that even the highest human authority remains subject to His sovereign power. More than a song, “Your Name” is a bold declaration of faith, awe, and surrender. It reminds us that God’s name brings hope to the broken, peace to the troubled, healing to the wounded, and victory in every battle. His is the name before which creation bows—the name worthy of all honor, glory, and eternal praise.',
    image: '/images/music/your-name-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2022',
    platforms: {
      spotify: 'https://open.spotify.com/album/5FdSDdQyvhubT6W4KHTdxT',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  {
    id: 'worthy',
    slug: 'worthy',
    title: 'Worthy to be praised',
    excerpt:
      '“Worthy to Be Praised” is a heartfelt worship song that exalts God for His greatness, faithfulness, mercy, and unfailing love. Through inspiring lyrics and a soul-lifting melody, Chi Akomas invites every listener to pause, reflect, and offer sincere praise to the One who deserves all honor and glory. The song is a powerful declaration that God remains worthy—not only in seasons of joy and victory, but also through trials, uncertainty, and waiting. His goodness never changes, His promises never fail, and His presence remains constant. More than a melody, “Worthy to Be Praised” is an invitation to worship, a testimony of gratitude, and a reminder that in every season and circumstance, God is forever worthy to be praised.',
    image: '/images/music/worthy-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2020',
    platforms: {
      spotify: 'https://open.spotify.com/album/7FllmTtyX9jAcv4jNgL53l',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  {
    id: 'odogwu',
    slug: 'odogwu',
    title: 'Odogwu',
    excerpt:
      '“Odogwu” is a powerful anthem of praise, honor, and gratitude to God—the mighty Warrior who fights every battle and makes the impossible possible. With uplifting rhythms, heartfelt lyrics, and a triumphant message, Chi Akomas celebrates God’s greatness, faithfulness, protection, and unfailing love. “Odogwu,” meaning “The Great and Mighty One,” reminds listeners that no challenge is greater than God and no situation is beyond His power. This song invites everyone to rise in worship, dance with joy, and confidently declare that God remains the ultimate Champion—the One who never fails. More than a song, “Odogwu” is a declaration of victory, a testimony of divine intervention, and a celebration of the God who has done what no human being could do.',
    image: '/images/music/odogwu-cover.jpg', // 1:1 Square aspect ratio recommended
    releaseYear: '2020',
    platforms: {
      spotify: 'https://open.spotify.com/album/6089VeT980wbu1N8BauTH0',
      // appleMusic: 'https://music.apple.com/...',
      // youtube: '',
    },
  },
  // Add more songs here...
]

export const getTrackBySlug = (slug: string): MusicTrack | undefined => {
  return musicTracks.find((track) => track.slug === slug)
}
