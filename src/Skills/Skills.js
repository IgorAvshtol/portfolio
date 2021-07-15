import style from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Skill from "./Skill/Skill";
import Title from "../Common/component/title/Title";
import Fade from 'react-reveal/Fade';



const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade right cascade>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"} discription={"abcdefghdfhgdfsdg  sdg  gdfgdgdfgdfgdgdfgd"}/>
                    <Skill title={"CSS"} discription={"...hijkdfgdgdfgdf dgdfgdfh  gdg  dfgd."}/>
                    <Skill title={"JS"} discription={"...lmnoprghkhjljk;k  gdfgdfg l;jlkjs"}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Skills;
