import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '..'

import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  buttonTitle: string
}

export const Modal: React.FC<ModalProps> = ({ buttonTitle, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>{buttonTitle}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>{children}</S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
