// src/components/ImageCarousel.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

interface CarouselItem {
  image: string;
  text?: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
}

export default function ImageCarousel({ items }: ImageCarouselProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 py-8">
      <Swiper
        modules={[Autoplay, EffectCreative]}
        effect="creative"
        grabCursor={true}
        loop={true}
        speed={1500}
        creativeEffect={{
          prev: {
            translate: ['-120%', 0, -500],
            opacity: 0,
          },
          next: {
            translate: ['120%', 0, 0],
            opacity: 0,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-5xl"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                <img 
                  src={item.image} 
                  alt={item.text || `Memory ${index + 1}`}
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl mx-auto"
                  style={{ maxHeight: '70vh' }}
                />
                {item.text && (
                  <div className="mt-6 text-center">
                    <p className="text-xl md:text-2xl font-poppins text-white/90 drop-shadow-lg">
                      {item.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}