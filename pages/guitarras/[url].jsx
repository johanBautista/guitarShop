import {useState} from 'react'
import {formatearFecha} from '../../helpers'
import Image from 'next/image'
import Layout from '../../containers/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito, carrito}) => {
  // eslint-disable-next-line camelcase
  const {nombre, descripcion, precio, published_at, imagen, id} = guitarra[0]
  const testImg = imagen[0].url;

  const [cantidad, setCantidad] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1) {
      alert('cantidad no válida')
      return
    }
    const guitarraSeleccionada = {
      id,
      imagen:testImg,
      nombre,
      precio,
      cantidad,
    }

    agregarCarrito(guitarraSeleccionada)
  }

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

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label>Cantidad</label>
            <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
              <option>--Selecciona--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </select>
            <input type='submit' value='agregar al carrito' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
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
