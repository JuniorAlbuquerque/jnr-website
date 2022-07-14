import Button from '@/components/Button'
import { ArrowRight } from '@/components/icons'
import { useKBar } from 'kbar'
import React from 'react'
import { styles } from './styles'

const Home: React.FC = () => {
  const { query } = useKBar()

  return (
    <div className={styles.content()}>
      <h2>Hi, I'm Ednilson Jr 👋</h2>

      <p>
        Engenheiro de Software pela Universidade Federal do Amazonas, nascido em
        Parintins - Amazonas, desenvolvedor Frontend, entusiasta em UI e UX e
        músico nas horas vagas.
      </p>

      <p>
        Atualmente, Desenvolvedor Frontend Sr, com foco em React e Typescript.
      </p>

      <p>Quer conhecer mais sobre meu trabalho?</p>

      <Button
        variant="primary"
        css={{
          marginTop: '$6',
          svg: {
            transition: 'transform 0.25s',
            transform: 'translateX(-0.1rem)'
          },

          '&:hover': {
            svg: {
              transform: 'translateX(0.35rem)'
            }
          },

          kbd: {
            color: '$sky2',
            background: '$sky11',
            padding: '$1',
            borderRadius: '$1',
            fontSize: '$1'
          }
        }}
        onClick={() => query.toggle()}
      >
        Press <kbd>ctrl</kbd> + <kbd>K</kbd> to start
        <ArrowRight />
      </Button>
    </div>
  )
}

export default Home
