import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../css/Card.css";


/*function changeIngredients(recipeItem, mapIngredients) {
  return recipeItem.slice(0, 4).map((ingredience) => {
    return {
      id: ingredience.id,
      amount: ingredience.amount,
      unit: ingredience.unit,
      name: mapIngredients[ingredience.id],
    };
  });
}*/



function Ingredientview(props) {

  return (
   
   <div style={{float: "left"}}>

  <Card className={styles.card}>
      <Card.Title>
        {props.recipe.name}
      </Card.Title>
      <Card.Img src={props.recipe.imgUri} />
      <Card.Body>
        <div></div>
        <Card.Text style={{textAlign: "left"}}>
        {props.recipe.description.slice(0, 50) + "..."}
        </Card.Text>
        <div>
        <ul style={{textAlign: "left"}}>
            <li>{props.ingredient[0]}</li>
            <li>{props.ingredient[1]}</li>
            <li>{props.ingredient[2]}</li>
            <li>{props.ingredient[3]}</li>
          </ul>
        </div>
       
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Ingredientview;



/* 
    <ul style={{textAlign: "left"}}>
          {changeIngredients(props.recipe.ingredients, props.ingredients).map(
                (ingredience) => {
                  return <li>{ingredience.name}</li>;
                }
              )}
          </ul> 
          
          
          
          <div><ul style={{textAlign: "left"}}>
            <li>{props.ingredient[0]}</li>
            <li>{props.ingredient[1]}</li>
            <li>{props.ingredient[2]}</li>
            <li>{props.ingredient[3]}</li>
          </ul>
        </div>*/