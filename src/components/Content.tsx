import {useEffect, useRef} from "react";
import './Content.css'; // 일반 CSS 파일 import

interface Props {
    contentTitle : string,
    content: Array<string>
}

export default function Content({contentTitle, content} : Props) {
    const rowRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({
                left: -rowRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleScrollRight = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({
                left: rowRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // 필요한 로직 추가
    }, []);

    return (
        <div className="content-container">
            <div className="content-section">
                <h2 className="content-title">{contentTitle}</h2>
                <div className="content-row-container">
                    <button
                        className="content-arrow content-arrow-left"
                        onClick={handleScrollLeft}
                        aria-label="Scroll left"
                    >
                        <span className="content-arrow-icon">‹</span>
                    </button>

                    <div className="content-row" ref={rowRef}>
                        {content.map((url, index) => (
                            <div key={index} className="content-image-wrapper">
                                <img
                                    src={url}
                                    alt={`content-${index}`}
                                    className="content-image"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className="content-arrow content-arrow-right"
                        onClick={handleScrollRight}
                        aria-label="Scroll right"
                    >
                        <span className="content-arrow-icon">›</span>
                    </button>
                </div>
            </div>
        </div>
    )
}