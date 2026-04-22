function displayPoem(response) {
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "t78ed02b39c53acbe574e745d1o7afc0";
  let context = "You are a funny AI Assistant that write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions. Please do not include '''html in the title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Coding poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Coding poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem); 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);