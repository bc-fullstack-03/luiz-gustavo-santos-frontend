import styled, { css } from 'styled-components'

type WrapperProps = {
  disabled?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, disabled }) => css`
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

    ${disabled &&
    css`
      filter: brightness(0.5);
      cursor: not-allowed;
    `}
  `}
`
