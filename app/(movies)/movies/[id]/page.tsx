import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import {Suspense} from "react";

interface IParams {
  params: Promise<{ id: string }>
}

export async function generateMetadata({params}: IParams) {
  const id = (await params).id;
  const movie = await getMovie(id); // 처음으로 데이터 fetching함 -> MovieInfo에서는 api 요청하지 않고 캐싱됌

  return {
    title: movie.title
  }
}

export default async function MovieDetail({params}: IParams) {
  const id = (await params).id;

  return (
    <div>
      <Suspense fallback={ <h1>loading movie info</h1> }>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={ <h1>loading movie videos</h1> }>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}