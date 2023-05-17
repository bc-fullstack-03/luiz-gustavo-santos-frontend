import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { AuthLayout, ProtectedPage } from './components'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Friends from './pages/Friiends'

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
        <Route path="/app" element={<ProtectedPage />}>
          <Route path="feed" index element={<Feed />} />
          <Route path="profile" index element={<Profile />} />
          <Route path="friends" index element={<Friends />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
