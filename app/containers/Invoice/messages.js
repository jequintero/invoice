/*
 * Invoice Messages
 *
 * This contains all the text for the Invoice container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Invoice';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Invoice container!',
  },
});
