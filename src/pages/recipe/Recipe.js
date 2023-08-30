import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">loading...</div>}

      {data && (
        <>
          <ul></ul>
          <h2 className="page-title">{data.title}</h2>
          {data.ingredients.map((element) => (
            <li>{element}</li>
          ))}
          <p>{data.cookingTime}</p>
          <div className="method"> {data.method}</div>
        </>
      )}
    </div>
  );
}

export default Recipe;
