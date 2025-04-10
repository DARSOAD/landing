"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { trackConversion } from "@/src/utils/tracking"; // Ajusta la ruta según tu estructura
import { sendEmail } from "@/src/services/api"; // Importa la función para enviar el correo

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}

export default function Form({ data }: ServiceProps) {
    const [formData, setFormData] = useState({
        companyName: "",
        mobile: "",
        service: "Hotel cleaning service",
    });

    const [loading, setLoading] = useState(false);
    const [loadingVisible, setLoadingVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!loading) {
            setLoadingVisible(false);
            return;
        }
        setLoadingVisible(true);
    }, [loading]);

    // Manejo de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            if (!formData.companyName || !formData.mobile || !formData.service) {
                setErrorMessage("Please complete all required fields.");
                setLoading(false);
                return;
            }

            const result = await await sendEmail(formData);

            if (result.success) {

                // Resetea el formulario
                setFormData({ companyName: "", mobile: "", service: "Hotel cleaning service" });
                trackConversion("google");
                trackConversion("linkedin");
            } else {
                setErrorMessage("Error en el envío. Intenta de nuevo.");
            }
        } catch (error) {        
            setErrorMessage("Error sending the email."+error);
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative lg:pt-32 pb-8 lg:pb-20 max-w-md w-full">
                <form onSubmit={handleSubmit} className="space-y-4 text-gray-800 lg:space-y-6">
                    {/* Campo: Company Name */}
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="input-custom2"
                        required
                    />

                    {/* Campo: Mobile */}
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="input-custom2"
                        required
                    />

                    {/* Campo: Servicio */}
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="input-custom2 2xl:!h-14">
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
                            className="button-normal w-3/4 ml-[25%] bg-[#8897a9] hover:bg-blue-600">
                            Get your free quote now
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
