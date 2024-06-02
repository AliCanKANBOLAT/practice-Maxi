import { useState } from 'react';
import useSWR from 'swr';
import Loading from '../LoadingComponent';
import { Link } from 'react-router-dom';

const URL = import.meta.env.VITE_CAT_API_URL;
const KEY = import.meta.env.VITE_CAT_API_KEY;

const fetcher = url => fetch(url).then(r => r.json());

export default function SWR() {
  const { data, error } = useSWR(`${URL}/breeds?api_key=${KEY}`, fetcher);
  const [hovered, setHovered] = useState(null);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div> <Loading /> </div>;

  const buttonStyle = {
    backgroundColor: '#007bff',
    border: '2px solid #0056b3',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, border-color 0.3s',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
    borderColor: '#003f7f'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <h1 className='mb-3'>SWR ile Kedi Türleri</h1>
      <ul className='list-group'>
        <li className="list-group-item">
        <Link to={`/SWRCategory/Ross`} style={linkStyle}>
          <button className='btn custom-btn'
                style={hovered===true  ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(null)}>
            Ross
          </button>
          </Link>
            </li>
        {data.map(breed => (
          <li className="list-group-item" key={breed.id}>
            <Link to={`/SWRCategory/${breed.id}`} style={linkStyle}>
              <button
                className='btn custom-btn'
                style={hovered === breed.id ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onMouseOver={() => setHovered(breed.id)}
                onMouseOut={() => setHovered(null)}
              >
                {breed.name}

              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
