import { Container, Grid, Item } from '@mui/material';

const Footer = () => {
  return (
    <Container className='bg-white flex flex-col justify-between py-4 lg:py-[64px]'>
      <div className='h-[2px] bg-[#0081FE]'></div>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
