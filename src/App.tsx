import { FC } from 'react'
import { globalStyles } from './styles/global'
import { KBarProvider } from 'kbar'
import CommandBar from './components/CommandBar'
import { useNavigate } from 'react-router-dom'
import { useActions } from './constants/actions'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'
import { useColorTheme } from './hooks/useColorTheme'
import 'react-toastify/dist/ReactToastify.css'

const App: FC = () => {
  const navigate = useNavigate()
  const { actions } = useActions()
  const { isDarkTheme } = useColorTheme()

  globalStyles()

  return (
    <KBarProvider actions={actions(navigate)}>
      <CommandBar />
      <ToastContainer
        position="bottom-left"
        toastClassName="toast-content"
        theme={isDarkTheme ? 'dark' : 'light'}
      />
      <Routes />
    </KBarProvider>
  )
}

export default App
