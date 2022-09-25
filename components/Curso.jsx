/* eslint-disable react/no-unknown-property */
import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
  const {titulo, contenido, imagen} = curso
  console.log(imagen)
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a className={styles.enlace} href='/'>Mas información</a>
        </div>
      </div>
      {/* codigo css embebido */}
      <style jsx>
        {`
          section {
            padding: 5rem 0;
            margin-top: 12rem;
            background-image: linear-gradient(to right, rgb(0 0 0 /0.8), rgb(0 0 0 /0.7)), url(${imagen[0].url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  )
}

export default Curso
