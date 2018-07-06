import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      src,
      ...passTroughProps
    } = this.props;

    return (
      <picture {...passTroughProps}>
        <img src={src} alt="Profile" />
      </picture>
    );
  }
}

export default Image;
