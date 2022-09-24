import Image from 'next/image'
import Layout from '../../containers/Layout'
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra}) => {
  // eslint-disable-next-line camelcase
  const {nombre, descripcion, precio, published_at, imagen} = guitarra[0]

  console.log(guitarra)

  return (
    <Layout page={nombre}>
      <div className={styles.guitarra}>
        <Image
          priority='true'
          src={imagen[0].url}
          alt={`Guitarra estilo ${nombre}`}
          layout='responsive'
          width={180}
          height={450}
        />
        <div className={styles.contenido}>
          <h3 className={styles.titulo}>{nombre}</h3>
          <p className={styles.fecha}>{formatearFecha(published_at)}</p>
          <p className={styles.resumen}>{descripcion}</p>
          <p className={styles.precio}>$ {precio} </p>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
  console.log(url)
  const urlProduct = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlProduct)
  const guitarra = await respuesta.json()
  return {
    props: {
      guitarra,
    },
  }
}

export default Producto
