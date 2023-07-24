import { Protected } from '../components/Protected'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'
import { Login } from '../screens/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Checkout } from '../screens/Checkout'
import { Success } from '../screens/Success'
import { PurchaseHistoric } from '../screens/PurchaseHistoric'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: '/checkout',
      element: (
        <Protected>
          <Checkout />
        </Protected>
      ),
    },
    {
      path: '/success',
      element: (
        <Protected>
          <Success />
        </Protected>
      ),
    },
    {
      path: '/historic',
      element: (
        <Protected>
          <PurchaseHistoric />
        </Protected>
      ),
    },
  ])

  return <RouterProvider router={router} />
}
