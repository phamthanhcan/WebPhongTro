import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
  const store = createStore(rootReducer);
  //Đối số tiếp theo sẽ là các middleWare
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reduxStore;
