import React  from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import cx from 'classnames';

import { DayPickerNavigationPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import ChevronUp from './ChevronUp';
import ChevronDown from './ChevronDown';
import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';

import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
} from '../../constants';

const propTypes = forbidExtraProps({
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  orientation: ScrollableOrientationShape,

  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,

  // internationalization
  phrases: PropTypes.shape(getPhrasePropTypes(DayPickerNavigationPhrases)),
});

const defaultProps = {
  navPrev: null,
  navNext: null,
  orientation: HORIZONTAL_ORIENTATION,

  onPrevMonthClick() {},
  onNextMonthClick() {},

  // internationalization
  phrases: DayPickerNavigationPhrases,
  monthdataloading:false,
};

export default function DayPickerNavigation(props) {
  const {
    navPrev,
    navNext,
    onPrevMonthClick,
    onNextMonthClick,
    orientation,
    phrases,
	monthdataloading,
    loadmore_btn,
    startDate,
    endDate,
    show_flexible_dates,
    trip_duration_flex,
    set_trip_duration_flex
  } = props;
  const isVertical = orientation !== HORIZONTAL_ORIENTATION;
  const isVerticalScrollable = orientation === VERTICAL_SCROLLABLE;

  let navPrevIcon = navPrev;
  let navNextIcon = navNext;
  let isDefaultNavPrev = false;
  let isDefaultNavNext = false;
  if (!navPrevIcon) {
    isDefaultNavPrev = true;
    navPrevIcon = isVertical ? <ChevronUp /> : <LeftArrow />;
  }
  if (!navNextIcon) {
    isDefaultNavNext = true;
    navNextIcon = isVertical ? <ChevronDown /> : <RightArrow />;
  }
  //console.log('loadmore_btn'+loadmore_btn);
  const navClassNames = cx('DayPickerNavigation', {
    'DayPickerNavigation--horizontal': !isVertical,
    'DayPickerNavigation--vertical': isVertical,
    'DayPickerNavigation--vertical-scrollable': isVerticalScrollable,
  });
  const prevClassNames = cx('DayPickerNavigation__prev', {
    'DayPickerNavigation__prev--default': isDefaultNavPrev,
  });
  const nextClassNames = cx('DayPickerNavigation__next', {
    'DayPickerNavigation__next--default': isDefaultNavNext,
  });
	if(monthdataloading == true){
		return (<div></div>);
	}else{
	  return (
		<div className={navClassNames}>
		  {(loadmore_btn != true && !isVerticalScrollable) && (
			<span
			  aria-label={phrases.jumpToPrevMonth}
			  className={prevClassNames}
			  onClick={onPrevMonthClick}
			>
			  {navPrevIcon}
			</span>
		  )}
          {loadmore_btn != true &&
		  <span
			aria-label={phrases.jumpToNextMonth}
			className={nextClassNames}
			onClick={onNextMonthClick}
		  >
			{navNextIcon}
		  </span>
          }
          {(loadmore_btn == true && show_flexible_dates == true && startDate!= null && endDate != null) ?
              <div style={{"marginTop":"8px"}} className="col-md-12 text-center">
                  <button onClick={set_trip_duration_flex.bind(this,1)} className={trip_duration_flex == 1 ?  "btn btn-default btn-n5 active":"btn btn-default btn-n5"} style={{'marginRight':'10px'}}>± 1 day</button>
                  <button onClick={set_trip_duration_flex.bind(this,3)} className={trip_duration_flex == 3 ?  "btn btn-default btn-n5 active":"btn btn-default btn-n5"} style={{'marginRight':'10px'}}>± 3 days</button>
                  <button onClick={set_trip_duration_flex.bind(this,7)} className={trip_duration_flex == 7 ?  "btn btn-default btn-n5 active":"btn btn-default btn-n5"}>± 7 days</button>
              </div>:
              <span>
                  {loadmore_btn == true &&
                  <span
        			aria-label={phrases.jumpToNextMonth}
        			className={nextClassNames}
        			onClick={onNextMonthClick}
        		  >Load more dates</span>
                  }
              </span>
          }
		</div>
	  );
	}
}

DayPickerNavigation.propTypes = propTypes;
DayPickerNavigation.defaultProps = defaultProps;
