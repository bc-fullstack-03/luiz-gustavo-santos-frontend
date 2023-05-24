import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.small}
      ${theme.spacings.small};
  `}
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    text-align: center;
    margin-bottom: ${theme.spacings.small};

    strong {
      display: block;
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    > div > span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primary};
    }
  `}
`

export const Followers = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray100};
    }
  `}
`

type FormContaierProps = {
  visibilitHidden?: boolean
}

export const FormContaier = styled.div<FormContaierProps>`
  ${({ theme, visibilitHidden }) => css`
    display: ${visibilitHidden ? 'none' : 'block'};
    width: 100%;
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    padding-bottom: ${theme.spacings.large};

    h3 {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const PhotoContainer = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  object-fit: cover;
`

export const DeleteAccount = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: max-content;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.warning};
    margin-bottom: 6rem;
    background: none;
    border: 1px solid transparent;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: center;

    &:hover {
      border: 1px solid ${theme.colors.warning};
      border-radius: 0.4rem;
    }
  `}
`
