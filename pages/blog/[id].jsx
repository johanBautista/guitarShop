import Layout from '../../containers/Layout'

const EntradaBlog = ({entradablog}) => {
  const {titulo} = entradablog
  return (
    <Layout>
      <main>
        <h1 className='heading'>{titulo}</h1>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada => ({
    params: {id: entrada.id.toString()},
  }))
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
// true limitar entradas, se usa cuando hay muchas
// false llama todas las entradas-paths
export async function getStaticProps({params: {id}}) {
  const url = `${process.env.API_URL}/blogs/${id}`
  const respuesta = await fetch(url)
  const entradablog = await respuesta.json()
  console.log(entradablog)
  return {
    props: {
      entradablog,
    },
  }
}

// export async function getServerSideProps({query: {id}}) {
//   const url = `http://localhost:1337/blogs/${id}` sin usar el .env.local
// const url = `${process.env.API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const entradablog = await respuesta.json()
//   console.log(entradablog)
//   return {
//     props: {
//       entradablog,
//     },
//   }
// }

export default EntradaBlog
