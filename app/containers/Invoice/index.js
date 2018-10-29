/**
 *
 * Invoice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import Table from 'components/Table';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInvoice from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Button } from './styles';
import * as ALL_ACTIONS from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Invoice extends React.Component {
  render() {
    const {
      invoice: { tableHeaders = [], tableData = [] },
      addNewItem,
      deleteItem,
      setFocus,
      setTextInput,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Invoice Editor</title>
          <meta name="description" content="Invoice Editor" />
        </Helmet>
        <Button onClick={addNewItem}> New Item</Button>
        <Table
          tableHeaders={tableHeaders}
          tableData={tableData}
          deleteItem={deleteItem}
          setFocus={setFocus}
          onChange={setTextInput}
        />
      </div>
    );
  }
}

Invoice.propTypes = {
  invoice: PropTypes.object,
  setTextInput: PropTypes.func,
  setFocus: PropTypes.func,
  deleteItem: PropTypes.func,
  addNewItem: PropTypes.func,
};

Invoice.defaultProps = {
  invoice: {},
};

const mapStateToProps = createStructuredSelector({
  invoice: makeSelectInvoice(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(ALL_ACTIONS, dispatch);
  return {
    dispatch,
    addNewItem: () => actions.addNewItem(),
    deleteItem: index => actions.deleteItem(index),
    setFocus: (index, focus) => actions.setFocus(index, focus),
    setTextInput: (type, index, value) =>
      actions.setTextInput(type, index, value),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'invoice', reducer });
const withSaga = injectSaga({ key: 'invoice', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Invoice);
