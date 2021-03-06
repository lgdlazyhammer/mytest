"use strict";
import React from 'react';

var Node = React.createClass({
  displayName: "Node",

  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },
  getInitialState: function getInitialState() {
    return { checked: true };
  },
  setCheckboxState: function setCheckboxState() {
    this.setState({ checked: !this.state.checked });
  },

  render: function render() {
    return React.createElement(
      "form",
      { className: "form-inline" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("icon", { id: this.props.id, className: "caret" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "div",
          { className: "control-label col-md-4 col-xs-4 col-sm-4" },
          this.props.title
        ),
        React.createElement(
          "div",
          { className: "control-label col-md-8 col-xs-8 col-sm-8" },
          this.props.type
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { id: this.props.id, type: "checkbox", checked: this.state.checked })
      )
    );
  }
});

module.exports = Node;