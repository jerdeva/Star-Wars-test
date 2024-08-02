// import React from 'react';
// import Link from 'next/link';
// import styles from './styles.module.css'

// type Film = {
//   title: string;
//   director: string;
//   release_date: string;
//   opening_crawl: string;
//   characters: number[];
//   starships: number[];
// };

// type FilmsProps = {
//   id: number;
//   params: any;
// };

// async function fetchFilmData(id: number): Promise<Film> {
//     const res = await fetch(`https://sw-api.starnavi.io/films/`+id);
//     const result = await res.json();
    
//     return{
//           title: result.title || '',
//           director: result.director || '',
//           release_date: result.release_date || '',
//           opening_crawl: result.opening_crawl || '',
//           characters: result.characters || [],
//           starships: result.starships || [],
//         };

// }


// const Films: React.FC<FilmsProps> = async ({ params: { id } }) => {
//     const film = await fetchFilmData(id);

//     return (
//       <>
//         <h3>Title: {film.title}</h3>
//         <p><span className={styles.spanWrap}>Director:</span> {film.director}</p>
//         <p><span className={styles.spanWrap}>Release Date:</span> {film.release_date}</p>
//         <p>{film.opening_crawl}</p>
//         <h3>Starships</h3>
//         <ul className={styles.container}>
//           {film.starships.map((starship, index) => (
//             <li className={styles.containerChild} key={index}>{starship}</li>
//           ))}
//         </ul>
//         <h3>Characters</h3>
//         <ul className={styles.container}>
//           {film.characters.map((character, index) => (
//             <li className={styles.containerChild} key={index}>{character}</li>
//           ))}
//         </ul>
//               <Link className={styles.linkStyle} href="/">
//         Назад на главную страницу
//       </Link>
//       </>
//     );
// };

// export default Films;





import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Film = {
  title: string;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: number[];
  starships: number[];
};

type FilmsProps = {
  film: Film;
};

async function fetchFilmData(id: string): Promise<Film> {
  const res = await fetch(`https://sw-api.starnavi.io/films/${id}`);
  const result = await res.json();
  
  return {
    title: result.title || '',
    director: result.director || '',
    release_date: result.release_date || '',
    opening_crawl: result.opening_crawl || '',
    characters: result.characters || [],
    starships: result.starships || [],
  };
}

const Films: React.FC<FilmsProps> = ({ film }) => {
  return (
    <>
      <h3>Title: {film.title}</h3>
      <p><span className={styles.spanWrap}>Director:</span> {film.director}</p>
      <p><span className={styles.spanWrap}>Release Date:</span> {film.release_date}</p>
      <p>{film.opening_crawl}</p>
      <h3>Starships</h3>
      <ul className={styles.container}>
        {film.starships.map((starship, index) => (
          <li className={styles.containerChild} key={index}>{starship}</li>
        ))}
      </ul>
      <h3>Characters</h3>
      <ul className={styles.container}>
        {film.characters.map((character, index) => (
          <li className={styles.containerChild} key={index}>{character}</li>
        ))}
      </ul>
      <Link className={styles.linkStyle} href="/">
        Назад на главную страницу
      </Link>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const film = await fetchFilmData(id);

  return {
    props: {
      film,
    },
  };
};

export default Films;
