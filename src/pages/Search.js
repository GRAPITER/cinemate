
import { Card } from '../components'
import { useSearchParams } from 'react-router-dom';
import { useFetch, useTitle } from '../hooks/index'


export const Search = ({ apiPath }) => {


  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`search for  ${queryTerm}`)

  return (
    <main>
      <section className='py-7'>

        <p className='text-center text-3xl text-gray-700 dark:text-white py-5 '>{movies.length === 0 ? `no result found for '${queryTerm}'` : `result found for '${queryTerm}'`}</p>

      </section>
      <section className="max-w-7xl m-auto ">
        <div className="flex justify-start flex-wrap respon:justify-evenly  ">

          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}

        </div>
      </section></main>
  )
}
