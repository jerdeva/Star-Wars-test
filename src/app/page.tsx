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
  console.log(result); 
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
          <Link href={`/people/`+ el.id}>{el.name}</Link>
          <h2>films {el.films}
            <Link href={`/films/`+ el.id } > {el.films}</Link>
          </h2>
          <h3>{el.starships}</h3>
          <h4>{el.hair_color}</h4>
          <p> ____ </p>
        </div>
      ))}
    </main>
  );
}

