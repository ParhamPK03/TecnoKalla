import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay,  Navigation, EffectFade } from 'swiper/modules';
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
       
        
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,  Navigation, EffectFade]}
        className="mySwiper">
        
        <SwiperSlide>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl '> 
        <img src="/images/Products_slider-images/Untitled-1.pngu.png "  />
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl border-slate-200 '> 
        <img src="/images/Products_slider-images/Untitled-1.pngq.png" />
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl border-slate-200 '> 
        <img src="/images/Products_slider-images/Untitled-1.pngt.png" />
        
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-slate-200 '> 
        <img src="/images/Products_slider-images/Untitled-1.pngr.png" />
       
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl border-slate-200 '> 
        <img src="/images/Products_slider-images/Untitled-1.pngo.png" />
        
        </div> 
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
