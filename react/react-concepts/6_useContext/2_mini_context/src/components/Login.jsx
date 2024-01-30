import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
// import { useUser } from "../context/UserContextProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  // const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
