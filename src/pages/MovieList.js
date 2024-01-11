import { useFetch, useTitle } from '../hooks/index'
import { Card } from '../components'


export const MovieList = ({ apiPath, title }) => {

  const { data: movies } = useFetch(apiPath)

  useTitle(`${title}`)


  return (
    <main >
      <section className="max-w-7xl m-auto ">
        <div className="flex justify-start flex-wrap  respon:justify-evenly">

          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}

        </div>
      </section>
    </main>
  )
}
