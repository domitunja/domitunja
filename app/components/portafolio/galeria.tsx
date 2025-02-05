export function Galeria() {
    const imagenes = [
      { id: 1, alt: "Imagen 1", imagen: "/ga1.jpg" },
      { id: 2, alt: "Imagen 2" , imagen: "/ga2.jpg"},
      { id: 3, alt: "Imagen 3" , imagen : "/ga3.jpg"},
      { id: 4, alt: "Imagen 4" , imagen : "/ga9.png"},
      { id: 5, alt: "Imagen 5" , imagen : "/ga6.jpg"},
      { id: 6, alt: "Imagen 6" , imagen : "/ga5.jpg"},
    ];
  
    return (
      <section
        id="portafolio"
        className="py-32 w-full border-[#E63946] border-t-4 min-h-screen bg-black flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          Nuestra <strong className="text-[#E63946]">Galería</strong>
          <span className="block w-24 h-1 bg-[#E63946] mx-auto mt-2 rounded-full"></span>
        </h2>
        <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imagenes.map((img, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center text-white font-bold text-lg rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105
                ${index % 3 === 0 ? "col-span-2 row-span-2 aspect-[4/2]" : "aspect-square"}
                bg-gradient-to-br from-gray-800 to-gray-900
              `}
            >
              <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                <img className="w-full h-full" src={img.imagen} alt={img.alt} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }