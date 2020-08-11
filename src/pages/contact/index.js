import React from "react";

function Contact(){
    return (
        <div>
            <div className="row">
                <section className="col-sm-12 col-lg-8">
                    <div className="panel panel-default">
                        <h1><strong>Contact Me</strong></h1>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label for="formGroupExampleInput">Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="formGroupExampleInput2">Email Address</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@email.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message Me</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type Message Here" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" href="mailto:chelsey.craig7321@gmail.com">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Contact