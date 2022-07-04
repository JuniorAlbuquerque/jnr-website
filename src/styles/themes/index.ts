import { createTheme } from '../stiches.config'
import { grayDark, skyDark } from '@radix-ui/colors'

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...skyDark
  }
})
