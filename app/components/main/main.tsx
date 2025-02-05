import "./main.css";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

export function Main() {
  return (
    <main className="w-full h-[235vh] sm:h-[190vh] lg:h-[110vh] bg-black flex items-center justify-center relative">
      {/* Fondo */}
      <div className="w-full h-full absolute bg-black">
        <img src="fondo10.png" alt="fondo" className="w-full h-full opacity-20" />
      </div>
      
      <div className="relative z-10 w-[70%] h-[150vh] lg:h-[70%] lg:w-[77%] flex flex-col lg:flex-row items-center justify-center gap-y-[20vh] sm:gap-y-[10vh] lg:justify-between fade-in-up gap-x-5">
        {/* Información del servicio */}
        <div className="bg-opacity-75 backdrop-blur-sm h-[80%] w-full lg:w-[45%] rounded-lg p-6 flex flex-col justify-center lg:gap-y-0">
          <h2 className="text-[#E63946] text-4xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Entrega Rápida y Confiable
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-300 mb-2">
            ¡Domicilios para todo tipo de servicios!
          </h3>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6">
            Nos especializamos en entregas seguras y rápidas en toda la ciudad. Desde comida y medicinas hasta documentos importantes, ¡llegamos donde nos necesites!
          </p>
          <ul className="text-white text-base sm:text-lg mb-6 space-y-2">
            <li>✔️ Entregas en menos de 30 minutos</li>
            <li>✔️ Cobertura en toda la ciudad</li>
            <li>✔️ Precios accesibles y métodos de pago flexibles</li>
          </ul>

          {/* Redes sociales */}
          <div className="w-full flex justify-start items-center gap-x-4 mt-4">
            <a href="https://www.facebook.com/people/Domi-Tunja/100094429045417/?mibextid=rS40aB7S9Ucbxw6v"><FaFacebook className="w-10 h-10 text-blue-600 hover:text-blue-800 transition-colors duration-300" /></a>
            <a href="https://www.instagram.com/domitunja8/"><GrInstagram className="w-10 h-10 text-pink-600 hover:text-pink-800 transition-colors duration-300" /></a>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="relative z-10 h-[50%] w-full lg:h-[85%] lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 p-4">
          <div className="bg-red-500 col-span-1 row-span-1 rounded-xl transition-transform duration-300 hover:scale-105 max-lg:col-span-2 max-lg:row-span-1">
            <img
              src="l2.png"
              alt="fondo"
              className="w-full h-full rounded-xl hover:scale-105"
            />
          </div>
          <div className="bg-green-500 col-span-1 row-span-2 rounded-xl transition-transform duration-300 hover:scale-105 max-lg:col-span-1 max-lg:row-span-1">
            <img
              src="l5.png"
              alt="fondo"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="bg-blue-500 col-span-1 row-span-2 rounded-xl transition-transform duration-300 hover:scale-105 max-lg:col-span-1 max-lg:row-span-1">
            <img
              src="l4.png"
              alt="fondo"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
