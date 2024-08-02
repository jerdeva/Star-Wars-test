// import Link from 'next/link';
// import styles from './styles.module.css'


// type Person = {
//   id: number,
//   name: string,
//   films: any,
//   starships: any,
//   hair_color: any,
//   gender: any,
// };

// type HeroProps = {
//   id: string;
//   params: any;
// };

// async function fetchData(id: string): Promise<Person> {
//   const res = await fetch(`https://sw-api.starnavi.io/people/` + id);
//   const result = await res.json();
//   return {
//     id: result.id,
//     name: result.name,
//     films: result.films,
//     starships: result.starships,
//     hair_color: result.hair_color,
//     gender: result.gender,
//   };
// }
// const Hero: React.FC<HeroProps> = async ({ params: {id} }) => {
//   const person = await fetchData(id);

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <div >
//         <h2>Starships</h2>
//       <ul className={styles.container}>
//         {person.starships.map((starship: string, index: number) => (
//           <li className={styles.containerChild} key={index}>{starship}</li>
//         ))}
//       </ul>
//       <h2>Films</h2>
//       <ul className={styles.container}>
//         {person.films.map((film: string, index: number) => (
//           <li className={styles.containerChild} key={index}>{film}</li>
//         ))}
//         </ul>
//       </div>
//             <Link className={styles.linkStyle} href="/">
//         Назад на главную страницу
//       </Link>
//     </>
//   );
// };



// export default Hero;


import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Person = {
  id: number;
  name: string;
  films: any;
  starships: any;
  hair_color: any;
  gender: any;
};

type PageProps = {
  params: {
    id: string;
  };
};

async function fetchData(id: string): Promise<Person> {
  const res = await fetch(`https://sw-api.starnavi.io/people/${id}`);
  const result = await res.json();
  return {
    id: result.id,
    name: result.name,
    films: result.films,
    starships: result.starships,
    hair_color: result.hair_color,
    gender: result.gender,
  };
}

const Hero = async ({ params }: PageProps) => {
  const { id } = params;
  const person = await fetchData(id);

  return (
    <>
      <h1>{person.name}</h1>
      <div>
        <h2>Starships</h2>
        <ul className={styles.container}>
          {person.starships.map((starship: string, index: number) => (
            <li className={styles.containerChild} key={index}>{starship}</li>
          ))}
        </ul>
        <h2>Films</h2>
        <ul className={styles.container}>
          {person.films.map((film: string, index: number) => (
            <li className={styles.containerChild} key={index}>{film}</li>
          ))}
        </ul>
      </div>
      <Link className={styles.linkStyle} href="/">
        Назад на главную страницу
      </Link>
    </>
  );
};

export default Hero;