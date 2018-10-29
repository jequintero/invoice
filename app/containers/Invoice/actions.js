/*
 *
 * Invoice actions
 *
 */

import { ADD_NEW_ITEM, DELETE_ITEM, SET_FOCUS, SET_TEXT } from './constants';

export function addNewItem() {
  return {
    type: ADD_NEW_ITEM,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index,
  };
}

export function setFocus(index, focus) {
  return {
    type: SET_FOCUS,
    index,
    focus,
  };
}

export function setTextInput(dataType, index, value) {
  return {
    type: SET_TEXT,
    dataType,
    index,
    value,
  };
}
