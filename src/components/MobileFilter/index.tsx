import React, { Fragment } from 'react';
import { FilterProps, CSEAdvancedFilterModels } from '../FilterProps';
import { MobileAdvancedFilter } from '../MobileAdvancedFilter';
import { Message } from '../FilterMessage';
import {
  sanitizeParams,
  createFilters,
  paramsFromMobileFilter,
  paramsFromFilter
} from '../FilterHelper';
import {
  FilterType,
  onFilterSelect,
  FilterOptionModel,
  AdvancedFilter
} from '@osu-cass/sb-components';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

export const MobileFilter: React.SFC<FilterProps> = ({ options, params, onUpdate }) => {
  const cleanParams = sanitizeParams(params, options);
  const {
    gradeFilter,
    subjectFilter,
    claimFilter,
    targetFilter
  }: CSEAdvancedFilterModels = createFilters(options, cleanParams);

  const onMobileSelect = (selectOptions: string[], code: FilterType) => {
    const newParams = paramsFromMobileFilter(cleanParams, selectOptions, code);
    onUpdate(newParams);
  };

  const onSubjectUpdate = (data?: FilterOptionModel) => {
    if (data) {
      const newParams = paramsFromFilter(params, FilterType.Subject, data);
      onUpdate(params);
    }
  };

  const renderClaimFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter) {
      content = (
        <MobileAdvancedFilter
          key={claimFilter.label}
          {...claimFilter}
          onMobileSelect={onMobileSelect}
          isMultiSelect={false}
        />
      );
    } else {
      content = <Message>Please Select a Grade and Subject</Message>;
    }

    return content;
  };

  const renderTargetFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter && targetFilter) {
      content = (
        <MobileAdvancedFilter
          key={targetFilter.label}
          {...targetFilter}
          onMobileSelect={onMobileSelect}
          isMultiSelect={false}
        />
      );
    } else {
      content = <Message>Please Select a Claim.</Message>;
    }

    return content;
  };

  return (
    <Fragment>
      <div className="mobileFilter">
        <AdvancedFilter
          key={subjectFilter.label}
          {...subjectFilter}
          onFilterOptionSelect={onSubjectUpdate}
          isMultiSelect={false}
        />
        <MobileAdvancedFilter
          key={gradeFilter.label}
          {...gradeFilter}
          isMultiSelect={true}
          onMobileSelect={onMobileSelect}
        />
        {renderClaimFilter()}
        {renderTargetFilter()}
      </div>
      <style jsx>{`
        .filter {
          display: flex;
          flex-wrap: wrap;
        }

        .mobileFilter {
          flex-direction: column;
        }

        .reset-container {
          text-align: right;
        }
      `}</style>
    </Fragment>
  );
};

export const MobileFilterWrapped = mediaQueryWrapper(MobileFilter, MobileBreakSize);
