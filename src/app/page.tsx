import TodoList from '@/components/TodoList'
import { serverClient } from './_trpc/serverClient'

export default async function Home() {
  const todos = await serverClient.getTodos()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList />
    </main>
  )
}
