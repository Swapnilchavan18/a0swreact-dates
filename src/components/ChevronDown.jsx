import React  from 'react';
const stylea = {'maxHeight':'27px','maxWidth':'21px'};
export default class ChevronDown extends React.Component {
    render() {
        return (
            <svg style={stylea} version="1.1" id="Layer_1" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <path d="M967.5,288.5L514.3,740.7c-11,11-21,11-32,0L29.1,288.5c-4-5-6-11-6-16c0-13,10-23,23-23c6,0,11,2,15,7l437.2,436.2
            	l437.2-436.2c4-5,9-7,16-7c6,0,11,2,16,7C976.5,267.4,976.5,277.5,967.5,288.5z"/>
            </svg>
        );
    }
}
