import IconCode from '@/components/icons/Code'
import IconDashboard from '@/components/icons/Dashboard'
import IconHeart from '@/components/icons/Heart'
import IconHome from '@/components/icons/Home'
import IconMail from '@/components/icons/Mail'
import { Action } from 'kbar'
import { NavigateFunction } from 'react-router-dom'

export const actions = (navigate: NavigateFunction): Action[] => [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['n', 'h'],
    section: 'Navigation',
    keywords: 'writing words',
    icon: <IconHome />,
    perform: () => navigate('/')
  },
  {
    id: 'about',
    name: 'About',
    shortcut: ['n', 'a'],
    section: 'Navigation',
    keywords: 'writing words',
    icon: <IconHeart />,
    perform: () => navigate('about')
  },
  {
    id: 'projects',
    name: 'Projects',
    shortcut: ['n', 'p'],
    keywords: 'projects',
    section: 'Navigation',
    icon: <IconDashboard />,
    perform: () => navigate('projects')
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['n', 'c'],
    keywords: 'contacts',
    section: 'Navigation',
    icon: <IconMail />,
    perform: () => navigate('contact')
  },
  {
    id: 'source',
    name: 'View Source',
    shortcut: ['v'],
    keywords: 'source',
    section: 'Other',
    icon: <IconCode />,
    perform: () =>
      window.open('https://github.com/JuniorAlbuquerque/jnr-website', '_blank')
  },
  {
    id: 'email',
    name: 'Send Email',
    shortcut: ['e'],
    keywords: 'email',
    section: 'Other',
    icon: <IconMail />,
    perform: () => (window.location.href = 'mailto:jnrabl.dev@gmail.com')
  }
]
