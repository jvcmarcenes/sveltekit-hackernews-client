
export async function get({ params }) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json`)
  const data = await res.json()

  return {
    body: data
  }
}