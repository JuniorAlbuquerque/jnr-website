import { css } from '@/styles/stiches.config'

export const styles = {
  content: css({
    ct: '$w3',
    display: 'flex',
    gap: '$3',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    padding: '$7',
    height: '100%',

    h2: {
      fontSize: '$7',
      marginBottom: '$4'
    },

    p: {
      fontSize: '$3',
      textAlign: 'justify'
    }
  })
}
