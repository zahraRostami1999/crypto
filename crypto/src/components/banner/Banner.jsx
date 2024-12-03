import styles from './Banner.module.css';

const Banner = () => {
    return ( 
        <>
        <div className={styles.conatainer}>
            <div className="flex justify-center items-center h-1/3">
            <h1 className="text-5xl font-bold">GOLDEX</h1>
            </div>
        </div>
        </>
     );
}
 
export default Banner;