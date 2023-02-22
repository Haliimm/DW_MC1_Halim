import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: 120 }}>
        {users.map((item) => (
          <Link to={`/user-details/${item.id}`} className="text-decoration-none">
            <div key={item.id} className="w-100 d-flex mb-3" style={{ backgroundColor: "#2b2d42" }}>
              <div className="" style={{ width: 80, height: 80 }}>
                <img src={item.image} alt={item.username} className="rounded-circle" style={{ width: 80, height: 80 }} />
              </div>
              <div>
                <div className="mt-2 ms-1 fw-bold text-light text-decoration-none">@{item.username}</div>
                <div className="mt-2 ms-1 fw-bold text-light text-decoration-none">Followers: {item.follower}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
