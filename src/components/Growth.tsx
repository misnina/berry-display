import React, { Component } from 'react';

interface IProps {
  id: number,
  growth_time: number
}

interface IState {
  timer: any,
  stage: string,
  x: number
}


class Growth extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      stage: '/growth/AllTreeSeed.png',
      timer: setInterval(this.changeDisplay, 5000),
      x: 1
    }
  }

  render() {
    const { stage } = this.state;
    return (
      <img src={stage} />
    )
  }

  changeDisplay = () => {
    if (this.state.x >= 5) {
      this.setState({ x: 0 });
    }
    switch (this.state.x) {
      case 0: this.setState({ stage: '/growth/AllTreeSeed.png' }); break;
      case 1: this.setState({ stage: '/growth/AllTreeSprout.png' }); break;
      case 2: this.setState({ stage: `/growth/${this.props.id}Taller.png` }); break;
      case 3: this.setState({ stage: `/growth/${this.props.id}Bloom.png` }); break;
      case 4: this.setState({ stage: `/growth/${this.props.id}Berry.png` }); break;
    }
    this.setState({ x: this.state.x + 1 })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
}

export default Growth;