import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import {useRouter} from 'next/router'

const Header = ({guitarra}) => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>
          <div className={styles.headerLogo}>
            <Link href='/'>
              <a>
                <Image src='/img/logo.svg' alt='logo guitarra' width={200} height={100} />
              </a>
            </Link>
          </div>

          <nav className={styles.navegacion}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito'>
              <a>
                <Image
                  src={'/img/carrito.png'}
                  layout='fixed'
                  width={30}
                  height={25}
                  alt='imagen de carrito de compra'
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precios}>${guitarra.precio}</p>
            <Link href={`guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <div className={styles.guitarra}>
          <Image layout='fixed' width={500} height={1200} src='/img/header_guitarra.png' />
        </div>
      )}
    </header>
  )
}

export default Header
