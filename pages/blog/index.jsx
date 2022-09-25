
import Layout from '../../containers/Layout'
import ListadoBlog from '../../components/ListadoBlog'

// const BlogPage = (props) => {
// console.log(props.entradas)
const BlogPage = ({entradas}) => {
  return (
    <>
      <Layout page='Blog'>
        <main className='contenedor'>
          <ListadoBlog entradas={entradas} />
          {/* <h2 className='heading'>Blog</h2>
          <div className={styles.blog}>
            {entradas.map(entrada => (
              <Entrada key={entrada.id} entrada={entrada} />
            ))}
          </div> */}
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
