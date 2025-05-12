import Image from "next/image";

export default function Promo() {
    return (
        <section id="promo"
            className="
            relative 
            text-center
            min-h-[80vh]
            flex flex-col 
            justify-end
            w-full 
            bg-white
            overflow-visible
            "
        >
            {/* Imagen de fondo optimizada */}

            <div className="absolute -top-[75px] left-0 z-30 w-full h-[80vh] hidden lg:block">
                {/* Imagen Desktop */}
                <Image
                    src="/layout2Warehouse.webp"
                    alt="Background"
                    width={2000}
                    height={1250}
                    sizes="100vw"
                    className="w-full h-auto max-w-none z-2"
                    priority
                />
            </div>
            <div className="absolute left-0 z-30 w-full h-[80vh] lg:hidden">

                {/* Imagen Móvil */}
                <Image
                    src="/layout2Warehouse_mobile.webp"
                    alt="Mobile Background"
                    width={430}
                    height={932}
                    sizes="100vw"
                    className="w-full h-auto max-w-none z-2"
                    priority
                />
            </div>
            {/* Texto superior */}
            <div className="absolute top-8 right-1 transform text-gray-500 font-sans w-4/5 text-xs md:text-xl md:top-28 lg:w-3/4 leading-none lg:leading-5 2xl:text-2xl 2xl:top-8 2xl:w-3/5">
                <h3 className="font-extralight mb-0">We`ll beat any competitor`s price, Guaranteed!</h3>
                <p className="font-light mt-0">Found a cheaper cleaning quote?</p>
                <p className="font-extralight">We`ll match it or beat it!</p>
            </div>
            <div className=" text-gray-500 font-sans w-5/6 pt-44 pl-36 text-xs md:text-xl md:pt-64 md:pl-72 md:w-11/12 lg:w-[95%] lg:pt-52 lg:text-left lg:pl-[35%] leading-none lg:leading-5 2xl:text-2xl">
                <p>
                    Our industrial cleaning services are designed for operational efficiency and long-term facility care. We serve warehouses and factories with tailored cleaning plans that support safety, hygiene, workflow continuity
                </p>
                <br />
                <p>
                    Whether you need regular maintenance, deep cleaning, or specialized treatment of high-traffic areas, our certified technicians operate around your production schedule to avoid downtime.
                </p>
                <br />
                <p>
                    We understand the compliance standards and physical demands of industrial spaces — and we deliver consistent results that meet them every time.
                </p>
                <p className="font-semibold">
                    If it doesn`t work for your operation, it doesn`t work for us. We clean on your terms
                </p>
            </div>
            {/* Beneficios */}
            <div className="mt-[30vh] pb-8 px-4 w-full transform grid grid-cols-3 gap-6 text-[#545759] font-light text-xs md:text-lg md:mt-[calc(55vh)] md:pb-28 lg:mt-[calc(10vh)] lg:ml-[30%] lg:w-[70%] 2xl:mt-[300px] 2xl:px-36 2xl:text-2xl 2xl:pb-48 z-50">
                <p className="leading-none">Fast quote - 1 hour No delays, just clean results!</p>
                <p className="leading-none">$300 Credit. No Lock-In*</p>
                <p className="leading-none">100% Trust guarantee - Fully insured & verified cleaners!</p>
            </div>
        </section>
    );
}