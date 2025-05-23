"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/src/components/ui/popover";
import { useTheme } from "next-themes";

export default function DateRangePicker({ className }: { className?: string }) {
    // Define the CustomDateRange type
    type CustomDateRange = {
        from?: Date;
        to?: Date;
    };
    
    const [date, setDate] = React.useState<CustomDateRange | undefined>(undefined);
    const { theme: mode } = useTheme();

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button

                        className={cn(" font-normal", {
                            "  bg-background hover:bg-background hover:ring-background text-default-600 cursor-pointer": mode !== "dark",
                        })}
                    >
                        <CalendarIcon className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from ?? undefined}
                        onSelect={(value) => setDate(value as CustomDateRange | undefined)}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
