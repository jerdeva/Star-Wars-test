type Person = {
  id: number,
  name: string,
  films: any,
  starships: any,
  hair_color: any,
  gender: any,
};

type HeroProps = {
  id: string;
  params: any;
};

async function fetchData(id: string): Promise<Person> {
  const res = await fetch(`https://sw-api.starnavi.io/people/` + id);
  const result = await res.json();
  // console.log(result);
  return {
    id: result.id,
    name: result.name,
    films: result.films,
    starships: result.starships,
    hair_color: result.hair_color,
    gender: result.gender,
  };
}
const Hero: React.FC<HeroProps> = async ({ params: {id} }) => {
  const person = await fetchData(id);

  return (
    <>
      <h1>{person.name}</h1>
      <p>ID: {id}</p>
      <p>Hair Color: {person.hair_color}</p>
      <h2>Starships</h2>
      <ul>
        {person.starships.map((starship: string, index: number) => (
          <li key={index}>{starship}</li>
        ))}
      </ul>
      <h2>Films</h2>
      <ul>
        {person.films.map((film: string, index: number) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
      <p>Gender: { person.gender}</p>
    </>
  );
};



export default Hero;
