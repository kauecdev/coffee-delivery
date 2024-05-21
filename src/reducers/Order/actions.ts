import { NavigateFunction } from 'react-router-dom'
import { CatalogItemType } from '../../data/catalog'
import { OrderData } from '../../pages/Checkout'

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type CartActions =
  | {
      type: CartActionTypes.ADD_ITEM
      payload: {
        item: CatalogItemType
      }
    }
  | {
      type:
        | CartActionTypes.DECREMENT_ITEM_QUANTITY
        | CartActionTypes.INCREMENT_ITEM_QUANTITY
        | CartActionTypes.REMOVE_ITEM
      payload: {
        itemId: CatalogItemType['id']
      }
    }
  | {
      type: CartActionTypes.CHECKOUT_CART
      payload: {
        order: OrderData
        callback: NavigateFunction
      }
    }

export function addItemAction(item: CatalogItemType) {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies CartActions
}

export function removeItemAction(itemId: CatalogItemType['id']) {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies CartActions
}

export function incrementItemQuantityAction(itemId: CatalogItemType['id']) {
  return {
    type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies CartActions
}

export function decrementItemQuantityAction(itemId: CatalogItemType['id']) {
  return {
    type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies CartActions
}

export function checkoutCartAction(
  order: OrderData,
  callback: NavigateFunction,
) {
  return {
    type: CartActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies CartActions
}
