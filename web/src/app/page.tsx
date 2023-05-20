import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { SignIn } from '@/components/SignIn'
import { Hero } from '@/components/hero'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')
  return (
    <main className="grid min-h-screen grid-cols-2 font-sans">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[260px] -translate-x-1/2 -translate-y-1/2  rounded-s-full  bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-1 w-2  bg-stripes pr-2" />

        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>

      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
