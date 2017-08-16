import React, { Component } from 'react';

import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

   componentDidMount() {
    console.log ( 'Componenet did mount');
   }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { listId, term } = this.state;


    this.setState({ 
        items: this.state.items.concat([term])
    })
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          {'   '} <button> Add ToDo </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
