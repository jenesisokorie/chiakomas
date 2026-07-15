import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'
import Image from 'next/image'

const purchaseUrl = 'https://chiakomas.com'

export const metadata: Metadata = {
  title: 'Muted Masculity',
  description:
    'Discover Muted Masculity - Why men don’t speak up, an important addition to the increasing discussion about men’s mental and emotional well-being, a healthy definition of masculinity.',
  openGraph: {
    title: 'Muted Masculity — Chi Akomas',
    description:
      'The debut book by Chi Akomas, Muted Masculity - Why men don’t speak up.',
    images: [
      {
        url: '/images/muted-masculinity-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cover of the book Muted Masculity, by Chi Akomas',
      },
    ],
    locale: 'en_US',
    type: 'book',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muted Masculity — Chi Akomas',
    description:
      'Discover Muted Masculity - Why men don’t speak up. by Chi Akomas.',
    images: ['/images/muted-masculinity-cover.jpg'],
  },
}

export default function bookPage(): React.JSX.Element {
  return (
    <main id="main-content" className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
            <div className="flex justify-center lg:sticky lg:top-28 lg:justify-start">
              <Image
                src="/images/muted-masculinity-cover.jpg"
                alt="Cover of the book Muted Masculity, by Chi Akomas"
                width={459}
                height={616}
                priority
                className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
              />
            </div>

            <div className="min-w-0">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                Debut book
              </p>

              <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
                Muted Masculity
              </h1>

              <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
                <p>
                  This book is an important addition to the increasing
                  discussion about men’s mental and emotional well-being, a
                  healthy definition of masculinity. It offers a loving
                  encouragement to men to reclaim their fullest definition of
                  masculinity. Right from the dedication to the reflection
                  questions at the end of each chapter, the central message is
                  clear: men are not inherently emotionally distant; they have
                  often been conditioned to remain silent, and that silence
                  comes at a profound personal and societal cost. One of the
                  greatest strengths of this book is its balance. The book does
                  not negate the positive aspects of male nature that include
                  bravery, responsibility, provision and resilience. The book
                  only asserts that these virtues are more sustainable when they
                  come together with self- awareness and the ability to seek
                  support when needed. This balance makes the book comfortably
                  appealing even to people who may react defensively to the
                  discussion of masculinity. This book also holds the
                  possibility of transforming lives because it provides a
                  language to the lived experiences that men have long found
                  difficult to express. With an explanation as to how that boys
                  are often socially conditioned to repress their emotions,
                  perceiving vulnerability as weakness, and identifying
                  emotional silence as learned rather than inherent, this book
                  opens up a whole new world for many men who thought there was
                  something inherently wrong with them. Another noteworthy
                  strength of this book is its practical approach. Rather than
                  just discussing the issues, each chapter ends with some
                  reflective questions, prompting the reader to think about
                  his/her beliefs, experiences and relationships. Thus, the book
                  becomes not only an object for reading, but rather a personal
                  experience of discovery and recovery.
                </p>

                <p>
                  Beyond personal transformation, I believe this book has the
                  potential to change the story told about men within society as
                  well. For decades, strength has been characterized by
                  emotional stoicism, self-sacrifice, and endurance of pain.
                  This book calls that definition of strength into question and
                  offers an alternative, more positive form of strength where it
                  takes courage to seek help, express oneself emotionally, and
                  staying emotionally available to others. Such shift will
                  affect not only men’s mental well-being but also have an
                  impact on families, workplaces, spiritual communities, and the
                  society at large. The author’s global point of view across the
                  streets of this book is another aspect of the book I strongly
                  appreciate. In place of portraying the suppression of male
                  emotions as something found in only one society, the book
                  examines this as a global phenomenon ,manifesting differently
                  across societies. This more expansive context makes the piece
                  culturally relevant to readers from different cultures while
                  promoting cross-cultural thinking. One suggestion I could give
                  is that more references should be made to empirical studies in
                  the different chapters.
                </p>

                <p>
                  Although the story-like writing is effective and the examples
                  given by the author are compelling, the inclusion of more
                  evidence-based studies related to psychology, psychiatry,
                  sociology, and public health would make the book more credible
                  and applicable to educators, clinicians, practitioners, and
                  policy-makers and researchers. Summarily, the book Muted
                  Masculinity (Why Men Don’t Speak Up) is a compelling,
                  compassionate and deeply necessary piece of work. The book
                  helps the reader understand that the new definition of
                  strength should not be based on the lack of emotion but on the
                  ability to address emotions openly and honestly. Importantly,
                  the book challenges individuals, families, communities and
                  institutions to create an atmosphere where men would feel
                  comfortable to speak their minds without fear of judgement.
                  Finally, if the book’s message is embraced by society, it has
                  a great potential to impact positively on the mental health of
                  people, strengthen their relationships, engender healthier
                  fatherhood, reduce stigma associated with help-seeking, and
                  ultimately save lives. This book deserves to be widely read
                  and discussed!
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 font-body text-sm text-zinc-700 sm:grid-cols-4">
                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Publisher
                  </p>
                  <p className="mt-2">RDS</p>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Year
                  </p>
                  <p className="mt-2">2026</p>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Pages
                  </p>
                  <p className="mt-2">235</p>
                </div>
              </div>

              <div className="mt-10 border-l-2 border-[#A95633] pl-5 font-body text-base leading-7 text-zinc-700">
                <p>Available on Amazon Shopping Mall.</p>

                <p className="mt-3">
                  Contains themes and language intended for mature audiences.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={purchaseUrl} external tone="light">
                  Buy Now
                </Button>

                <Button href="/#gallery" variant="outline" tone="light">
                  More Books
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
