import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header'
import { styles } from './styles'

const Layout: React.FC = () => {
  const location = useLocation()

  return (
    <div className={styles.root()}>
      <Header />

      <Outlet key={location.pathname} />
    </div>
  )
}

export default Layout
