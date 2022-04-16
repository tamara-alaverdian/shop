import React from "react";
import styles from './Card.module.scss'

function Index({obj, onPlus, onMinus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        if (isAdded) {
            onMinus(obj)
        } else {
            onPlus(obj);
        }
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <img width={133} height={112} src={obj.imageUrl}/>
            <h5>{obj.title}</h5>
            <div className="cardButton">
            </div>
            <div>
            </div>
            <span>Price:</span>
            <b> {obj.price} $</b>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/checked.jpg" : "/img/plus.png"}
                 alt="Plus"/>

        </div>
    )


}

export default Index;