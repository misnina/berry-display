import React, { Component } from 'react';
import axios from 'axios';

interface IProps {
  berryID: number
}

interface IState {
  info: {
    id: number,
    name: string,
    growth_time: number,
    size: number,
    firmness: {
      name: string
    },
    flavors: [
      {
        flavor: {
          name: string
        },
        potency: number
      },
      {
        flavor: {
          name: string
        },
        potency: number
      },
      {
        flavor: {
          name: string
        },
        potency: number
      },
      {
        flavor: {
          name: string
        },
        potency: number
      },
      {
        flavor: {
          name: string
        },
        potency: number
      }
    ]
  }
}


class BerryDisplay extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      info: {
        id: 0,
        name: '',
        growth_time: 0,
        size: 0,
        firmness: {
          name: ''
        },
        flavors: [
          {
            flavor: {
              name: 'spicy'
            },
            potency: 0
          },
          {
            flavor: {
              name: 'dry'
            },
            potency: 0
          },
          {
            flavor: {
              name: 'sweet'
            },
            potency: 0
          },
          {
            flavor: {
              name: 'bitter'
            },
            potency: 0
          },
          {
            flavor: {
              name: 'sour'
            },
            potency: 0
          }
        ]
      }
    }
  }

  render() {
    const { info } = this.state;
    const { id, name, growth_time, size, firmness, flavors } = info;
    return (
      <div>
        <p>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
        Favors: <ul>
          {flavors.map(type => {
            return (
              <li
                key={`flavor ${id} ${type.flavor.name}`}>
                {type.flavor.name}: {type.potency}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  fetchAPI() {
    axios.get(`https://pokeapi.co/api/v2/berry/${this.props.berryID}`)
      .then(res => {
        console.log(res.data);
        this.setState({ info: res.data });
      })
  }

  componentDidMount() {
    this.fetchAPI();
  }
}

export default BerryDisplay;