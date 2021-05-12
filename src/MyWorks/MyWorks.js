import style from './MyWorks.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import MyWork from "./MyWork/MyWork";
import MyProjectImg from "./MyWork/MyProjectImg";
import MyProjectText from "./MyWork/MyProjectText";


const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                    <div >
                        <MyProjectImg/>
                        <MyWork title={"HTML"}/>
                        <MyProjectText discription={"abcdefghdfhgdfsdg  sdg  gdfgdgdfgdfgdgdfgd"}/>
                    </div>
                    <div >
                        <MyProjectImg/>
                        <MyWork title={"CSS"}/>
                        <MyProjectText
                            discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd.gdgdsgfsdfsdfsdfsdfsdfsdfs  dfsdfdsfdsfdsfdsfdsfsdfsfsfds"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
