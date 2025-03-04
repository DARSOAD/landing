"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}


export default function Formhead({ data }: ServiceProps) {
    const [formData, setFormData] = useState({
        companyName: "",
        mobile: "",
        service: "Hotel cleaning service",
    });

    const [loading, setLoading] = useState(false);
    
    // Manejo de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://commercialcleaningsydney.com/public/sendMail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            const result = await response.json();
            alert(result.message);

            if (result.success) {
                setFormData({ companyName: "", mobile: "", service: "Hotel cleaning service" });
            }
        } catch (error) {
            console.error("Error in the request:", error);
            alert("Error sending the email.");
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center pt-6">
            <div className="relative bg-gray-200 bg-opacity-10 backdrop-blur-md px-8 pt-24 lg:pt-32 pb-8 lg:pb-20 rounded-3xl shadow-lg max-w-md w-full 2xl:pt-40 2xl:pb-32">
                <form onSubmit={handleSubmit} className="space-y-4" id='formhead'>
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

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="button-normal w-3/4 ml-[25%] bg-[#36a8b2] hover:bg-blue-600">
                        {loading ? "Sending..." : "Lock in the best price for your business"}
                        <IoIosArrowForward className="pl-2 w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
