import style from './MyWorks.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import MyWork from "./MyWork/MyWork";


const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                    <MyWork title={"HTML"} discription={"abcdefghdfhgdfsdg  sdg  gdfgdgdfgdfgdgdfgd"}/>
                    <MyWork title={"CSS"} discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd.gdgdsgfsdfsdfsdfsdfsdfsdfs  dfsdfdsfdsfdsfdsfdsfsdfsfsfds"}/>
                </div>
            </div>

        </div>
    );
}

export default MyWorks;
