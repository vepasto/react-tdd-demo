import React from 'react';
import withPerson from './withPerson';
import Image from './Image/Image';

const styles = {
  name: {
    textTransform: 'capitalize',
  },
  item: {
    marginRight: '10px',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
};

export class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };

    this.like = this.like.bind(this);
  }

  like() {
    this.setState({likes: this.state.likes + 1})
  }

  render() {
    if (!this.props.person) return null;

    const {
      person: {
        name,
        email,
        picture,
      },
    } = this.props;

    return (
      <div style={styles.root}>
        <Image style={{ ...styles.item }} src={picture.thumbnail} />
        <span style={{ ...styles.item, ...styles.name }}>{name.first} {name.last}</span>
        <a href={`mailto:${email}`} style={{ ...styles.item }}>Email</a>
        <button style={{ ...styles.item }} onClick={this.like}>Like {this.state.likes}</button>
      </div>
    );
  }
}

export default withPerson(Person);
