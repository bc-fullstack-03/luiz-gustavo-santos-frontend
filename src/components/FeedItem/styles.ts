import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray500};
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};

    h3 {
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};

    h4 {
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xsmall};
    }

    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Image = styled.img`
  object-fit: cover;
  height: 32rem;
  width: 22rem;
  border-radius: 0.4rem;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: 0 ${theme.spacings.large};
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`

type WrapperIconProps = {
  isLiked?: boolean
}

export const WrapperIcon = styled.button<WrapperIconProps>`
  ${({ theme, isLiked }) => css`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary};
    }

    ${isLiked &&
    css`
      svg {
        color: ${theme.colors.primary};
      }
    `}
  `}
`
