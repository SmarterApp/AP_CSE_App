import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { SearchBar } from '.';

storiesOf('SearchBar component', module)
  .addDecorator(centered)
  .add('SearchBar', () => <SearchBar />);
