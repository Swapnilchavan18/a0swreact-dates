import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import ReactDOM from 'react-dom';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import moment from 'moment';
import cx from 'classnames';

import { DayPickerPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';

import OutsideClickHandler from './OutsideClickHandler';
import CalendarMonthGrid from './CalendarMonthGrid';
import DayPickerNavigation from './DayPickerNavigation';

import getTransformStyles from '../utils/getTransformStyles';
import getCalendarMonthWidth from '../utils/getCalendarMonthWidth';

import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';

import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
  DAY_SIZE,
} from '../../constants';

const MONTH_PADDING = 23;
const DAY_PICKER_PADDING = 7;
const PREV_TRANSITION = 'prev';
const NEXT_TRANSITION = 'next';

const propTypes = forbidExtraProps({
  // calendar presentation props
  enableOutsideDays: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  orientation: ScrollableOrientationShape,
  withPortal: PropTypes.bool,
  onOutsideClick: PropTypes.func,
  hidden: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  renderCalendarInfo: PropTypes.func,
  daySize: nonNegativeInteger,

  // navigation props
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,

  // day props
  modifiers: PropTypes.object,
  renderDay: PropTypes.func,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,

  isFocused: PropTypes.bool,
  onBlur: PropTypes.func,

  // internationalization
  monthFormat: PropTypes.string,
  phrases: PropTypes.shape(getPhrasePropTypes(DayPickerPhrases)),
});

const defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick() {},
  hidden: false,
  initialVisibleMonth: () => moment(),
  renderCalendarInfo: null,
  daySize: DAY_SIZE,

  // navigation props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day props
  modifiers: {},
  renderDay: null,
  onDayClick() {},
  onDayMouseEnter() {},
  onDayMouseLeave() {},

  isFocused: false,
  onBlur() {},

  // internationalization
  monthFormat: 'MMMM YYYY',
  phrases: DayPickerPhrases,
};

function applyTransformStyles(el, transform, opacity = '') {
  const transformStyles = getTransformStyles(transform);
  transformStyles.opacity = opacity;

  Object.keys(transformStyles).forEach((styleKey) => {
    // eslint-disable-next-line no-param-reassign
    el.style[styleKey] = transformStyles[styleKey];
  });
}

export function calculateDimension(el, axis, borderBox = false, withMargin = false) {
  if (!el) {
    return 0;
  }

  const axisStart = (axis === 'width') ? 'Left' : 'Top';
  const axisEnd = (axis === 'width') ? 'Right' : 'Bottom';

  // Only read styles if we need to
  const style = (!borderBox || withMargin) ? window.getComputedStyle(el) : {};

  // Offset includes border and padding
  let size = (axis === 'width') ? el.offsetWidth : el.offsetHeight;

  // Get the inner size
  if (!borderBox) {
    size -= (
      parseFloat(style[`padding${axisStart}`]) +
      parseFloat(style[`padding${axisEnd}`]) +
      parseFloat(style[`border${axisStart}Width`]) +
      parseFloat(style[`border${axisEnd}Width`])
    );
  }

  // Apply margin
  if (withMargin) {
    size += (
      parseFloat(style[`margin${axisStart}`]) +
      parseFloat(style[`margin${axisEnd}`])
    );
  }

  return size;
}

