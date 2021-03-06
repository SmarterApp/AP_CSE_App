import { ITarget } from '../../../models/target';
import { ItemProps } from '../../../components/ContentNav/Item';
import { TitleBarProps } from '../../../components/TitleBar';
import { MobileTitleBarProps } from '../../../components/TitleBar/mobileTitleBar';
import { BreadcrumbsProps } from '../../../components/Breadcrumbs';
import { IClaim } from '../../../models/claim';
import { ITargetParams } from '../../../clients/target';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';
import { ITable } from '../Table';

export const mockTargetClient = {
  // tslint:disable-next-line:no-empty
  buildParams: (params: ITargetParams) => '',
  getTarget: async () => {
    return import('../../../../mock_api_data/E.G3.C1').then(
      data => (data.default as unknown) as IClaim
    );
  }
};

export const mockEmptyTargetClient = {
  // tslint:disable-next-line:no-empty
  buildParams: (params: ITargetParams) => '',
  getTarget: async () => Promise.reject(new Error('error'))
};

export const parsedRegularItemMock: ItemProps[] = [{ name: 'Evidence Required', subItems: [] }];

export const parsedItemWithSubsMock: ItemProps[] = [
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Model 1-Task Description'
      },
      {
        name: 'Task Model 1-Target Evidence Statements'
      },
      {
        name: 'Task Model 1-Appropriate Stems'
      },
      {
        name: 'Task Model 1-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 2',
    subItems: [
      {
        name: 'Task Model 2-Task Description'
      },
      {
        name: 'Task Model 2-Target Evidence Statements'
      },
      {
        name: 'Task Model 2-Appropriate Stems'
      },
      {
        name: 'Task Model 2-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 3',
    subItems: [
      {
        name: 'Task Model 3-Task Description'
      },
      {
        name: 'Task Model 3-Target Evidence Statements'
      },
      {
        name: 'Task Model 3-Appropriate Stems'
      },
      {
        name: 'Task Model 3-Scoring Rules'
      }
    ]
  }
];

export const parsedNavPropsMock: ItemProps[] = [
  {
    name: 'Clarification',
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
        name: 'Task Model 1-Task Description'
      },
      {
        name: 'Task Model 1-Target Evidence Statements'
      },
      {
        name: 'Task Model 1-Appropriate Stems'
      },
      {
        name: 'Task Model 1-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 2',
    subItems: [
      {
        name: 'Task Model 2-Task Description'
      },
      {
        name: 'Task Model 2-Target Evidence Statements'
      },
      {
        name: 'Task Model 2-Appropriate Stems'
      },
      {
        name: 'Task Model 2-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 3',
    subItems: [
      {
        name: 'Task Model 3-Task Description'
      },
      {
        name: 'Task Model 3-Target Evidence Statements'
      },
      {
        name: 'Task Model 3-Appropriate Stems'
      },
      {
        name: 'Task Model 3-Scoring Rules'
      }
    ]
  },
  {
    name: 'Depth of Knowledge',
    subItems: []
  }
];

export const parsedBreadCrumbDataMock: BreadcrumbsProps = {
  subject: 'English Language Arts',
  grades: ['6'],
  claim: 'Claim 1',
  target: 'English Language Arts Specification: Grade 6 Claim 1 Target 1',
  targetList: undefined,
  targetShortCode: 'E.G6.C1RL.T1',
  claimId: 'C1'
};

export const parsedTitleBarDataMock: TitleBarProps = {
  claimTitle: 'Claim 1',
  claimDesc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: {
    claim: ELAG3ClaimMock
  },
  targetTitle: 'Target 1',
  targetDesc: 'placeholder'
};
export const parsedMobileTitleBarDataMock: MobileTitleBarProps = {
  claimTitle: 'Claim 1',
  claimUrl: '/explore?filter=open&claim=C1&grades=6&subject=English%20Language%20Arts',
  targetTitle: 'Target 1',
  downloadBtnProps: {
    claim: ELAG3ClaimMock
  }
};

export const parsedSubItemMock: ItemProps = {
  name: 'Task Model 1',
  subItems: [
    {
      name: 'Task Model 1-Task Description'
    },
    {
      name: 'Task Model 1-Target Evidence Statements'
    },
    {
      name: 'Task Model 1-Appropriate Stems'
    },
    {
      name: 'Task Model 1-Scoring Rules'
    }
  ]
};

export const targetMock: ITarget = {
  title: '',
  shortCode: '',
  description: '',
  standards: [],
  DOK: [],
  interactionType: '',
  clarification: '',
  heading: '',
  evidence: [],
  vocab: '',
  tools: '',
  stimInfo: '',
  devNotes: '',
  complexity: '',
  dualText: '',
  accessibility: '',
  stem: [],
  taskModels: [],
  rubrics: []
};
