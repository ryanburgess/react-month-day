'use strict';

var React = require('react');

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var month = monthNames[d.getMonth()] + ', ' + d.getDate();

var DateName = React.createClass({
  displayName: 'DateName',

  render: function render() {
    return React.createElement(
      'p',
      { className: 'month-day' },
      month
    );
  }
});

module.exports = DateName;