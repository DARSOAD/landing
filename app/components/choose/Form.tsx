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

    // Especificamos el tipo del evento en TypeScript
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Aquí podrías enviar los datos a una API
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
                    />

                    {/* Campo: Mobile */}
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="input-custom2"
                    />

                    {/* Campo: Servicio */}
                    <Select>
                        <SelectTrigger className="input-custom2">
                            <SelectValue placeholder="Tell us your needs" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="opcion1">Hotel cleaning service</SelectItem>
                            <SelectItem value="opcion2">Office cleaning service</SelectItem>
                            <SelectItem value="opcion3">Residential cleaning</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="button-normal w-3/4 ml-[25%] bg-[#8897a9] hover:bg-blue-888f90">
                        Get your free cuote now
                        <IoIosArrowForward className="pl-2 w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
