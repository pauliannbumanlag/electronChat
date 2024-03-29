import React from "react";
import { useNavigate } from "react-router-dom";
import ChatSearch from "./ChatSearch";

export default function JoinedChatsList() {
    const navigate = useNavigate();

    return (
        <div className="list-container">
            <ChatSearch />
            <ul className="items">
            <li
                onClick={() => navigate("/chat/1")}
                className="item">
                <div className="item-status">
                <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
                <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some Chat 1</span>
                </p>
            </li>
            <li
                onClick={() => navigate("/chat/2")}
                className="item">
                <div className="item-status">
                <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
                <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some Chat 2</span>
                </p>
            </li>
            <li
                onClick={() => navigate("/chat/3")}
                className="item">
                <div className="item-status">
                <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
                <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some Chat 3</span>
                </p>
            </li>
            <li
                onClick={() => navigate("/chat/4")}
                className="item">
                <div className="item-status">
                <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
                <span className="status online"></span>
                </div>
                <p className="name-time">
                <span className="name mr-2">Some Chat 4</span>
                </p>
            </li>
            </ul>
        </div>
    )
}