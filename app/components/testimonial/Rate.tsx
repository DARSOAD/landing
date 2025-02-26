import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

type RateProps = {
    currentRate: number;
    style?: string;
};

export default function Rate({ currentRate, style }: RateProps) {
    let arrOfStar = [];

    for (let i = 0; i < 5; i++) {
        if (i < currentRate) {
            arrOfStar.push(<FaStar key={i} className={`${style} text-yellow-400`} />);
        } else {
            arrOfStar.push(<FaStar key={i} className={`${style} text-gray-300`} />);
        }
    }

    return <div className="rate flex">{arrOfStar}</div>;
}

// (Opcional) PropTypes para compatibilidad con JS
Rate.propTypes = {
    currentRate: PropTypes.number.isRequired,
    style: PropTypes.string,
};
