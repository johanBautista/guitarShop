import Image from 'next/image'
import Layout from '../../containers/Layout'
import styles from '../../styles/Nosotros.module.css'
const NosotrosPage = () => {
  return (
    <>
      <Layout title='Nosotros'>
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image width={600} height={450} src='/img/nosotros.jpg' fill='responsive' />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione natus, in laborum sed doloremque suscipit accusamus odio deserunt quia ad necessitatibus, sequi perspiciatis
                explicabo alias id nesciunt debitis et!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione natus, in laborum sed doloremque suscipit accusamus odio deserunt quia ad necessitatibus, sequi perspiciatis
                explicabo alias id nesciunt debitis et!
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default NosotrosPage
