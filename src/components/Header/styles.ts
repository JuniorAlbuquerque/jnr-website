import { css } from '@/styles/stiches.config'

export const box = css({})

export const root = css({
  // background: '$gray2',
  width: '100%'
})

export const header = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '$7',
  padding: '$7',
  ct: '$w3',

  a: {
    textDecoration: 'none'
  },

  nav: {
    display: 'none',
    '@bp1': {
      display: 'initial'
    }
  },

  ul: {
    display: 'flex',
    gap: '$7',
    ml: '$7',

    li: {
      listStyleType: 'none',
      cursor: 'pointer'
    }
  },

  '& .actions': {
    display: 'flex',
    gap: '$4',
    ml: 'auto'
  }
})
