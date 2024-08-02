// import React from 'react';
// import Link from 'next/link';
// import styles from './styles.module.css'


// type Starship = {
//   manufacturer: string;
//   name: string;
//   consumables: string;
//   model: string;
//   created: number[];
//   edited: number[];
// };

// type StarshipProps = {
//   id: number;
//   params: any;
// };

// async function fetchStarshipsData(id: number): Promise<Starship> {
//     const res = await fetch(`https://sw-api.starnavi.io/starships/`+id);
//     const result = await res.json();
//     return{
//           manufacturer: result.manufacturer || '',
//           name: result.name || '',
//           consumables: result.consumables || '',
//           model: result.model || '',
//           created: result.created || [],
//           edited: result.edited || [],
//         };

// }

// const Starships: React.FC<StarshipProps> = async ({ params: { id } }) => {
//     const starship = await fetchStarshipsData(id);

//     return (
//       <>
//         <h3>Starship name: {starship.name}</h3>
//         <p><span className={styles.spanWrap}>Model:</span> {starship.model}</p>
//         <p><span className={styles.spanWrap}>Created:</span> {starship.created}</p>
//         <p><span className={styles.spanWrap}>Edited:</span>{starship.edited}</p>
//         <p><span className={styles.spanWrap}>Manufacturer:</span> {starship.manufacturer}</p>
//         <p><span className={styles.spanWrap}>Consumables:</span> {starship.consumables}</p>
//       <Link className={styles.linkStyle} href="/">
//         Назад на главную страницу
//       </Link>
//       </>
//     );
// };

// export default Starships;


import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Starship = {
  manufacturer: string;
  name: string;
  consumables: string;
  model: string;
  created: number[];
  edited: number[];
};

type PageProps = {
  params: {
    id: string;
  };
};

async function fetchStarshipsData(id: string): Promise<Starship> {
  const res = await fetch(`https://sw-api.starnavi.io/starships/${id}`);
  const result = await res.json();
  return {
    manufacturer: result.manufacturer || '',
    name: result.name || '',
    consumables: result.consumables || '',
    model: result.model || '',
    created: result.created || [],
    edited: result.edited || [],
  };
}

const Starships = async ({ params }: PageProps) => {
  const { id } = params;
  const starship = await fetchStarshipsData(id);

  return (
    <>
      <h3>Starship name: {starship.name}</h3>
      <p><span className={styles.spanWrap}>Model:</span> {starship.model}</p>
      <p><span className={styles.spanWrap}>Created:</span> {starship.created}</p>
      <p><span className={styles.spanWrap}>Edited:</span>{starship.edited}</p>
      <p><span className={styles.spanWrap}>Manufacturer:</span> {starship.manufacturer}</p>
      <p><span className={styles.spanWrap}>Consumables:</span> {starship.consumables}</p>
      <Link className={styles.linkStyle} href="/">
        Назад на главную страницу
      </Link>
    </>
  );
};

export default Starships;