import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import films from "../../data/films";
import Film from "./Film";
import FilmAdd from "./Film-add";
import "./style.css";

const FilmList = () => {
  const [filmsList, setFilmsList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => { 
      const storage = localStorage.getItem("films");
      setFilmsList(JSON.parse(storage) || films);
  }, []);
  
  const saveFilms = (newFilms) => {
    localStorage.setItem("films", JSON.stringify(newFilms));
  };
  

  const deleteFilm = (id) => {
    const newFilms = filmsList.filter(film=>film.id !== id)
    setFilmsList(newFilms);
    saveFilms(newFilms);
  }
  
  const searchFilm = (e) => { 
    setSearchText(e.target.value);
    const newFilms = films.filter((film) =>
      film.name.includes(e.target.value)
    );
    setFilmsList(newFilms);
  }

  const addFilm = ({name, year, image}) => { 
    const newFilms = [
      ...filmsList,
      {
        id: uuidv4(),
        name,
        year,
        image,
      },
    ];

    setFilmsList(newFilms);
    saveFilms(newFilms);
  }

 
  return (
    <div>
      <h1 className="title">Films</h1>

      <FilmAdd addFilm={addFilm} />

      <div className="search-form">
        <input type="search" value={searchText} onChange={searchFilm} />
      </div>

      <div className="flex">
        {filmsList.map((film) => (
          <Film film={film} deleteFilm={deleteFilm} key={film.id} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
