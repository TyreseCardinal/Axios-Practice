const button = document.getElementById("button");
const userInput = document.getElementById("user-input");
const containerOutput = document.getElementById("container-output");

button.addEventListener("click", getRequest);

function getRequest() {
  const value = userInput.value;

  if (value === "" || value <= 0) {
    console.log("invalid input");
    return;
  }

  containerOutput.innerHTML = "";

  containerOutput.innerHTML = "Loading...";
  
  const delay = Math.random() * 1500 + 500;

  setTimeout(() => {
    
    containerOutput.innerHTML = "";
    
    axios.request({
      method: "GET",
      url: `https://randomuser.me/api/`,
      params: { results: value },
      
    }).then(successFunction).catch(failureFunction);
    
    function successFunction(response) {
      const users = response.data.results;
      
      users.forEach(user => {
        containerOutput.insertAdjacentHTML("beforeend", `<div>
          ${user.name.first} ${user.name.last}<br>
          ${user.email}<br>
          <img src="${user.picture.large}"></div>`)
        });
        
        console.log(users);
      }
      function failureFunction(error) {
        console.log("failure");
        return;
      }
    }, delay);
}