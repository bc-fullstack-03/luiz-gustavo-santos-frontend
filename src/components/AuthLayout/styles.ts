import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    padding: ${theme.spacings.xsmall};

    a {
      display: block;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray500};
      margin-top: ${theme.spacings.medium};
      transition: all 0.3s ease;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray500};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`
