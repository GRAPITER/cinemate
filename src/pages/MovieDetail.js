import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"
import backup from '../assets/film.jpg'

export const MovieDetail = () => {

  const [movie, setMovie] = useState({});
  const params = useParams();
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backup;


  useEffect(() => {
    async function movieFetch() {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=30c22bb6ac8571a009da67a7e46106f9`)
      const json = await response.json()
      setMovie(json);
      console.log(json)

    }
    movieFetch();
  }, []);

  const pageTitle = useTitle(`${movie.title}`)
 
  return (
    <main>
      <section className="flex flex-wrap justify-around py-5">
        <div className="max-w-md  ">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl p-5 text-gray-700 text-lg dark:text-white">

          <h1 className="my-4 text-3xl font-bold  ims:text-center text-left">{movie.title}</h1>
          <p className="my-3">{movie.overview}</p>

          {movie.genres ?

            <p className="flex flex-wrap py-7">
              {movie.genres.map((genre) => (<span className="mr-2">{genre.name}</span>))}
            </p>
            : ''
          }



          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-base text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-base  text-gray-900 underline hover:no-underline dark:text-white">{`${movie.vote_count} reviews`}</span>
          </div>

          <p className="my-4">
            <span className="font-bold dark:text-white">Runtime: </span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="font-bold dark:text-white">Budget: </span>
            <span>{movie.budget}</span>
          </p>

          <p className="my-4">
            <span className="font-bold dark:text-white">Revenue </span>
            <span>{movie.revenue}</span>
          </p>

          <p className="my-4">
            <span className="font-bold dark:text-white">Release Date: </span>
            <span>{movie.release_date}</span>
          </p>


          <p className="my-4">
            <span className="font-bold dark:text-white">IMDB Code: </span>

            <a className="text-gray-700 dark:text-white" href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a>

          </p>

          





        </div>
      </section>
    </main>
  )
}
