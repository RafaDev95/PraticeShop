import { createContext, useContext, useReducer } from 'react';

const BasketContext = createContext();

const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        // retorna o indice onde o item do array tem o mesmo ID que o item clicado.
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1); // comece do index e remove 1 item. Ou seja, apenas o index será removido.
      }
      return {
        ...state,
        basket: newBasket, // e aqui, eu coloco esse 'novo' array, sem o index (chamado de newBasket), dentro da basket.
      };
    default:
      throw new Error(
        'Me fala de onde porra foi que tu tirou essa action, irmão....'
      );
  }
};

export default function BasketProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BasketContext.Provider value={{ basket: state.basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
