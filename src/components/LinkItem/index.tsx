import { ComponentProps, FC } from 'react'
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { NavLinkContainer } from './styles'
import { motion } from 'framer-motion'

type LinkItemProps = ComponentProps<typeof Link>

const LinkItem: FC<LinkItemProps> = ({ children, to }) => {
  const resolved = useResolvedPath(to)
  const isMatch = useMatch({
    path: resolved?.pathname,
    end: true
  })
  const navigate = useNavigate()

  const textMotion = {
    rest: {
      color: '$gray2',
      x: 0,
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeIn'
      }
    },
    hover: {
      color: '$sky4',
      x: 0,
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeOut'
      }
    }
  }

  return (
    <NavLinkContainer
      initial="rest"
      whileHover="hover"
      animate="rest"
      variant={isMatch ? 'active' : undefined}
      onClick={() => navigate(to)}
    >
      <motion.div variants={textMotion}>{children}</motion.div>
    </NavLinkContainer>
  )
}

export default LinkItem
