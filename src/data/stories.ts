import type { Story } from '@/types'

export const stories: Story[] = [
  {
    id: 'bem-te-vi',
    slug: 'bem-te-vi',
    title: 'Bem-te-vi',
    excerpt: '— Bem-te-vi! — gorjeou o emplumado prisioneiro.',
    image: '/images/stories/bem-te-vi.jpg',
    readingTime: 4,
    text: `...`,
  },
  {
    id: 'insignificancia',
    slug: 'insignificancia',
    title: 'Insignificância',
    excerpt:
      'Não sei que dia da semana é, que dia do mês… Que mês? Já nem sei minha própria idade.',
    image: '/images/stories/insignificancia.jpg',
    readingTime: 1,
    text: `...`,
  },
  {
    id: 'gracas-a-deus',
    slug: 'gracas-a-deus',
    title: 'Graças a Deus',
    excerpt: 'Faminta, sem jantar nem desjejum, Maria comprou duas coxinhas.',
    image: '/images/stories/gracas-a-deus.jpg',
    readingTime: 2,
    text: `...`,
  },
]

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find((story) => story.slug === slug)
}