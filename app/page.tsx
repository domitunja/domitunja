"use client"
import { BotonWhatsapp } from "./components/llamadoAccion/accion";
import { Main } from "./components/main/main";
import Ubicacion from "./components/mapaUbicacion/mapa";
import { Galeria } from "./components/portafolio/galeria";
import { Servicios } from "./components/servicios/servicios";
import { SobreNosotros } from "./components/sobrenosotros/sobrenosotros";


export default function Home() {
  return (
    <>
      <BotonWhatsapp/>
      <Main/>
      <SobreNosotros/>
      <Servicios/>
      <Galeria/>
      <Ubicacion/>
    </>
  );
}
