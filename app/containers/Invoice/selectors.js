import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the invoice state domain
 */

const selectInvoiceDomain = state => state.get('invoice', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Invoice
 */

const makeSelectInvoice = () =>
  createSelector(selectInvoiceDomain, substate => substate.toJS());

export default makeSelectInvoice;
export { selectInvoiceDomain };
