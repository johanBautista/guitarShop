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
    params: {url: entrada.url},
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: {url}}) {
  const urlRoute = `${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urlRoute)
  const entrada = await respuesta.json()
  return {
    props: {
      entrada: entrada[0],
    },
  }
}

export default EntradaBlog
