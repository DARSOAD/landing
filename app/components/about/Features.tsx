import { IoMdCheckmark } from "react-icons/io";


const Features= () => {
    return (
        
        <div className="text-white mt-8 px-2 hidden lg:block border-l-4">
            <p className="mt-4 font-sans text-sm text-left">
                A clean workspace is essential for productivity, professionalism, and a lasting impression. We offer high-quality commercial cleaning at unbeatable prices – and if you find a lower quote, we’ll match it or beat it!
            </p>
            <ul className="space-y-1 pt-4">
            {[
                "Best price guarantee – We’ll match or beat any competitor’s quote!",
                "Experienced & professional cleaning team for all business types",
                "Eco-friendly, safe & effective cleaning solutions",
                "Flexible cleaning schedules – Availability for emergency cleaning",
                "100% satisfaction guarantee",
            ].map((text, index) => (
                <li key={index} className="flex items-start space-x-3">
                <span className="bg-green-500 text-xs"> <IoMdCheckmark/> </span>
                <p className="text-xs font-sans font-thin">{text}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}  

export default Features