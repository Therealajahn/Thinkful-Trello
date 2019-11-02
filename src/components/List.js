import React from 'react';
// import Card from './Card.js';




function List(props) {
   

     
    return (
        <section className="List">
            <header className="List-header">
                <h2>{ props.header }</h2>
            </header>
            {/* <div className="List-cards">
              <Card title={props.cards.title}
               content={props.cards.content} 
               key={props.cards.id}/>
            </div>     */}
    </section>
            );
          }
          
export default List;