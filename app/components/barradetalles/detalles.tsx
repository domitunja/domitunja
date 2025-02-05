export function Detalles() {
    const metodosPagos = ["Nequi", "Daviplata", "Efectivo", "DataFono"];
    
    return (
        <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-y-6 bg-black rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-white">Metodos de pago</h2>
            <div className="w-[80%] flex flex-wrap justify-center items-center gap-6">
                {metodosPagos.map((metodo) => (
                    <div key={metodo} className="px-6 py-4 bg-red-500 text-white text-lg font-semibold rounded-2xl shadow-lg">
                        {metodo}
                    </div>
                ))}
            </div>
        </div>
    );
}
