import style from './Title.module.css';


const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;
