"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Form() {
    const [formData, setFormData] = useState({
        companyName: "",
        mobile: "",
        service: "Hotel cleaning service",
    });

    const [loading, setLoading] = useState(false);

    // Manejo de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative lg:pt-32 pb-8 lg:pb-20 max-w-md w-full">
                <form onSubmit={handleSubmit} className="space-y-4 text-gray-800 lg:space-y-10">
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
                        <SelectTrigger className="input-custom2">
                            <SelectValue placeholder="Tell us your needs" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Hotel cleaning service">Hotel cleaning service</SelectItem>
                            <SelectItem value="Office cleaning service">Office cleaning service</SelectItem>
                            <SelectItem value="Residential cleaning">Residential cleaning</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="button-normal w-3/4 ml-[25%] bg-[#8897a9] hover:bg-blue-600">
                        {loading ? "Sending..." : "Get your free quote now"}
                        <IoIosArrowForward className="pl-2 w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
