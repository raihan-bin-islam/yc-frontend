export const appendChildTo = () => {
  const children = document.querySelectorAll("#education-status-field");
  const institutionName = children[0].cloneNode(true);
  const from = children[1].cloneNode(true);
  const to = children[2].cloneNode(true);
  const major = children[3].cloneNode(true);
  const qualification = children[4].cloneNode(true);

  children[0].parentNode.appendChild(institutionName);
  children[0].parentNode.appendChild(from);
  children[0].parentNode.appendChild(to);
  children[0].parentNode.appendChild(major);
  children[0].parentNode.appendChild(qualification);
};
