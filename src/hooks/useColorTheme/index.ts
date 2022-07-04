import { darkTheme } from '@/styles/themes'
import { useCallback, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export function useColorTheme() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
    '@jnr:darkTheme',
    false
  )

  const html = document.documentElement

  const setTheme = useCallback((currentTheme: 'dark' | 'light') => {
    const isDark = currentTheme === 'dark'

    if (isDark) {
      setDarkTheme(true)
      html.classList.add(darkTheme.className)
      return
    }
    setDarkTheme(false)

    html.classList.remove(darkTheme.className)
  }, [])

  useEffect(() => {
    if (isDarkTheme) {
      setTheme('dark')
      return
    }
    setTheme('light')
  }, [isDarkTheme])

  return {
    isDarkTheme,
    setTheme
  }
}
