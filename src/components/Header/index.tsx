import { useColorTheme } from '@/hooks/useColorTheme'
import { useKBar } from 'kbar'
import React from 'react'
import Button from '../Button'
import { Moon, Sun } from '../icons'
import CommandLine from '../icons/CommandLine'
import Tooltip from '../Tooltip'
import { box, header, root } from './styles'

const Header: React.FC = () => {
  const { isDarkTheme, setTheme } = useColorTheme()
  const { query } = useKBar()

  return (
    <div className={root()}>
      <div className={header()}>
        <h2
          className={box({
            css: {
              mr: '$6'
            }
          })}
        >
          JNR
        </h2>

        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="actions">
          <Tooltip text={isDarkTheme ? 'Light mode' : 'Dark mode'}>
            {isDarkTheme ? (
              <Button onClick={() => setTheme('light')}>
                <Sun />
              </Button>
            ) : (
              <Button onClick={() => setTheme('dark')}>
                <Moon />
              </Button>
            )}
          </Tooltip>

          <Tooltip text="Comandos">
            <Button onClick={() => query.toggle()}>
              <CommandLine />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Header
