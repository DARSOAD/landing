export interface TestimonialItemData {
    rate: number;
    review: string;
    name: string;
    opinions: string;
    image: string;
    date: string;
}

export interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;    
    slug: string;
    translated?: boolean;
}

export interface ServiceEspecificItemData { 
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}
