import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import cx from 'classnames';

import { DateRangePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';

import DateInput from './DateInput';
import RightArrow from './RightArrow';
import CloseButton from './CloseButton';
import CalendarIcon from './CalendarIcon';

import { START_DATE, END_DATE } from '../../constants';

const propTypes = forbidExtraProps({
  startDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  screenReaderMessage: PropTypes.string,

  endDateId: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,

  onStartDateFocus: PropTypes.func,
  onEndDateFocus: PropTypes.func,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onStartDateShiftTab: PropTypes.func,
  onEndDateTab: PropTypes.func,
  onClearDates: PropTypes.func,

  startDate: PropTypes.string,
  startDateValue: PropTypes.string,
  endDate: PropTypes.string,
  endDateValue: PropTypes.string,

  isStartDateFocused: PropTypes.bool,
  isEndDateFocused: PropTypes.bool,
  showClearDates: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  showCaret: PropTypes.bool,
  withoutborder: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  //customInputIcon: PropTypes.node,
  //customArrowIcon: PropTypes.node,
  //customCloseIcon: PropTypes.node,

  isFocused: PropTypes.bool, // describes actual DOM focus

  // i18n
  phrases: PropTypes.shape(getPhrasePropTypes(DateRangePickerInputPhrases)),
   monthdataloading:PropTypes.bool,
  inputpad:PropTypes.string,
  arrowheight:PropTypes.string,
});

const defaultProps = {
  startDateId: START_DATE,
  endDateId: END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  screenReaderMessage: '',
  onStartDateFocus() {},
  onEndDateFocus() {},
  onStartDateChange() {},
  onEndDateChange() {},
  onStartDateShiftTab() {},
  onEndDateTab() {},
  onClearDates() {},

  startDate: '',
  startDateValue: '',
  endDate: '',
  endDateValue: '',

  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  showCaret: false,
  withoutborder: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  isFocused: false,

  // i18n
  phrases: DateRangePickerInputPhrases,
  inputpad:'4',
  arrowheight:'0',
};

export default class DateRangePickerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClearDatesHovered: false,
    };

    this.onClearDatesMouseEnter = this.onClearDatesMouseEnter.bind(this);
    this.onClearDatesMouseLeave = this.onClearDatesMouseLeave.bind(this);
  }

  onClearDatesMouseEnter() {
    this.setState({
      isClearDatesHovered: true,
    });
  }

  onClearDatesMouseLeave() {
    this.setState({
      isClearDatesHovered: false,
    });
  }

  render() {
    const { isClearDatesHovered } = this.state;
    const {
      startDate,
      startDateValue,
      startDateId,
      startDatePlaceholderText,
      screenReaderMessage,
      isStartDateFocused,
      onStartDateChange,
      onStartDateFocus,
      onStartDateShiftTab,
      endDate,
      endDateValue,
      endDateId,
      endDatePlaceholderText,
      isEndDateFocused,
      onEndDateChange,
      onEndDateFocus,
      onEndDateTab,
      onClearDates,
      showClearDates,
      disabled,
      withoutborder,
      required,
      showCaret,
      showDefaultInputIcon,
      customInputIcon,
      customArrowIcon,
      customCloseIcon,
      isFocused,
      phrases,
      inputpad,
      arrowheight,
    } = this.props;
	const style1arrow = {'paddingTop':arrowheight+'px'};
    const inputIcon = (<CalendarIcon />);
    const arrowIcon = (<RightArrow/>);
    const closeIcon = (<CloseButton />);
    return (
      <div
        className={cx('DateRangePickerInput', {
          'DateRangePickerInput--disabled': disabled,
          'withoutborder': withoutborder,
        })}
      >
        {(showDefaultInputIcon || customInputIcon !== null) && (
          <button
            type="button"
            aria-label={phrases.focusStartDate}
            className="DateRangePickerInput__calendar-icon"
            onClick={onStartDateFocus}
          >
            {inputIcon}
          </button>
        )}

        <DateInput
          id={startDateId}
          placeholder={startDatePlaceholderText}
          displayValue={startDate}
          inputValue={startDateValue}
          screenReaderMessage={screenReaderMessage}
          focused={isStartDateFocused}
          isFocused={isFocused}
          disabled={disabled}
          required={required}
          showCaret={showCaret}

          onChange={onStartDateChange}
          onFocus={onStartDateFocus}
          onKeyDownShiftTab={onStartDateShiftTab}
          inputpad={inputpad}
		   datetype="start"
        />

        <div className="DateRangePickerInput__arrow" style={style1arrow}>
          <RightArrow/>
        </div>

        <DateInput
          id={endDateId}
          placeholder={endDatePlaceholderText}
          displayValue={endDate}
          inputValue={endDateValue}
          screenReaderMessage={screenReaderMessage}
          focused={isEndDateFocused}
          isFocused={isFocused}
          disabled={disabled}
          required={required}
          showCaret={showCaret}
          onChange={onEndDateChange}
          onFocus={onEndDateFocus}
          onKeyDownTab={onEndDateTab}
          inputpad={inputpad}
		  datetype="end"
        />

        {showClearDates && (
          <button
            type="button"
            className={cx('DateRangePickerInput__clear-dates', {
              'DateRangePickerInput__clear-dates--hide': !(startDate || endDate),
              'DateRangePickerInput__clear-dates--hover': isClearDatesHovered,
            })}
            onMouseEnter={this.onClearDatesMouseEnter}
            onMouseLeave={this.onClearDatesMouseLeave}
            onClick={onClearDates}
          >
            <span className="screen-reader-only">
              {phrases.clearDates}
            </span>
            <div className="DateRangePickerInput__close-icon">
              <CloseButton/>
            </div>
          </button>
        )}
      </div>
    );
  }
}

DateRangePickerInput.propTypes = propTypes;
DateRangePickerInput.defaultProps = defaultProps;
