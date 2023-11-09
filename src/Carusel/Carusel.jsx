// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carusel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="../../src/assets/img/gato.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../src/assets/img/logo.png" alt="" />
      </SwiperSlide>
      <SwiperSlide> <img src="../../src/assets/img/descarga.png" className="img-fluid" alt="" /></SwiperSlide>
      <SwiperSlide><img src="../../src/assets/img/super.jpg" className="img-fluid" alt="" /></SwiperSlide>
      <SwiperSlide><img src="../../src/assets/img/super2.jpg" className="img-fluid" alt="" /></SwiperSlide>
      <SwiperSlide><img src="../../src/assets/img/super3.jpg" className="img-fluid" alt="" /></SwiperSlide>
      <SwiperSlide><img src="../../src/assets/img/super4.jpeg" className="img-fluid" alt="" /></SwiperSlide>
    
    </Swiper>


  );
};