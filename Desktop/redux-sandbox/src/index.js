import React from "react";
import { render } from "react-dom";

import Counter from "./counter";

import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";
import reducer from "./reducer";

const store = createStore(reducer);
const { dispatch, subscribe } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const payload = Math.floor(Math.random() * 100000);
        rnd(payload);
      }}
    />,
    document.getElementById("root")
  );
};

update();

subscribe(update);
