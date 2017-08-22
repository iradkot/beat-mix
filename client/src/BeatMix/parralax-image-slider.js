import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// var this.props.image_arr = [
//   "http://widefuture.com/wp-content/uploads/2016/10/Type-of-DJ1.jpg",
//   'http://11vh803uiffj14claev3ivq1.wpengine.netdna-cdn.com/wp-content/uploads/2014/02/dj-crowd.jpg',
//   'https://www.cougarmicrobes.com/wp-content/uploads/2013/06/dj-crowd.jpg'
// ]


class BIS extends React.Component {
    constructor(props) {
        super(props);
        // var this.props.image_arr = this.props.this.props.image_arr;
        this.tick = this.tick.bind(this);
        this.state = {
            count: 0,
            background: this.props.image_arr[0]
        }
    }
    componentDidMount() {
        setInterval(
            () => this.tick(),
            5000
        );
    }
    tick() {
        // let height = this.state.height+1000;
        // this.setState({height: height})
        let newCount = this.state.count === this.props.image_arr.length - 1 ? 0 : this.state.count + 1;
        this.setState({ count: newCount, background: this.props.image_arr[newCount] })
    }
    render() {
        let style = {
            background: `url(${this.state.background}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            height: this.props.height
            // height: this.state.height
        }
        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        }
        return (
            <div>
                <CSSTransitionGroup {...transitionOptions}>
                    <div style={style}>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default BIS;