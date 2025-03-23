import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link to={"/"}>
        <button>Go back home</button>
      </Link>
    </div>
  );
};
