import { globalCss } from './stiches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased'
  },
  html: {
    fontSize: '58.5%',
    background: '$gray1',
    color: '$gray12',
    height: '-webkit-fill-available',

    '@bp1': {
      fontSize: '62.5%'
    }
  },
  'body, button, input, textarea': {
    fontFamily: '$default',
    fontSize: '$2'
  },
  button: {
    cursor: 'pointer'
  },
  'body, #root': {
    minHeight: '100vh',
    /* mobile viewport bug fix */
    'min-height': '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column'
  },
  '#root': {
    flex: 1
  }
})
