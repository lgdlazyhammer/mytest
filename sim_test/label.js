import React from 'react';

class Label extends React.Component {
  render () {
    return (
      <div>
        <div>Label: {this.props.label}</div>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};

/*some document change that make it clear for the feature.*/