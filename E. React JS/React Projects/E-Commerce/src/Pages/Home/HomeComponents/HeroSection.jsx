import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/SlideImages/slide1.webp'
import slide2 from '../../../assets/SlideImages/slide2.webp'
import slide3 from '../../../assets/SlideImages/slide3.webp'
import slide4 from '../../../assets/SlideImages/slide4.webp'

const HeroSection = () => {
    return (
        <section>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full' src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide4} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSection;