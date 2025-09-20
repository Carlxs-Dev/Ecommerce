import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney, MdLocalShipping } from "react-icons/md";

export const FeatureGrid = () => {
    return (
    <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
        <div className="flex items-center gap-6">
            <MdLocalShipping size={40} className="text-slate-600" />
            <div className="space-y-1">
                <p className="font-semibold">Envío gratuito</p>
                <p className="text-sm">Para compras mayores a 40$</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <FaHouseChimney size={40} className="text-slate-600" />
            <div className="space-y-1">
                <p className="font-semibold">Unete a nosotros</p>
                <p className="text-sm">Sé nuestro aliado comercial</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <MdAttachMoney size={40} className="text-slate-600" />
            <div className="space-y-1">
                <p className="font-semibold">Precios especiales para mayoristas</p>
                <p className="text-sm">Contáctanos</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <FaLocationDot size={40} className="text-slate-600" />
            <div className="space-y-1">
                <p className="font-semibold">Ubícanos</p>
                <p className="text-sm">Autopista Petare-Guarenas, Km. 17</p>
            </div>
        </div>

    </div>
    );
};
