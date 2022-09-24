import Image from 'next/image'
import Layout from '../../containers/Layout'
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  // eslint-disable-next-line camelcase
  const {titulo, contenido, imagen, published_at} = entrada
  return (
    <Layout page={titulo}>
      <main>
        <h1 className='heading'>{titulo}</h1>
        <article className={styles.entrada}>
          <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen de entrada${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada => ({
    // params: {id: entrada.id.toString()}, esto era cuando se usaba /id. hay q agregar un campo en strapi uid-url=titulo
    // de esta forma la ruta no es blogs/2 sino blogs/titulo lo que mejora el seo. func. filtros de strapi
    params: {url: entrada.url},
  }))
  return {
    paths,
    fallback: false,
  }
}
// true limitar entradas, se usa cuando hay muchas
// false llama todas las entradas-paths
export async function getStaticProps({params: {url}}) {
  // export async function getStaticProps({params: {id}}) {
  const urlRoute = `${process.env.API_URL}/blogs?url=${url}`
  // const urlRoute = `${process.env.API_URL}/blogs?url=${id}`
  const respuesta = await fetch(urlRoute)
  const entrada = await respuesta.json()
  console.log(entrada)
  return {
    props: {
      entrada: entrada[0],
      // entrada,
    },
  }
}

// export async function getServerSideProps({query: {id}}) {
//   const url = `http://localhost:1337/blogs/${id}` sin usar el .env.local
// const url = `${process.env.API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const entradablog = await respuesta.json()
//   console.log(entradablog)
//   return {
//     props: {
//       entradablog,
//     },
//   }
// }

export default EntradaBlog
