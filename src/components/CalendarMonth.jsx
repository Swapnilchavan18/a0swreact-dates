/* eslint react/no-array-index-key: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import moment from 'moment';
import cx from 'classnames';

import CalendarDay from './CalendarDay';

import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks';

import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';

import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
  DAY_SIZE,
} from '../../constants';

const propTypes = forbidExtraProps({
  month: momentPropTypes.momentObj,
  isVisible: PropTypes.bool,
  enableOutsideDays: PropTypes.bool,
  modifiers: PropTypes.object,
  orientation: ScrollableOrientationShape,
  daySize: nonNegativeInteger,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  renderDay: PropTypes.func,

  // i18n
  monthFormat: PropTypes.string,
});

const defaultProps = {
  month: moment(),
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: HORIZONTAL_ORIENTATION,
  daySize: DAY_SIZE,
  onDayClick() {},
  onDayMouseEnter() {},
  onDayMouseLeave() {},
  renderDay: null,

  // i18n
  monthFormat: 'MMMM YYYY', // english locale
  monthdataloading:false,
};

export default class CalendarMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: getCalendarMonthWeeks(props.month, props.enableOutsideDays),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { month, enableOutsideDays } = nextProps;
    if (!month.isSame(this.props.month)) {
      this.setState({
        weeks: getCalendarMonthWeeks(month, enableOutsideDays),
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      month,
      monthFormat,
      orientation,
      isVisible,
      modifiers,
      onDayClick,
      onDayMouseEnter,
      onDayMouseLeave,
      renderDay,
      daySize,
	  monthdataloading,
      show_inline_headers
    } = this.props;

    const { weeks } = this.state;
    const monthTitle = month.format(monthFormat);

    const calendarMonthClasses = cx('CalendarMonth', {
      'CalendarMonth--horizontal': orientation === HORIZONTAL_ORIENTATION,
      'CalendarMonth--vertical': orientation === VERTICAL_ORIENTATION,
      'CalendarMonth--vertical-scrollable': orientation === VERTICAL_SCROLLABLE,
    });
    return (
      <div className={calendarMonthClasses} data-visible={isVisible} data-monthdataloading={monthdataloading}>
        <table>
          <caption className="CalendarMonth__caption js-CalendarMonth__caption">
            <strong>{monthTitle}</strong>
          </caption>

          <tbody className="js-CalendarMonth__grid">
            {(show_inline_headers == true) &&
              <tr>
                  <td className="js-CalendarMonth__hw">Su</td>
                  <td className="js-CalendarMonth__hw">Mo</td>
                  <td className="js-CalendarMonth__hw">Tu</td>
                  <td className="js-CalendarMonth__hw">We</td>
                  <td className="js-CalendarMonth__hw">Th</td>
                  <td className="js-CalendarMonth__hw">Fr</td>
                  <td className="js-CalendarMonth__hw">Sa</td>
              </tr>
            }
            {weeks.map((week, i) => (
              <tr key={i}>
                {week.map((day, dayOfWeek) => (
                  <CalendarDay
                    day={day}
                    daySize={daySize}
                    isOutsideDay={!day || day.month() !== month.month()}
                    modifiers={modifiers}
                    key={dayOfWeek}
                    onDayClick={onDayClick}
                    renderDay={renderDay}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

CalendarMonth.propTypes = propTypes;
CalendarMonth.defaultProps = defaultProps;
