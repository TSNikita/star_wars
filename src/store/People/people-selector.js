// export const selectorPeopleInfo = (state) => state.peoples.results.length;
export const selectPeoples = (state) => state.peoples.list;

export const selectorVisiblePeople = (state, { search = "", color = "" }) => {
  if (color !== "all") {
    return state.peoples.list.results.filter(
      (people) =>
        people.name.toLowerCase().includes(search.toLowerCase()) &&
        people.eye_color.includes(color.toLowerCase())
    );
  } else {
    return state.peoples.list.results.filter((people) =>
      people.name.toLowerCase().includes(search.toLowerCase())
    );
  }
};
