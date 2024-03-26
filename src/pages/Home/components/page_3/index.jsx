import { Fragment } from "react";
import "./index.scss";
const PageThree = () => {
    return (
        <Fragment>
            <section className="cards-wrapper">
                <div className="card-grid-space">
                    <div className="num">01</div>
                    <a className="card pic1">
                        <div>
                            <h1>HTML Syntax</h1>
                            <p>
                                The syntax of a language is how it works. How to
                                actually write it. Learn HTML syntax…
                            </p>
                            <div className="date">6 Oct 2017</div>
                            <div className="tags">
                                <div className="tag">HTML</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card-grid-space">
                    <div className="num">02</div>
                    <a className="card pic2">
                        <div>
                            <h1>Basic types of HTML tags</h1>
                            <p>
                                Learn about some of the most common HTML tags…
                            </p>
                            <div className="date">9 Oct 2017</div>
                            <div className="tags">
                                <div className="tag">HTML</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="card-grid-space">
                    <div className="num">03</div>
                    <a className="card pic3">
                        <div>
                            <h1>Links, images and about file paths</h1>
                            <p>
                                Learn how to use links and images along with
                                file paths…
                            </p>
                            <div className="date">14 Oct 2017</div>
                            <div className="tags">
                                <div className="tag">HTML</div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </Fragment>
    );
};

export default PageThree;
