import style from '././MyWork.module.css';

const MyWork = (props) => {
    return (
        <div className={style.work}>
            <h3>{props.title}</h3>
        </div>
    );
}

export default MyWork;
