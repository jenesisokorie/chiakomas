import type { Story } from '@/types'

import { beautifulBook } from '@/content/beautiful'
import { womanBook } from '@/content/woman'
import { purposeBook } from '@/content/purpose'
import { communication } from '@/content/communication'

export const stories: Story[] = [
  {
    id: 'communication',
    slug: 'communication',
    title: 'Effective Communication',
    excerpt:
      'Waking up every day in the same square, a man feeds fantasies about an unattainable woman and envies the seemingly perfect life of his rival.',
    image: '/images/stories/communication-cover.png',
    readingTime: 1,
    content: communication,
  },
  {
    id: 'woman',
    slug: 'woman',
    title: 'The Woman',
    excerpt:
      'In love with a waitress, a student transforms a coffee shop routine into a stage for romantic dreams and deep-seated insecurities that are hard to overcome.',
    image: '/images/stories/woman-cover.png',
    readingTime: 6,
    content: womanBook,
  },
  {
    id: 'purpose',
    slug: 'purpose',
    title: 'Purpose',
    excerpt:
      'While waiting for news of her hospitalized father during the pandemic, a domestic worker witnesses firsthand the stark contrast between privilege and suffering.',
    image: '/images/stories/purpose-cover.png',
    readingTime: 2,
    content: purposeBook,
  },
  {
    id: 'beautiful',
    slug: 'beautiful',
    title: 'Beautiful',
    excerpt:
      'Confined by the limitations imposed by the world around him, a young boy finds an unexpected lesson about freedom in a small bird.',
    image: '/images/stories/beautiful-cover.png',
    readingTime: 4,
    content: beautifulBook,
  },
]

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find((story) => story.slug === slug)
}
