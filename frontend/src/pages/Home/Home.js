import { useState, useEffect } from "react";

const Home = () => {
    const [textIndex, setTextIndex] = useState(0);
    const textList = [
      "Developer.",
      "Gamer.",
    ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % textList.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [textList.length]);

    return (
        <section className="hero-wrap" id="home-section">
            <div className="container">
                <div className="row slider-text justify-content-center align-items-center">
                    <div className="col-lg-8 col-md-6">
                        <div className="text text-center">
                            <span className="subheading">Hey! I am</span>
                            <h1>Sahil Parekh</h1>
                            <h2>I'm a&nbsp;
                                <span className="txt-rotate" data-rotate={JSON.stringify(textList)}>{textList[textIndex]}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;