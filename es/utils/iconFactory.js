import React from 'react';
import PropTypes from 'prop-types';

export default function iconFactory(network, iconConfig) {
  var Icon = function Icon(props) {
    var className = props.className,
        iconBgStyle = props.iconBgStyle,
        logoFillColor = props.logoFillColor,
        round = props.round,
        size = props.size;


    var baseStyle = {
      width: size,
      height: size
    };

    var classes = 'w-sm-icn w-sm-icn--' + network + ' ' + className;

    return React.createElement(
      'div',
      { style: baseStyle },
      React.createElement(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: classes },
        React.createElement(
          'g',
          null,
          !round ? React.createElement('rect', {
            width: '64',
            height: '64',
            fill: iconConfig.color,
            style: iconBgStyle }) : React.createElement('circle', {
            cx: '32',
            cy: '32',
            r: '31',
            fill: iconConfig.color,
            style: iconBgStyle })
        ),
        React.createElement(
          'g',
          null,
          React.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
        )
      )
    );
  };

  Icon.propTypes = {
    className: PropTypes.string,
    iconBgStyle: PropTypes.object,
    logoFillColor: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.number
  };

  Icon.defaultProps = {
    className: '',
    iconBgStyle: {},
    logoFillColor: 'white',
    size: 64
  };

  return Icon;
}