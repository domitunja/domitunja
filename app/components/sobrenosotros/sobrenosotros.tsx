"use client";
import { motion } from "framer-motion";

export function SobreNosotros() {
    
    
    const handle = () => {
        window.location.href = "https://www.facebook.com/people/Domi-Tunja/100094429045417/?mibextid=rS40aB7S9Ucbxw6v"
    }
    return (
        <section
            id="sobre-nosotros"
            className="w-full h-auto flex items-center justify-center bg-[#171717] px-6 md:px-12 py-12"
        >
            <div className="relative max-w-[82%] w-full flex flex-col md:flex-row items-center gap-x-10 gap-y-10 md:gap-y-0">
                
                {/* Imagen decorativa */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="h-[40vh] md:h-[40vh] xl:h-auto w-full md:w-1/2 flex justify-center"
                > 
                    <img
                        src="/sobre1.png"
                        alt="Sobre nosotros"
                        className="w-[100%] md:w-full max-w-md md:max-w-none rounded-2xl shadow-lg"
                    />
                </motion.div>

                {/* Contenido de texto */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-[40%] flex flex-col items-start justify-center text-center md:text-left"
                >
                    <h2 className="mx-auto text-center sm:text-start text-4xl font-bold text-white">
                        Sobre <span className="text-[#E63946]">Nosotros</span>
                    </h2>
                    <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                        En DOMITUNJA, ofrecemos servicio a domicilio en Tunja y sus alrededores. Nos encargamos de tus mandados, compras, medicamentos y mucho más, con rapidez y confianza.
                    </p>
                    <p className="text-gray-300 mt-2 text-lg leading-relaxed">
                        📍 Cobertura: Tunja y fuera de Tunja
                        📞 Contáctanos: 3203893619
                    </p>
                    <button onClick={() => handle} className="mx-auto mt-6 px-6 py-3 text-lg font-medium text-white bg-[#E63946] rounded-lg shadow-md transition-transform hover:scale-105">
                        Conócenos más
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
