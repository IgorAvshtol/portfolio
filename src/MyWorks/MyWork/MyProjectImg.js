import style from '././MyProjectImg.module.css';

const MyProjectImg = () => {
    return (
        <div className={style.work}>
            <div className={style.projectImg}>
                <button className={style.button}>Смотреть</button>
            </div>
        </div>
    );
}

export default MyProjectImg;
