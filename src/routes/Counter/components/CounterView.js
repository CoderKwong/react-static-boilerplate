import React from 'react'
import Counter from '../../../components/Counter'

export const CounterView = (props) => (
  <div>
    <Counter
      counter={props.counter}
      doubleAsync={props.doubleAsync}
      increment={props.increment}
    />
  </div>
)

CounterView.defaultProps = {
  counter: 0,
}

CounterView.propTypes = {
  counter: React.PropTypes.number,
  doubleAsync: React.PropTypes.func,
  increment: React.PropTypes.func,
}

export default CounterView
