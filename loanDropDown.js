const applicationDropdown = document.getElementById("applicationDropdown");
const form = document.getElementById("wrapper");

const dummyData = {
    choose: {
      fullName: "",
      phone: "",
      startDate: "",
      endDate: "",
      ssn: "",
      type: "",
      amount: ""
    },
    Momen: {
      fullName: "Momen Adel",
      phone: "1234567890",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      ssn: "123-45-6789",
      type: "Car",
      amount: "5000"
    },
    Batrawy: {
      fullName: "Mohamed Tarek",
      phone: "9876543210",
      startDate: "2023-02-01",
      endDate: "2023-11-30",
      ssn: "987-65-4321",
      type: "Personal",
      amount: "10000"
    }
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
  applicationDropdown.innerHTML = "";
    Object.keys(dummyData).forEach((key) => {
      // if (key !== "choose") {
        const option = document.createElement("option");
        option.value = key;
        option.text = dummyData[key].fullName;
        applicationDropdown.appendChild(option);
      // }
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
  
function accept(){
  const selectedOption = applicationDropdown.value;
  delete dummyData[selectedOption];
  applicationDropdown.value = "choose";
  form.style.display = "none";
  populateDropdown();
}
  
  
  