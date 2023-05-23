import { Comments, Container, FeedItem, Header } from '@/components'
import { usePost } from '@/hooks/usePost'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const params = useParams()

  const { data } = usePost(params?.id)

  if (!data) {
    return null
  }

  return (
    <div>
      <Header title="Detalhes da postagem" />
      <Container>
        <FeedItem post={data} />
        <Comments postId={data?.id} />
      </Container>
    </div>
  )
}

export default PostDetails
