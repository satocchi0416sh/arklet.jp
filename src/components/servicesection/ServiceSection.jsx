import React, { useEffect, useRef, useState } from 'react';
import "./ServiceSection.css"
import s1 from "../../images/s1.webp"
import s2 from "../../images/s2.webp"
import s3 from "../../images/s3.webp"

const ServiceSection = ({ scroll }) => {

    const elm = useRef(null);
    const elm_ = useRef(null);
    const contentsElm = useRef(null);

    const [top, setTop] = useState("initial");
    const [bottom, setBottom] = useState();
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);

    const [pos1, setPos1] = useState(100);
    const [pos2, setPos2] = useState(100);
    const [pos3, setPos3] = useState(100);
    const [opa1, setOpa1] = useState(0);
    const [opa2, setOpa2] = useState(0);
    const [opa3, setOpa3] = useState(0);

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


        if (scroll >= top + 300 && scroll <= top + 400) {
            setPos1(((top + 400 - scroll) / 100) * 200)
            setOpa1((scroll - (top + 300)) / 100);
        }
        else if (scroll > top + 400) {
            setPos1(0);
            setOpa1(1);
        }
        else {
            setPos1(100);
            setOpa1(0)
        }

        if (scroll >= top + 350 && scroll <= top + 450) {
            setPos2(((top + 450 - scroll) / 100) * 200)
            setOpa2((scroll - (top + 350)) / 100);
        }
        else if (scroll > top + 450) {
            setPos2(0);
            setOpa2(1);
        }
        else {
            setPos2(100);
            setOpa2(0)
        }

        if (scroll >= top + 400 && scroll <= top + 500) {
            setPos3(((top + 500 - scroll) / 100) * 200)
            setOpa3((scroll - (top + 400)) / 100);
        }
        else if (scroll > top + 500) {
            setPos3(0);
            setOpa3(1);
        }
        else {
            setPos3(100);
            setOpa3(0)
        }

        console.log("pos1:" + pos1)
        console.log("pos2:" + pos2)
        console.log("pos3:" + pos3)
        console.log("opa1:" + opa1)
        console.log("opa2:" + opa2)
        console.log("opa3:" + opa3)

    }, [scroll]);


    const Contents = () => {
        return (
            <>
                <div className='service-contents' ref={contentsElm} style={{ transform: `scale(${((scroll - top) / (bottom - top)) * 0.2 + 1})` }}>
                    <h1>
                        サービス内容
                    </h1>
                    <h3 style={{ marginBottom: 50 }}>
                        若者の視点を生かすために
                    </h3>
                    <div className="service-items">
                        <div className="service service-1" style={{ marginTop: pos1, opacity: opa1 }}>
                            <img src={s1} alt="" />
                            <div className="service-txt">
                                <h3>メンバーは全員現役大学生</h3>
                                <p>若年層向けのサービスを実際の顧客層である我々が作ることにより、より良いサービスにすることができます。</p>
                            </div>
                        </div>
                        <div className="service service-1" style={{ marginTop: pos3, opacity: opa3 }}>
                            <img src={s2} alt="" />
                            <div className="service-txt">
                                <h3>ITプロの精鋭メンバー</h3>
                                <p>ARKLETは少数精鋭で業務を行っているため、品質のクオリティーを追求する体制が整っています。</p>
                            </div>
                        </div>
                        <div className="service service-1" style={{ marginTop: pos2, opacity: opa2 }}>
                            <img src={s3} alt="" />
                            <div className="service-txt">
                                <h3>徹底的に無駄を省いたフロー</h3>
                                <p>少数精鋭で徹底的に無駄を省いたフローにより、価格を抑えながらクオリティーの高いサービスを生み出すことが可能になります。</p>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }

    return (
        <div className='service-wrapper' ref={elm_}>
            <div className={`block block-one`} ref={elm} style={{ transform: `scale(${scale})`, opacity: opacity }}>
                <Contents />
            </div>

        </div >
    )
};

export default ServiceSection;
