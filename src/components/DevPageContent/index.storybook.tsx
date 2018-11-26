import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  DevOverview,
  DevTestBlueprint,
  DevInterimBlueprint,
  DevItemSpecOverview,
  DevAccForItems,
  DevAddtlItemSpec,
  DevFullItemSpec,
  DevContentSpec,
  DevIntroELAContentSpec,
  DevIntroMathContentSpec
} from '.';

storiesOf('Development Page Components', module)
  .add('Overview', () => <DevOverview />)
  .add('DevTestBlueprint', () => <DevTestBlueprint />)
  .add('DevInterimBlueprint', () => <DevInterimBlueprint />)
  .add('DevItemSpecOverview', () => <DevItemSpecOverview />)
  .add('DevAccForItems', () => <DevAccForItems />)
  .add('DevAddtlItemSpec', () => <DevAddtlItemSpec />)
  .add('DevFullItemSpec', () => <DevFullItemSpec />)
  .add('DevContentSpec', () => <DevContentSpec />)
  .add('DevIntroELAContentSpec', () => <DevIntroELAContentSpec />)
  .add('DevIntroMathContentSpec', () => <DevIntroMathContentSpec />);