// Used to toggle active and inactive class between components when clicked on a single child of a functional react component
// First it sets inactive class to all the children and then it sets the active class to the specific child (the card that has been clicked on)
// The function takes an id and a reference as its parameters
// The id specifies the components that we are trying to target (all the child should have the same id) and the reference differentiates each individual child
export const toggleActive = (id, ref, activeClassName) => {
  // Select all the cards using their common id
  const classId = document.querySelectorAll(id);

  classId.forEach((data) => {
    // remove active class for all children
    data.classList.remove(activeClassName);
  });
  //  then add active class to the specific children
  ref.current.classList.add(activeClassName);
};
