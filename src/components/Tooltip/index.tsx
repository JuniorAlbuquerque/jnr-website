import { FunctionComponent, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, styled } from '@/styles/stiches.config'
import { darkTheme } from '@/styles/themes'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: '$2',
  padding: '1.2rem 1.6rem',
  fontSize: '$1',
  lineHeight: 1,
  color: '$gray12',
  backgroundColor: '$gray1',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },

  [`.${darkTheme} &`]: {
    backgroundColor: '$gray4'
  }
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray1',

  [`.${darkTheme} &`]: {
    fill: '$gray4'
  }
})

// Exports
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

type TooltipProps = {
  text: string
  children: ReactNode
}

const Tooltip: FunctionComponent<TooltipProps> = ({ text, children }) => {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <div>{children}</div>
      </TooltipTrigger>
      <StyledContent sideOffset={5}>
        {text}
        <StyledArrow />
      </StyledContent>
    </TooltipRoot>
  )
}

export default Tooltip
