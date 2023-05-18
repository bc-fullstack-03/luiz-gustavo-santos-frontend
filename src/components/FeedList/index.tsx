import { useFeed } from '@/hooks'
import { FeedItem } from '..'

export const FeedList = () => {
  const { data } = useFeed()

  return (
    <div>
      {data?.map((post) => (
        <FeedItem key={post._id} post={post} />
      ))}
    </div>
  )
}
