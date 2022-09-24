import Entrada from '../../components/Entrada'
import Layout from '../../containers/Layout'
import styles from '../../styles/Blog.module.css'

// const BlogPage = (props) => {
// console.log(props.entradas)
const BlogPage = ({entradas}) => {

  return (
    <>
      <Layout title='Nosotros'>
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.blog}>
            {entradas.map(entrada => (
              <Entrada key={entrada.id} entrada={entrada} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  const url = 'http://localhost:1337/blogs'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {entradas},
  }
}
export default BlogPage
