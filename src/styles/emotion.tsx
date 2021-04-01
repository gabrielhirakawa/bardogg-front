import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          background: #fff;
          height: 100%;
          font-family: -apple-system, 'Montserrat', 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 24px;
        }
      `}
    />

    <Global
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}
    />
  </>
)
