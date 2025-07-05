import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Ikonkalar uchun
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const { t, i18n } = useTranslation();
  const i18nextLng = localStorage.getItem("i18nextLng");

  const handleChange = (e) => {
    const selected = e.target.value;
    i18n.changeLanguage(selected);
  };

  return (
    <div
      className={`w-full scroll-smooth h-[80px] fixed top-0 left-0 right-0 z-50 transition-all mx-auto ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="w-9/10 mx-auto h-full scroll-smooth flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="icon" className="h-15 w-15" />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 uppercase font-bold text-sm scroll-smooth">
          <li>
            <a href="#about" className="hover:text-red-500 scroll-smooth duration-300">
              {t("header.about")}
            </a>
          </li>
          <li>
            <a href="#countries" className="hover:text-red-500 duration-300">
              {t("header.country")}
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-red-500 duration-300">
              {t("header.work")}
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-red-500 duration-300">
              {t("header.service")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 duration-300">
              {t("header.contact")}
            </a>
          </li>
          <li>
            <select
              className="bg-black text-white px-3 py-1 rounded-md"
              onChange={handleChange}
              value={i18nextLng}
            >
              <option name="uz" value="uz">
                UZ
              </option>
              <option name="en" value="en">
                EN
              </option>
              <option name="ru" value="ru">
                RU
              </option>
            </select>
          </li>
        </ul>

        {/* Hamburger Menu (Mobil versiya) */}
        <p className="md:hidden ml-auto pr-5">+998 95 090 70 50</p>
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobil menyu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <ul className="mt-12 space-y-4 text-lg">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#countries" onClick={() => setIsOpen(false)}>
                {t("header.country")}
              </a>
            </li>
            <li>
              <a href="#works" onClick={() => setIsOpen(false)}>
                {t("header.work")}
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                {t("header.service")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                {t("header.contact")}
              </a>
            </li>
            <li>
              <select
                className="w-full p-2 border rounded-md bg-gray-200"
                onChange={handleChange}
                value={i18nextLng}
              >
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
