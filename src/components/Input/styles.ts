import { styled } from '@/styles/stiches.config'

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '.label': {
    marginBottom: '$1',
    marginLeft: '$1'
  },

  '.error': {
    color: '$crimsonA10',
    fontSize: '$1',
    marginLeft: '$1'
  }
})

export const InputContent = styled('input', {
  background: '$gray4',
  padding: '$4',
  borderRadius: '$3',

  color: '$gray12',
  outline: 'none',
  border: '2px solid $gray4',

  '&:focus': {
    outline: 'none',
    border: '2px solid $gray8'
  }
})
