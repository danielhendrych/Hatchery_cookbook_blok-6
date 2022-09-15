import React from "react";
import Item from "./Item";

function ItemGridList(props) {
  return props.recipes.map((recipe) => {
    return <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
    style={{ paddingBottom: "16px" }}>
      <Item key={recipe.id} recipe={recipe} />
     </div>
  });
}

export default ItemGridList;







