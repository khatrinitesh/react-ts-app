import React from "react";
import { Button } from "../../assets/styled/customstyle";

const TodoListComp = () => {
  return (
    <>
      <Example />
    </>
  );
};

export default TodoListComp;

const Example: React.FC = () => {
  const [fruits, setFruits] = React.useState([
    { id: "1", name: "Apple", isFavorite: false },
    { id: "2", name: "Peach", isFavorite: true },
    { id: "3", name: "Strawberry", isFavorite: false },
  ]);

  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });
  }
  return (
    <>
      <h3>with no styling</h3>

      <Basket items={fruits} onClick={handleClick} />
    </>
  );
};
function Basket({ items, onClick }) {
  return (
    <>
      <ul className="bg-cyan-400">
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <Button type="button" onClick={() => onClick(item)}>
              {item.isFavorite ? "Unlike" : "Like"}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
