import style from './Contact.module.css';
import styleContainer from '../Common/Styles/Container.module.css';


const Contact = () => {
    return (<div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contact}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.formgroup}>
                    <input type="email" id="c_email" className="form-control" name="c_email"
                           placeholder="E-mail" required=""/>
                    <input type="text" id="c_name" className="form-control" name="c_name" placeholder="Name"
                           required=""/>
                    <textarea placeholder="Your message" required=""/>
                </form>
                <button>Send</button>

            </div>
        </div>
    );
}

export default Contact;
