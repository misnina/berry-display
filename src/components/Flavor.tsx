import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

interface IProps {
  id: number,
  name: string,
  potency: number,
  flavor: number
}

const colors = [
  '#F08030',
  '#6890F0',
  '#F85888',
  '#78C850',
  '#F8D030'
];

class Flavor extends Component<IProps, {}> {
  render() {
    let potency = this.props.potency;
    let stars: JSX.Element[] = [];
    let fullStars: number = potency / 10;
    let halfStars: number = potency % 10 ? 0 : 1;
    let emptyStars: number = 4 - fullStars;
    halfStars ? null : fullStars--;


    for (let i = 0; i < (fullStars); i++) {
      stars.push(<FontAwesomeIcon
        key={`fullstars-${this.props.id}-${i}`}
        icon={['fas', 'star']}
        style={{ color: colors[this.props.flavor] }}
      />);
    }

    halfStars ? null : stars.push(<FontAwesomeIcon
      key={`halfstars-${this.props.id}`}
      icon={['fas', 'star-half-alt']}
      style={{ color: colors[this.props.flavor] }}
    />);

    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<FontAwesomeIcon
        key={`nostars=${this.props.id}-${i}`}
        icon={['far', 'star']}
        style={{ color: colors[this.props.flavor] }}
      />);
    }

    return (
      <div
        key={`stars-${this.props.name}-${this.props.id}`}
      >
        {stars}
      </div>
    )
  }
}

export default Flavor