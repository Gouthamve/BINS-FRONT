var React = require('react');
import styles from './arrow.scss';

var LeftArrow = React.createClass({
  render: function () {
    return <i onClick={this.props.onClick} className={`fa fa-chevron-circle-left ${this.props.className}`}></i>
  }
});

var RightArrow = React.createClass({
  render: function() {
    return <i onClick={this.props.onClick} className={`fa fa-chevron-circle-right ${this.props.className}`}></i>
  }
});

var TrendingLeft = React.createClass({
  render: function() {
    return <LeftArrow onClick={this.props.onClick} className={`fa-4x ${styles.trendleftArrow}`} />
  }
});

var TrendingRight = React.createClass({
  render: function() {
    return <RightArrow onClick={this.props.onClick} className={`fa-4x ${styles.trendrightArrow}`} />
  }
});

var TrackLeft = React.createClass({
  render: function() {
    return <LeftArrow onClick={this.props.onClick} className={`fa-3x ${styles.trackleftArrow}`} />
  }
});

var TrackRight = React.createClass({
  render: function() {
    return <RightArrow onClick={this.props.onClick} className={`fa-3x ${styles.trackrightArrow}`} />
  }
});


export {TrackLeft, TrackRight, TrendingRight, TrendingLeft};
