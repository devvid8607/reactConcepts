//data fetching using usestate and useeffect
import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong" + err);
        setPost({});
      });
  }, []);
  return (
    <div>
      {loading ? "Loding" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetching1;
