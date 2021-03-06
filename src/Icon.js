/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Icon = React.createClass({

  propTypes: {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['90', '180', '270']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    stack: React.PropTypes.oneOf(['1x', '2x']),
    inverse: React.PropTypes.bool
  },

  render() {
    /*jshint eqnull:true */
    var {
      name, size, rotate, flip, spin, fixedWidth, stack, inverse,
      className, ...props
    } = this.props;
    var classNames = `fa fa-${name}`;
    if (size) {
      classNames += ` fa-${size}`;
    }
    if (rotate) {
      classNames += ` fa-rotate-${rotate}`;
    }
    if (flip) {
      classNames += ` fa-flip-${flip}`;
    }
    if (fixedWidth) {
      classNames += ' fa-fw';
    }
    if (spin) {
      classNames += ' fa-spin';
    }
    
    if (stack) {
      classNames += ` fa-stack-${stack}`;
    }
    if (inverse) {
      className += ' fa-inverse';
    }
    
    if (className) {
      classNames += ` ${className}`;
    }
    return <span {...props} className={classNames} />;
  }
});

module.exports = Icon;
