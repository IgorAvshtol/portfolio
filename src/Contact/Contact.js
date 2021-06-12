import style from './Contact.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Title from "../Common/component/title/Title";


const Contact = () => {
    return (<div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contact}`}>
                <Title title={"Contacts"}/>
                <form className={style.formgroup}>
                    <input type="email" id="c_email" name="c_email"
                           placeholder="E-mail" required=""/>
                    <input type="text" id="c_name" name="c_name" placeholder="Name"
                           required=""/>
                    <textarea placeholder="Your message" />
                </form>
                <button className={style.submitBtn}>Send</button>

            </div>
        </div>
    );
}

export default Contact;
