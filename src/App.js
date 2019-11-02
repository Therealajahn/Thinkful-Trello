import React from 'react';
import List from './components/List.js';





function App(props) {
  
  function makeLists(){
     
      props.store.lists.map(item => {
      console.log(item.header);
      return <List header={ item.header }/>;
    })
     
  }
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trello</h1>
      </header>
      <div className='App-list'>
      
        {makeLists()}
      </div>
    </main>
  );
}

export default App;
