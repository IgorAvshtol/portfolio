import style from '././MyWork.module.css';

const MyWork = (props) => {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                    <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.discription}</span>
        </div>
    );
}

export default MyWork;
