import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 7rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.gray500};
    box-shadow: 1px 1px 3px ${theme.colors.primary}90;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};

    &:hover {
      svg {
        color: ${theme.colors.primary};
      }
    }
  `}
`
