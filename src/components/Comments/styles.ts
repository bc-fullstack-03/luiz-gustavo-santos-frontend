import styled, { css } from 'styled-components'

import * as FormStyles from '../Form/index'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    h3 {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${FormStyles.Form} {
      max-width: 100%;
    }
  `}
`

export const CommentsList = styled.ul`
  ${({ theme }) => css`
    flex: 1;
    max-height: 56rem;
    overflow-y: auto;
    margin-bottom: ${theme.spacings.xsmall};

    &::-webkit-scrollbar {
      width: 0px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.mainBg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray900};
    }

    li {
      display: flex;
      gap: ${theme.spacings.xxsmall};

      &:not(:last-child) {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`

export const Comment = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    padding: ${theme.spacings.xxsmall};
    border-radius: 0.4rem;

    background-color: ${theme.colors.gray900};

    > div {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xsmall};
      justify-content: space-between;
    }

    svg {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        color: #a60432;
      }
    }

    strong {
      font-size: ${theme.font.sizes.medium};
      word-break: break-all;
    }

    p {
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      max-width: 100%;
    `};
  `}
`

export const FormContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;

    svg {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const Button = styled.button`
  background: none;
  border: 0;
`
