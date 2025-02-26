import Image from "next/image";
import Rate from "../testimonial/Rate";

interface TestimonialData {
    rate: number;
    review: string;
    name: string;
    company: string;
    image: string;
    date: string;
}

interface TestimonialItemProps {
    data: TestimonialData;
    type: string;
}

const TestimonialItem = ({ data, type }: TestimonialItemProps) => {
    return (
        <>
            {type === 'style-two' && (
                <div className="item sm:px-8 px-6 sm:py-10 py-7 bg-white rounded-2xl flex flex-col items-start gap-5 h-full">
                    <div className="flex flex-row space-x-2">
                        <div className="bg-img lg:w-[40px] w-12 lg:h-[40px] h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.image} alt={data.image} unoptimized />
                        </div>
                        <div className="infor flex flex-col">
                            <strong className="text-title text-gray-700">{data.name}</strong>
                            <span className="caption1 text-surface1 text-gray-700">{data.company}</span>
                        </div>
                    </div>                    
                    <div className="content">
                        <div className="flex flex-row space-x-2">
                            <Rate currentRate={data.rate} style={'text-yellow text-xl'} />
                            <span className="caption1 text-surface1 text-gray-700">{data.date}</span>
                        </div>
                        <p className="desc body2 mt-3 text-gray-700">{data.review}</p>                        
                    </div>
                </div>
            )}
            {type === 'style-six' && (
                <div className="item px-8 py-10 bg-white rounded-2xl flex max-lg:flex-col lg:items-center gap-5 h-full shadow-lg">
                    <div className="bg-img w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
                        <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.image} alt={data.image} />
                    </div>
                    <div className="content relative">
                        <Rate currentRate={data.rate} style={'text-yellow text-xl'} />
                        <p className="desc body2 mt-3">{data.review}</p>
                        <div className="infor flex flex-col mt-3">
                            <strong className="text-title">{data.name}</strong>
                            <span className="caption1 text-surface1">{data.company}</span>
                        </div>
                        <strong className="heading3 flex items-center absolute right-0 bottom-0">
                            <span className="icon-slash-bora"></span>
                            <span className="icon-slash-bora"></span>
                        </strong>
                    </div>
                </div>
            )}
            {type === 'style-seven' && (
                <div className="item p-10 bg-white rounded-[20px] h-full">
                    <Rate currentRate={data.rate} style={'!text-yellow text-xl'} />
                    <div className="desc body2 mt-3">{data.review}</div>
                    <div className="user flex items-center gap-3 mt-6">
                        <div className="bg-img w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.image} alt={data.image} />
                        </div>
                        <div className="infor">
                            <div className="text-title">{data.name}</div>
                            <div className="caption1 text-surface1">{data.company}</div>
                        </div>
                    </div>
                </div>
            )}
            {type === 'style-main' && (
                <div className="item flex flex-col justify-between md:p-10 p-7 bg-white rounded-[20px] border border-outline h-full">
                    <div className="review">
                        <Rate currentRate={data.rate} style={'!text-yellow text-xl'} />
                        <div className="body2 mt-3">{data.review}</div>
                    </div>
                    <div className="user flex items-center gap-3 mt-6">
                        <div className="bg-img md:w-[60px] w-14 md:h-[60px] h-14 rounded-full overflow-hidden flex-shrink-0">
                            <Image width={4000} height={4000} className="w-full h-full object-cover block" src={data.image} alt={data.image} />
                        </div>
                        <div className="infor">
                            <div className="text-title">{data.name}</div>
                            <div className="caption1 text-surface1">{data.company}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TestimonialItem