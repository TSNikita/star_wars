import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Error, Home, Person } from "../pages";

import { loadWokkiPeople } from "../store/Wokki/wokki-actions";
import { loadPeolpe } from "../store/People/people-actions";

import "../App.css";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPeolpe());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadWokkiPeople());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
