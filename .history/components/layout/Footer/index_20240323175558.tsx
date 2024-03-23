import { Container, Grid } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container className='bg-white flex flex-col justify-between py-4 lg:py-[64px]'>
      <div className='h-[2px] bg-[#0081FE]'></div>

      <Grid container spacing={2} className='flex items-center'>
        <Grid item xs={6} className='pl-[64px]'>
          <Image
            src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F75%2F232%2Fpng-transparent-lancaster-university-food-french-fries-salsa-local-food-food-logo-grass.png&tbnid=r26aEQduAzIwIM&vet=12ahUKEwjM_bqOnIqFAxUgc_UHHWnqA28QMygLegQIARBf..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-kyxpw&docid=93CRbsY6q5YKsM&w=920&h=620&itg=1&q=uni%20eat%20logo%20transparent&ved=2ahUKEwjM_bqOnIqFAxUgc_UHHWnqA28QMygLegQIARBf'
            width={150}
            height={150}
            alt='logo'
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
