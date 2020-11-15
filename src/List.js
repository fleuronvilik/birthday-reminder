import React from 'react';

import Person from './Person'

const List = ({people, clearAll}) => {
  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      <ul>
        {people.map(person => {
          return <Person {...person} key={person.id}/>
        })}
      </ul>
      <button onClick={clearAll}>clear all</button>
    </div>
  );
};

export default List;
