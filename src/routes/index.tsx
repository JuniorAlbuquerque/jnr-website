import AnimatedPage from '@/components/AnimatePage'
import Layout from '@/components/Layout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import { FunctionComponent } from 'react'
import { useRoutes } from 'react-router-dom'

export const Routes: FunctionComponent = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <AnimatedPage variant="center">
              <Home />
            </AnimatedPage>
          )
        },
        {
          path: '/about',
          element: (
            <AnimatedPage>
              <About />
            </AnimatedPage>
          )
        },
        {
          path: '/projects',
          element: (
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          )
        },
        {
          path: '/contact',
          element: (
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          )
        }
      ]
    }
  ])
}
