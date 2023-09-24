import Gallery from '@/app/components/Gallery'

type Props = {
  params: {
    myParams: (string | undefined)[]
  }
}

export function generateMetadata({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? 'curated'
  const page = myParams?.[1] ?? '1'

  return {
    title: `${convertString(topic)} | Image Gallery`,
  }
}

function convertString(str: string): string {
  // Replace all occurrences of '%20' with a space character
  let newStr = str.replace(/%20/g, ' ')

  // Split the string into an array of words
  let words = newStr.split(/[^a-zA-Z0-9]/)

  // Capitalize the first letter of each word and join them back into a string
  let capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )
  let capitalizedStr = capitalizedWords.join(' ')

  return capitalizedStr
}

export default function SearchResults({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? 'curated'
  const page = myParams?.[1] ?? '1'

  return <Gallery topic={topic} page={page} />
}
