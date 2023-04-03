import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import About from '../components/About'
import AboutMe from '@/components/AboutMe'
import Technologies from '../components/Technologies'
import {
  FixedContainer,
  Main
} from '../styles/components/Header/styles'
import {ProjectContainer } from '../styles/components/Projects/styles'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <FixedContainer data-aos='fade-up' data-aos-duration='2000'>
          <Header  />
        </FixedContainer>
        <div data-aos='fade-right' data-aos-duration='2000'>
          <About />
        </div>
        <div data-aos='fade-left' data-aos-duration='2000'>
          <AboutMe  />
        </div>
        <div data-aos='fade-right' data-aos-duration='2000'>
          <Technologies />
        </div>
        <ProjectContainer data-aos='fade-left' data-aos-duration='2000'>
          <Projects />
        </ProjectContainer>
        <div data-aos='fade-right' data-aos-duration='2000'>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </Main>
    </>
  )
}
