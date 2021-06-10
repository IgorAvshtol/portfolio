import style from './Projects.module.scss';
import styleContainer from './../Common/Styles/Container.module.css';
import Project from "./MyWork/Project";
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
                    <Project style={counter}
                             title={"Social-network"}
                             discription={"abcdefghdfhgdfsdg  fdfdsdfsfssfsfsfsdfs gfhfghfghfg"}/>
                    <Project style={counter}
                             title={"Count"}
                             discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd.gdgdsgfsdfsdfsdfsdfsdfsdfs  dfsdfdsfdsfdsfdsfdsfsdfsfsfds"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
