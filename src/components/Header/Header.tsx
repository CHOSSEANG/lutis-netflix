import React, {useState} from 'react';
import './Header.css';

import {BsSearch} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false); //검색창 열려있는지 확인. 초기상태는 false

    return (
        <header className="header-container">
            <div className="header-left">
                <img 
                    className="header-logo"
                    src="/header_logo.png"
                    alt="Netflix logo"
                />
                <nav className="header-nav">
                    <ul>
                        <li>홈</li>
                        <li>시리즈</li>
                        <li>영화</li>
                        <li>게임</li>
                        <li>NEW! 요즘 대세 콘텐츠</li>
                        <li>내가 찜한 리스트</li>
                        <li>언어별로 찾아보기</li>
                    </ul>
                </nav>
            </div>

            <div className="header-right">
                <div className="search-wrapper">
                    <BsSearch className="search-icon" onClick={() => setIsSearchOpen(!isSearchOpen)} />
                    {isSearchOpen && (
                        <input
                        type="text"
                        className="search-bar"
                        placeholder="제목, 사람, 장르"
                        autoFocus
                        />
                    )}
                </div>
                <div className="profile-wrapper">
                    <FaUserCircle className="profile-icon" />
                    <div className="profile-dropdown">
                        <p>조성훈</p>
                        <p>김규리</p>
                        <p>김민규</p>
                        <hr />
                        <p>계정</p>
                        <p>로그아웃</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;