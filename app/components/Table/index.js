/**
 *
 * Table
 *
 */

import React from 'react';
import { sumBy, round } from 'lodash';
import PropTypes from 'prop-types';
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableData,
  SumRow,
  Sum,
  SumValue,
  Button,
  Input,
  Title,
  Column,
} from './styles';
import cancel from './assets/cancel.svg';
import messages from './messages';
/* eslint-disable react/prefer-stateless-function */
const ROUND_VALUE = 2;
const TAX = 5;
class Table extends React.Component {
  deleteItem = event => {
    const { deleteItem } = this.props;
    deleteItem(event.target.id);
  };

  onFocus = event => {
    const { setFocus } = this.props;
    setFocus(event.currentTarget.dataset.index, true);
  };

  onBlur = event => {
    const { setFocus } = this.props;
    setFocus(event.currentTarget.dataset.index, false);
  };

  onChange = event => {
    const { onChange } = this.props;
    onChange(
      event.currentTarget.dataset.type,
      event.currentTarget.dataset.index,
      event.target.value,
    );
  };

  handleKeyPress = (event, dataType, index) => {
    if (event.key === 'Enter') {
      const dataTypes = ['item', 'qty', 'price'];
      const currentPosition = dataTypes.findIndex(k => k === dataType);
      let founded = this[`${dataTypes[currentPosition + 1]}_${index}`];
      if (!founded) founded = this[`${dataTypes[0]}_${index + 1}`];
      if (!founded) event.target.blur();
      if (founded) {
        founded.focus();
        founded.select();
      }
    }
  };
  /* eslint-disable */
  render() {
    const { tableHeaders, tableData } = this.props;
    return (
      <div>
        {tableData.length ? <TableContainer>
          <tbody>
            <tr>
              {tableHeaders.map(header => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </tr>
            {tableData.map((row, i) => (
              <TableRow key={i} className={row.focused ? 'onFocus' : ''}>
                <TableData>
                  <Input
                    onChange={this.onChange}
                    type="text"
                    autoFocus={row.focused ? 'autofocus' : false}
                    value={row.item}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    data-type="item"
                    data-index={i}
                    placeholder={messages.itemName.defaultMessage}
                    ref={input => {
                      this[`item_${i}`] = input;
                    }}
                    onKeyPress={event => this.handleKeyPress(event, 'item', i)}
                  />
                </TableData>
                <TableData>
                  <Input
                    onChange={this.onChange}
                    type="number"
                    value={row.qty}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    data-type="qty"
                    data-index={i}
                    placeholder={messages.quantity.defaultMessage}
                    ref={input => {
                      this[`qty_${i}`] = input;
                    }}
                    onKeyPress={event => this.handleKeyPress(event, 'qty', i)}
                  />
                </TableData>
                <TableData>
                  <Input
                    onChange={this.onChange}
                    type="number"
                    value={row.price}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    data-type="price"
                    placeholder={messages.price.defaultMessage}
                    data-index={i}
                    ref={input => {
                      this[`price_${i}`] = input;
                    }}
                    onKeyPress={event => this.handleKeyPress(event, 'price', i)}
                  />
                </TableData>
                <TableData>
                  {`$${row.total}`}
                  <Button id={i} src={cancel} onClick={this.deleteItem} />
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </TableContainer> : null}
        {!tableData.length && <Title>{messages.noItems.defaultMessage}</Title>}
        {tableData.length > 0 ?
          (<Sum>
            <SumRow>
              <Column>
                <SumValue>Subtotal</SumValue>
                <SumValue>{`$${round(sumBy(tableData, 'total'), ROUND_VALUE)}`}</SumValue>
              </Column>
              <Column>
                <SumValue>Tax (5%)</SumValue>
                <SumValue>{`$${round((sumBy(tableData, 'total') * TAX) / 100, ROUND_VALUE)}`}</SumValue>
              </Column>
              <Column>
                <SumValue>Total</SumValue>
                <SumValue>{`$${round((sumBy(tableData, 'total') + (sumBy(tableData, 'total') * TAX) / 100), ROUND_VALUE) }`}</SumValue>
              </Column>
            </SumRow>
          </Sum>) : (null)
        }
      </div>
    );
  }
}

Table.propTypes = {
  tableHeaders: PropTypes.array,
  tableData: PropTypes.array,
  deleteItem: PropTypes.func,
  setFocus: PropTypes.func,
  onChange: PropTypes.func,
};

Table.defaultProps = {
  tableHeaders: [],
  tableData: [],
};

export default Table;
