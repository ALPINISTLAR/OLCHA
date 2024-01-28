import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swip() {
  return (
    <>
      <div  className='container'>
<div id='swiper-wrapper'>
<div id='swip1'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/gAE8FE4Ev0aqgB8KiLGYebqsSbi63aqDCV1BeRxUBi63xHfgfK95ThYhFBvE.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/QoSQpYTUvniq1ml5XWW7wXn1lZkSKxI0VxuifX4SoRVPDX6ta9cWlUIXeE6w.jpg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/SItyAYnDK7Lf0tlhQhIYBxuEqHSYbia6oVocOAqdRa98ucDibE2oV0WJvyjs.jpg" alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/etALz7NufgJ8sFKv7ZZgJJPIbCk3ka6pnDQt5brev1etacWH3Vvfl6Xuxa8Q.png" alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/c1lBPgoshZuCwRyVfkWKxh3J03EzknQdOqNW9Hx1JGAmPsNqydGPCoQnWD2l.png" alt="Slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/JwFP8H3qk55szQrT7xiLJzB71g6gAChEtieJYv4aFEJ3udzLC1mAKRFFInww.png" alt="Slide 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/IIaKyWM5cK6qt7ncVEhw00Aa48wXHebi4USuJ1M5hB7BxNxeUSWxzceNFZqy.png" alt="Slide 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/deecSF7Ihz83Mu7a24g4RU2pbvWoF03yJE7t1edjolIQdUOXFepth6Ft8Ffb.png" alt="Slide 9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://olcha.uz/image/original/sliders/ru/LRi9wJ1ALJNgu2UXPK0t2tvKeNDyqQzGWggMaT03YYwYTNv4bpByTiCiEmWH.png" alt="Slide 10" />
          </SwiperSlide>
        </Swiper>
        </div>

<div id='swip2'>
<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='dfc' src="/3.png"/></SwiperSlide>
        <SwiperSlide><img className='dfc' src="/2.png"/></SwiperSlide>
        <SwiperSlide><img className='dfc' src="/1.png"/></SwiperSlide>
      </Swiper>
</div>




</div>
      </div>
    </>
  );
}
