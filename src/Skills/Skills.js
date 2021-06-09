import style from './Skills.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../Common/component/title/Title";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"} discription={"abcdefghdfhgdfsdg  sdg  gdfgdgdfgdfgdgdfgd"}/>
                    <Skill title={"CSS"} discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd."}/>
                    <Skill title={"JS"} discription={"...lmnoprghkhjljk;k  gdfgdfg l;jlkjs"}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
