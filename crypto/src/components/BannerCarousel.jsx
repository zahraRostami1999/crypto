import img from "../assets/user.png";
import React, { useEffect, useState } from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from "../config/api";
import axios from 'axios';



const BannerCarousel = () => {
    const currency = 'USD';
    const [trending, setTrending] = useState([]);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }


    console.log(trending);


    useEffect(() => {
        fetchTrendingCoins();

    }, [])


    const items = trending.map((coin) => {
        return (
            <Link >
                <div className="w-20">
                    <div className="w-20 flex justify-center items-center">
                        <img className="w-full" src={coin.image} alt={coin.name} />

                    </div>
                    <h1 className="text-center">{coin.name}</h1>
                    <p className="text-center">$ {coin.current_price}</p>
                </div>

            </Link>
        )
    })

    return (
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={2000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}

        />
    );
};

export default BannerCarousel;
