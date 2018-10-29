/*
 *
 * Invoice reducer
 *
 */

import { fromJS } from 'immutable';
import { toNumber, round } from 'lodash';
import { ADD_NEW_ITEM, DELETE_ITEM, SET_FOCUS, SET_TEXT } from './constants';

const INITIAL_STATE = {
  tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
  tableData: [],
  objectModel: { item: '', qty: null, price: null, total: 0, focused: true },
};

export const initialState = fromJS(INITIAL_STATE);

function invoiceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return state
        .update('tableData', items =>
          items.map(item => item.set('focused', false)),
        )
        .updateIn(['tableData'], arr => arr.push(state.get('objectModel')));
    case DELETE_ITEM:
      return state.deleteIn(['tableData', action.index]);
    case SET_FOCUS:
      return state.setIn(['tableData', action.index, 'focused'], action.focus);
    case SET_TEXT: {
      if (action.dataType !== 'item' && action.value === 'e') return state;
      return state
        .setIn(['tableData', action.index, action.dataType], action.value)
        .setIn(
          ['tableData', action.index, 'total'],
          round(
            (action.dataType !== 'qty'
              ? state.getIn(['tableData', action.index, 'qty'])
              : toNumber(action.value)) *
              (action.dataType !== 'price'
                ? state.getIn(['tableData', action.index, 'price'])
                : toNumber(action.value)),
            2,
          ),
        );
    }
    default:
      return state;
  }
}

export default invoiceReducer;
