import bg from "../assets/backgroung.jpg";
import Slider from "./Slider";
import aboutBg from "../assets/t1-B5ncCcLk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import backgroundImage from "../assets/backgroung.jpg";
import kanada from "../assets/kanada.jpeg";
import aqsh from "../assets/aqsh.jpg";
import buyuk from "../assets/buyuk.jpg";
import avstraliya from "../assets/avstralia.jpg";
import yangi from "../assets/yangi.jpg";
import yapon from "../assets/yaponiya.jpg";
import korea from "../assets/korea2.jpg";
import brazil from "../assets/brazil.jpg";
import e1 from "../assets/e1-Ba87b5UW.png";
import e2 from "../assets/e2-HyNUznN3.png";
import e3 from "../assets/e3-C8KNAePY.jpg";
import e4 from "../assets/e4-3WmQLUuP.jpg";
import e5 from "../assets/e5-B84Fukqc.jpg";
import e6 from "../assets/new.png";
import e7 from "../assets/e7-twQFoBkd.jpg";
import e8 from "../assets/korea.jpg";
import e9 from "../assets/e9-CL_qAoS4.png";
import v1 from "../assets/video1.mp4";
import v2 from "../assets/video2.mp4";
import v3 from "../assets/video3.mp4";
import visa from "../assets/visa.png";
import globus from "../assets/globus.png";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Input, MyMap, Slider2, Button, Modal } from "./index";
import axios from "axios";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Main() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();

  const text1 = t("text.text1");
  const text2 = t("text.text2");
  const text3 = t("text.text3");
  const text4 = t("text.text4");
  const text5 = t("text.text5");
  const text6 = t("text.text6");
  const [btnValue, setBtnValue] = useState({
    btn: t("text.text1"),
  });
  const [modal, setModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setBtnValue({
      btn: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM";
    const chat_id = "1957552716";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `Ism: ${e.target.name.value}\nFamiliya: ${e.target.surname.value}\nTelefon: ${e.target.phone.value}\nIzohlar: ${e.target.message.value}`;

    const data = axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: message,
      },
    })
      .then(() => setModal(true))
      .catch((e) => {
        console.log(error);
      });

    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.phone.value = "";
    e.target.message.value = "";
  };
  return (
    <div
      className="pt-[80px] w-full md:h-screen h-[500px]  bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* home section */}
      <section className="home-section h-full ">
        <div className="flex items-center justify-center h-full">
          <div className="md:h-[150px] md:w-[900px] w-[300px] bg-black/40 backdrop-blur-sm rounded-2xl">
            <h1 className="md:text-5xl uppercase text-xl text-white font-bold text-center h-full flex items-center justify-center md:leading-18 leading-7 py-1">
              {t("home.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Popular section */}
      <section className="h-full md:w-8/10 w-9/10 mx-auto">
        <div className="mt-15">
          <h1 className="md:text-5xl text-3xl text-center md:text-start font-bold">
            {t("popular.title")}
          </h1>
          <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
        </div>
        <div className="overflow-hidden">
          <Slider t={t} />
        </div>
      </section>

      {/* Biz haqimizda */}
      <section
        className="md:h-full md:w-8/10 w-9/10 mx-auto mt-15 md:mt-0"
        id="about"
      >
        <div className="flex flex-col md:flex-row w-full justify-between gap-x-20 items-center">
          <div className="md:w-[50%] ">
            <div className=" mx-auto h-[2.5px] bg-red-600"></div>
            <div className="pt-10">
              <h1 className="md:text-5xl text-3xl font-bold text-center md:text-start">
                {t("about.title")}
              </h1>
              <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
            </div>
            <div className="py-10 flex flex-col gap-y-6 text-md font-medium">
              <p>{t("about.text1")}</p>
              <p>{t("about.text2")}</p>
              <p>{t("about.text3")}</p>
            </div>
            <div className=" mx-auto h-[2.5px] bg-red-600 mb-15 md:mb-0"></div>
          </div>
          <div className="bg-cover bg-center md:w-[50%] select-none">
            <img
              src={aboutBg}
              alt="aboutBg"
              className="rounded-3xl select-none"
            />
          </div>
        </div>
      </section>

      {/* Mamlakatlar */}
      <section className=" md:w-8/10 w-9/10 mx-auto" id="countries">
        <div
          className="mt-15 w-full text-center md:text-start"
          data-aos="fade-right"
        >
          <h1 className="md:text-5xl text-3xl font-bold">
            {t("countries.title")}
          </h1>
          <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
        </div>
        <div className="w-full h-full mx-auto pt-10">
          <div className="flex md:flex-row flex-col gap-8 mb-10">
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={backgroundImage}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.shengen")}
                </h1>
                <img
                  src={e1}
                  alt="e1"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={kanada}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.canada")}
                </h1>
                <img
                  src={e2}
                  alt="e2"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={aqsh}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.usa")}
                </h1>
                <img
                  src={e3}
                  alt="e3"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-8 mb-10">
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={buyuk}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.uk")}
                </h1>
                <img
                  src={e4}
                  alt="e4"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={avstraliya}
                alt="img123"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.australia")}
                </h1>
                <img
                  src={e5}
                  alt="e5"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={yangi}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.newZellend")}
                </h1>
                <img
                  src={e6}
                  alt="e6"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-8 mb-10">
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={yapon}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.japan")}
                </h1>
                <img
                  src={e7}
                  alt="e7"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={korea}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.korea")}
                </h1>
                <img
                  src={e8}
                  alt="e8"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="md:h-[340px] h-full md:w-[400px] sm:w-[350px] rounded-t-3xl border-b-3 border-red-600"
            >
              <img
                src={brazil}
                alt="img"
                className="h-[250px] w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center py-4">
                <h1 className="text-2xl font-bold uppercase block text-center">
                  {t("countries.latinAmerica")}
                </h1>
                <img
                  src={e9}
                  alt="e9"
                  className="h-15 w-18 rounded-2xl ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sayohatlar */}
      <section className=" md:w-8/10 w-9/10 pb-3 mx-auto" id="works">
        <div
          className="mt-20 w-full text-center md:text-start"
          data-aos="fade-right"
        >
          <h1 className="md:text-5xl text-3xl font-bold">
            {t("excursion.title1")}
          </h1>
          <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
        </div>
        <div className="flex flex-col md:flex-row items-center align-middle justify-center md:gap-20 gap-5 overflow-hidden md:mt-8">
          <video
            className=" w-[300px]  h-[500px] rounded-2xl object-cover"
            loop
            controls
          >
            <source src={v1} />
          </video>
          <video
            className=" w-[300px] h-[500px] rounded-2xl object-cover"
            loop
            controls
          >
            <source src={v2} />
          </video>
          <video
            className=" w-[300px] h-[500px] rounded-2xl object-cover"
            loop
            controls
          >
            <source src={v3} />
          </video>
        </div>
      </section>

      {/* Turizm  */}
      <section
        className="w-full h-auto mx-auto"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="md:pt-30 pt-10 w-full h-auto text-center md:text-start bg-gray-950/75">
          <h1 className="md:text-5xl text-3xl font-bold text-white text-center">
            {t("excursion.title1")}
          </h1>
          <span className="md:bg-red-600 block w-12 h-1 mt-3 mx-auto "></span>
          <p className="text-white text-center md:w-8/10 w-9/10 mx-auto text-md font-bold mt-5">
            {t("excursion.title2")}
          </p>
          <div className="flex md:flex-row mb-5 flex-col  items-center text-center align-middle justify-between md:w-7/10 md:my-20 mx-auto">
            <div className="">
              <BiTimer className="w-[150px] h-auto text-white" />
              <span className="text-white font-bold">
                {t("excursion.save_time")}
              </span>
            </div>
            <div className="">
              <FaHandsHelping className="w-[150px] h-auto text-white" />
              <span className="text-white font-bold">
                {t("excursion.reliability")}
              </span>
            </div>
            <div className="">
              <MdSecurity className="w-[150px] h-auto text-white" />
              <span className="text-white font-bold">
                {t("excursion.reliability")}
              </span>
            </div>
            <div className="">
              <FaHandHoldingWater className="w-[150px] h-auto text-white" />
              <span className="text-white font-bold">
                {t("excursion.support")}
              </span>
            </div>
          </div>
          <div className="w-full flex md:flex-row ">
            <div
              className="md:w-[900px] w-9/10 md:h-[350px] rounded-3xl mx-auto flex flex-col items-center align-middle justify-center text-center md:mb-40 mb-8"
              style={{
                backgroundImage: `url(${visa})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1
                data-aos="zoom-in"
                className="md:text-5xl text-3xl font-bold text-white text-center"
              >
                {t("excursion.we_in_numbers")}
              </h1>
              <span className="md:bg-white block w-12 h-1 mt-3 mx-auto "></span>
              <div
                data-aos="zoom-in"
                className="flex w-full md:flex-row flex-col text-white font-bold text-md justify-center md:gap-25 items-center md:mt-10 uppercase mb-5"
              >
                <div>
                  <h1 className="md:text-8xl text-4xl mb-3">7320</h1>
                  <span>{t("excursion.issued_visas")}</span>
                </div>
                <div>
                  <h1 className="md:text-8xl text-4xl mb-3">7257</h1>
                  <span>{t("excursion.successful_trips")}</span>
                </div>
                <div>
                  <h1 className="md:text-8xl text-4xl mb-3">7250</h1>
                  <span>{t("excursion.satisfied_clients")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* xizmatlar */}
      <section className=" md:w-8/10 w-9/10 mb-10 mx-auto" id="services">
        <div
          className="mt-20 w-full text-center md:text-start"
          data-aos="fade-right"
        >
          <h1 className="md:text-5xl text-3xl font-bold">
            {t("services.title")}
          </h1>
          <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
        </div>
        <form
          data-aos="zoom-in"
          className="flex md:flex-row flex-col mx-auto items-center gap-5 mt-8"
        >
          <Button
            label={t("services.visa_consultation")}
            onClick={handleClick}
            name={"btn1"}
            value={text1}
          />
          <Button
            label={t("services.tourist_visas")}
            onClick={handleClick}
            name={"btn2"}
            value={text2}
          />
          <Button
            label={t("services.business_visas")}
            onClick={handleClick}
            name={"btn3"}
            value={text3}
          />
          <Button
            label={t("services.document_preparation")}
            onClick={handleClick}
            name={"btn4"}
            value={text4}
          />
          <Button
            label={t("services.travel_packages")}
            onClick={handleClick}
            name={"btn5"}
            value={text5}
          />
          <Button
            label={t("services.insurance")}
            onClick={handleClick}
            name={"btn6"}
            value={text6}
          />
        </form>
        <p
          data-aos="zoom-in"
          className="mt-5 font-medium text-md md:w-8/10 w-9/10 mx-auto text-center"
        >
          {btnValue.btn}
        </p>
      </section>

      {/* Sayohatlar  */}
      <section
        className=" md:w-full pt-0.5 mx-auto pb-2"
        id="service"
        style={{
          backgroundImage: `url(${globus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mt-20 w-full text-center md:text-start md:w-8/10 mx-auto">
          <div data-aos="fade-right">
            <h1 className="md:text-5xl text-3xl font-bold text-white">
              {t("travels.title")}
            </h1>
            <span className="md:bg-red-600 block w-12 h-1 mt-2"></span>
          </div>
          <div className="md:w-full w-9/10 mx-auto">
            <Slider2 />
          </div>
        </div>
      </section>

      {/* aloqa */}
      <section className="w-full bg-black h-auto " id="contact">
        <div className="md:grid md:grid-cols-9 flex flex-col gap-10 md:w-8/10 w-9/10 mx-auto text-white pt-15">
          <div className="md:col-span-2">
            <h1 className="md:text-5xl text-3xl font-bold text-white">
              {t("contact.title")}
            </h1>
            <div className="bg-red-600 h-1 w-15 mt-4 mb-5"></div>
            <h1 className="text-xl font-medium text-white/80 mb-3">
              {t("contact.subtitle")}
            </h1>
            <h1 className="text-md font-medium text-white/80">
              {t("contact.phone")}
            </h1>

            <div className="">
              <h1 className="mt-8 text-xl font-bold">
                {" "}
                {t("contact.social_media")}
              </h1>
              <a href="#" className="flex items-center gap-2 mt-5">
                <BsInstagram className="text-red-600 h-6 w-6" />
                {t("contact.instagram")}
              </a>
              <a href="#" className="flex items-center gap-2 mt-5">
                <FaTelegram className="text-red-600 h-6 w-6" />
                {t("contact.telegram")}
              </a>
              <a href="#" className="flex items-center gap-2 mt-5">
                <FaCirclePlus className="text-red-600 h-6 w-6" />
                {t("contact.telegram_alt")}
              </a>
              <a href="#" className="flex items-center gap-2 mt-5">
                <FaLocationDot className="text-red-600 h-6 w-6" />
                {t("contact.location")}
              </a>
            </div>
          </div>
          <div className="md:col-span-3 ">
            <h1 className="text-4xl font-bold">{t("contact.form_title")}</h1>
            <form className="flex flex-col gap-2 mt-5" onSubmit={handleSubmit}>
              <Input
                type="text"
                name={"name"}
                placeholder={t("contact.name_placeholder")}
              />
              <Input
                type="text"
                name={"surname"}
                placeholder={t("contact.surname_placeholder")}
              />
              <Input
                type="number"
                name={"phone"}
                placeholder={t("contact.phone_placeholder")}
              />
              <textarea
                name="message"
                id="message"
                className="bg-white md:w-9/10 md:min-h-[70px] w-9/10 mt-3 text-black p-2 mb-5"
                placeholder={t("contact.message_placeholder")}
              ></textarea>
              <Button
                name={"ariza"}
                label={t("contact.submit_button")}
                type={"submit"}
              />
            </form>
          </div>
          <div className="md:col-span-4 mb-5 z-0">
            <MyMap />
          </div>
        </div>
      </section>

      {modal && (
        <Modal
          setModal={setModal}
          title={t("contact.modal_title")}
          // text={t("contact.modal_text")}
        />
      )}
    </div>
  );
}

export default Main;
