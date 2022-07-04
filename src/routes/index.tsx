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
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])
}
