import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  hasIcon?: boolean
  hasError?: boolean
}

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError, hasIcon }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${theme.colors.gray900};
    height: ${theme.spacings.xlarge};
    border-radius: 0.4rem;
    overflow: hidden;

    > svg {
      color: ${theme.colors.gray500};
    }

    ${!hasIcon &&
    css`
      input {
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      }
    `}

    ${hasIcon &&
    css`
      padding-left: ${theme.spacings.xxsmall};
    `}

    ${hasError &&
    css`
      border: 1px solid red;
    `}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    background: ${theme.colors.gray900};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    border: 0;
    outline: none;
    padding: ${theme.spacings.xxsmall};

    &::placeholder {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray500};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.gray100};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium}
    `}
  `}
`
