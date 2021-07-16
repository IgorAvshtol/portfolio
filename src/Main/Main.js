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
        <div id="#Main" className={style.mainBlock}>
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
                    <img src='data:image/jpeg;base64,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'/>
                </div>
            </div>

        </div>
    );
}

export default Main;
