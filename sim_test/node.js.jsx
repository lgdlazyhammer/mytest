
import React from 'react';

var Node = React.createClass({
  propTypes: {
      id:React.PropTypes.string,
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },
    getInitialState: function() {
    return {checked: true};
  },
    setCheckboxState: function(){
    this.setState({checked: !this.state.checked});
  },

  render: function() {
    return (
        <form className="form-inline">
            <div className="form-group">
                <icon id={this.props.id} className="caret"></icon>
            </div>
            <div className="form-group">
                <div className="control-label col-md-4 col-xs-4 col-sm-4">{this.props.title}</div>
                <div className="control-label col-md-8 col-xs-8 col-sm-8">{this.props.type}</div>
            </div>
            <div className="form-group"><input id={this.props.id} type="checkbox" checked={this.state.checked}/></div>
        </form>
    );
  }
});

module.exports = Node;

