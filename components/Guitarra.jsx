import Image from 'next/image'
import Link from 'next/link'
import {formatearFecha} from '../helpers'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
  // eslint-disable-next-line camelcase
  const {nombre, descripcion, precio, url, published_at, imagen} = guitarra

  return (
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
        <Link href={`/guitarras/${url}`}>
          <span className={styles.enlace}>Ver Producto</span>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
