import BannerCarousel from '../BannerCarousel';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className="flex justify-center items-start pt-10 h-2/3 ">
                <h1 className="text-5xl font-bold text-yellow-400">GOLDEX</h1>
            </div>
            <div className='h-2/3'>
                <BannerCarousel />
            </div>
        </div>
    );
}

export default Banner;
