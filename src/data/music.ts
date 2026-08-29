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
      // spotify: 'https://open.spotify.com/...',
      // appleMusic: 'https://music.apple.com/...',
      youtube: 'https://www.youtube.com/watch?v=mPxeMhZKovQ',
    },
  },
  // Add more songs here...
]

export const getTrackBySlug = (slug: string): MusicTrack | undefined => {
  return musicTracks.find((track) => track.slug === slug)
}
