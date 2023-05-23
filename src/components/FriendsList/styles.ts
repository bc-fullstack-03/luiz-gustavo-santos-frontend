import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    list-style: none;

    li {
      &:not(:first-child) {
        border-top: 1px solid ${theme.colors.gray100};
      }
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 32rem;
    padding: ${theme.spacings.small};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};

    strong {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const Followers = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.small};

    margin-bottom: ${theme.spacings.xsmall};
  `}
`
