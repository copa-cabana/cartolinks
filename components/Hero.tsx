"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeroProps = {
  id: string;
  type?: "dots" | "arrows";
  images: string[];
};

export default function Hero({ id, type = "dots", images} : HeroProps) {
  return (
   <section className="px-6 pt-4 pb-8 image_one">
        <div className="container relative w-full max-w-4xl mx-auto ">
            {/* Swiper */}
            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            pagination={{ 
                 el: `.custom-swiper-pagination-${id}`,
                clickable: true 
            }}
             navigation={
            type === "arrows"
              ? {
                  prevEl: `.custom-swiper-button-prev-${id}`,
                  nextEl: `.custom-swiper-button-next-${id}`,
                }
              : false
          }
            className="swiper_container"
            >

                {images.map((src, index) => (
                <SwiperSlide key={index}>
                <img
                    src={src}
                    alt={`Slide ${index}`}
                    className="rounded-xl object-cover w-full image_corners"
                />
                </SwiperSlide>
            ))}
            </Swiper>

            

            {/* Pagination outside Swiper, aligned right */}
             {type === "dots" && (
            <div className="mt-2 flex justify-end pagination">
                 <div className={`custom-swiper-pagination-${id} flex gap-2 !justify-end`}></div>
            </div>
            )}

            {type === "arrows" && (
          <div className="mt-2 flex justify-end gap-4">
            <button
               className={`custom-swiper-button-prev-${id} z-10 text-3xl text-white bg-black/40 border-none rounded-full p-2 hover:bg-black/70 cursor-pointer`}
            >
              <ChevronLeft className="w-6 h-6"/>
            </button>
            <button
              className={`custom-swiper-button-next-${id} z-10 text-3xl text-white bg-black/40 border-none rounded-full p-2 hover:bg-black/70 cursor-pointer`}
            >
              <ChevronRight className="w-6 h-6"/>
            </button>
          </div>
        )}
        </div>
</section>




  );
}
