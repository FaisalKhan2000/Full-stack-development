import { useState } from "react";
import "./github.css";
import User from "./User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https:/api.github.com/users/${userName}`);

      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error);
      console.log(error);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  // useEffect(() => {
  //   fetchGithubUserData();
  // }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  if (errorMsg !== null) {
    return <h1>Error occurred: {errorMsg.message}</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
