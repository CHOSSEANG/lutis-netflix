import React from 'react';
import './Background.css';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';

function Background() {
    return (
        <div className="background-container"
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background_poster.png)`,
            }}
        >
            <div className="background-overlay" />
            <div className="background-content">
                <h1 className="background-title">길복순</h1>
                <div className="content-ranking">
                    <span className="top10-badge">Top 10</span>
                    <p>오늘 대한민국에서 4위</p>
                </div>

                <p className="background-description">
                    회사에선 이름난 암살자. 집에선 십 대 딸을 둔 싱글맘. 죽이는 일? 그거야 쉽다. 진짜 어려운 건 애 키우는 일이지.
                </p>

                <div className="background-buttons">
                    <button className="play-button">
                        <FaPlay />
                        <span>재생</span>
                    </button>
                    <button className="info-button">
                        <AiOutlineInfoCircle />
                        <span>상세 정보</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Background;