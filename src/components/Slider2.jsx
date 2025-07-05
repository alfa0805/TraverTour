import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import odam1 from "../assets/odam1.jpg";
import odam2 from "../assets/odam2.jpg";
import odam3 from "../assets/odam3.jpg";
import odam4 from "../assets/odam4.jpg";
import odam5 from "../assets/odam5.jpg";
function Slider2() {
  return (
    <div className="flex md:flex-row gap-4 mx-auto mt-6 md:px-10 p-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Ekranda 1 ta element ko‘rinadi
        loop={true} // Cheksiz aylanib turadi
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Avtomatik slayder
        // navigation // Oldinga / Orqaga tugmalar
        // pagination={{ clickable: true }} // Pastda nuqtalar chiqadi
      >
        <SwiperSlide>
          <div className=" md:h-[650px] md:w-9/10 mx-auto bg-black/50 rounded-md">
            <img src={odam2} alt="odam2" className="rounded-md w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[650px] md:w-9/10 mx-auto bg-black/50 rounded-md">
            <img src={odam1} alt="odam1" className="rounded-md w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[650px] md:w-9/10 mx-auto bg-black/50 rounded-md">
            <img src={odam3} alt="odam3" className="rounded-md w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[650px] md:w-9/10 mx-auto bg-black/50 rounded-md">
            <img src={odam4} alt="odam4" className="rounded-md w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-[650px] md:w-9/10 mx-auto bg-black/50 rounded-md">
            <img src={odam5} alt="odam5" className="rounded-md w-full h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider2;
