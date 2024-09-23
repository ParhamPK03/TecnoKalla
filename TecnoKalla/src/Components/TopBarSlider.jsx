import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="w-[100%] m-auto flex justify-center items-center">  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/apple-watch.jpg" alt="" className="rounded-[60px] h-[300px] mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/best-phones.jpg" alt="" className="rounded-[60px] h-[300px] border-2 border-gray-400 mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/new-ipads.jpg" className="rounded-[60px] h-[300px] mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/new-headphones.jpg" alt="" className="rounded-[60px] h-[300px] mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/new-airpads.jpg" alt="" className="rounded-[60px] h-[300px] mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
