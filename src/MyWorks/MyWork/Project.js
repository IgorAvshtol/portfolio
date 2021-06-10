import style from './Project.module.scss';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                <button className={style.button}>View</button>
            </div>
            <div className={style.projectInfo}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.discription}</span>
            </div>
        </div>
    );
}

export default Project;