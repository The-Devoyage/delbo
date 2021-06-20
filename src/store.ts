import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export interface newState {
  type: string;
  rest: any;
}

export interface initialState {
  sidebarShow: boolean | "" | "responsive" | undefined;
}

const initialState: initialState = {
  sidebarShow: false,
};

const changeState = (state = initialState, newState: newState) => {
  switch (newState.type) {
    case "set":
      return { ...state, ...newState };
    default:
      return state;
  }
};

const store = createStore(changeState, composeWithDevTools());
export default store;
