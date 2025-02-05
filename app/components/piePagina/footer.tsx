"use client"

export function Footer() {
    return (
        <footer className="border-t-4 border-white w-full h-auto flex items-center justify-center bg-[#121111] text-white p-8">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Redes Sociales */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-[#E63946]">Síguenos</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="https://www.facebook.com/people/Domi-Tunja/100094429045417/?mibextid=rS40aB7S9Ucbxw6v" className="hover:underline transition duration-300 flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/domitunja8/" className="hover:underline transition duration-300 flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Contacto */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-[#E63946]">Contacto</h3>
                    <ul className="space-y-3">
                        <li>Teléfono: +57 3203893619</li>
                        <li>Dirección: Calle Falsa 123</li>
                    </ul>
                </div>
                
                {/* Rutas */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-[#E63946]">Enlaces</h3>
                    <ul className="space-y-3">
                        <li><a href="#home" className="hover:underline transition duration-300">Inicio</a></li>
                        <li><a href="#sobre-nosotros" className="hover:underline transition duration-300">Sobre Nosotros</a></li>
                        <li><a href="#servicios" className="hover:underline transition duration-300">Servicios</a></li>
                    </ul>
                </div>

                {/* Métodos de Pago */}
                <div className="mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-[#E63946]">Métodos de Pago</h3>
                    <ul className="space-y-3">
                        <li><a href="#home" className="hover:underline transition duration-300">Nequi</a></li>
                        <li><a href="#sobre-nosotros" className="hover:underline transition duration-300">Daviplata</a></li>
                        <li><a href="#servicios" className="hover:underline transition duration-300">Efectivo</a></li>
                        <li><a href="#servicios" className="hover:underline transition duration-300">Bancolombia</a></li>
                        <li><a href="#servicios" className="hover:underline transition duration-300">DataFono</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}