import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
