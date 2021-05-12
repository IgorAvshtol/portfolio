import style from '././MyFooter.module.css';

const MyFooter = (props) => {
    return (
        <div className={style.icon}>
            <a>{props.title}</a>
        </div>
    );
}

export default MyFooter;
