import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icon from "@mdi/react";
import { mdiLoading, mdiAlertOctagonOutline } from "@mdi/js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";




function App() {
  const [recipesLoadCall, setRecipesLoadCall] = useState({ state: "pending" });
  const [ingredientsLoadCall, setIngredientsLoadCall] = useState("");
    let navigate = useNavigate();
  
    useEffect(() => {
      fetch("http://localhost:8000/recipe/list", { method: "GET" }).then(
        async (response) => {
          const responseJSON = await response.json();
          if (response.status >= 400) {
            setRecipesLoadCall({ state: "error", error: responseJSON });
          } else {
            setRecipesLoadCall({ state: "success", data: responseJSON });
          }
        }
      );
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:8000/ingredient/list", { method: "GET" }).then(
        async (response) => {
          const responseJson = await response.json();
          if (response.status <= 400) {
            setIngredientsLoadCall(responseJson);
          }
        }
      );
    }, []);
 
    function getList() {
      switch (recipesLoadCall.state) {
        case "pending":
          return (
              <Nav.Link disabled={true}>
                <Icon size={1} path={mdiLoading} spin={true} /> Classroom List
              </Nav.Link>
          );
   
          /* return (
            <div className={styles.app}>
            <h1 className={styles.app} style={{ textAlign: "left" }}>Chutné recepty</h1>
              <ListItem 
                recipes={recipesLoadCall.data}
                ingredients={ingredientsLoadCall}
              />
            </div>
          );*/
      
            case "success":
              return (
                <NavDropdown title="Vybrat recept" id="navbarScrollingDropdown">
                  {recipesLoadCall.data.map((recipe) => {
                    return (
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/RecipeList?id=" + recipe.id)
                        }
                      >
                        {recipe.name}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
        case "error":
          return (
              <div>
                <Icon size={1} path={mdiAlertOctagonOutline} /> Error
              </div>
          );
        default:
          return null;
      }
    }
  return (
    <div className="App">
    
      <Navbar
        fixed="top"
        expand={"sm"}
        className="mb-3"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            Chutné recepty
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Chutné recepty
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {getList()}
                <Nav.Link onClick={() => navigate("/IngredientList")}>
                  Ingredience
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/RecipeDetail")}>
                  Recepty
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;

/* přidat show a handleClose a na stisk tlačítka nastavit na true (show), uložit to ve stavu v App.js*/