import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import dubay from "/src/assets/dubay.jpg";
import turkey from "../assets/turkey.jpg";
import tayland from "../assets/tailand.jpg";
import indoneziya from "../assets/indoneziya.jpg";
import malaysiya from "../assets/malaysiya.jpg";
import sharmelsheyx from "../assets/sharm-el-sheyx.jpg";
import singapur from "../assets/singapur.jpg";

function Slider({ t }) {
  return (
    <div className="w-[1200px] flex md:flex-row gap-4 mx-auto mt-6 md:px-10 p-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Ekranda 3 ta element ko‘rinadi
        loop={true} // Cheksiz aylanib turadi
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Avtomatik slayder
        // navigation // Oldinga / Orqaga tugmalar
        // pagination={{ clickable: true }} // Pastda nuqtalar chiqadi
      >
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img src={dubay} alt="dubay" className="rounded-md w-full h-full" />
          </div>
          <span className=" text-black block text-3xl font-medium text-center">
            {t("popular.dubai")}
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={turkey}
              alt="turkey"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.turkey")}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={tayland}
              alt="tayland"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.thailand")}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={indoneziya}
              alt="indoneziya"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.indonezia")}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={malaysiya}
              alt="malaysiya"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.malaysia")}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={sharmelsheyx}
              alt="sharmelsheyx"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.sharmelsheyx")}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-[350px] bg-black/50 rounded-md">
            <img
              src={singapur}
              alt="singapur"
              className="rounded-md w-full h-full"
            />
            <span className="text-black block text-3xl font-medium text-center">
              {t("popular.singapore")}
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
