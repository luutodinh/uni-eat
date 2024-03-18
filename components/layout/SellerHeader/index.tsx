import { Container } from '@mui/material';
import { Notifications, Menu } from '@mui/icons-material';

const Header = () => {
  return (
    <div className='h-25 bg-white shadow-lg'>
      <Container className='flex justify-between items-center'>
        <div className='text-[40px] font-bold text-[#F00]'>For Seller</div>

        <input
          placeholder='Tìm kiếm đơn'
          className='min-w-[341px] h-[43px] rounded-[40px] border border-gray-400 placeholder:text-black/50 placeholder:text-xl'
        />

        <div className='flex gap-8 items-center'>
          <div className='text-2xl text-black font-bold'>
            Xin chào, TRÀ SỮA TOCOTOCO{' '}
          </div>

          <Notifications fontSize='medium' color='warning' />

          <Menu fontSize='medium' color='warning' />
        </div>
      </Container>
    </div>
  );
};

export default Header;
