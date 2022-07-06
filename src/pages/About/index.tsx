import Card from '@/components/Card'
import React, { useRef } from 'react'
import { styles } from './styles'
import me from '@/assets/imgs/me.jpg'
import Button from '@/components/Button'
import ArrowDown from '@/components/icons/ArrowDown'
import SectionHistory from '@/components/SectionHistory'
import IconSchool from '@/components/icons/School'
import IconRocket from '@/components/icons/Rocket'
import { experienceItems, schoolItems } from '@/constants/historyItems'

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
