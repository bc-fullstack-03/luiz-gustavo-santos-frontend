import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

import * as ButtonStyles from '../Button/styles'

export const Overlay = styled(AlertDialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const Content = styled(AlertDialog.Content)`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    border-radius: 0.4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 50rem;
    max-height: 85vh;
    padding: ${theme.spacings.small};
  `}
`

export const Title = styled(AlertDialog.Title)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};
  `}
`

export const Description = styled(AlertDialog.Description)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    justify-content: flex-end;
  `}
`

export const Button = styled(ButtonStyles.Wrapper)`
  ${({ theme }) => css`
    height: 4rem;
    background: #ff759d;
    color: #a60432;
    width: max-content;

    &.cancel {
      background: ${theme.colors.gray100};
      color: ${theme.colors.gray900};
    }
  `}
`
