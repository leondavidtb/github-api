import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userStarred, setUserStarred] = useState([]);

  return (
    <context.Provider
      value={{
        userData,
        userRepos,
        userStarred,
        setUserData,
        setUserRepos,
        setUserStarred,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
