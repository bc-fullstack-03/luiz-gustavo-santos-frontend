import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.mainBg};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: 0;
    border-radius: 0.4rem;
    cursor: pointer;
    font-weight: ${theme.font.bold};
  `}
`
