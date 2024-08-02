import Link from "next/link";
import styles from './styles.module.css'

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
        <p>Error: No people data available</p>
      </main>
    );
  }
 return (
    <>
      <main>
        <div className={styles.container}>
          <ul>
            {person.map((el) => (
              <li className={styles.containerManePage} key={el.id}>
                <Link className={styles.linkStyle} href={`/people/${el.id}`}>{el.name}</Link>
                <h2 className={styles.nameOfTitle}>Films:</h2>
                <ul>
                  {el.films.map((filmId: any) => (
                    <li className={styles.item} key={filmId}>
                      <Link className={styles.linkStyle} href={`/films/${filmId}`}>
                        Film {filmId}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h2 className={styles.nameOfTitle}>Starships:</h2>
                {el.starships.length > 0 ? (
                  <ul>
                    {el.starships.map((starshipId: any) => (
                      <li className={styles.item} key={starshipId}>
                        <Link className={styles.linkStyle} href={`/starships/${starshipId}`}>
                          Starship {starshipId}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h3 className={styles.opps}>no starship </h3>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
