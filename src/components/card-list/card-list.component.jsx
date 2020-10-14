import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
  <div className='card-list'>
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);


// export const CardList = (props) => {
//   return (
//     <div className='card-list'>
//       {props.monsters.map((monster) => (
//         <h1 key={monster.id}> {monster.name} </h1>
//       ))}
//     </div>
//   );
// };