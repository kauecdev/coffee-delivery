import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CatalogItemType } from '../data/catalog'
import { Order, cartReducer } from '../reducers/Order/reducer'
import { OrderData } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/Order/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: CatalogItemType[]
  orders: Order[]
  addItem: (item: CatalogItemType) => void
  removeItem: (itemId: CatalogItemType['id']) => void
  decrementItemQuantity: (itemId: CatalogItemType['id']) => void
  incrementItemQuantity: (itemId: CatalogItemType['id']) => void
  checkout: (order: OrderData) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: CatalogItemType) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: CatalogItemType['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderData) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: CatalogItemType['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: CatalogItemType['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        decrementItemQuantity,
        incrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
