import { styled } from '@/styles/stiches.config'
import { motion } from 'framer-motion'

export const NavLinkContainer = styled(motion.div, {
  padding: '1rem 1.6rem',
  borderRadius: '$2',
  '&:hover': {
    background: '$sky4'
  },

  a: {
    color: 'inherit'
  },

  variants: {
    variant: {
      active: {
        backgroundColor: '$sky4',

        a: {
          color: '$sky11'
        },

        '&:hover': {
          background: '$sky5'
        }
      }
    }
  }
})
