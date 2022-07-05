import { useColorTheme } from '@/hooks/useColorTheme'
import { mainRoutes } from '@/routes/items'
import { useKBar } from 'kbar'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { Moon, Sun } from '../icons'
import CommandLine from '../icons/CommandLine'
import LinkItem from '../LinkItem'
import { box, header, root } from './styles'

const Header: React.FC = () => {
  const { isDarkTheme, setTheme } = useColorTheme()
  const { query } = useKBar()

  return (
    <div className={root()}>
      <div className={header()}>
        <Link
          className={box({
            css: {
              mr: '$6',
              fontSize: '$5',
              fontWeight: '600',
              padding: '1rem',
              borderRadius: '$2',
              marginLeft: '-$3',

              color: '$sky11',

              '&:hover': {
                background: '$sky4'
              }
            }
          })}
          to="/"
        >
          JNR
        </Link>

        <nav>
          <ul>
            {mainRoutes?.map((item) => (
              <li key={item?.id}>
                <LinkItem to={item.id}>{item?.name}</LinkItem>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions">
          {isDarkTheme ? (
            <Button onClick={() => setTheme('light')}>
              <Sun />
            </Button>
          ) : (
            <Button onClick={() => setTheme('dark')}>
              <Moon />
            </Button>
          )}

          <Button onClick={() => query.toggle()}>
            <CommandLine />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
