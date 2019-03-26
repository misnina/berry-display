import React, { Component } from 'react';
import axios from 'axios';
import Flavor from './Flavor';
import Size from './Size';
import Growth from './Growth';

interface IProps {
  berryID: number
}

interface IState {
  item: {
    sprites: {
      default: string
    }
  },
  info: {
    id: number,
    name: string,
    growth_time: number,
    size: number,
    firmness: {
      name: string
    },
    item: {
      url: string
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
      item: {
        sprites: {
          default: ''
        }
      },
      info: {
        id: 0,
        name: '',
        growth_time: 0,
        size: 0,
        firmness: {
          name: ''
        },
        item: {
          url: ''
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
      <div className="info-panel">
        <div>
          <img src={this.state.item.sprites.default} />
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
        <div>#{id}</div>
        <div>
          <Growth
            id={id}
            growth_time={growth_time}
          />
          {growth_time} hours per stage
        </div>
        Favors: <ul>
          {flavors.map(type => {
            return (
              <li
                key={`list-${id}-${type.flavor.name}`}
              >
                <Flavor
                  key={`flavor-${id}-${type.flavor.name}`}
                  name={type.flavor.name}
                  id={id}
                  potency={type.potency}
                />
                {type.flavor.name}: {type.potency}
              </li>
            )
          })}
        </ul>
        Size: {size} <Size
          key={`size-${id}`}
          size={size}
          id={id}
        />
      </div>
    )
  }

  fetchBerry() {
    axios.get(`https://pokeapi.co/api/v2/berry/${this.props.berryID}`)
      .then(res => {
        this.setState({ info: res.data });
        return axios.get(`${this.state.info.item.url}`)
      }).then(res => {
        this.setState({ item: res.data });
      })
  }

  componentDidMount() {
    this.fetchBerry();
  }
}

export default BerryDisplay;