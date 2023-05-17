import styled, { css } from 'styled-components'

import * as ButtonStyles from '../Button/styles'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    width: 30rem;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    border-right: 1px solid ${theme.colors.gray500};

    ${ButtonStyles.Wrapper} {
      height: 4rem;
    }
  `}
`

export const BoxLogo = styled.div`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Menu = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.xlarge};

    > a {
      display: flex;
      color: ${theme.colors.white};
      text-decoration: none;
      align-items: center;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.xxsmall} 0;
      transition: all 0.3s ease;

      &:hover,
      &.active {
        color: ${theme.colors.primary};
      }
    }
  `}
`
