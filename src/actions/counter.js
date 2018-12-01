/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const DOUBLE_INCREMENT = 'DOUBLE_INCREMENT';

export const increment = () => (dispatch, getState) => {
  const state = getState();
  const howMuch = state.counter.doubleIncrement ? 2 : 1;
  dispatch({
    type: INCREMENT,
    howMuch,
  });
};

export const decrement = () => (dispatch, getState) => {
  const state = getState();
  const howMuch = state.counter.doubleIncrement ? 2 : 1;
  dispatch({
    type: DECREMENT,
    howMuch,
  });
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const doubleIncrement = (doubleIncrement) => {
  return {
    type: DOUBLE_INCREMENT,
    doubleIncrement
  };
};
