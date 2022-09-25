
import Layout from '../../containers/Layout'
import ListadoBlog from '../../components/ListadoBlog'

const BlogPage = ({entradas}) => {
  return (
    <>
      <Layout page='Blog'>
        <main className='contenedor'>
          <ListadoBlog entradas={entradas} />
        </main>
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {entradas},
  }
}
export default BlogPage
