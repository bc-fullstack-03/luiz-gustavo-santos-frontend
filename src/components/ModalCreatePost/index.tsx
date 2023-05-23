import * as Dialog from '@radix-ui/react-dialog'

import { Button, Form, Input, Modal } from '..'

import * as S from './styles'

export const ModalCreatePost = () => {
  return (
    <Modal buttonTitle="Novo Post">
      <S.Content>
        <Dialog.Title>Teste do modal</Dialog.Title>
        <Form>
          <Input id="content" />
          <Button>Enviar</Button>
        </Form>
      </S.Content>
    </Modal>
  )
}
