import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`
