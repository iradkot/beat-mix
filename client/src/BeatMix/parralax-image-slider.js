import React from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";


class BIS extends React.Component {
  constructor(props) {
    super(props);
    // var this.props.image_arr = this.props.this.props.image_arr;
    this.tick = this.tick.bind(this);
    this.state = {
      count: 0,
      background: this.props.image_arr[0]
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    // let height = this.state.height+1000;
    // this.setState({height: height})
    let newCount =
      this.state.count === this.props.image_arr.length - 1
        ? 0
        : this.state.count + 1;
    this.setState({
      count: newCount,
      background: this.props.image_arr[newCount]
    });
  }
  render() {
    let style = {
      background: `url(${this.state.background}) no-repeat center center fixed`,
      // backgroundSize: "cover",
      height: this.props.height
      // height: this.state.height
    };
    return (
      <div>
          <div className="parraSlider" style={style} />
      </div>
    );
  }
}

export default BIS;
