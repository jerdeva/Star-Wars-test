import Link from "next/link";

type Person = {
  id: number;
  name: string;
  films: any;
  starships: any;
  hair_color:any
};

async function fetchData(): Promise<Person[]> {
  const res = await fetch('https://sw-api.starnavi.io/people/');
  const result = await res.json();
  // console.log(result); 
    return result.results.map((item: any) => ({
      id: item.id,
      name: item.name,
      films: item.films,
      starships: item.starships,
      hair_color: item. hair_color
    }));
}

export default async function Home() {
  const person: Person[] = await fetchData();

  if (!Array.isArray(person) || person.length === 0) {
    return (
      <main>
        <h1>Star Wars</h1>
        <p>Error: No people data available</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Star Wars</h1>
      {person.map((el) => (
        <div key={el.id}>
          <Link href={`/people/` + el.id}>{el.name}</Link>
          <h2>Films:</h2>
            {el.films.map((filmId:any) => (
              <div key={filmId}>
                <Link href={`/films/${filmId}`}>
                  Film {filmId} 
                </Link>
              </div>
            ))}
          <h3> Starships: </h3>
           <ul>
            {el.starships.map((starshipsId:any) => (
              <li key={starshipsId}>
                <Link href={`/starships/${starshipsId}`}>
                  starships {starshipsId}
                </Link>
              </li>
            ))}
          </ul>

          <p> ____ </p>
        </div>
      ))}
    </main>
  );
}

