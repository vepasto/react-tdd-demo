import React from 'react';

export default (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        person: undefined,
      };
    }

    componentDidMount() {
      this.getPerson();
    }

    getPerson() {
      return fetch('https://randomuser.me/api/')
        .then((response) => {
          if (response.status === 200) {
            response.json()
              .then((body) => this.setState({ person: body.results[0] }));
          }
        })
        .catch(console.error);
    }

    render() {
      const { person } = this.state;

      return <WrappedComponent person={person} />;
    }
  };
};
