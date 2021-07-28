import style from './Projects.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Project from "./MyWork/Project";
import Title from "../Common/component/title/Title";
import social from "../assets/image/social-network.jpg";
import todo from "../assets/image/todo-list.jpg";

const Projects = () => {

    const Social = {
        backgroundImage: `url(${social})`
    }

    const TodoList = {
        backgroundImage: `url(${todo})`
    }


    return (
        <div id="projects" className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.works}>
                    <Project img={Social}
                             url={'https://igoravshtol.github.io/social-network-ts/'}
                             title={"Social-network"}
                        // discription={"abcdefghdfhgdfsdg  fdfdsdfsfssfsfsfsdfs gfhfghfghfg"}
                    />
                    <Project img={TodoList}
                             url={'https://igoravshtol.github.io/TodoList/'}
                             title={"TodoList"}
                        // discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd.gdgdsgfsdfsdfsdfsdfsdfsdfs  dfsdfdsfdsfdsfdsfdsfsdfsfsfds"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
