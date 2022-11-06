import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <div className='App'>
    <Navbar className='nav' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><span className='game'>Game</span><span className='world'>World</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='home'>Home</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Consoles</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Video Games
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Cart
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*carousel part*/}
    <Carousel fade>
      <Carousel.Item className='car'>
      <div className='image'> <img
          className="d-block w-100"
          src="https://media03.gameworld.tn/3536-large_default/pack-playstation-5-et-ses-accessoires.jpg"
          alt="First slide"
        /></div>
        <div className='caption'><Carousel.Caption className='cc'>
          <h3>Pack PlayStation 5 + Accessoires PS5</h3>
          <p>PS5 + CASQUE PULSE 3D + CAMERA HD + CHARGEUR + TÉLÉCOMMANDE </p>
        </Carousel.Caption></div>
      </Carousel.Item>
      <Carousel.Item className='car'>
      <div className='image'><img
          className="d-block w-100"
          src="https://media02.gameworld.tn/5820-medium_default/fifa-23.jpg"
          alt="Second slide"
        /></div>

        <Carousel.Caption className='cc'>
          <h3>FIFA 23 - Version Française</h3>
          <p>EA SPORTS™ FIFA 23 apporte le jeu mondial sur le terrain, avec des tournois masculins et féminins de la Coupe du Monde de la FIFA™, l'ajout d'équipes de clubs féminins et de nouvelles façons de jouer à vos modes préférés .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car'>
      <div className='image'><img
          className="d-block w-100"
          src="https://media01.gameworld.tn/3556-large_default/xbox-serie-x.jpg"
          alt="Third slide"
        /></div>

        <Carousel.Caption className='cc'>
          <h3>XBOX Serie X</h3>
          <p>
          XBOX SERIE X  : POWER YOUR DREAMS
LA XBOX LA PLUS RAPIDE ET LA PLUS PUISSANTE JAMAIS CONÇUE
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
      <div className='img'><Card.Img variant="top" src="https://media01.gameworld.tn/5498-medium_default/nintendo-switch-oled.jpg" /></div>
      <Card.Body>
        <Card.Title>Pack : Nintendo Switch Oled + 2 Jeux</Card.Title>
        <Card.Text>
        Pack Nintendo Switch Oled + 2 Jeux : 

- Kirby And The Forgotten Land

- 51 Worldwide Games
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <div className='img'><Card.Img variant="top" src="https://media01.gameworld.tn/5152-medium_default/f1-22.jpg" /></div>
      <Card.Body>
        <Card.Title>F1 22</Card.Title>
        <Card.Text>
        Entrez dans la nouvelle ère de la Formule 1® dans EA SPORTS™ F1® 22, le jeu vidéo officiel du Championnat du monde de Formule 1 FIA 2022™.
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <div className='img'><Card.Img variant="top" src="https://media01.gameworld.tn/2472-medium_default/manette-ps5-dualsense-black.jpg" /></div>
      <Card.Body>
        <Card.Title>Manette PS5 Sans Fil DualSense</Card.Title>
        <Card.Text>
        Découvrez une expérience de gaming plus intense1 avec la nouvelle manette innovante PS5

La manette sans fil DualSense pour PS5 offre un retour haptique immersif2, de gâchettes adaptatives dynamiques et un micro intégré, le tout intégré dans un design emblématique.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    {/*form part*/}
    <div className='form'><Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Tunis</option>
            <option>Sousse</option>
            <option>Sfax</option>
            <option>Bizerte</option>
            <option>Gafsa</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
    <footer className='foot'>
    <img
        src="https://gameworld.tn//themes/gameworld/assets/img/my_images/logo_footer.webp"
          alt="logo"
        />
    <p>© 2022 Game World. All Rights Reserved</p>
    </footer>
        </div>
            );
}

export default App;
