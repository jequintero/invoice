import { fromJS } from 'immutable';
import invoiceReducer from '../reducer';
import { addNewItem, deleteItem, setFocus, setTextInput } from '../actions';

describe('invoiceReducer', () => {
  const INITIAL_STATE = {
    tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
    tableData: [],
    objectModel: { item: '', qty: null, price: null, total: 0, focused: true },
  };
  const TEST_STATE = {
    tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
    tableData: [
      {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    ],
    objectModel: { item: '', qty: null, price: null, total: 0, focused: true },
  };

  it('returns the initial state', () => {
    expect(invoiceReducer(undefined, {})).toEqual(fromJS(INITIAL_STATE));
  });
  it('Add new item', () => {
    expect(invoiceReducer(fromJS(INITIAL_STATE), addNewItem())).toEqual(
      fromJS(TEST_STATE),
    );
  });
  it('Delete item', () => {
    expect(invoiceReducer(fromJS(TEST_STATE), deleteItem(0))).toEqual(
      fromJS(INITIAL_STATE),
    );
  });
  it('Focus item', () => {
    const BLUR_STATE = {
      tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
      tableData: [
        {
          item: '',
          qty: null,
          price: null,
          total: 0,
          focused: false,
        },
      ],
      objectModel: {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    };
    expect(invoiceReducer(fromJS(BLUR_STATE), setFocus(0, true))).toEqual(
      fromJS(TEST_STATE),
    );
  });
  it('Blur item', () => {
    const BLUR_STATE = {
      tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
      tableData: [
        {
          item: '',
          qty: null,
          price: null,
          total: 0,
          focused: false,
        },
      ],
      objectModel: {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    };
    expect(invoiceReducer(fromJS(TEST_STATE), setFocus(0, false))).toEqual(
      fromJS(BLUR_STATE),
    );
  });
  it('Set item text', () => {
    const EDITED_STATE = {
      tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
      tableData: [
        {
          item: 'Widget',
          qty: null,
          price: null,
          total: 0,
          focused: true,
        },
      ],
      objectModel: {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    };
    expect(invoiceReducer(fromJS(TEST_STATE), setTextInput('item', 0, 'Widget'))).toEqual( // eslint-disable-line
      fromJS(EDITED_STATE),
    );
  });
  it('Set quantity text', () => {
    const EDITED_STATE = {
      tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
      tableData: [
        {
          item: '',
          qty: '10',
          price: null,
          total: 0,
          focused: true,
        },
      ],
      objectModel: {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    };
    expect(invoiceReducer(fromJS(TEST_STATE), setTextInput('qty', 0, '10'))).toEqual( // eslint-disable-line
      fromJS(EDITED_STATE),
    );
  });
  it('Set price text', () => {
    const EDITED_STATE = {
      tableHeaders: ['Item', 'Quantity', 'Price', 'Total'],
      tableData: [
        {
          item: '',
          qty: null,
          price: '1200',
          total: 0,
          focused: true,
        },
      ],
      objectModel: {
        item: '',
        qty: null,
        price: null,
        total: 0,
        focused: true,
      },
    };
    expect(invoiceReducer(fromJS(TEST_STATE), setTextInput('price', 0, '1200'))).toEqual( // eslint-disable-line
      fromJS(EDITED_STATE),
    );
  });
});
