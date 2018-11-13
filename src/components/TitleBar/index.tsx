import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Styles, Colors } from '../../constants';
import { IDomain } from '../../models/claim';

/**
 * interface for TitleBar
 * @export
 * @interface TitleBarProps
 */
export interface TitleBarProps {
  claimTitle?: string;
  claimDesc?: string;
  targetTitle?: string;
  targetDesc?: string;
  taskModels?: string[];
  downloadBtnProps?: DownloadBtnProps;
}

/**
 * Renders a TitleBar that shows a title, a description, a download button.
 * The description and the download button are optional although the title is always shown
 * @export
 * @function TitleBar
 * @param {string} title
 * @param {string | undefined} desc
 * @param {DownloadBtnProps | undefined} downloadBtnProps
 */
export const TitleBar: React.SFC<TitleBarProps> = ({
  claimTitle,
  claimDesc,
  targetTitle,
  targetDesc,
  downloadBtnProps,
  taskModels
}: TitleBarProps) => (
  <div>
    <ul>
      {claimTitle && (
        <li className="title">
          <span>{claimTitle}</span>
        </li>
      )}
      {claimDesc && (
        <li className="desc">
          <span>{claimDesc}</span>
        </li>
      )}
      {targetTitle && (
        <li className="title">
          <span>{targetTitle}</span>
        </li>
      )}
      {targetDesc && (
        <li className="desc">
          <span>{targetDesc}</span>
        </li>
      )}
      {downloadBtnProps && (
        <li className="download">
          <DownloadBtn
            url={downloadBtnProps.url}
            filename={downloadBtnProps.filename}
            taskNames={taskModels}
          />
        </li>
      )}
    </ul>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      div {
        display: flex;
        font-family: ${Styles.sbSans};
        justify-content: center;
        padding: 0.7em 0;
        backgroundImage: linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})
        width: '100%',
        flexBasis: '100%'
      }
      div ul {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        list-style-type: none;
        max-width: ${Styles.targetContentWidth};
        width: 100%;
      }
      div ul li {
        width: 100%;
      }
      .title {
        width: 20%;
        min-width: 50px;
        color: white;
        font-size: 18px;
        text-align: left;
      }
      .desc {
        width: 75%;
        min-width: 50px;
        padding-bottom: 15px;
        color: ${Colors.sbGrayLighter};
        font-size: 14px;
        font-weight: 100;
        text-align: left;
      }
      .download {
        margin-left: auto;
        margin-top: auto;
      }
    `}</style>
  </div>
);
