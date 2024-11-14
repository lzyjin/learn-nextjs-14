import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {
        movies.map(movie => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} poster_path={movie.poster_path} />
        ))
      }
    </div>
  );
}
