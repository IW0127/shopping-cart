import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducers";
import faker from "faker";

const cartContext = createContext();
const Context = cartContext.Provider;

const Reducer = () => {
  const product = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    img: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    product: product,
    cart: [],
  });

  return { state, dispatch };
};

export default cartContext;
export { Reducer, Context };
