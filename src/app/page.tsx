import Image from 'next/image'
import { trpc } from './_trpc/client'

export default function Home() {
  const getTodos = trpc.getTodos.useQuery()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
