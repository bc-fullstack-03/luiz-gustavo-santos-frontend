import {
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef
} from 'react'

import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, disabled, ...props }, ref) => {
  return (
    <S.Wrapper disabled={disabled} ref={ref} {...props}>
      {children}
    </S.Wrapper>
  )
}
export const Button = forwardRef(ButtonBase)