function getMonthHeight(el) {
  const caption = el.querySelector('.js-CalendarMonth__caption');
  const grid = el.querySelector('.js-CalendarMonth__grid');

  // Need to separate out table children for FF
  // Add an additional +1 for the border
  return (
    calculateDimension(caption, 'height', true, true) + calculateDimension(grid, 'height') + 1
  );
}

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props);

    this.hasSetInitialVisibleMonth = !props.hidden;
    this.state = {
      currentMonth: props.hidden ? moment() : props.initialVisibleMonth(),
      monthdataloading: props.monthdataloading,
      monthTransition: null,
      translationValue: 0,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: getCalendarMonthWidth(props.daySize),
      is_flex_shown:props.is_flex_shown,
    };
    this.onPrevMonthClick = this.onPrevMonthClick.bind(this);
    this.onNextMonthClick = this.onNextMonthClick.bind(this);
    this.multiplyScrollableMonths = this.multiplyScrollableMonths.bind(this);
    this.updateStateAfterMonthTransition = this.updateStateAfterMonthTransition.bind(this);
    this.handleresize = this.handleresize.bind(this);
  }
  set_is_flex_shown1(is_flex_shown){
      this.props.set_is_flex_shown(is_flex_shown);
      if(is_flex_shown == false){
          this.adjustDayPickerHeight();
          this.initializeDayPickerWidth();
      }else{
          this.props.set_trip_duration_flex("weekend","initialize");
      }

  }
  handleresize(){
      if (this.isHorizontal()) {
        this.adjustDayPickerHeight();
        this.initializeDayPickerWidth();
      }
  }
  componentWillUnmount(){
      window.removeEventListener('resize', this.handleresize);
  }
  componentDidMount() {
    if (this.isHorizontal()) {
      this.adjustDayPickerHeight();
      this.initializeDayPickerWidth();
    }

    window.addEventListener('resize', this.handleresize);
    if (this.props.isFocused && this.props.is_flex_shown == false) {
      this.container.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.hidden) {
      if (!this.hasSetInitialVisibleMonth) {
        this.hasSetInitialVisibleMonth = true;
        this.setState({
          currentMonth: nextProps.initialVisibleMonth(),
        });
      }
	if(nextProps.monthdataloading != this.state.monthdataloading){
		this.setState({
		  monthdataloading: nextProps.monthdataloading,
		});
	}
      if (!this.dayPickerWidth && this.isHorizontal()) {
        this.initializeDayPickerWidth();
        this.adjustDayPickerHeight();
      }
    }


    if (nextProps.daySize !== this.props.daySize) {
      this.setState({
        calendarMonthWidth: getCalendarMonthWidth(nextProps.daySize),
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
	  if(this.state.currentMonth != null){
		if (this.state.monthTransition || !this.state.currentMonth.isSame(prevState.currentMonth)) {
		  if (this.isHorizontal()) {
			this.adjustDayPickerHeight();
		  }
		  }
		}

    if (!prevProps.isFocused && this.props.isFocused && this.props.is_flex_shown ==false) {
      this.container.focus();
    }
    if (prevProps.is_flex_shown !== this.props.is_flex_shown) {
        this.initializeDayPickerWidth();
        this.adjustDayPickerHeight();
    }
  }

  onPrevMonthClick(e) {
    if (e) e.preventDefault();

    if (this.props.onPrevMonthClick) {
      this.props.onPrevMonthClick(e);
    }

    const translationValue =
      this.isVertical() ? this.getMonthHeightByIndex(0) : this.dayPickerWidth;

    // The first CalendarMonth is always positioned absolute at top: 0 or left: 0
    // so we need to transform it to the appropriate location before the animation.
    // This behavior is because we would otherwise need a double-render in order to
    // adjust the container position once we had the height the first calendar
    // (ie first draw all the calendar, then in a second render, use the first calendar's
    // height to position the container). Variable calendar heights, amirite? <3 Maja
    this.translateFirstDayPickerForAnimation(translationValue);

    this.setState({
      monthTransition: PREV_TRANSITION,
      translationValue,
    });
  }

  onNextMonthClick(e) {
    if (e) e.preventDefault();
    if (this.props.onNextMonthClick) {
      this.props.onNextMonthClick(e);
    }

    const translationValue =
      this.isVertical() ? -this.getMonthHeightByIndex(1) : -this.dayPickerWidth;

    this.setState({
      monthTransition: NEXT_TRANSITION,
      translationValue,
    });
  }

  getMonthHeightByIndex(i) {
    return getMonthHeight(this.transitionContainer.querySelectorAll('.CalendarMonth')[i]);
  }

  multiplyScrollableMonths(e) {
    if (e) e.preventDefault();

    this.setState({
      scrollableMonthMultiple: this.state.scrollableMonthMultiple + 1,
    });
  }

  isHorizontal() {
    return this.props.orientation === HORIZONTAL_ORIENTATION;
  }

  isVertical() {
    return this.props.orientation === VERTICAL_ORIENTATION ||
      this.props.orientation === VERTICAL_SCROLLABLE;
  }

  initializeDayPickerWidth() {
	if(this.calendarMonthGrid != null){
    this.dayPickerWidth = calculateDimension(
      // eslint-disable-next-line react/no-find-dom-node
      ReactDOM.findDOMNode(this.calendarMonthGrid).querySelector('.CalendarMonth'),
      'width',
      true,
    );
	}
  }

  updateStateAfterMonthTransition() {
    const { currentMonth, monthTransition } = this.state;

    let newMonth = currentMonth;
    if (monthTransition === PREV_TRANSITION) {
      newMonth = currentMonth.clone().subtract(1, 'month');
    } else if (monthTransition === NEXT_TRANSITION) {
      newMonth = currentMonth.clone().add(1, 'month');
    }

    // clear the previous transforms
    applyTransformStyles(
      // eslint-disable-next-line react/no-find-dom-node
      ReactDOM.findDOMNode(this.calendarMonthGrid).querySelector('.CalendarMonth'),
      'none',
    );

    this.setState({
      currentMonth: newMonth,
      monthTransition: null,
      translationValue: 0,
    });
  }

  adjustDayPickerHeight() {
    const heights = [];
	if(this.transitionContainer != null){
    Array.prototype.forEach.call(this.transitionContainer.querySelectorAll('.CalendarMonth'),
      (el) => {
        if (el.getAttribute('data-visible') === 'true') {
          heights.push(getMonthHeight(el));
        }
      },
    );

    const newMonthHeight = Math.max(...heights) + MONTH_PADDING;

    if (newMonthHeight !== calculateDimension(this.transitionContainer, 'height')) {
      this.monthHeight = newMonthHeight;
      this.transitionContainer.style.height = `${newMonthHeight}px`;
    }
	}
  }

  translateFirstDayPickerForAnimation(translationValue) {
    const transformType = this.isVertical() ? 'translateY' : 'translateX';
    const transformValue = `${transformType}(-${translationValue}px)`;

    applyTransformStyles(
      this.transitionContainer.querySelector('.CalendarMonth'),
      transformValue,
      1,
    );
  }

  renderNavigation() {
    const {
      navPrev,
      navNext,
      orientation,
      loadmore_btn,
      loadmore_months,
      startDate,
      endDate,
      show_flexible_dates,
      set_trip_duration_flex,
      trip_duration_flex
    } = this.props;

    let onNextMonthClick;
    if (orientation === VERTICAL_SCROLLABLE) {
      onNextMonthClick = this.multiplyScrollableMonths;
    } else {
      onNextMonthClick = this.onNextMonthClick;
    }
    return (
      <DayPickerNavigation
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={onNextMonthClick}
        navPrev={navPrev}
        navNext={navNext}
        orientation={orientation}
        loadmore_btn={loadmore_btn}
        loadmore_months={loadmore_months}
        startDate={startDate}
        endDate={endDate}
        show_flexible_dates={show_flexible_dates}
		monthdataloading = {this.state.monthdataloading}
        trip_duration_flex={trip_duration_flex}
        set_trip_duration_flex={set_trip_duration_flex}
      />
    );
  }

  renderWeekHeader(index) {
    const { daySize, orientation } = this.props;
    const { calendarMonthWidth } = this.state;

    const verticalScrollable = orientation === VERTICAL_SCROLLABLE;

    const horizontalStyle = {
      left: index * calendarMonthWidth,
    };

    const verticalStyle = {
      marginLeft: -calendarMonthWidth / 2,
    };

    let style = {}; // no styles applied to the vertical-scrollable orientation
    if (this.isHorizontal()) {
      style = horizontalStyle;
    } else if (this.isVertical() && !verticalScrollable) {
      style = verticalStyle;
    }

    const header = [];
    for (let i = 0; i < 7; i += 1) {
      header.push(
        <li key={i} style={{ width: daySize }}>
          <small>{moment().weekday(i).format('dd')}</small>
        </li>,
      );
    }

    return (
      <div
        className="DayPicker__week-header"
        key={`week-${index}`}
        style={style}
      >
        <ul>
          {header}
        </ul>
      </div>
    );
  }
  search_item(selected_months,aitem){
      if(selected_months != null && selected_months.length > 0){
          for (var i=0; i < selected_months.length; i++) {
             var selected_item = selected_months[i];
             if(aitem == selected_item){
                 return true;
             }
          }
      }
      return false;
  }
  render() {
    const {
      currentMonth,
      monthTransition,
      translationValue,
      scrollableMonthMultiple,
    } = this.state;
    const {
      enableOutsideDays,
      numberOfMonths,
      orientation,
      modifiers,
      withPortal,
      onDayClick,
      onDayMouseEnter,
      onDayMouseLeave,
      renderDay,
      renderCalendarInfo,
      onOutsideClick,
      monthFormat,
      daySize,
      loadmore_btn,
      loadmore_months,
      show_flexible_dates,
      trip_duration_flex,
      set_trip_duration_flex,
      all_months,
      selected_months,
      set_selected_months,
      show_search_btn,
      sel_mon1,sel_mon2,sel_mon3,sel_mon4,sel_mon5,sel_mon6,show_inline_headers,is_flex_shown
    } = this.props;
    const { calendarMonthWidth } = this.state;

    const numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
    const weekHeaders = [];
    for (let i = 0; i < numOfWeekHeaders; i += 1) {
      weekHeaders.push(this.renderWeekHeader(i));
    }

    let firstVisibleMonthIndex = 0;
    if (monthTransition === PREV_TRANSITION) {
      firstVisibleMonthIndex -= 1;
    } else if (monthTransition === NEXT_TRANSITION) {
      firstVisibleMonthIndex += 1;
    }

    const verticalScrollable = this.props.orientation === VERTICAL_SCROLLABLE;

    const dayPickerClassNames = cx('DayPicker', {
      'DayPicker--horizontal': this.isHorizontal(),
      'DayPicker--vertical': this.isVertical(),
      'DayPicker--vertical-scrollable': verticalScrollable,
      'DayPicker--portal': withPortal,
    });

    const transitionContainerClasses = cx('transition-container', {
      'transition-container--horizontal': this.isHorizontal(),
      'transition-container--vertical': this.isVertical(),
    });

    const horizontalWidth = (calendarMonthWidth * numberOfMonths) + (2 * DAY_PICKER_PADDING);

    // this is a kind of made-up value that generally looks good. we'll
    // probably want to let the user set this explicitly.
    const verticalHeight = 1.75 * calendarMonthWidth;

    const dayPickerStyle = {
      width: this.isHorizontal() && horizontalWidth,

      // These values are to center the datepicker (approximately) on the page
      marginLeft: this.isHorizontal() && withPortal && -horizontalWidth / 2,
      marginTop: this.isHorizontal() && withPortal && -calendarMonthWidth / 2,
    };

    const transitionContainerStyle = {
      width: this.isHorizontal() && horizontalWidth,
	  height:this.state.monthdataloading == true && 0

    };//height: this.isVertical() && !verticalScrollable && !withPortal && verticalHeight,

    const isCalendarMonthGridAnimating = monthTransition !== null;
    const transformType = this.isVertical() ? 'translateY' : 'translateX';
    const transformValue = `${transformType}(${translationValue}px)`;
    const text_flex = "I'm flexible";
    //transitionContainerClasses: style={transitionContainerStyle}
    //console.log("trip_duration_flex"+trip_duration_flex);
    return (
      <div className={dayPickerClassNames} style={dayPickerStyle} data-test3="1">
		{ (this.state.monthdataloading == true)&&
			<div className="stillloading datepickerloader active"></div>
		}
        {show_flexible_dates == true &&
            <div class="select-flexdates">
                <div class="select-flexdates-inside">
                    <button className={is_flex_shown == true ? "btn btn-default btn-flex1 notselected":"btn btn-default btn-flex1 selected"} onClick={this.set_is_flex_shown1.bind(this,false)}>Calendar</button>
                    <button className={is_flex_shown == true ? "btn btn-default btn-flex1 selected":"btn btn-default btn-flex1 notselected"} onClick={this.set_is_flex_shown1.bind(this,true)}>{text_flex}</button>
                </div>
            </div>
        }
        {is_flex_shown == true ?
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
            <div class="col-md-12 select-flexdates-outer">
            <div style={{'color':'#717171','fontSize':'18px'}} className="col-md-12 form-group text-center">
                How long would you like to stay?
            </div>
            <div className="col-md-12 form-group text-center">
                <button onClick={set_trip_duration_flex.bind(this,"weekend")} className={trip_duration_flex == "weekend"? "btn btn-default btn-flex2 selected": "btn btn-default btn-flex2"} style={{'marginRight':'10px',"marginBottom":"15px"}}>Weekend</button>
                <button onClick={set_trip_duration_flex.bind(this,"week")} className={trip_duration_flex == "week"? "btn btn-default btn-flex2 selected": "btn btn-default btn-flex2"} style={{'marginRight':'10px',"marginBottom":"15px"}}>Week</button>
                <button onClick={set_trip_duration_flex.bind(this,"month")} className={trip_duration_flex == "month"? "btn btn-default btn-flex2 selected": "btn btn-default btn-flex2"} style={{"marginBottom":"15px"}}>Month</button>
            </div>
            <div style={{'color':'#717171','fontSize':'18px'}} className="col-md-12 form-group text-center">
                When do you want to go?
            </div>
            {(all_months != null && all_months.length > 0) &&
            <div className="col-md-12 text-center btn-flexd">
                {all_months.map(function (aitem, aindex) {
                    let is_active = false;
                    if(aindex ==0 && sel_mon1 == true){is_active = true;}
                    if(aindex ==1 && sel_mon2 == true){is_active = true;}
                    if(aindex ==2 && sel_mon3 == true){is_active = true;}
                    if(aindex ==3 && sel_mon4 == true){is_active = true;}
                    if(aindex ==4 && sel_mon5 == true){is_active = true;}
                    if(aindex ==5 && sel_mon6 == true){is_active = true;}
                    return(
                        <button key={aindex} onClick={set_selected_months.bind(this,aitem,aindex)} style={{"height":"90px","padding":"15px 0","fontSize":"14px","marginBottom":"15px","position":"relative"}} className={(aindex ==0 && sel_mon1 == true || aindex ==1 && sel_mon2 == true || aindex ==2 && sel_mon3 == true || aindex ==3 && sel_mon4 == true || aindex ==4 && sel_mon5 == true || aindex ==5 && sel_mon6 == true)? "btn btn-default btn-flex2 btn-flex2-1 selected":"btn btn-default btn-flex2 btn-flex2-1"}>
                            <span style={{"display":"block","fontSize":"24px"}}>
                            <i class="fal fa-calendar-alt"></i>
                            </span>
                            <span>{aitem}</span>
                        </button>
                    );
                }, this)}
            </div>
            }
            {show_search_btn == true &&
            <div className="col-md-12 form-group text-center flex-searchbtn">
                <div className="col-md-4 col-md-offset-4">
                    <button onClick={this.props.search_results.bind(this)} type="button" className="btn btn-search">Search</button>
                </div>
            </div>
            }
            </div>
        </OutsideClickHandler>:
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div
            className={this.state.monthdataloading == true ? "DayPicker__week-headers isloading":"DayPicker__week-headers"}
            aria-hidden="true"
            role="presentation"
          >
            {weekHeaders}
          </div>

          <div
            className={"DayPicker__focus-region"}
            ref={(ref) => { this.container = ref; }}
            role="region"
            tabIndex={-1}
          >
            {!verticalScrollable && this.renderNavigation()}

            <div
              className={transitionContainerClasses}
              ref={(ref) => { this.transitionContainer = ref; }}
              data-test2="2"
            >
              <CalendarMonthGrid
                ref={(ref) => { this.calendarMonthGrid = ref; }}
                transformValue={transformValue}
                enableOutsideDays={enableOutsideDays}
                firstVisibleMonthIndex={firstVisibleMonthIndex}
                initialMonth={currentMonth}
                isAnimating={isCalendarMonthGridAnimating}
                modifiers={modifiers}
                orientation={orientation}
                numberOfMonths={numberOfMonths * scrollableMonthMultiple}
                onDayClick={onDayClick}
                onDayMouseEnter={onDayMouseEnter}
                onDayMouseLeave={onDayMouseLeave}
                renderDay={renderDay}
                onMonthTransitionEnd={this.updateStateAfterMonthTransition}
                monthFormat={monthFormat}
                daySize={daySize}
				monthdataloading={this.state.monthdataloading}
				loadmore_btn={loadmore_btn}
				loadmore_months={loadmore_months}
				show_inline_headers={show_inline_headers}
              />
              {verticalScrollable && this.renderNavigation()}
            </div>

            {renderCalendarInfo && renderCalendarInfo()}
          </div>
        </OutsideClickHandler>
        }
      </div>
    );
  }
}

DayPicker.propTypes = propTypes;
DayPicker.defaultProps = defaultProps;
