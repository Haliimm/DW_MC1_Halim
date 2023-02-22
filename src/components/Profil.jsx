import { useParams, Link } from "react-router-dom";

import { useState, useEffect } from "react";

function Profil() {
  const [user, setUser] = useState({});
  const params = useParams();

  const getData = () => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((users) => {
        const findUser = users.find((user) => user.id === parseInt(params.id));
        setUser(findUser);

        console.log(users);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div className="container d-flex flex-column align-items-center" style={{ marginTop: 120 }}>
        <div className="d-flex flex-column align-items-center bg-secondary rounded shadow" style={{ marginTop: "auto", width: "100%", height: 340 }}>
          <div className="rounded-circle shadow" style={{ width: 200, height: 200 }}>
            <img src={user.image} alt={user.username} className="rounded-circle" style={{ width: 200, height: 200, borderStyle: "solid", borderColor: "red", borderWidth: 5 }} />
          </div>
          <h5 className="text-light mt-3">@{user.username}</h5>
          <div className="d-flex">
            <div className="mt-3 me-3 d-flex flex-column align-items-center fw-bold">
              <p>{user.follower}</p>
              <p>Followers</p>
            </div>
            <div className="mt-3 d-flex flex-column align-items-center fw-bold">
              <p>{user.following}</p>
              <p>Followings</p>
            </div>
          </div>
        </div>
        <Link className="mt-1" to="/">Back</Link>
      </div>
    </>
  );
}

export default Profil;
