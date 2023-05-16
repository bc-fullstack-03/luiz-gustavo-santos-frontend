import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef
} from 'react'

import * as S from './styles'

export type InputProps = {
  label?: string
  id: string
  icon?: React.ReactNode
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ icon, id, label, error, ...props }, ref) => {
  return (
    <S.Container>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Wrapper hasIcon={!!icon} hasError={!!error}>
        {!!icon && icon}
        <S.Input id={id} ref={ref} {...props} />
      </S.Wrapper>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}

export const Input = forwardRef(InputBase)
