import { addNewItem, deleteItem, setFocus, setTextInput } from '../actions';
import { ADD_NEW_ITEM, DELETE_ITEM, SET_FOCUS, SET_TEXT } from '../constants';

describe('Invoice actions', () => {
  describe('Add item', () => {
    it('has a type of ADD_NEW_ITEM', () => {
      const expected = {
        type: ADD_NEW_ITEM,
      };
      expect(addNewItem()).toEqual(expected);
    });
  });
  describe('Delete item', () => {
    it('has a type of DELETE_ITEM', () => {
      const expected = {
        type: DELETE_ITEM,
        index: 0,
      };
      expect(deleteItem(0)).toEqual(expected);
    });
  });
  describe('Focus  or blur item', () => {
    it('has a type of SET_FOCUS', () => {
      const expected = {
        type: SET_FOCUS,
        index: 0,
        focus: true,
      };
      expect(setFocus(0, true)).toEqual(expected);
    });
    it('has a type of SET_FOCUS', () => {
      const expected = {
        type: SET_FOCUS,
        index: 0,
        focus: false,
      };
      expect(setFocus(0, false)).toEqual(expected);
    });
  });
  describe('Set text input', () => {
    it('has a type of SET_TEXT', () => {
      const expected = {
        type: SET_TEXT,
        dataType: 'item',
        index: 0,
        value: 'Widget',
      };
      expect(setTextInput('item', 0, 'Widget')).toEqual(expected);
    });
    it('has a type of SET_TEXT', () => {
      const expected = {
        type: SET_TEXT,
        dataType: 'qty',
        index: 0,
        value: '10',
      };
      expect(setTextInput('qty', 0, '10')).toEqual(expected);
    });
    it('has a type of SET_TEXT', () => {
      const expected = {
        type: SET_TEXT,
        dataType: 'price',
        index: 0,
        value: '100',
      };
      expect(setTextInput('price', 0, '100')).toEqual(expected);
    });
  });
});
