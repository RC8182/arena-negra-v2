import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { HStack } from '@chakra-ui/react';
import FootBar from '@/components/footer/footBar';
import { Body } from '@/components/body/body';
import Head from 'next/head';

export const metadata = {
  title: 'Arena Negra Restaurant - Los Abrigos, Tenerife',
  description: 'Enjoy the best paellas and grilled local fish in Los Abrigos, Tenerife. Arena Negra Restaurant offers a unique experience with stunning views and unbeatable customer service.',
  keywords: 'Restaurant, Paella, Seafood, Local Fish, Los Abrigos, Tenerife, Sea Views, Excellent Service, Restaurant in Los Abrigos, Where to eat fish in Los Abrigos, Where to eat paella in Los Abrigos'
}


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const idioma='en';

  return (
    <main
    className={`flex flex-col  ${inter.className}`}
  >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />
      </Head>


      <NavBar idioma={idioma}/>
      <Body idioma={idioma} data={data}/>
      <Footer idioma={idioma} />
      <HStack display={{ base: 'flex', md: 'none' }}>
      <FootBar idioma={idioma}/>
      </HStack>
    </main>
  )
}

// export async function getStaticProps() {
//   // Cargar datos en el servidor
//   const data = await loadDataDb();

//   // Pasar los datos a tu página a través de las props
//   return { props: { data } };
// }

// export async function loadDataDb() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:3000/api/get')
//   const data = await res.json()
 
//   return data
// }

