import { useParams } from "react-router-dom";
import useSWR from 'swr';
import Loading from '../LoadingComponent';
import CatCard from "../CatCard";

const URL = import.meta.env.VITE_CAT_API_URL;
const KEY = import.meta.env.VITE_CAT_API_KEY;
const fetcher = url => fetch(url).then(r => r.json());

export default function SWRCategory() {
  const { categoryName } = useParams();
  console.log(categoryName);

  const { data, error } = useSWR(`${URL}/images/search?limit=10&breed_ids=${categoryName}&api_key=${KEY}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div> <Loading /> </div>;
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
