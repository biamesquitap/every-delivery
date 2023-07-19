import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AuthContextProvider } from './contexts/AuthContext'

import { ShoppingCartContextProvider } from './hooks/useShoppingCart'
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>
      </AuthContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
