import { globalCss } from './stiches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased'
  },
  html: {
    fontSize: '62.5%',
    background: '$gray1',
    color: '$gray12'
  },
  'body, button, input, textarea': {
    fontFamily: '$default',
    fontSize: '$2'
  },
  button: {
    cursor: 'pointer'
  }
})
