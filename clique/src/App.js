import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Container from './components/CardsContainer'
import friends from './Friends.json'
import FriendCard from './components/FriendCard'

class App extends React.Component {
  state = {
    selected: Array(12).fill(false)
  }

  shuffle = (array) =>{
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  handleClick = () => {
    this.setState({selected: true})
    this.shuffle(friends)
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="row">
           {
            friends.map((friend, i) => (i < 3 && 
               (<Container key={friend.name}>
                <FriendCard image={friend.image} name={friend.name} onClick={this.handleClick} data-selected={this.state.selected}/>
              </Container>)
             ))
           }
         </div>
         <div className="row">
           {
            friends.map((friend, i) => (i > 3 && i < 7 &&
               (<Container key={friend.name}>
                <FriendCard image={friend.image} name={friend.name} onClick={this.handleClick} data-selected={this.state.selected}/>
              </Container>)
             ))
           }
         </div>
         <div className="row">
           {
            friends.map((friend, i) => (i > 7 && i < 11 &&
               (<Container key={friend.name}>
                <FriendCard image={friend.image} name={friend.name} onClick={this.handleClick} data-selected={this.state.selected}/>
              </Container>)
             ))
           }
         </div>
      </div>
    );
  };
};
export default App;
// friends.map(friend => (
          
//   

// ))