import { useCallback, useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import * as Dialog from '@radix-ui/react-dialog'
import { queryClient } from '@/libs/react-query'
import { toast } from 'react-hot-toast'

import api from '@/services/api'
import theme from '@/styles/theme'

import { Button, Dropzone, Form, Input, Modal } from '..'

import * as S from './styles'

const postSchema = z.object({
  content: z.string().nonempty()
})

type PostFormData = z.infer<typeof postSchema>

export const ModalCreatePost = () => {
  const [file, setFile] = useState<File>()
  const [filePreview, setFilePreview] = useState<string>('')

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema)
  })

  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      return api.post('/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
    setFilePreview(URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const onClose = useCallback(() => {
    setFile(undefined)
    setFilePreview('')
    setValue('content', '')
  }, [setValue])

  const onSubmit: SubmitHandler<PostFormData> = ({ content }) => {
    const formData = new FormData()
    formData.append('content', content)

    if (file) {
      formData.append('photo', file)
    }

    mutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Post criado com sucesso')
        queryClient.invalidateQueries({ queryKey: ['feed'] })
        onClose()
      },
      onError: () => {
        toast.error('Ocorreu um erro ao criar o post')
      }
    })
  }

  return (
    <Modal buttonTitle="Novo Post">
      <S.Title as="h3">Novo post</S.Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="content"
          label="Conteúdo"
          placeholder="Digite aqui..."
          {...register('content')}
          error={errors.content?.message}
        />

        <Dropzone onDrop={onDrop} filePreview={filePreview} />
        <S.ButtonsContainer>
          <Dialog.Close asChild onClick={onClose} disabled={mutation.isLoading}>
            <Button type="button" style={{ background: theme.colors.gray100 }}>
              Cancelar
            </Button>
          </Dialog.Close>
          <Button type="submit" disabled={mutation.isLoading}>
            Salvar
          </Button>
        </S.ButtonsContainer>
      </Form>
    </Modal>
  )
}
