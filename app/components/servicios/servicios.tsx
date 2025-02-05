import { FaHamburger, FaShoppingCart, FaMoneyCheckAlt, FaClipboardList, FaBroom, FaTruck, FaGift, FaWineBottle, FaCapsules, FaReceipt, FaBox, FaShoppingBasket, FaPills, FaExchangeAlt, FaUtensils, FaIceCream } from "react-icons/fa";

export function Servicios() {
    const servicios = [
        { id: 1, titulo: "Comidas Rápidas", descripcion: "Te llevamos tus comidas favoritas hasta la puerta de tu casa.", icono: <FaHamburger /> },
        { id: 2, titulo: "Compras", descripcion: "Adquirimos lo que necesites y te lo entregamos en tiempo récord.", icono: <FaShoppingCart /> },
        { id: 3, titulo: "Contra Entregas", descripcion: "Recogemos y entregamos tus pedidos con pago contra entrega.", icono: <FaMoneyCheckAlt /> },
        { id: 4, titulo: "Trámites", descripcion: "Nos encargamos de tus diligencias y papeleos sin que tengas que salir.", icono: <FaClipboardList /> },
        { id: 5, titulo: "Aseos", descripcion: "Brindamos servicios de limpieza para hogares y oficinas.", icono: <FaBroom /> },
        { id: 6, titulo: "Mensajería", descripcion: "Entregamos paquetes y documentos de forma rápida y segura.", icono: <FaTruck /> },
        { id: 7, titulo: "Detalles", descripcion: "Sorprende a tus seres queridos con regalos y detalles especiales.", icono: <FaGift /> },
        { id: 8, titulo: "Licores", descripcion: "Llevamos tus bebidas favoritas a domicilio.", icono: <FaWineBottle /> },
        { id: 9, titulo: "Droguería", descripcion: "Te llevamos medicamentos y productos de farmacia cuando los necesites.", icono: <FaCapsules /> },
        { id: 10, titulo: "Pagos de Recibo", descripcion: "Realizamos el pago de tus facturas y servicios por ti.", icono: <FaReceipt /> },
        { id: 11, titulo: "Llevada de Paquetes", descripcion: "Transportamos tus envíos de manera rápida y confiable.", icono: <FaBox /> },
        { id: 12, titulo: "Compras de Supermercado", descripcion: "Hacemos el mercado por ti y lo llevamos a tu hogar.", icono: <FaShoppingBasket /> },
        { id: 13, titulo: "Retiro de Medicamentos", descripcion: "Retiramos tus medicamentos en farmacias y EPS.", icono: <FaPills /> },
        { id: 14, titulo: "Trámites de Remesas", descripcion: "Gestionamos el envío y recepción de remesas.", icono: <FaExchangeAlt /> },
        { id: 15, titulo: "Restaurante", descripcion: "Recogemos y entregamos pedidos de tu restaurante preferido.", icono: <FaUtensils /> },
        { id: 16, titulo: "Heladería", descripcion: "Llevamos tus postres y helados favoritos hasta tu casa.", icono: <FaIceCream /> }
    ];

    return (
        <section id="servicios" className="py-32 w-full min-h-auto bg-black flex flex-col items-center justify-center relative">
            <div className="relative w-[80%] flex flex-col items-center justify-between gap-y-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white text-center relative mb-12 sm:mb-16">
                    Nuestros <strong className="text-[#E63946]">Servicios</strong>
                    <span className="block w-24 h-1 bg-[#E63946] absolute left-1/2 -translate-x-1/2 -bottom-2 rounded-full"></span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                    {servicios.map((servicio) => (
                        <div key={servicio.id} className="mx-auto group w-[200px] h-[200px] bg-[#E63946] shadow-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:rotate-2 relative">
                            <div className="absolute inset-0 bg-white opacity-10 rounded-xl group-hover:opacity-5 transition-opacity duration-300"></div>
                            <div className="text-white text-4xl">{servicio.icono}</div> {/* Ícono agregado aquí */}
                            <h3 className="text-2xl font-semibold text-white text-center mt-2 z-10">{servicio.titulo}</h3>
                            <p className="text-gray-200 text-sm text-center mt-3 z-10">{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
