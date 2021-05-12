import style from './Footer.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import MyFooter from "./MyFooter/MyFooter";



const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Avshtol Igor</h2>
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