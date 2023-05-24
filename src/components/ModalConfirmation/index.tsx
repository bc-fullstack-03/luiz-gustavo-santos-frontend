import * as AlertDialog from '@radix-ui/react-alert-dialog'

import * as S from './styles'
import React from 'react'

type ModdalConfirmationProps = {
  title: string
  description?: string
  buttonConfirmationText?: string
  onConfirm?: () => void
  triggerButton: React.ReactNode
}

export const ModalConfirmation: React.FC<ModdalConfirmationProps> = ({
  buttonConfirmationText,
  description,
  onConfirm,
  title,
  triggerButton
}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{triggerButton}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ButtonContainer>
            <AlertDialog.Cancel asChild>
              <S.Button className="cancel">Cancelar</S.Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild onClick={onConfirm}>
              <S.Button>{buttonConfirmationText || 'Confirmar'}</S.Button>
            </AlertDialog.Action>
          </S.ButtonContainer>
        </S.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
