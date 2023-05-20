import { Chat, Heart, UserCircle } from '@phosphor-icons/react'

import { Post } from '@/hooks/useFeed'

import * as S from './styles'
import { useState } from 'react'

type FeedItemProps = {
  post: Post
}

export const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  const [liked, setLiked] = useState(true)

  return (
    <S.Wrapper>
      <S.Header>
        <UserCircle weight="thin" size={32} />
        <h3>{post.userName}</h3>
      </S.Header>
      <S.Body>
        <p>{post.content}</p>
        {post.image && <S.Image src={post.image} alt="Imagem" />}
      </S.Body>
      <S.Footer>
        <S.WrapperIcon>
          <Chat weight="thin" size={24} />
          {post.comments}
        </S.WrapperIcon>
        <S.WrapperIcon
          isLiked={liked}
          onClick={() => setLiked((prev) => !prev)}
        >
          <Heart weight={liked ? 'fill' : 'thin'} size={24} />
          {post.likes}
        </S.WrapperIcon>
      </S.Footer>
    </S.Wrapper>
  )
}
