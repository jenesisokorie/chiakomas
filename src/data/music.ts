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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
      'An uplifting gospel track centered on faith, healing, and courage.',
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
