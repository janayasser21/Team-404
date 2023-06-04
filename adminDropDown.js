const applicationDropdown = document.getElementById("applicationDropdown");
const form = document.getElementById("wrapper");

const dummyData = {
    choose: { issue: "" },
    networkError: { issue: "Network Error" },
    loginError: { issue: "Login Error" },
    pageNotFound: { issue: "Page Not Found" },
    slowLoading: { issue: "Slow Loading" }
  };
 
function updateForm(application) {
    const data = dummyData[application];
    const inputFields = form.querySelectorAll("input");
  
    inputFields.forEach((input) => {
      const fieldName = input.getAttribute("name");
      input.value = data[fieldName] || "";
    });
}

function populateDropdown() {
    Object.keys(dummyData).forEach((key) => {
      if (key !== "choose") {
        const option = document.createElement("option");
        option.value = key;
        option.text = key;
        applicationDropdown.appendChild(option);
      }
    });
  }

  populateDropdown();

function handleDropdownChange() {
  const selectedOption = applicationDropdown.value;

  if (selectedOption === "choose") {
    form.style.display = "none";
  } else {
    updateForm(selectedOption);
    form.style.display = "block";
  }
}

applicationDropdown.addEventListener("change", handleDropdownChange);
form.style.display = "none";