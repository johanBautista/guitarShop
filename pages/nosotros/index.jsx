import Link from 'next/link'
import Layout from '../../containers/Layout'

const NosotrosPage = () => {
  return (
    <>
      <Layout title='Nosotros'>
        <p>NosotrosPage</p>
        <Link href='/'>home</Link>
      </Layout>
    </>
  )
}

export default NosotrosPage
