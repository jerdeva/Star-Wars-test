import React from 'react';

type Starship = {
  manufacturer: string;
  name: string;
  consumables: string;
  model: string;
  created: number[];
  edited: number[];
};

type StarshipProps = {
  id: number;
  params: any;
};

async function fetchStarshipsData(id: number): Promise<Starship> {
    const res = await fetch(`https://sw-api.starnavi.io/starships/`+id);
    const result = await res.json();
//   console.log(result);
  // console.log(id);
    
    return{
          manufacturer: result.manufacturer || '',
          name: result.name || '',
          consumables: result.consumables || '',
          model: result.model || '',
          created: result.created || [],
          edited: result.edited || [],
        };

}


const Starships: React.FC<StarshipProps> = async ({ params: { id } }) => {
    const starship = await fetchStarshipsData(id);

    return (
      <>
        <h1>{starship.name}</h1>
         <p>ID: {id}</p>
        <p>Model: {starship.model}</p>
        <p>Created: {starship.created}</p>
        <p>Edited:{starship.edited}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Consumables: {starship.consumables}</p>
      </>
    );
};

export default Starships;