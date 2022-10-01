import React from 'react';
import data from 'dataBase/data.json';

export default function MovieList() {
  const [heroes, setHeroes] = React.useState(() => data);

  const handleRemove = e => {
    const heroId = e.target.id;
    console.log('heroId: ', heroId);

    setHeroes(heroes.filter(({ id }) => heroId !== id.toString()));
  };
  // const handleRemove =(heroId) => {
  //   setHeroes(heroes.filter(({ id }) => heroId !== id))
  // }

  return (
    <div>
      <ul>
        {heroes.map(({ id, name }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <button type="button" id={id} onClick={handleRemove}>
                Del
              </button>
              {/* <button type="button" onClick={() => handleRemove(id)}>
                Del
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
