import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addItemAction,
  addNewItemAction,
  removeItemAction,
  resetAllAction,
  subItemAction,
  sumItemAction,
} from '../reducers/actions'
import { cartReducer, ProductItem } from '../reducers/reducer'

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  neighborhood: string
}

interface ShoppingCartContextType {
  items: ProductItem[]
  total: number
  addNewItem: (item: ProductItem) => void
  removeItem: (id: string) => void
  addItem: (id: string) => void
  subItem: (id: string) => void
  userAddress: Address
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  paymentMethod: undefined | 'Cartão de crédito' | 'Dinheiro'
  handleChangePaymentMethod: (
    payment: undefined | 'Cartão de crédito' | 'Dinheiro',
  ) => void
  resetAll: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@every_delivery:cart-State-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return { items: [] }
    },
  )

  const [userAddress, setUserAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    neighborhood: '',
  } as Address)

  const [paymentMethod, setPaymentMethod] = useState<
    undefined | 'Cartão de crédito' | 'Dinheiro'
  >()

  const { items } = cartState
  const total = items.reduce((totalPrice, item) => {
    return totalPrice + item.amount * item.price
  }, 0)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@every_delivery:cart-State-1.0.0', stateJSON)
  }, [cartState])

  function addNewItem(item: ProductItem) {
    const tryFindCoffeeOnCart = items.find((coff) => coff.id === item.id)
    if (tryFindCoffeeOnCart) {
      dispatch(sumItemAction(item.id, item.amount))
    } else {
      dispatch(addNewItemAction(item))
    }
  }

  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setUserAddress((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  function handleChangePaymentMethod(
    payment: undefined | 'Cartão de crédito' | 'Dinheiro',
  ) {
    setPaymentMethod(payment)
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id))
  }

  function resetAll() {
    dispatch(resetAllAction())
  }

  function addItem(id: string) {
    dispatch(addItemAction(id))
  }

  function subItem(id: string) {
    dispatch(subItemAction(id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        subItem,
        addItem,
        removeItem,
        addNewItem,
        total,
        userAddress,
        handleChangeAddress,
        paymentMethod,
        handleChangePaymentMethod,
        resetAll,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)

  return context
}
