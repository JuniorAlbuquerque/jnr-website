import { css } from '@/styles/stiches.config'

export const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }),

  content: css({
    ct: '$w3',
    display: 'flex',
    gap: '$3',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    padding: '$7',

    h2: {
      fontSize: '$7',
      marginBottom: '$4'
    },

    p: {
      fontSize: '$3'
    }
  })
}
