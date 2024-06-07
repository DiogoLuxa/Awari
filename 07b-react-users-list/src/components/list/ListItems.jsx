// components
import Item from "../item/Item";

function ListItems({ users }) {
  // JSX
  return (
    <div className="max-w-md mx-auto mt-8">
      {users.map((user) => {
        return <Item key={user.id} name={user.name} />;
      })}
    </div>
  );
}

export default ListItems;
