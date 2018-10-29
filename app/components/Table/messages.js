/*
 * Table Messages
 *
 * This contains all the text for the Table component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Table';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Table component!',
  },
  noItems: {
    id: `${scope}.noItems`,
    defaultMessage: 'No items to show',
  },
  itemName: {
    id: `${scope}.noItems`,
    defaultMessage: 'Item name',
  },
  quantity: {
    id: `${scope}.noItems`,
    defaultMessage: 'Quantity',
  },
  price: {
    id: `${scope}.noItems`,
    defaultMessage: 'Price',
  },
});
