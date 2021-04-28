import { css, Global } from '@emotion/react'
import { theme } from './theme'

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

    <Global
      styles={css`
        html,
        input,
        span,
        p,
        h1,
        h2,
        h3 {
          color: ${theme.black};
        }
      `}
    />

    <Global
      styles={css`
        h1 {
          font-size: ${theme.h1};
          font-weight: 500;
          color: ${theme.black};
        }
      `}
    />
  </>
)
