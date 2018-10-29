import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { Invoice } from '../index';

describe('<Invoice />', () => {
  it('Expect to have unit tests specified', () => {
    const wrapper = shallow(<Invoice tableHeaders={[]} tableData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
