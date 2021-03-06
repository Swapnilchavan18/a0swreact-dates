import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps } from 'airbnb-prop-types';

import { DateRangePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';

import DateRangePickerInput from './DateRangePickerInput';

import toMomentObject from '../utils/toMomentObject';
import toLocalizedDateString from '../utils/toLocalizedDateString';
import toISODateString from '../utils/toISODateString';

import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import isInclusivelyBeforeDay from '../utils/isInclusivelyBeforeDay';

import { START_DATE, END_DATE } from '../../constants';

const propTypes = forbidExtraProps({
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  isStartDateFocused: PropTypes.bool,

  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  isEndDateFocused: PropTypes.bool,

  screenReaderMessage: PropTypes.string,
  showClearDates: PropTypes.bool,
  showCaret: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,

  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDates: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  isOutsideRange: PropTypes.func,
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  onFocusChange: PropTypes.func,
  onDatesChange: PropTypes.func,

  customInputIcon: PropTypes.node,
  customArrowIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,

  isFocused: PropTypes.bool,

  // i18n
  phrases: PropTypes.shape(getPhrasePropTypes(DateRangePickerInputPhrases)),
  monthdataloading:PropTypes.bool,
  withoutborder:PropTypes.bool,
  inputpad:PropTypes.string,
  arrowheight:PropTypes.string,
});

const defaultProps = {
  startDate: null,
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,

  endDate: null,
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,

  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  disabled: false,
  required: false,

  withoutborder: false,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  displayFormat: () => moment.localeData().longDateFormat('L'),

  onFocusChange() {},
  onDatesChange() {},

  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  isFocused: false,
  monthdataloading:false,

  // i18n
  phrases: DateRangePickerInputPhrases,
};

export default class DateRangePickerInputController extends React.Component {
  constructor(props) {
    super(props);

    this.onClearFocus = this.onClearFocus.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onStartDateFocus = this.onStartDateFocus.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onEndDateFocus = this.onEndDateFocus.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  onClearFocus() {
    this.props.onFocusChange(null);
  }

  onEndDateChange(endDateString) {
    const {
      startDate,
      isOutsideRange,
      keepOpenOnDateSelect,
      onDatesChange,
      onFocusChange,
    } = this.props;

    const endDate = toMomentObject(endDateString, this.getDisplayFormat());

    const isEndDateValid = endDate && !isOutsideRange(endDate) &&
      !isInclusivelyBeforeDay(endDate, startDate);
    if (isEndDateValid) {
      onDatesChange({ startDate, endDate });
      if (!keepOpenOnDateSelect) onFocusChange(null);
    } else {
      onDatesChange({
        startDate,
        endDate: null,
      });
    }
  }

  onEndDateFocus() {
    const { startDate, onFocusChange, withFullScreenPortal, disabled } = this.props;

    if (!startDate && withFullScreenPortal && !disabled) {
      // When the datepicker is full screen, we never want to focus the end date first
      // because there's no indication that that is the case once the datepicker is open and it
      // might confuse the user
      onFocusChange(START_DATE);
    } else if (!disabled) {
      onFocusChange(END_DATE);
    }
  }

  onStartDateChange(startDateString) {
    const startDate = toMomentObject(startDateString, this.getDisplayFormat());

    let { endDate } = this.props;
    const { isOutsideRange, onDatesChange, onFocusChange } = this.props;
    const isStartDateValid = startDate && !isOutsideRange(startDate);
    if (isStartDateValid) {
      if (isInclusivelyBeforeDay(endDate, startDate)) {
        endDate = null;
      }

      onDatesChange({ startDate, endDate });
      onFocusChange(END_DATE);
    } else {
      onDatesChange({
        startDate: null,
        endDate,
      });
    }
  }

  onStartDateFocus() {
    if (!this.props.disabled) {
      this.props.onFocusChange(START_DATE);
    }
  }

  getDisplayFormat() {
    const { displayFormat } = this.props;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  }

  getDateString(date) {
    const displayFormat = this.getDisplayFormat();
    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }
    return toLocalizedDateString(date);
  }

  clearDates() {
    const { onDatesChange, reopenPickerOnClearDates, onFocusChange } = this.props;
    onDatesChange({ startDate: null, endDate: null });
    if (reopenPickerOnClearDates) {
      onFocusChange(START_DATE);
    }
  }

  render() {
    const {
      startDate,
      startDateId,
      startDatePlaceholderText,
      isStartDateFocused,
      endDate,
      endDateId,
      endDatePlaceholderText,
      isEndDateFocused,
      screenReaderMessage,
      showClearDates,
      showCaret,
      showDefaultInputIcon,
      customInputIcon,
      customArrowIcon,
      customCloseIcon,
      disabled,
      required,
      isFocused,
      phrases,
      monthdataloading,
      inputpad,
      arrowheight,
      withoutborder,
    } = this.props;

    const startDateString = this.getDateString(startDate);
    const startDateValue = toISODateString(startDate);
    const endDateString = this.getDateString(endDate);
    const endDateValue = toISODateString(endDate);

    return (
      <DateRangePickerInput
        startDate={startDateString}
        startDateValue={startDateValue}
        startDateId={startDateId}
        startDatePlaceholderText={startDatePlaceholderText}
        isStartDateFocused={isStartDateFocused}
        endDate={endDateString}
        endDateValue={endDateValue}
        endDateId={endDateId}
        endDatePlaceholderText={endDatePlaceholderText}
        isEndDateFocused={isEndDateFocused}
        isFocused={isFocused}
        disabled={disabled}
        required={required}
        showCaret={showCaret}
        showDefaultInputIcon={showDefaultInputIcon}
        customInputIcon={customInputIcon}
        customArrowIcon={customArrowIcon}
        customCloseIcon={customCloseIcon}
        phrases={phrases}
        onStartDateChange={this.onStartDateChange}
        onStartDateFocus={this.onStartDateFocus}
        onStartDateShiftTab={this.onClearFocus}
        onEndDateChange={this.onEndDateChange}
        onEndDateFocus={this.onEndDateFocus}
        onEndDateTab={this.onClearFocus}
        showClearDates={showClearDates}
        onClearDates={this.clearDates}
        screenReaderMessage={screenReaderMessage}
		monthdataloading={monthdataloading}
		inputpad={inputpad}
		arrowheight={arrowheight}
		withoutborder={withoutborder}
      />
    );
  }
}

DateRangePickerInputController.propTypes = propTypes;
DateRangePickerInputController.defaultProps = defaultProps;
