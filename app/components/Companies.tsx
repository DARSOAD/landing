import Image from "next/image";

const Companies = () => {
    return (
        <section id="companies" 
        className="
        relative 
        text-center
        h-auto
        flex flex-col
        justify-between 
        items-center 
        w-full
        bg-white
        lg:py-20
        "
    >
        <h4 className="text-gray-800 font-sans text-center w-full text-lg pt-8 px-8 lg:text-2xl">Trusted for all this companies all arround Sydney</h4>
        <div className="flex flex-row justify-between w-full pb-8 pt-4">
            <Image  src="/companies/companie1.webp" alt="Companie1"   
                    width={250} height={125} // (250px / 2) para mantener 2:1
                    className="w-[160px] sm:w-[200px] md:w-[250px] h-auto object-contain"/>
            <Image src="/companies/companie2.webp" alt="Companie2" 
                    width={250} height={125} // (250px / 2) para mantener 2:1
                    className="w-[160px] sm:w-[200px] md:w-[250px] h-auto object-contain"/>
            <Image src="/companies/companie3.webp" alt="Companie3" 
                    width={250} height={125} // (250px / 2) para mantener 2:1
                    className="w-[160px] sm:w-[200px] md:w-[250px] h-auto object-contain"/>
            <Image src="/companies/companie4.webp" alt="Companie4"
                    width={250} height={125} // (250px / 2) para mantener 2:1
                    className="w-[160px] sm:w-[200px] md:w-[250px] h-auto object-contain hidden lg:block" />
            <Image src="/companies/companie5.webp" alt="Companie5"
                    width={250} height={125} // (250px / 2) para mantener 2:1
                    className="w-[160px] sm:w-[200px] md:w-[250px] h-auto object-contain hidden lg:block" />
        </div>
    </section>
    
    );
};

export default Companies;
