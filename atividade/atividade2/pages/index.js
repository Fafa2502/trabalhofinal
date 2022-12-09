import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Projeto SSG</title>
      </Head>
      <h1>Projeto Usuários</h1>
      <a href='\users'>Abrir usuários</a>
    </div>
  )
}