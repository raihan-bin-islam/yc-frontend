// export const appendChildTo = (id) => {
//   const children = document.querySelectorAll("#education-status-field");
//   const cloneChild = children[0].cloneNode(true);
//   const institutionName = cloneChild.firstChild;
//   institutionName.setAttribute("name", `institutionName[${id}]`);
//   console.log(cloneChild);
//   // const clone = children[0].cloneNode(true);

//   children[0].parentNode.appendChild(cloneChild);
//   // const institutionName = children[0].cloneNode(true);
//   // const from = children[1].cloneNode(true);
//   // const to = children[2].cloneNode(true);
//   // const major = children[3].cloneNode(true);
//   // const qualification = children[4].cloneNode(true);

//   // children[0].parentNode.appendChild(institutionName);
//   // children[0].parentNode.appendChild(from);
//   // children[0].parentNode.appendChild(to);
//   // children[0].parentNode.appendChild(major);
//   // children[0].parentNode.appendChild(qualification);
// };

export const clearTextInput = (elementId) => {
  const inputField = document.getElementById(elementId);
  inputField.value = "";
};
