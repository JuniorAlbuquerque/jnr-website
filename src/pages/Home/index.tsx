import Button from '@/components/Button'
import Header from '@/components/Header'
import { ArrowRight } from '@/components/icons'
import React from 'react'
import { styles } from './styles'

const Home: React.FC = () => {
  return (
    <div className={styles.root()}>
      <Header />

      <div className={styles.content()}>
        <h2>Hi, I'm Junior 👋</h2>

        <p>
          Engenheiro de Software pela Universidade Federal do Amazonas, nascido
          em Parintins - Amazonas, desenvolvedor Frontend, entusiasta em UI e UX
          e músico nas horas vagas.
        </p>

        <p>
          Atualmente atuando como Desenvolvedor Frontend Sr, com foco em React e
          Typescript.
        </p>

        <p>Quer conhecer mais sobre mais sobre meu trabalho?</p>

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
            }
          }}
        >
          Navegar
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Home
