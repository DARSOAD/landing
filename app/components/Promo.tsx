

export default function Promo() {
    return (
        <section id="promo" 
        className="
        relative 
        bg-[url('/layout2_mobile.webp')]
        lg:bg-[url('/layout2.webp')]
        bg-cover
        bg-top 
        bg-no-repeat
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
            {/* Texto superior */}
            <div className="absolute top-4 right-1 transform text-gray-500 font-sans w-4/5 text-sm lg:text-xl lg:top-28 lg:w-3/4">
                <h3 className="font-light">We’ll beat any competitor’s price, Guaranteed!</h3>
                <p className="font-semibold mt-1">Found a cheaper cleaning quote?</p>
                <p>We’ll match it or beat it!</p>
            </div>

            {/* Beneficios */}
            <div className="mt-52 w-full transform grid grid-cols-3 gap-6 text-gray-600 text-xs lg:grid-cols-4 lg:text-lg lg:mt-[500px]">
                <p>24/7 Availability for <br /> Emergency cleaning</p>
                <p>Fast quote – 1 hour – No delays, just clean results!</p>
                <p>Get your first clean <br /> <span className="font-semibold">FREE*</span></p>
                <p className="hidden lg:block">100% Trust guarantee - <br /> Fully insured & verifed cleaners!</p>
            </div>
        </section>
    );
}
