import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { LocationOn } from '@mui/icons-material';
import Logo from '@/public/icons/logo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container className='bg-white flex flex-col justify-between py-4 gap-[64px] lg:pt-[64px] lg:pb-4'>
      <div className='h-[2px] bg-[#0081FE]'></div>

      <Grid container spacing={2} className='flex items-center'>
        <Grid item xs={6} className=''>
          <Image
            className='pl-[64px]'
            src={Logo}
            width={150}
            height={150}
            alt='logo'
          />
        </Grid>

        <Grid item xs={6} className='flex flex-col gap-8'>
          <div className='flex gap-1'>
            <LocationOn fontSize='medium' color='info' />

            <div className='text-sm font-normal text-_black'>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className='flex gap-1'>
                <LocationOn fontSize='medium' color='info' />

                <div className='text-sm font-normal text-_black'>
                  345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className='flex gap-1'>
                <LocationOn fontSize='medium' color='info' />

                <div className='text-sm font-normal text-_black'>
                  345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </div>
              </div>
            </Grid>
          </Grid>

          <div className='flex gap-3 items-center'>
            <div className='text-sm font-normal text-_black'>Social Media</div>

            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
            <Link href='#'>
              <LocationOn fontSize='medium' color='info' />
            </Link>
          </div>
        </Grid>
      </Grid>

      <div>
        <div className='h-px opacity-20 bg-[#7BB9FC]'></div>

        <div className='flex gap-8 mt-4'>
          <div className='text-sm text-_black uppercase'>ABOUT US</div>
          <div className='text-sm text-_black uppercase'>ABOUT US</div>
          <div className='text-sm text-_black uppercase'>ABOUT US</div>
          <div className='text-sm text-_black uppercase'>ABOUT US</div>
          <div className='text-sm text-_black uppercase'>ABOUT US</div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
