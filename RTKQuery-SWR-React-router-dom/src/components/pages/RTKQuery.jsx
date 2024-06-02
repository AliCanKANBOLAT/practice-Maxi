import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchCategoriesQuery } from '../../../store/CatApi/catApiSlicer';
import Loading from '../LoadingComponent';

export default function RTKQuery() {
  const { data, isLoading, isError, error } = useFetchCategoriesQuery();
  const [hovered, setHovered] = useState(null);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return null;

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
    <div className="col-sm-12">
      <h1>RTKQuery ile Kedi Türleri</h1>
      <ul className="list-group">
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
        {data.map(item => (
          <li className="list-group-item" key={item.id}>
            <Link to={`/RTKQ-category/${item.id}`} style={linkStyle}>
              <button
                className='btn custom-btn'
                style={hovered === item.id ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                onMouseOver={() => setHovered(item.id)}
                onMouseOut={() => setHovered(null)}
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
