import React, { useState } from 'react';

const Film = ({ film, deleteFilm }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "active-film" : ""}
    >
      <img src={film.image} alt="" />
      <h3>{film.name}</h3>
      <div>Year: {film.year}</div>

      <button onClick={() => deleteFilm(film.id)}>Delete</button>
    </div>
  );
};

export default Film;
