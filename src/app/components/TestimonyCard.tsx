"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "His Design is amazing! Highly recommended.",
    image: "/person/person1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Application that he created is so great! Amazing Application",
    image: "/person/person2.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Merry Lusiana",
    comment: "Very satisfied with my purchase. Worth every penny!",
    image: "/person/person3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Luna",
    comment: "The Display of the application is astonishing, excellent!",
    image: "/person/person4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Luciana Smith",
    comment: "One word that describe everything, Wonderful!",
    image: "/person/person5.jpg",
    rating: 5,
  },
];

export default function Testimony() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-neutral-300 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full border-2 border-gray-200 mb-4"
                width={16}
                height={16}
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {testimonial.comment}
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
