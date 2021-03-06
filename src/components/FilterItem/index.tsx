import React from 'react';
import { Link } from 'react-router-dom';

import { Colors } from '../../constants/style';

export interface FilterItemProps {
  subject: string;
  grade: string[];
  claim: string;
  targetName: string;
  targetBodyText: string;
  targetLink: string;
}

function gradesToEnglish(grades: string[]) {
  if (grades.length === 0) {
    return 'No grades';
  }
  const prefix = grades.length === 1 ? 'Grade' : 'Grades';

  return `${prefix} ${grades.join(', ')}`;
}

export const boldSearchText = (targetBodyText: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  // tslint:disable-next-line : no-backbone-get-set-outside-model
  const searchText = urlParams.get('search');
  const find: string = searchText !== null ? searchText : '';
  const regex = new RegExp(find, 'g');
  if (searchText !== undefined && targetBodyText !== undefined) {
    return { __html: targetBodyText.replace(regex, find.bold()) };
  }

  return { __html: targetBodyText };
};

export const FilterItem: React.SFC<FilterItemProps> = ({
  targetLink,
  targetName,
  subject,
  grade,
  claim,
  targetBodyText
}) => (
  <div>
    <Link to={targetLink}>
      <h3>{targetName}</h3>
    </Link>
    <div className="indented">
      <div className="breadcrumb">
        {subject} &raquo; {gradesToEnglish(grade)} &raquo; {claim}
      </div>
      {/* tslint:disable-next-line : react-no-dangerous-html */}
      <div dangerouslySetInnerHTML={boldSearchText(targetBodyText)} />
    </div>
    <style jsx>{`
      h3 {
        color: ${Colors.sbBlue};
        text-decoration: underline;
        margin-bottom: 3px;
      }

      .breadcrumb {
        color: ${Colors.sbGrayDarker};
        text-decoration: underline;
        margin-bottom: 6px;
      }

      .indented {
        margin-left: 1em;
      }
    `}</style>
  </div>
);
