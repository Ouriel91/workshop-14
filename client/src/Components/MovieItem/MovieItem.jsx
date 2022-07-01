import styles from "./MovieItem.module.css";
import StarRating from '../StarRating/StarRating'


export default function MovieItem({id, title, synopsis, year, img, rating}) {
    return <section className={styles.wrapper}>
        <div>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.p}>{synopsis}</p>
            <p className={styles.p}>
                Rating : {rating.toFixed(2)}
            </p>
            <div>
                <p className={styles.p}>my rating</p>
                <StarRating id={id}/>
            </div>
        </div>
        <div>
            <img src={img} alt={title}/>
        </div>
        
    </section>;
}