import React from "react";
import { Link } from 'react-router-dom';

import "../../assets/css/sidebar.css";

const SideBar = () => {

  return (
    <nav className="sidenav">
      <ul className= "main-buttons">
      <li>
        <i class="fa fa-circle fa-2x"></i>
        Produto
        <ul class="hidden">
          <li><Link to="/">Editar Produto </Link></li>
          <li><Link to="/product/add">Adicionar Produto </Link></li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        Categoria
        <ul class="hidden">
          <li><Link to="/">Editar Produto </Link></li>
          <li><Link to="/product/add">Adicionar Produto </Link></li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        Fornecedor
        <ul class="hidden">
          <li><Link to="/">Editar Produto </Link></li>
          <li><Link to="/product/add">Adicionar Produto </Link></li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        Provider
        <ul class="hidden">
          <li><Link to="/profile">User </Link></li>
        </ul>
      </li>
      </ul>
    </nav>
  );
};

export default SideBar;