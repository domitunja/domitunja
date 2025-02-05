export function Detalles() {
    const horarios = "8:00 AM - 12:00 AM (Todos los días)";

    return (
        <div className="w-full  mx-auto h-auto flex flex-col items-center justify-center gap-6 bg-black shadow-md p-6 text-white">
            <div className="w-full text-center mt-4">
                <h2 className="text-2xl font-bold">Horarios</h2>
                <p className="mt-2 text-lg bg-gray-950 py-2 px-4 rounded-lg shadow-md">
                    {horarios}
                </p>
            </div>
        </div>
    );
}
