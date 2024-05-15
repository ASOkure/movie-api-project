import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=c61dbb72874cc6fefc40590535729142"
      );

      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
