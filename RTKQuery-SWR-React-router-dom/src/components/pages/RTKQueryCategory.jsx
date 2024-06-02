import { useParams } from "react-router-dom";
import Loading from '../LoadingComponent';
import CatCard from "../CatCard";
import { useFetchCategoryQuery } from "../../../store/CatApi/catApiSlicer";


export default function RTKQueryCategory() {
  const { categoryName } = useParams();
  console.log(categoryName);

  const { data, isLoading, error } = useFetchCategoryQuery(categoryName)


  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div> <Loading /> </div>;
  console.log(data);

  return (
    <div className="col-sm-12">
      <h2>Id Name: {categoryName} </h2>
      <div className="row mt-5">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <CatCard 
              url={item.url} 
              description={item.breeds?.[`${index}`]?.description || "No description available"} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
