// hooks
import { useParams } from "react-router-dom";

// router
import { Link } from "react-router-dom";

// data
import users from "../data/data";

function Details() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pb-3">
      {users.map((user) => {
        if (user.id === id) {
          const { name, description, image } = user;
          return (
            <div key={user.id} className="bg-white p-6">
              <h2 className="text-2xl font-bold mb-2">{name}</h2>
              <p className="text-lg mb-4">{description}</p>
              <img
                className="mb-4 w-full max-w-xs rounded"
                src={image.src}
                alt={image.alt}
              />
            </div>
          );
        }
        return null;
      })}
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Voltar
      </Link>
    </div>
  );
}

export default Details;
