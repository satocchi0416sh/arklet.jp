import React, { useEffect, useRef, useState } from 'react';
import "./AboutSection.css"

const AboutSection = ({ scroll }) => {

    const elm = useRef(null);
    const elm_ = useRef(null);
    const contentsElm = useRef(null);

    const [top, setTop] = useState("initial");
    const [bottom, setBottom] = useState();
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const posY = elm.current.getBoundingClientRect().y;
        const contentsHeight = elm.current.getBoundingClientRect().height;
        const conHeight = elm_.current.getBoundingClientRect().height;


        if (top === "initial" && posY === 0) {
            setTop(scroll);
            setBottom(scroll + conHeight - contentsHeight);
        }

        if (scroll >= top && scroll <= top + 300) {
            setScale((scroll - top) / 300);
            setOpacity((scroll - top) / 300);
            console.log("anim1")
        }
        else if (scroll >= bottom - 300 && scroll <= bottom) {
            setScale(1 + (scroll - (bottom - 300)) / 300);
            setOpacity((bottom - scroll) / 300);
            console.log("anim2")
        }
        else if (scroll > top + 300 && scroll < bottom - 300) {
            setOpacity(1);
            setScale(1);
        }

        else
            setOpacity(0);

    }, [scroll]);


    const Contents = () => {
        return (
            <>
                <div className='about-contents' style={{ marginTop: (scroll - top) / 5 - 150 }} ref={contentsElm}>
                    <h1>
                        ”感情”を加速させる会社
                    </h1>
                    <br />
                    <p>我々が用いる先端技術は単なる手段です。<br /><br />
                        その手段に関する知識とスキルについて日々研鑽を重ね、テクノロジードリブンで常識をアップデートし続ける。そうして未来の“当たり前”を創出し、人々の生活を徹底的に充実させる。<br /><br />
                        それが私たちの会社です。<br />
                    </p>


                </div>
            </>
        );
    }

    return (
        <div className='about-wrapper' ref={elm_}>
            <div className={`block block-one`} ref={elm} style={{ transform: `scale(${scale})`, opacity: opacity }}>
                <Contents />
            </div>

        </div >
    )
};

export default AboutSection;
