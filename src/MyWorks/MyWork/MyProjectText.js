import style from '././MyProjectText.module.css';

const MyProjectText = (props) => {
    return (
        <div className={style.projectText}>
            <span className={style.description}>{props.discription}</span>
        </div>
    );
}

export default MyProjectText;
