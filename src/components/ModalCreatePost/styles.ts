import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.small};
    width: 100%;
    max-width: 45rem;
    border-radius: 0.4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`
