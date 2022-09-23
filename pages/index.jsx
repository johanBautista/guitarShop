import Link from 'next/link'
import Layout from '../containers/Layout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout title='Home'>
        <p>Home</p>
        <Link href='/nosotros'>nosotros</Link>
      </Layout>
    </>
  )
}
