import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { AuthLayout } from './components'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster />
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/app/feed" element={<h1>FEED USER</h1>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
