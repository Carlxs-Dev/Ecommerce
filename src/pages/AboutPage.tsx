export const AboutPage = () => {
    return <div className="space-y-5">
        <h1 className="text-center font-semibold text-4xl tracking-tihgt mb-5">
            Nuestra empresa
        </h1>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6FhTaOD65Nj486Gsn_yzvw44IppfSGPvjg&s" alt="Imagen de fondo"
    className="h-[500px] w-full object-cover pl-11 "
    />

    <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
            Tienda Vistalago Express es una empresa con mas de 40 años de trayectoria.
            Somos una empresa dedicada a la venta de productos tanto de produccion propia como distribuidores de consumo final 
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb 4">No sigas esperando, ven y deleitate con la mejor comida, dulces y productos de las dos ciudades</h2>

        <p>
            Para mas informacion no dudes en ponerte en contacto con nosotros, a traves de nuestro correo electronico: 
            <a href="mailto: vistalagoexpress@gmail.com">vistalagoexpress@gmail.com</a> o via whatsapp al <a href="https://wa.me/+584127144527">wa.me/+584127144527</a>
        </p>
    </div>

    </div>
};