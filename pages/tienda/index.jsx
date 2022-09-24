import ListaGuitarras from '../../components/ListaGuitarras'
import Layout from '../../containers/Layout'

const TiendaPage = ({guitarras}) => {
  return (
    <>
      <Layout page='Tienda'>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <ListaGuitarras guitarras={guitarras} />
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps({query: {id}}) {
  const url = `${process.env.API_URL}/guitarras`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  return {
    props: {
      guitarras,
    },
  }
}

export default TiendaPage
