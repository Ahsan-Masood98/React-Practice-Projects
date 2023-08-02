import React, { useCallback, useContext, useState } from "react";
import useRequest from "../hooks/useRequets";
import { ThemeContext } from "../context/themeContext";

const Posts = () => {
  const [sendReq, setSendReq] = useState(false);
  const { getDataHandler, isLoading, error, data, status } = useRequest();
  const context = useContext(ThemeContext);
  const { darkTheme, toggleTheme } = context;
  const url = "https://jsonplaceholder.typicode.com/posts";
  const onClickHandler = () => {
    setSendReq(true);
    getDataHandler(url);
  };
  const themes = {
    color: darkTheme ? "#ffffff" : "#000000",
    backgroundColor: darkTheme ? "#000000" : "#eeeeee",
  };
  return (
    <>
      <hr />
      <h2>Using useContext and useRequest i.e. a Custom Hook</h2>
      <button onClick={toggleTheme}>Dark Theme</button>
      <br />
      <button onClick={onClickHandler}>
        {isLoading === true ? "Loading...." : "Show Data"}
      </button>
      <button onClick={() => setSendReq(false)}>Hide Data</button>

      {sendReq && status >= 400 && (
        <p>
          <b>Code:</b> {error.code} <b>Message:</b> {error.message}
        </p>
      )}
      {sendReq && status === 200 && (
        <table style={themes}>
          <thead>
            <tr>
              <td>
                <b>Title</b>
              </td>
              <td>
                <b>Body</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Posts;
