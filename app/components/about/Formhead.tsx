"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackConversion } from "@/utils/tracking"; // Ajusta la ruta según tu estructura

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface FormContent {
    firstText: string;
    buttonText: string;
    buttonColor: string;
}

interface ServiceProps {
    data: ServiceItemData[];
    content: FormContent;
}



export default function Formhead({ data, content }: ServiceProps) {

    const {
        firstText,
        buttonText,
        buttonColor
    } = content;

    const [loadingVisible, setLoadingVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        companyName: "",
        mobile: "",
        service: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            setLoadingVisible(false);
            return;
        }
        setLoadingVisible(true);
    }, [loading]);

    // Manejo de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!formData.companyName || !formData.service || !formData.mobile) {
                setErrorMessage("Please complete all required fields.");
                setLoading(false);
                return;
            }

            const response = await fetch("https://commercialcleaningsydney.com/public/sendMail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            const result = await response.json();
            alert(result.message);
            setErrorMessage("");

            if (result.success) {
                // Resetea el formulario
                setFormData({ companyName: "", mobile: "", service: "" });
                trackConversion("google");
                trackConversion("linkedin");
            }
        } catch (error) {
            setErrorMessage("Error sending the email." + error);
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center pt-4">
            <div className="relative bg-gray-200 bg-opacity-10 backdrop-blur-md px-8 pt-10 lg:pt-32 pb-8 lg:pb-20 rounded-3xl shadow-lg max-w-md w-full 2xl:pt-40 2xl:pb-32">
                <form onSubmit={handleSubmit} className="space-y-4" id="formhead">

                    <p className="font-sans text-xs text-center font-extralight lg:font-thin lg:text-sm leading-[1.1] 2xl:text-xl text-white">
                    {firstText}
                    </p>
                    {/* Campo: Company Name */}
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="input-custom"
                    />

                    {/* Campo: Mobile */}
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="input-custom"
                    />

                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="input-custom 2xl:!h-14">
                            <SelectValue placeholder="Tell us your needs" />
                        </SelectTrigger>
                        <SelectContent>
                            {data.map((item, index) => (
                                <SelectItem key={index} value={item.title}>{item.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {errorMessage && <p className="text-sm text-[#b23636]">{errorMessage}</p>}

                    {/* Botón de envío */}
                    {!loading && (
                        <button
                            type="submit"
                            className={`button-normal w-3/4 ml-[25%]  hover:bg-blue-600`}
                            style={{ backgroundColor: buttonColor }}
                            >                            
                            {loading ? "Sending..." : buttonText}
                            <IoIosArrowForward className="pl-2 w-5 h-5" />
                        </button>
                    )}

                    {/* Loader visible mientras `loading` es true */}
                    {loadingVisible && (
                        <div className="loader-container">
                            <div className="loader"></div>
                            <p>Sending...</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
