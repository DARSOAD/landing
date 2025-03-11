import { IoMdCheckmark } from "react-icons/io";


const Features= () => {
    return (
        
        <div className="text-white mt-8 mx-2 px-4 lg:block border-l-4 lg:!mt-36 lg:border-l-2 lg:py-1 2xl:ml-8">
            <p className="mt-4 font-sans text-xs text-left font-extralight lg:font-thin lg:text-sm leading-[1.1] lg:mt-0 2xl:text-xl">
            A clean workspace is essential for productivity, professionalism, and a great impression. We offer top-quality commercial cleaning at unbeatable prices, and if you find a lower quote, we’ll match it or beat it!
            </p>
            <ul className="pt-2 space-y-1">
            {[
                "Best price guarantee – We’ll match or beat any competitor’s quote!",
                "Experienced & professional cleaning team for all business types",
                "Eco-friendly, safe & effective cleaning solutions",
                "Flexible cleaning schedules – Availability for emergency cleaning",
                "100% satisfaction guarantee",
            ].map((text, index) => (
                <li key={index} className="flex items-start space-x-2">
                <span className="bg-green-500 text-xs"> <IoMdCheckmark/> </span>
                <p className="text-xs font-sans font-extralight lg:font-thin leading-[1] lg:text-sm lg:leading-[1.5] 2xl:text-xl">{text}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}  

export default Features