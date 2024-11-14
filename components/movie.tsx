"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import {useRouter} from "next/navigation";

interface IMovieProps {
  id: string;
  title: string;
  poster: string;
  poster_path: string;
}

export default function Movie({id, title, poster, poster_path}: IMovieProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };


  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={poster} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}