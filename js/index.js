let input_form = document.getElementById("input-form");
let output_box = document.getElementById("output");
let button = document.getElementById("translate-button");
const URL = "https://medical-nlp.herokuapp.com/process";

button.addEventListener("click", submitHandler);

async function requestDispatch(url) {
  try {
    let res = await fetch(url);
    res = await res.text();
    // console.log(res);
    res = JSON.parse(res);
    // formOutputString(res);
    output_box.textContent = "Your possible ailments are:\n";
    res
      .toString()
      .split(",")
      .forEach((ailment) => (output_box.textContent += ailment + "\n"));
  } catch (error) {
    console.error(error);
  }
}

function submitHandler(e) {
  e.preventDefault();
  output_box.textContent = "";
  const formData = new FormData(input_form);
  const des = formData.get("user-input");
  if (!des) {
    return;
  }
  url = URL + `?query=${des}&train=0`;
  requestDispatch(url);
}
