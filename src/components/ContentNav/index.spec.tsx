import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ContentNav } from './index';
import { Item, Chevron, ItemProps } from './Item';
import { SubItem } from './SubItem';

const mock: ItemProps[] = [
  {
    name: 'Clarifications'
  },
  {
    name: 'Standards'
  },
  {
    name: 'Stimuli/Text Complexity'
  },
  {
    name: 'Accessibility Concerns'
  },
  {
    name: 'Evidence Required'
  },
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Descriptions'
      },
      {
        name: 'Target Evidence Statement'
      },
      {
        name: 'Appropriate Stems'
      }
    ]
  },
  {
    name: 'Scoring Rules'
  }
];

interface TestParams {
  firstItemActive: boolean;
  expandItemActive: boolean;
  expandItemExpanded: boolean;
  firstSubItemActive: boolean;
}

const produceState = ({
  firstItemActive,
  expandItemActive,
  expandItemExpanded,
  firstSubItemActive
}: TestParams) => [
  {
    active: firstItemActive,
    name: 'Clarifications',
    subItems: undefined
  },
  {
    active: false,
    name: 'Standards',
    subItems: undefined
  },
  {
    active: false,
    name: 'Stimuli/Text Complexity',
    subItems: undefined
  },
  {
    active: false,
    name: 'Accessibility Concerns',
    subItems: undefined
  },
  {
    active: false,
    name: 'Evidence Required',
    subItems: undefined
  },
  {
    active: expandItemActive,
    expanded: expandItemExpanded,
    name: 'Task Model 1',
    subItems: [
      {
        active: firstSubItemActive,
        name: 'Task Descriptions'
      },
      {
        active: false,
        name: 'Target Evidence Statement'
      },
      {
        active: false,
        name: 'Appropriate Stems'
      }
    ]
  },
  {
    active: false,
    name: 'Scoring Rules',
    subItems: undefined
  }
];

const initialState = produceState({
  firstItemActive: false,
  expandItemActive: false,
  expandItemExpanded: false,
  firstSubItemActive: false
});

const itemClickedState = produceState({
  firstItemActive: true,
  expandItemActive: false,
  expandItemExpanded: false,
  firstSubItemActive: false
});

const itemExpandedState = produceState({
  firstItemActive: false,
  expandItemActive: false,
  expandItemExpanded: true,
  firstSubItemActive: false
});

const subItemClickedState = produceState({
  firstItemActive: false,
  expandItemActive: true,
  expandItemExpanded: true,
  firstSubItemActive: true
});

const itemCollapsed = produceState({
  firstItemActive: true,
  expandItemActive: false,
  expandItemExpanded: false,
  firstSubItemActive: true
});

describe('ContentNav', () => {
  let contentNav: ReactWrapper;
  beforeEach(() => {
    contentNav = mount(<ContentNav items={mock} />);
  });
  afterEach(() => {
    contentNav.unmount();
  });

  it('activates Items', () => {
    contentNav
      .find('li')
      .first()
      .simulate('click');
    expect(contentNav.state('items')).toEqual(itemClickedState);
  });

  it('expands Items', () => {
    contentNav
      .find('svg')
      .first()
      .simulate('click');
    expect(contentNav.state('items')).toEqual(itemExpandedState);
  });

  it('collapses Items', () => {
    contentNav
      .find('svg')
      .first()
      .simulate('click');

    contentNav
      .find('svg')
      .first()
      .simulate('click');
    expect(contentNav.state('items')).toEqual(initialState);
  });

  it('activates SubItems', () => {
    contentNav
      .find('svg')
      .first()
      .simulate('click');

    contentNav
      .find('.sub-list')
      .children()
      .first()
      .simulate('click');
    expect(contentNav.state('items')).toEqual(subItemClickedState);
  });
});

describe('Chevron', () => {
  it('is clickable', () => {
    const chevronDown = mount(<Chevron expanded={false} itemName={'test name'} />);
    const chevronUp = mount(<Chevron expanded={true} itemName={'test name'} />);

    chevronDown.simulate('click');
    expect(chevronDown).toMatchSnapshot();

    chevronUp.simulate('click');
    expect(chevronUp).toMatchSnapshot();

    chevronDown.unmount();
    chevronUp.unmount();
  });
});