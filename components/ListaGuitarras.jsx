import Guitarra from './Guitarra'
import styles from '../styles/ListaGuitarras.module.css'

const ListaGuitarras = ({guitarras}) => {
  return (
    <div className={styles.listado}>
      {guitarras.map(guitarra => (
        <Guitarra key={guitarra.id} guitarra={guitarra} />
      ))}
    </div>
  )
}

export default ListaGuitarras
