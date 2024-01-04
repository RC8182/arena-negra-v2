import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { HStack } from '@chakra-ui/react';
import FootBar from '@/components/footer/footBar';
import { Body } from '@/components/body/body';


const inter = Inter({ subsets: ['latin'] })

export default function Inicio({data}) {
  const idioma='es';

  return (
    <main
    className={`flex flex-col  ${inter.className}`}
  >
    <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />


      <NavBar idioma={idioma}/>
      <Body idioma={idioma} data={data}/>
      <Footer idioma={idioma} />
      <HStack display={{ base: 'flex', md: 'none' }}>
      <FootBar idioma={idioma}/>
      </HStack>
    </main>
  )
}

export async function getStaticProps() {
  // Cargar datos en el servidor
  const data = await loadDataDb();

  // Pasar los datos a tu página a través de las props
  return { props: { data } };
}

export async function loadDataDb() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/get')
  const data = await res.json()
 
  return data
}

