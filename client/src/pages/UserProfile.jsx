import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then((res) => setUser(res.data));
  }, [id]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
