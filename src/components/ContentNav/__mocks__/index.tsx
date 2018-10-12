import { SubItemProps } from '../SubItem';
import { ItemProps } from '../Item';

export const subItemMock: SubItemProps[] = [
  {
    active: false,
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
];
export const itemMock: ItemProps[] = [
  {
    name: 'Clarifications',
    subItems: []
  },
  {
    name: 'Standards',
    subItems: []
  },
  {
    name: 'Stimuli/Text Complexity',
    subItems: []
  },
  {
    name: 'Accessibility Concerns',
    subItems: []
  },
  {
    name: 'Evidence Required',
    subItems: []
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
    name: 'Scoring Rules',
    subItems: []
  }
];
