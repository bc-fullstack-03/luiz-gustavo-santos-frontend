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
    margin-bottom: 6.4rem;

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

    h3 {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const PhotoContainer = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  object-fit: cover;
`
