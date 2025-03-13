import Image from "next/image";

export default function ReviewsImages() {
    return (
        <div className="w-full flex flex-col justify-start px-6 lg:px-8 lg:py-4 pt-8">

            {/* Texto Principal PC */}
            {/* <h1 className="text-xl font-thin text-white text-left hidden lg:block">
                Expert cleaning services for your business
            </h1> */}

            {/* Grupo de Avatares */}
            <div className="flex items-center space-x-[-10px] mb-4 justify-start w-full">
                <Image src="/reviews/avatar1.webp" alt="User1" width={40} height={40} className="rounded-full shadow-lg" />
                <Image src="/reviews/avatar2.webp" alt="User2" width={40} height={40} className="rounded-full shadow-lg" />
                <Image src="/reviews/avatar3.webp" alt="User3" width={40} height={40} className="rounded-full shadow-lg" />
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 bg-opacity-80 text-white text-sm font-bold shadow-lg">
                    +49
                </div>
            </div>

            {/* Texto Principal */}
            <h1 className="text-sm font-thin text-white text-left lg:hidden">
                Expert cleaning services for your business
            </h1>`
        </div>
    );
}
