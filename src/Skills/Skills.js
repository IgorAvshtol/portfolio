import style from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Skill from "./Skill/Skill";
import Title from "../Common/component/title/Title";
import Fade from 'react-reveal/Fade';
import logoHtml from '../assets/image/logoHtml.png';
import logoCss from '../assets/image/logoCss.png';
import logoJs from '../assets/image/logoJs.png';

const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade right cascade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={"Skills"}/>
                    <div className={style.skills}>
                        <Skill title={"HTML"} logo={logoHtml}/>
                        <Skill title={"CSS"} logo={logoCss}/>
                        <Skill title={"JS"} logo={logoJs}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
