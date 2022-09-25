import Curso from '../components/Curso'
// import Entrada from '../components/Entrada'
import ListadoBlog from '../components/ListadoBlog'
import ListaGuitarras from '../components/ListaGuitarras'
import Layout from '../containers/Layout'

export default function Home({guitarras, curso, entradas}) {
  return (
    <>
      <Layout page='Home' guitarra={guitarras[3]}>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <ListaGuitarras guitarras={guitarras} />
        </main>
          <Curso curso={curso} />
          {/* <Entrada entrada={entradas} /> */}
        <section className='contenedor'>
          <ListadoBlog  entradas={entradas}/>
        </section>
      </Layout>
    </>
  )
}
export async function getServerSideProps({query: {id}}) {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog)])

  const [guitarras, curso, entradas] = await Promise.all([resGuitarras.json(), resCursos.json(), resBlogs.json()])

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  }
}
