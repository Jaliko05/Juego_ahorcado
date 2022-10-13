const input = document.querySelector("textarea");
const counter = document.querySelector("span");
const char = document.querySelector("h4");

input.addEventListener("input", (e) => {
  if (input.value.length < 8) {
    counter.innerText = input.value.length;
    console.log(input.value);
  } else {
    counter.innerText = "max";
    input.value = input.value.substring(0, 8);
  }
});

function agregar_palabra() {
  let index = new Arreglo();
  index.new_palabra(input.value);
  console.log(index.palabras)
}
