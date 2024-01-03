import { Inter } from 'next/font/google'
import Prueba from '@/components/prueba';
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
      <Body idioma={idioma}/>
      <Footer idioma={idioma} />
      <HStack display={{ base: 'flex', md: 'none' }}>
      <FootBar idioma={idioma}/>
      </HStack>
    </main>
  )
}

export async function getStaticProps() {
  // Cargar datos en el servidor
  const data = await loadData();

  // Pasar los datos a tu página a través de las props
  return { props: { data } };
}

async function loadData() {
  // Aquí es donde cargarías tus datos. Este es solo un ejemplo.
  return 'Hello, worlgkhkldfkjhldfjkkhgldjhlkdjhkgjdhgdjhgkljdñldfd!';
}

