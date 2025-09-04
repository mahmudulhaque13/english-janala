const createElement = (arr) => {
  const htmlElements = arr.map((el) => `<span class="btn">${el}</spna>`);
  console.log(htmlElements.join(" "));
};

const synonyms = ["hello", "hi", "mara"];
createElement(synonyms);
