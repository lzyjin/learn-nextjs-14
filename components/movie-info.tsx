import {API_URL} from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
  const movie = await getMovie(id); // metadata에서 이미 같은 아이디와 url로 api통신을 했으므로 캐시됌. 즉 다시 요청하지 않음.

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={movie.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepafe} target="_blank">Homepage &rarr;</a>
      </div>
    </div>
  );
}