import React, { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import ItemChange from "./ItemChange";
import ItemTableList from "./ItemTableList";
import FormRecipe from "./FormRecipe";

function ListItem(props) {
  const [viewType, setViewType] = useState("list");
  const isToggled   = viewType === "list";
  const [searchBy, setSearchBy] = useState("");

  function toggler() {
    if (isToggled) {
      setViewType("table");
    } else {
      setViewType("list");
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    setSearchBy(event.target["searchInput"].value);
  }


  const filteredRecipes = useMemo(() => {
    return props.recipes.filter((input) => {
      return (
        input.name.toLowerCase().includes(searchBy.toLowerCase()) ||
        input.description.toLowerCase().includes(searchBy.toLowerCase())
      );
    });
  }, [searchBy, props.recipes]);

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark"></Navbar>
        <div className="container-fluid">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              id={"searchInput"}
              style={{ maxWidth: "150px" }}
              type="search"
              placeholder="Vyhledat"
              aria-label="Vyhledat"
             
            />
            <Button
              style={{ marginRight: "5px" }}
              variant="outline-success"
              type="submit"
            >
              <Icon size={1} path={mdiMagnify} />
            </Button>
            <div>
              <FormRecipe style={{ marginRight: "5px" }}/>
            </div>
            <Button variant="outline-primary" onClick={toggler} className={"d-none d-md-block"} style={{ marginLeft: "5px" }}>
              {isToggled ? "Tabulka" : "Recepty"}
            </Button>
          </Form>
        </div>
    <div class="container">
      {isToggled ? (
        <ItemChange
          recipes={filteredRecipes}
          ingredients={props.ingredients}
        />
        
      ) : (
        <div className={"d-none d-md-block"}>
        <ItemTableList recipes={filteredRecipes} />
        </div> 
      )}
      </div>
    </div>
  );
}

export default ListItem;
/* {filteredRecipes.length ? (
          <div class="container">
            <div className={"d-block d-md-none"}>
              <ItemChange
              recipes={filteredRecipes}
              ingredients={props.ingredients} />
            </div>
            <div className={"d-none d-md-block"}>
              {isGrid ? (
                <StudentGridList studentList={filteredStudentList} />
              ) : (
                <StudentTableList studentList={filteredStudentList} />
              )}
            </div>
          </div>
        ) : (
          <div style={{ margin: "16px auto", textAlign: "center" }}>
            Nejsou žádní studenti ke zobrazení
          </div>
        )}*/