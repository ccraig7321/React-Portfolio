import React from "react";
import headshot from "../../images/Headshot2014.jpg"

function About(){
    return (
        <div>
            <container>
                <div className="row">
                    <section className="col-sm-12 col-lg-8">
                        <div className="panel panel-default">
                            <h1><strong>About Me</strong></h1>
                            <hr />
                            <p> <img className="float-left" src={headshot} />Welcome to my page!</p>
                            
                            <p>My primary focus is to obtain a position as a junior developer. I am currently enrolled at the University of Pennsylvania working toward achieving a certificate through their coding bootcamp program with graduation in August 2020. Upon graduating, I will be proficient in JavaScript (ES6+), HTML5, CSS3, jQuery, Node.JS, MongoDB, Express, and React.js. Along with my schooling, I also work as a hi-tech medical case manager out of King of Prussia, PA. I assist 250 medically fragile ventilator-dependent children as they transition from hospital care to home care.
                            </p>
                            <p>Outside of school and work, I also teach competitive percussion groups ranging from highschool, college, and professional level. After studying music at Franklin and Marshall College, I find myself well-equipped in all aspects of teaching, learning, and music composition. Below you will find links to my GitHub page, LinkedIn profile, email, and technical resume. If you have any additional questions, please do not hesitate to contact me via the "Contact" portal on this page!</p>

                        </div>
                    </section>
                </div>
            </container>
        </div>
    )
};

export default About