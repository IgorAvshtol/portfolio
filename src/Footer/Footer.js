import style from './Footer.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import MyFooter from "./MyFooter/MyFooter";
import Title from "../Common/component/title/Title";



const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Avshtol Igor"}/>
                <div className={style.footer}>
                    <MyFooter />
                    <MyFooter />
                    <MyFooter />
                    <MyFooter />
                </div>
            </div>

        </div>
    );
}

export default Footer;