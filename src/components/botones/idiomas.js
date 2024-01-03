import { Box} from '@chakra-ui/react';
import Link from 'next/link';

export const Idiomas = ({idioma}) => {


  return (
    <Box textColor={'white'}>
        {(idioma === 'en')?
        <Link href="/" >Español?</Link>:
        <Link href="/eng" >English?</Link>}
    </Box>
  )
}
