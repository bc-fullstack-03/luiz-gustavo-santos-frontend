import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { AuthLayout } from './components'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
