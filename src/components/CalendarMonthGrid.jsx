import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import moment from 'moment';
import cx from 'classnames';
import { addEventListener, removeEventListener } from 'consolidated-events';

import CalendarMonth from './CalendarMonth';

import isTransitionEndSupported from '../utils/isTransitionEndSupported';
import getTransformStyles from '../utils/getTransformStyles';
import getCalendarMonthWidth from '../utils/getCalendarMonthWidth';

import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';

import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
  DAY_SIZE,
} from '../../constants';

const propTypes = forbidExtraProps({
  enableOutsideDays: PropTypes.bool,
  firstVisibleMonthIndex: PropTypes.number,
  initialMonth: momentPropTypes.momentObj,
  isAnimating: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  modifiers: PropTypes.object,
  orientation: ScrollableOrientationShape,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  onMonthTransitionEnd: PropTypes.func,
  renderDay: PropTypes.func,
  transformValue: PropTypes.string,
  daySize: nonNegativeInteger,

  // i18n
  monthFormat: PropTypes.string,
});

const defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 1,
  initialMonth: moment(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: HORIZONTAL_ORIENTATION,
  onDayClick() {},
  onDayMouseEnter() {},
  onDayMouseLeave() {},
  onMonthTransitionEnd() {},
  renderDay: null,
  transformValue: 'none',
  daySize: DAY_SIZE,

  // i18n
  monthFormat: 'MMMM YYYY', // english locale
  monthdataloading:false,
};

function getMonths(initialMonth, numberOfMonths) {
    //console.log('initialMonth');
    //console.log(initialMonth);
    //console.log(numberOfMonths);
  let month = initialMonth.clone().subtract(1, 'month');
	//month = initialMonth.clone();
  const months = [];
  for (let i = 0; i < numberOfMonths + 1; i=i+1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }

  return months;
}

export default class CalendarMonthGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths),
    };

    this.isTransitionEndSupported = isTransitionEndSupported();
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
	if(this.container != null){
		this.eventHandle = addEventListener(
		  this.container,
		  'transitionend',
		  this.onTransitionEnd,
		);
	}
  }

  componentWillReceiveProps(nextProps) {
    const { initialMonth, numberOfMonths } = nextProps;
    const { loadmore_btn } = this.props;
    const { months } = this.state;

    const hasMonthChanged = !this.props.initialMonth.isSame(initialMonth, 'month');
    const hasNumberOfMonthsChanged = this.props.numberOfMonths !== numberOfMonths;
    let newMonths = months;
    if (hasMonthChanged && !hasNumberOfMonthsChanged) {
      if (initialMonth.isAfter(this.props.initialMonth)) {
         if(loadmore_btn == true){
             for(var k=0;k<numberOfMonths;k++){
                 newMonths.push(months[months.length - 1].clone().add(1, 'month'));
             }
         }else{
            newMonths = months.slice(1);
            newMonths.push(months[months.length - 1].clone().add(1, 'month'));
         }

      } else {
        newMonths = months.slice(0, months.length - 1);
        newMonths.unshift(months[0].clone().subtract(1, 'month'));
      }
    }

    if (hasNumberOfMonthsChanged) {
      newMonths = getMonths(initialMonth, numberOfMonths);
    }

    this.setState({
      months: newMonths,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate() {
    const { isAnimating, onMonthTransitionEnd } = this.props;

    // For IE9, immediately call onMonthTransitionEnd instead of
    // waiting for the animation to complete
    if (!this.isTransitionEndSupported && isAnimating) {
      onMonthTransitionEnd();
    }
  }

  componentWillUnmount() {
	  if(this.eventHandle != null){
		removeEventListener(this.eventHandle);
	  }
  }

  onTransitionEnd() {
    this.props.onMonthTransitionEnd();
  }

  render() {
    const {
      enableOutsideDays,
      isAnimating,
      modifiers,
      numberOfMonths,
      monthFormat,
      orientation,
      transformValue,
      daySize,
      onDayMouseEnter,
      onDayMouseLeave,
      onDayClick,
      renderDay,
      onMonthTransitionEnd,
	  monthdataloading,
      show_inline_headers
	  //firstVisibleMonthIndex,
    } = this.props;
	const firstVisibleMonthIndex = 1;
    const { months } = this.state;
	//console.log('months are');
	//console.log(this.state.months);
    const isVertical = orientation === VERTICAL_ORIENTATION;
    const isVerticalScrollable = orientation === VERTICAL_SCROLLABLE;

    const className = cx('CalendarMonthGrid', {
      'CalendarMonthGrid--horizontal': orientation === HORIZONTAL_ORIENTATION,
      'CalendarMonthGrid--vertical': isVertical,
      'CalendarMonthGrid--vertical-scrollable': isVerticalScrollable,
      'CalendarMonthGrid--animating': isAnimating,
    });

    const calendarMonthWidth = getCalendarMonthWidth(daySize);

    const width = isVertical || isVerticalScrollable ?
      calendarMonthWidth :
      (numberOfMonths + 1) * calendarMonthWidth;

    const style = {
      ...getTransformStyles(transformValue),
      width,
    };
	if(this.props.monthdataloading == false){
		return (
		  <div
			ref={(ref) => { this.container = ref; }}
			className={className}
			style={style}
			onTransitionEnd={onMonthTransitionEnd} data-test="1"
		  >
			{months.map((month, i) => {
			  let isVisible =
				(i >= firstVisibleMonthIndex) && (i <= firstVisibleMonthIndex + numberOfMonths);
				//console.log(i + ' === '+(i >= firstVisibleMonthIndex) + ' ==== '+ (i < firstVisibleMonthIndex + numberOfMonths) + ' =====firstVisibleMonthIndex = '+firstVisibleMonthIndex);
				// 0 > = 0 && 0 < 0 + 1
				// 1 >= 0 && 1 < 0 + 1
			  return (
				<CalendarMonth
				  key={month.format('YYYY-MM')}
				  month={month}
				  isVisible={isVisible}
				  enableOutsideDays={enableOutsideDays}
				  modifiers={modifiers}
				  monthFormat={monthFormat}
				  orientation={orientation}
				  onDayMouseEnter={onDayMouseEnter}
				  onDayMouseLeave={onDayMouseLeave}
				  onDayClick={onDayClick}
				  renderDay={renderDay}
				  daySize={daySize}
				  monthdataloading={monthdataloading}
				  show_inline_headers={show_inline_headers}
				/>
			  );
			})}
		  </div>
		);
	}else{
		return (<div></div>);
	}
  }
}

CalendarMonthGrid.propTypes = propTypes;
CalendarMonthGrid.defaultProps = defaultProps;
