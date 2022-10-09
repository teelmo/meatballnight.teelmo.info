import React from 'react';
import Confetti from 'react-confetti';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h3>The taco night was a huge success!!!</h3>
      <div className="image_container"><img src="./assets/img/nachos.gif" alt="Meme" /></div>
      <h3>The highly anticipated sequel is now here!!!</h3>
      <h1>Helena & Teemo present: Meatball night, vol. 1</h1>
      <div className="image_container"><img src="./assets/img/meatball2.gif" alt="Meme" /></div>
      <h3>When: Friday 19:30</h3>
      <h3>What: Meatballs</h3>
      <h3>Who: You</h3>
      <div className="image_container"><img src="./assets/img/meatball1.gif" alt="Meme" /></div>
    </div>
  );
}
export default App;
