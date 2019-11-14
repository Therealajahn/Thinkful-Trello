import React from 'react';




function Card(props) {
  
  return (
    <div className="Card">
            <button type="button" onClick={() => {props.deleteCard(props.listId, props.cardId)}}>delete</button>
            {/* in onClick I pass list ID and card ID to my method */}
            <h3>{ props.title }</h3>
            <p>{ props.content }</p>
    </div>
  );
}

export default Card;