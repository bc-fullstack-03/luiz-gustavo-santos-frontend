import { useFeed } from '@/hooks'
import { FeedItem } from '..'

export const FeedList = () => {
  const { data } = useFeed()

  return (
    <div>
      {data?.content.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  )
}
