import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>Igor Avshtol</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;
