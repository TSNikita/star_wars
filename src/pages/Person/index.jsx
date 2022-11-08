import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Pagination } from "antd";
import ClipLoader from "react-spinners/ClipLoader";

import { useDebounce } from "../../Hook-useDebonce/hook-useDebonche";
import { setPeopleInfo } from "../../store/InfoDetails/infoDetails-actions";

import { Card, CardWokki, Header, Modal, SortPopup } from "../../components/";
import { selectControls } from "../../store/controls/controls-selector";
import { setColor, setSearch } from "../../store/controls/controls-actions";
import { selectorVisiblePeople } from "./../../store/People/people-selector";
import { peopleWokkiLang } from "../../jsonWokkiPeople";

import "./styles.scss";

const colorItems = ["all", "brown", "red", "blue", "yellow", "blue-gray"];

const Person = () => {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState(true);
  const [searchState, setSearchState] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [debouncedSate, setDebounchedState] = useDebounce(searchState);

  const { search, color } = useSelector(selectControls);

  const people = useSelector((state) =>
    selectorVisiblePeople(state, { search, color })
  );

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
    setDebounchedState(e.target.value);
    setSearchState(e.target.value);
  };

  const { status, list } = useSelector(({ peoples }) => {
    return {
      list: peoples.list,
      status: peoples.status,
    };
  });

  //это ceлектор из редакса на смену языка
  const listWokki = useSelector(({ wokki }) => {
    return {
      listWokki: wokki.listWokki,
    };
  });

  const len = people?.length || 0;

  const onSelectSort = (name) => {
    dispatch(setColor(name));
  };

  const handleGetInfoCard = (url) => {
    axios.get(url).then((res) => dispatch(setPeopleInfo(res.data)));
    setModalActive(true);
  };

  return (
    <div className="person">
      <>
        <Header />

        <div className="person_language" onClick={() => setFetch(!fetch)}>
          <h4>language:</h4>

          <h4>{fetch ? "en" : "wokki"}</h4>
        </div>

        {!status ? (
          <div className="person_container">
            <h1 className="person_count">
              {len}
              <span className="person_span">Peoples</span> for you to choose
              your favorite
            </h1>

            <div className="person_input">
              <label htmlFor="">
                <input
                  type="search"
                  value={searchState}
                  placeholder="find..."
                  onChange={handleSearch}
                  className="person_input--search"
                />
              </label>
            </div>

            <SortPopup
              items={colorItems}
              activeCategory={color}
              onClickSort={onSelectSort}
            />

            <div className="person_card">
              {fetch
                ? people.map((obj) => (
                    <Card
                      key={obj.url}
                      url={obj.url}
                      name={obj.name}
                      birth_year={obj.birth_year}
                      height={obj.height}
                      mass={obj.mass}
                      gender={obj.gender}
                      onClick={handleGetInfoCard}
                    />
                  ))
                : peopleWokkiLang.map((obj) => (
                    <CardWokki
                      key={obj.hurcan}
                      hurcan={obj.hurcan}
                      scracc={obj.scracc}
                      whrascwo={obj.whrascwo}
                      acwoahrracao={obj.acwoahrracao}
                      rhahrcaoac_roworarc={obj.rhahrcaoac_roworarc}
                      rrwowhwaworc={obj.rrwowhwaworc}
                    />
                  ))}
            </div>

            <Pagination size="small" total={2} />
          </div>
        ) : (
          <div className="isLoading">
            <ClipLoader color="#2349c9" size={100} />
          </div>
        )}
        <Modal active={modalActive} setActive={setModalActive} />
      </>
    </div>
  );
};

export default Person;
