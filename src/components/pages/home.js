import { Hero } from "../landing/Hero";
import { Section } from "../landing/Section";
import { Paymentgroup } from "../landing/Paymentgroup";


import electronica from "../../img/electronica.jpg";
import hombre from "../../img/hombre.jpg";
import joyeria from "../../img/joyeria.jpg";
import mujer from "../../img/mujer.jpg";

export const Home = () => {

  return(
    <main>
	    <Hero/>
      <Paymentgroup/>
      <div className="category-container">
        <Section link="category/electronics" imagen={electronica} title="Electronica" descripcion="Compra lo ultimo en tecnologia"/>
        <Section link="category/men's clothing" imagen={hombre} title="Para Ellos" descripcion="Las mejores marcas para ellos"/>
        <Section link="category/jewelery" imagen={joyeria} title="Joyeria" descripcion="La mejor calidad, con garantia de por vida"/>
        <Section link="category/women's clothing" imagen={mujer} title="Para Ellas" descripcion="Todo lo que buscas en un solo lugar"/>
      </div>   
		</main>
  );
};