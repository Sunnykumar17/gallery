import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=MoZuxj0Y67XYC5gw7VG2B2YjRt7PIau0eZubesFgcpk"
    );
    const data = await res.json();
    console.log(data);
    setState(data.results);

  };
  return (
    <div>
      <Navbar />

      {state.length > 0 ? (
        <div className="card-container">
          {state.map((ele) => {
            return (
              <div className="card">
                <img src={ele.urls.thumb} alt="img"  width={200} height={200}/>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Data Found</h2>
      )}
    </div>
  );
};

export default App;
