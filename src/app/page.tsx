import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
import { Stories } from '@/components/sections/Stories'

export default function Home(): React.JSX.Element {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Stories />
    </main>
  )
}
