import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOn } from '@mui/icons-material';
import Logo from '@/public/icons/logo.png';

const Footer = () => {
  return (
    <Container className='bg-white flex flex-col justify-between py-4 lg:py-[64px]'>
      <div className='h-[2px] bg-[#0081FE]'></div>

      <Grid container spacing={2} className='flex items-center'>
        <Grid item xs={6} className='pl-[64px]'>
          <Image src={Logo} width={150} height={150} alt='logo' />
        </Grid>

        <Grid item xs={6} className='flex flex-col gap-8'>
          <div className='flex gap-1'>
            <LocationOn fontSize='medium' color='info' />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
