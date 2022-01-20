import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./ProjectSection.css"
import img1 from "../../images/shacho-connection.webp"
import img2 from "../../images/website-dimensions-content.jpeg"

const ProjectSection = ({ scroll }) => {

    const elm = useRef(null);
    const elm_ = useRef(null);
    const contentsElm = useRef(null);

    const [top, setTop] = useState("initial");
    const [bottom, setBottom] = useState();
    const [middle, setMiddle] = useState("initial");

    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);

    const [imgOpacity, setImgOpacity] = useState(0);

    const [pro, setPro] = useState(0);

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

        if (scroll <= middle) {
            setPro(0);
        }
        else {
            setPro(1);
        }

        if (scroll > middle - 100 && scroll <= middle) {
            setImgOpacity((middle - scroll) / 100);
        }
        else if (scroll <= middle + 100 && scroll > middle) {
            setImgOpacity((scroll - middle) / 100);
        }
        else {
            setImgOpacity(1);
        }

    }, [scroll]);

    useEffect(() => {
        setMiddle((top + bottom) / 2);
    }, [bottom]);


    const Contents = () => {
        return (
            <>
                <div className='project-contents' style={{ marginTop: (scroll - top) / 5 - 150 }} ref={contentsElm} style={{ textAlign: "center", transform: `scale(${((scroll - top) / (bottom - top)) * 0.2 + 1})` }}>
                    <h1>
                        プロジェクト
                    </h1>
                    <h3>
                        我々の事業について
                    </h3>
                    <br />
                    {pro === 0 ? <div className="project">
                        <img src={img1} alt="" style={{ backgroundColor: "black", width: "70vw", opacity: imgOpacity }} />
                        <div className="project-txt">
                            <h3>社長コネクション</h3>
                            <h5>完全招待制の社長と学生のマッチングサービス</h5>
                            <button href="https://shacho-connection.com/">詳しく見る</button>
                        </div>
                    </div> : <div className="project">
                        <img src={img2} alt="" style={{ backgroundColor: "black", width: "70vw", opacity: imgOpacity }} />
                        <div className="project-txt">
                            <h3>ホームページ事業</h3>
                            <h5>最新のフレームワークを用いたリッチな見た目のサイトを制作</h5>
                            <button href="https://shacho-connection.com/">詳しく見る</button>
                        </div>
                    </div>
                    }
                </div>
            </>
        );
    }

    return (
        <div className='project-wrapper' ref={elm_}>
            <div className={`block block-one`} ref={elm} style={{ transform: `scale(${scale})`, opacity: opacity }}>
                <Contents />
            </div>

        </div >
    )
};

export default ProjectSection;
