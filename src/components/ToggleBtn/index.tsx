import React, { Component } from 'react';
import css from 'styled-jsx/css';

import { Colors } from '../../constants/style';

const globalToggleStyle = css`
  .toggle-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pt-toggle {
    cursor: pointer;
    margin-left: 10px;
    font-size: 30px;
    color: #b3b3b3;
  }
  .inner-text {
    font-size: 0.8em;
    color: ${Colors.sbWhite};
  }
  .inner-text.no {
    margin-left: -20px;
  }
  .inner-text.yes {
    margin-left: -39px;
  }
`;
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '46',
  height: '36',
  viewBox: '0 0 36 36',
  stroke: 'none',
  className: 'pt-toggle'
};
const rect = <rect x="1" y="8" width="40" height="20" rx="10" ry="10" />;
export interface ToggleBtnProps {
  toggled: Boolean;
  filter: () => void;
}
export interface ToggleBtnState {
  isToggled: Boolean;
}

/**
 * Renders a ToggleButton for filtering performance tasks
 * @export
 * @class {ToggleBtn}
 * @param {ToggleBtnProps} item
 */
export class ToggleBtn extends Component<ToggleBtnProps, ToggleBtnState> {
  constructor(props: ToggleBtnProps) {
    super(props);
    this.state = {
      isToggled: this.props.toggled
    };
  }

  PtToggleYes = (
    <div className="toggle-container">
      <span>Show Performance Tasks only?</span>
      <svg {...svgProps} fill={Colors.sbBlueLighter}>
        {rect}
        <circle cx="30" cy="18" r="8" fill="white" />
      </svg>
      <span className="inner-text yes">Yes</span>
      <style jsx global>
        {globalToggleStyle}
      </style>
    </div>
  );

  PtToggleNo = (
    <div className="toggle-container">
      <span>Show Performance Tasks only?</span>
      <svg {...svgProps} fill="currentColor">
        {rect}
        <circle cx="11" cy="18" r="8" fill="white" />
      </svg>
      <span className="inner-text no"> No </span>
      <style jsx global>
        {globalToggleStyle}
      </style>
    </div>
  );

  toggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
    this.props.filter();
  };

  render() {
    return (
      <div onClick={this.toggle} role="Button">
        {this.state.isToggled ? this.PtToggleYes : this.PtToggleNo}
      </div>
    );
  }
}
