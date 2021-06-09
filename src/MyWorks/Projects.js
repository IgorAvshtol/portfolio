import style from './Projects.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import MyProjectImg from "./MyWork/MyProjectImg";
import MyProject from "./MyWork/MyProject";
import Title from "../Common/component/title/Title";
import Counter from "../assets/image/counter.jpg";


const Projects = () => {

    const counter = {
        backgroundImage: `url(${Counter})`
    }


    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.works}>
                    <MyProject style={counter}
                               title={"Social-network"}
                               discription={"abcdefghdfhgdfsdg  fdfdsdfsfssfsfsfsdfs gfhfghfghfg"}/>
                    <MyProject style={counter}
                               title={"Count"}
                               discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd.gdgdsgfsdfsdfsdfsdfsdfsdfs  dfsdfdsfdsfdsfdsfdsfsdfsfsfds"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
