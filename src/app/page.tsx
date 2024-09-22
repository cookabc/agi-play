import WordSearchGame from '@/components/word-search-game'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-blue-500 to-purple-600">
      <WordSearchGame />
    </main>
  )
}