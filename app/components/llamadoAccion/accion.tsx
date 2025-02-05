import { RiWhatsappLine } from "react-icons/ri";
export const BotonWhatsapp = () => {
    return (
        <>
            <button className="h-16 w-16 fixed bottom-5 right-5 z-50">
                <a
                    href="https://api.whatsapp.com/send?phone=573203893619"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RiWhatsappLine 
                        className="text-green-500 hover:text-green-600 hover:transform hover:scale-110 w-full h-full"
                    />
                </a>
            </button>
        </>
    );
};