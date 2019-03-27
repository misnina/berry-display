import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  id: number,
  size: number
}

class Size extends Component<IProps, {}> {
  render() {
    return (
      <div>
        <img src={`/size/${this.props.id}.png`} style={{ height: `${this.props.size / 3}px` }} />
      </div>
    )
  }
}


export default Size;