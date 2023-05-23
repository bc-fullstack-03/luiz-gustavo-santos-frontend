import styled, { DefaultTheme, css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.small};
    width: 100%;
    min-width: 45rem;
    max-width: max-content;
    border-radius: 0.4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const Title = styled(Dialog.Title)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};
  `}
`

type ContainerProps = {
  isDragAccept: boolean
  isDragReject: boolean
  isFocused: boolean
}

const containerModifier = {
  isDragAccept: () => css`
    border-color: #00e676;
  `,
  isDragReject: () => css`
    border-color: #ff1744;
  `,
  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isDragAccept, isDragReject, isFocused }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    border-width: 2px;
    border-radius: 2px;
    border-color: ${theme.colors.mainBg};
    border-style: dashed;
    background-color: ${theme.colors.gray900};
    transition: border 0.3s ease-in-out;

    ${isDragAccept && containerModifier.isDragAccept()};
    ${isFocused && containerModifier.isFocused(theme)};
    ${isDragReject && containerModifier.isDragReject()};

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray500};
    }
  `}
`

export const Image = styled.img`
  width: 100%;
  max-width: max-content;
  max-height: 20rem;
`

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`
