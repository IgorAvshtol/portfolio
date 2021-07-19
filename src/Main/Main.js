import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';


const particlesOpt = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "image",
                // "circle"
            ],
            "image": [
                {
                    "src": '/images/js.png',
                    "height": 20,
                    "width": 20
                },
                {
                    "src": '/images/react.png',
                    "height": 20,
                    "width": 20
                },
            ]
        },
        "color": {
            "value": "#CCC"
        },
        "size": {
            "value": 30,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 10,
                "sync": false
            }
        }
    },
    "retina_detect": false
}





const Main = () => {

    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>
                        <ReactTypingEffect
                            text={["Hi, there"]} />
                    </span>
                    <h1>Igor Avshtol</h1>
                    <p><ReactTypingEffect
                        text={["Front-end Developer"]}/>
                    </p>
                </div>
                <div className={style.photo}>
                    <img src="/images/ava.jpg" />
                </div>
            </div>

        </div>
    );
}

export default Main;
