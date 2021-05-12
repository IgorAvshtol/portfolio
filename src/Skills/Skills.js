import style from './Skills.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
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
