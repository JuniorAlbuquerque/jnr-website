import { FC } from 'react'
import { globalStyles } from './styles/global'
import { KBarProvider } from 'kbar'
import CommandBar from './components/CommandBar'
import { useNavigate } from 'react-router-dom'
import { useActions } from './constants/actions'
import { Routes } from './routes'

const App: FC = () => {
  const navigate = useNavigate()
  const { actions } = useActions()
  globalStyles()

  return (
    <KBarProvider actions={actions(navigate)}>
      <CommandBar />
      <Routes />
    </KBarProvider>
  )
}

export default App
