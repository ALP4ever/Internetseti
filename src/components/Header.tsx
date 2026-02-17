import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header  className="flex bg-blue-500 text-white p-4 text-center h-[10vh] items-center">
      <nav className="w-full">
        <ul className="flex flex-row justify-around w-full">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
