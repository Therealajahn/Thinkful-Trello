import React from 'react';
import List from './components/List.js';
import './style.css';



class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }
  // all I need to do is find out what list is clicked and what card is clicked to delete it

  makeLists = () => {
    return (
      this.state.lists.map(list => (

        <List
        key = {list.id}
        listId = {list.id}
// I make a new attribute to pass down to Card.js otherwise it throws an error        
        header = {list.header}
        cards={list.cardIds.map(id => this.state.allCards[id])}
        deleteCard = {this.deleteCard}
// I pass down the method to delete cards        
        />))
    )
  }


  deleteCard = (deleteFrom, cardToDelete) => {
    //set list ID as "deleteFrom" and card ID as "cardToDelete"
    this.setState({
    lists: this.state.lists.map((list) =>{
    // I need to render all the lists uneffected except the clicked one  
      if(list.id === deleteFrom){   
        const newList = {
            id: list.id,
            header: list.header,
            cardIds: list.cardIds.filter(card => card !== cardToDelete),
    // if the current list is the one clicked, it's replaced with one that is 
    // identical except its cardIds array is filtered for the card that has been
    // clicked, deleting it        
        }
        return newList;
      }
      return list;
    })
     
  })
}
  
  render(){
   return (
    <main className="App">
      <header className="App-header">
        <h1>Trello</h1>
      </header>
      <div className="App-list">
        {this.makeLists()}
       </div>
    </main>
  );
   }
}

export default App;
