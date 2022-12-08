//data fetching using useReducer
import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

function DataFecthing2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: {} });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loding" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFecthing2;
