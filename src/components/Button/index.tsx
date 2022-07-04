import { ComponentProps, FC } from 'react'
import { Container } from './styles'

type ButtonProps = ComponentProps<typeof Container> & {
  busy?: boolean
}

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  )
}

export default Button
