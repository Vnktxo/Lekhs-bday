// src/components/ImageCarousel.tsx


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// ▼▼▼ REPLACE your current Swiper CSS imports with these ▼▼▼
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface CarouselItem {
  image: string;
  text: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
}

export default function ImageCarousel({ items }: ImageCarouselProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade"
        className="rounded-lg"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img src={item.image} alt={item.text} className="w-full aspect-video object-cover rounded-lg shadow-2xl" />
              <p className="mt-4 text-xl text-white/80 font-poppins">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}