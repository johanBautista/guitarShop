import Image from 'next/image'
import Link from 'next/link'
import {formatearFecha} from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
  // eslint-disable-next-line camelcase
  const {titulo, resumen, imagen, published_at, id, url} = entrada
  return (
    <article>
      <Image priority='true' src={imagen.url} alt={`imagen de ${titulo}`} layout='responsive' width={800} height={600} />

      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <span className={styles.enlace}>Leer entrada</span>
        </Link>
        {/* <p>{contenido}</p> */}
      </div>
    </article>
  )
}

export default Entrada
