import { Chat, Heart, UserCircle } from '@phosphor-icons/react'

import catImage from '@/assets/images/cat.jpg'
import { Post } from '@/hooks/useFeed'

import * as S from './styles'

type FeedItemProps = {
  post: Post
}

export const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <UserCircle weight="thin" size={32} />
        <h3>{post.profile.name}</h3>
      </S.Header>
      <S.Body>
        <h4>{post.title}</h4>
        {post.image ? (
          <S.Image src={catImage} alt="Imagem" />
        ) : (
          <p>{post.description}</p>
        )}
      </S.Body>
      <S.Footer>
        <S.WrapperIcon>
          <Chat weight="thin" size={24} />
          {post.comments.length}
        </S.WrapperIcon>
        <S.WrapperIcon>
          <Heart weight="thin" size={24} />
          {post.comments.length}
        </S.WrapperIcon>
      </S.Footer>
    </S.Wrapper>
  )
}
