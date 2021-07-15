import style from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}
export default Nav;
