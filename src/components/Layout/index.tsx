import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { styles } from './styles'

const Layout: React.FC = () => {
  return (
    <div className={styles.root()}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
