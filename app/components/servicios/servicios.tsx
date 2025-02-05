export function Servicios() {
    const servicios = [
        { id: 1, titulo: "Comidas Rápidas", descripcion: "Te llevamos tus comidas favoritas hasta la puerta de tu casa." },
        { id: 2, titulo: "Compras", descripcion: "Adquirimos lo que necesites y te lo entregamos en tiempo récord." },
        { id: 3, titulo: "Contra Entregas", descripcion: "Recogemos y entregamos tus pedidos con pago contra entrega." },
        { id: 4, titulo: "Trámites", descripcion: "Nos encargamos de tus diligencias y papeleos sin que tengas que salir." },
        { id: 5, titulo: "Aseos", descripcion: "Brindamos servicios de limpieza para hogares y oficinas." },
        { id: 6, titulo: "Mensajería", descripcion: "Entregamos paquetes y documentos de forma rápida y segura." },
        { id: 7, titulo: "Detalles", descripcion: "Sorprende a tus seres queridos con regalos y detalles especiales." },
        { id: 8, titulo: "Licores", descripcion: "Llevamos tus bebidas favoritas a domicilio." },
        { id: 9, titulo: "Droguería", descripcion: "Te llevamos medicamentos y productos de farmacia cuando los necesites." },
        { id: 10, titulo: "Pagos de Recibo", descripcion: "Realizamos el pago de tus facturas y servicios por ti." },
        { id: 11, titulo: "Llevada de Paquetes", descripcion: "Transportamos tus envíos de manera rápida y confiable." },
        { id: 12, titulo: "Compras de Supermercado", descripcion: "Hacemos el mercado por ti y lo llevamos a tu hogar." },
        { id: 13, titulo: "Retiro de Medicamentos", descripcion: "Retiramos tus medicamentos en farmacias y EPS." },
        { id: 14, titulo: "Trámites de Remesas", descripcion: "Gestionamos el envío y recepción de remesas." },
        { id: 15, titulo: "Restaurante", descripcion: "Recogemos y entregamos pedidos de tu restaurante preferido." },
        { id: 16, titulo: "Heladería", descripcion: "Llevamos tus postres y helados favoritos hasta tu casa." }
    ];
      
    return (
      <section
        id="servicios"
        className="w-full min-h-auto bg-black flex flex-col items-center justify-center py-16 relative"
      >
        <div className="relative w-[80%] flex flex-col items-center justify-between gap-y-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center relative mb-12 sm:mb-16">
            Nuestros <strong className="text-[#E63946]">Servicios</strong>
            <span className="block w-24 h-1 bg-[#E63946] absolute left-1/2 -translate-x-1/2 -bottom-2 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="mx-auto group w-[200px] h-[200px] bg-[#E63946] shadow-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:rotate-2 relative"
              >
                <div className="absolute inset-0 bg-white opacity-10 rounded-xl group-hover:opacity-5 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-semibold text-white text-center z-10">{servicio.titulo}</h3>
                <p className="text-gray-200 text-sm text-center mt-3 z-10">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  