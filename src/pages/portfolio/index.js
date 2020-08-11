import React from "react";
import { Card, Button, Container, CardDeck } from "react-bootstrap";
import combat from "../../images/combat.png";
import plasma from "../../images/plasma.png";
import userDirectory from "../../images/userDirectory.png";
import budget from "../../images/budgetHomepage.png";
import stats from "../../images/stats.png";
import burger from "../../images/burgerPicture.png";
import note from "../../images/noteTakerHomepage.png";
import team from "../../images/teamBuilder.png"

function Portfolio() {
  return (
    <div>
      <Container>
        <CardDeck className="cardDeck">
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={userDirectory}/>
            <Card.Body>
              <Card.Title>User Directory</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://ccraig7321.github.io/User-Directory/">
                Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://github.com/ccraig7321/User-Directory">
                Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={budget} />
            <Card.Body>
              <Card.Title>Progressive Tracker</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://budget-tracker12345.herokuapp.com/" >
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://github.com/ccraig7321/Budget-Tracker">
              Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={stats} />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://fitness-tracker12345.herokuapp.com/">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://github.com/ccraig7321/Fitness-Tracker">
              Repository
              </Button>
            </Card.Footer>
          </Card>

        </CardDeck>
        <CardDeck className="cardDeck">
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={burger} />
            <Card.Body>
              <Card.Title>Eat the Burger!</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://node-burgers.herokuapp.com/">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://ccraig7321.github.io/Node-Express-Handlebars/">
              Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={note} />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://note-taker7.herokuapp.com/">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://ccraig7321.github.io/Note-Taker/">
              Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="homeworkCard" variant="top" src={team} />
            <Card.Body>
              <Card.Title>Team Builder</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://drive.google.com/file/d/1X0YvBXcun7t_IDxDVWLbcbJP2BDq5Wih/view">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://github.com/ccraig7321/Team-Profile-Generator">
              Repository
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck className="cardDeck">
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="projectCard" variant="top" src={combat} />
            <Card.Body>
              <Card.Title>Project 1 - Character Combat</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://ccraig7321.github.io/Character-Combat/">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://github.com/ccraig7321/Character-Combat">
              Repository
              </Button>
            </Card.Footer>
          </Card>

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img className="projectCard" variant="top" src={plasma} />
            <Card.Body>
              <Card.Title>Project 2 - PLASMA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="button" variant="outline-info" href="https://plasma-playlist.herokuapp.com/">
              Deployed
              </Button>
              <Button className="button" variant="outline-info" href="https://ccraig7321.github.io/PLASMA/">
              Repository
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        {/* <div className="row">
            <div className="col">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div> */}
      </Container>
    </div>
  );
}

export default Portfolio;

{
  /* <div class="row">
<section class="col-sm-12 col-lg-8">
    <div class="panel panel-default">
        <h1><strong>Portfolio</strong></h1>
        <hr>
        <div class="customRow">
            <a style="background-image: url('Assets/Images/GIFcombat.png');" target="_blank" href="https://ccraig7321.github.io/Character-Combat/" class="box">
                <div class="overlay">Character Combat</div>
            </a>
            <a style="background-image: url('Assets/Images/homepage.png');" target="_blank" href="https://ccraig7321.github.io/PLASMA/" class="box">
                <div class="overlay">PLASMA</div>
            </a>
            <a style="background-image: url('Assets/Images/noteTaker.png');" target="_blank" href="https://ccraig7321.github.io/Note-Taker/" class="box">
                <div class="overlay">Note Taker</div>
            </a>
            <a style="background-image: url('Assets/Images/CodeQuizMain.png');" target="_blank" href="https://ccraig7321.github.io/Code-Quiz/" class="box">
                <div class="overlay">Code Quiz</div>
            </a>
            <a style="background-image: url('Assets/Images/Screen Shot 2020-06-24 at 10.29.13 PM.png');" target="_blank" href="https://ccraig7321.github.io/Daily-Planner/" class="box">
                <div class="overlay">Daily Planner</div>
            </a>
            <!-- <a style="background-image: url('Assets/Images/PasswordGenerator.png');" target="_blank" href="https://ccraig7321.github.io/Password-Generator/" class="box">
                <div class="overlay">Password Generator</div> -->
            </a>
            <a style="background-image: url('Assets/Images/burgerPicture.png');" href="https://ccraig7321.github.io/Node-Express-Handlebars/" class="box">
                <div class="overlay">Eat the Burgers!</div>
            </a>
        </div>
    </div>
    
</section>
</div>

</div> */
}
