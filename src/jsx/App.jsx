import React, {Component} from 'react';
import style from './../styles/styles.less';

import Typist from 'react-typist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <h3>The taco night was a huge success!!!</h3>
        <div className={style.image_container}><img src="img/nachos.gif" /></div>
        <h3>The highly anticipated sequel is now here!!!</h3>
        <h1>Helena & Teemo present: Meatball night, vol. 1</h1>
        <div className={style.image_container}><img src="img/meatball2.gif" /></div>
        <h3>When: Friday 19:30</h3>
        <h3>What: Meatballs</h3>
        <h3>Who: You</h3>
        <div className={style.image_container}><img src="img/meatball1.gif" /></div>
      </div>
    );
  }
}
export default App;