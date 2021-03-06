import React from 'react';

import { UnorderedList } from '../Lists';
import { parseContent } from '../parseUtils';
import { IStem } from '../../../models/target';

export interface StemsProps {
  stemType: string;
  stems: IStem[];
}

export const Stems: React.SFC<StemsProps> = ({ stemType, stems }) => {
  const stemsJsx = stems
    .filter(s => s.shortStem === stemType)
    .map((s, i) => <React.Fragment key={i}>{parseContent(s.stemDesc)}</React.Fragment>);

  return <UnorderedList elements={stemsJsx} />;
};
