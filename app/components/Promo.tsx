import Image from "next/image";

export default function Promo() {
    return (
        <section id="promo"
            className="
            relative 
            text-center
            h-auto
            flex flex-col 
            lg:flex-row
            justify-between 
            items-center 
            w-full
            lg:px-28
            "
        >
            <div className="absolute inset-0 -z-10 block lg:hidden">
                <Image
                    src="/layout2_mobile.webp"
                    alt="Mobile Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 -z-10 hidden lg:block">
                <Image
                    src="/layout2.webp"
                    alt="Desktop Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            {/* Texto superior */}
            <div className="absolute top-8 right-1 transform text-gray-500 font-sans w-4/5 text-xs md:text-xl md:top-28 lg:w-3/4 leading-none lg:leading-5 2xl:text-2xl 2xl:top-44 2xl:w-3/5">
                <h3 className="font-extralight mb-0">We`ll beat any competitor`s price, Guaranteed!</h3>
                <p className="font-light mt-0">Found a cheaper cleaning quote?</p>
                <p className="font-extralight">We`ll match it or beat it!</p>
            </div>
            {/* Beneficios */}
            <div className="mt-[35vh] pb-8 px-4 w-full transform grid grid-cols-3 gap-6 text-[#5c87a3] font-light text-xs lg:grid-cols-4 md:text-lg md:mt-[calc(120vh)] 2xl:mt-[800px] 2xl:px-36 2xl:text-2xl 2xl:pb-20">
                <p className="leading-none">24/7 Availability for Emergency cleaning</p>
                <p className="leading-none">Fast quote - 1 hour - No delays, just clean results!</p>
                <p className="leading-none">Get your first clean <span className="font-semibold">FREE*</span></p>
                <p className="hidden lg:block leading-none">100% Trust guarantee - Fully insured & verified cleaners!</p>
            </div>
        </section>
    );
}