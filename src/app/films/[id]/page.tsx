import React from 'react';


type Film = {
  title: string;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: number[];
  starships: number[];
};

type FilmsProps = {
  id: string;
  params: any;
};

async function fetchFilmData(id: string): Promise<Film> {
  const res = await fetch(`https://sw-api.starnavi.io/films/`+id);
    const result = await res.json();
    console.log(result);
    return {
      title: result.title || '',
      director: result.director || '',
      release_date: result.release_date || '',
      opening_crawl: result.opening_crawl || '',
      characters: result.characters || [],
      starships: result.starships || [],
    };
}


const Films: React.FC<FilmsProps> = async ({ params: { id } }) => {
    const film = await fetchFilmData(id);

    return (
      <>
        <h1>{film.title}</h1>
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date}</p>
        <p>{film.opening_crawl}</p>
        <h2>Starships</h2>
        <ul>
          {film.starships.map((starship, index) => (
            <li key={index}>{starship}</li>
          ))}
        </ul>
        <h2>Characters</h2>
        <ul>
          {film.characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </>
    );
};

export default Films;