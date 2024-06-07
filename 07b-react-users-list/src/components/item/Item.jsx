function Item({ name }) {
  // JSX
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md mb-4">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

export default Item;
