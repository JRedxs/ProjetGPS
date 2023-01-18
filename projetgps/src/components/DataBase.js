import { useEffect, useState } from "react";
import axios from "axios";

function ConnectDatabase() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/db/regions.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            #{user.code}: {user.id} {user.name} {user.slug}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectDatabase;