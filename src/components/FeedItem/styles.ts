import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray500};
    }
  `}
`

export const Container = styled.article`
  max-width: 32rem;
`

export const Header = styled.header`
  ${({ theme }) => css`
    max-width: 45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const BoxName = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};

    h3 {
      font-size: ${theme.font.sizes.large};
    }

    time {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray500};
    }

    svg {
      margin-top: -4px;
      margin-left: -4px;
    }
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Image = styled.img`
  width: 100%;

  object-fit: cover;
  border-radius: 0.4rem;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
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
