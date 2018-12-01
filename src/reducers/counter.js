/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { INCREMENT, DECREMENT, RESET, DOUBLE_INCREMENT } from '../actions/counter.js';

const INITIAL_STATE = {
  clicks: 0,
  value: 0,
  doubleIncrement: false
};

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        value: state.value + action.howMuch
      };
    case DECREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        value: state.value - action.howMuch
      };
    case RESET:
      return {
        ...state,
        clicks: 0,
        value: 0
      };
    case DOUBLE_INCREMENT:
      return {
        ...state,
        doubleIncrement: action.doubleIncrement
      };
    default:
      return state;
  }
};

export default counter;
