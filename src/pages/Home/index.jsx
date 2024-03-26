import { observer } from "mobx-react-lite";
import { useState } from "react";
import {
    Link as ScrollLink,
    Element as ScrollElement,
    Events,
} from "react-scroll";
import PageOne from "./components/page_1";
import PageTwo from "./components/page_2";
import PageThree from "./components/page_3";
import "./index.scss";

const Home = () => {
    const [page, setPage] = useState("page-2");
    const handleSetActive = (e) => {
        const parts = e.split("-");
        const num =
            parseInt(parts[1], 10) + 1 >= 3 ? 3 : parseInt(parts[1], 10);
        console.log(parts[0] + "-" + (num + 1)); // 输出：1
    };
    return (
        <div className="main-Content">
            <ScrollElement name="page-1">
                <PageOne />
            </ScrollElement>
            <ScrollElement name="page-2">
                <PageTwo />
            </ScrollElement>
            <ScrollElement name="page-3">
                <PageThree />
            </ScrollElement>
            <div className="down">
                {/* <ScrollElement spy={true} to="page-2" />
                <ScrollLink
                    activeClass="active"
                    to={page}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    // onSetActive={handleSetActive}
                ></ScrollLink> */}
                <svg className="down-icon" viewBox="0 0 24 24">
                    <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
                </svg>
            </div>
        </div>
    );
};

export default observer(Home);
