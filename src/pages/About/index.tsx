import Card from '@/components/Card'
import React, { useRef } from 'react'
import { styles } from './styles'
import me from '@/assets/imgs/me.jpg'
import Button from '@/components/Button'
import ArrowDown from '@/components/icons/ArrowDown'
import SectionHistory from '@/components/SectionHistory'
import IconSchool from '@/components/icons/School'
import IconRocket from '@/components/icons/Rocket'

const schoolItems = [
  {
    id: 0,
    period: ['2016', '2021'],
    content: 'Bacharelado em Engenharia de Software (UFAM - Itacoatiara, AM)'
  },
  {
    id: 1,
    period: ['2012', '2014'],
    content: 'High School (Col. Nossa Senhora do Carmo - Parintins, AM)'
  }
]

const experienceItems = [
  {
    id: 0,
    period: ['2021', 'atual'],
    content: 'Desenvolvedor Frontend Sênior (Conexa Saúde)'
  },
  {
    id: 1,
    period: ['2021', '2021'],
    content: 'Desenvolvedor de Sistemas (IATec)'
  },
  {
    id: 2,
    period: ['2019', '2021'],
    content: 'Desenvolvedor FullStack (Mowah Tecnologia)'
  }
]

const About: React.FC = () => {
  const historyRef = useRef<HTMLDivElement>(null)

  const goToHistory = () => {
    const top = historyRef.current ? historyRef?.current?.offsetTop : 0
    const headerHeight = 100

    window.scrollTo({
      behavior: 'smooth',
      top: top - headerHeight
    })
  }

  return (
    <div className={styles.content()}>
      <Card>
        <div className={styles.card()}>
          <img src={me} alt="JUNIOR" />

          <div className={styles.cardInfo()}>
            <h1>Um pouco sobre mim</h1>

            <p>
              Me chamo Ednilson Albuquerque Jr, sou natural de Parintins,
              interior do Amazonas. Formado em Engenharia de Software pela
              Universidade Federal do Amazonas em 2021, e atuando como
              desenvolvedor de software a 4 anos.
            </p>

            <p>
              Apaixonado pelo universo Frontend, a qual faço parte como dev
              atualmente, trabalhando em projetos com React, Typescript, Vue,
              VanillaJs, Node e diversas outras tecnologias js.
            </p>

            <Button
              variant="primary"
              css={{
                svg: {
                  transition: 'transform 0.25s'
                },

                '&:hover': {
                  svg: {
                    transform: 'translateY(0.35rem)'
                  }
                }
              }}
              onClick={goToHistory}
            >
              Minha história
              <ArrowDown />
            </Button>
          </div>
        </div>
      </Card>

      <div ref={historyRef} className={styles.history()}>
        <SectionHistory
          label="School"
          icon={<IconSchool />}
          items={schoolItems}
        />

        <SectionHistory
          label="Experience"
          icon={<IconRocket />}
          items={experienceItems}
        />
      </div>
    </div>
  )
}

export default About
