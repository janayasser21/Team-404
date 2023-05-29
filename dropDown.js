const applicationDropdown = document.getElementById("applicationDropdown");
const form = document.getElementById("wrapper");
const creditCardForm = document.getElementById("creditCardForm");

const dummyData = {
  choose: { fullName: "", email: "", address: "", dob: "", gender: "" },
  Momen: { fullName: "Momen Adel", email: "momen@example.com", address: "123 Street, City", dob: "1990-01-01", gender: "Male" },
  Batrawy: { fullName: "Mohamed Tarek", email: "batrawy@example.com", address: "456 Street, City", dob: "1995-05-05", gender: "Male" },
  Youssef: { fullName: "Youssef Eid", email: "youssef@example.com", address: "789 Street, City", dob: "1998-10-10", gender: "Male" },
  Mohamed: { fullName: "Mohamed Ashraf", email: "mohamed@example.com", address: "987 Street, City", dob: "1992-03-15", gender: "Male" },
  Ahmed: { fullName: "Ahmed Shady", email: "ahmed@example.com", address: "654 Street, City", dob: "1994-07-20", gender: "Male" },
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

creditCardForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    // const fullName = creditCardForm.querySelector('input[name="fullName"]').value;
    // const email = creditCardForm.querySelector('input[name="email"]').value;
    // const address = creditCardForm.querySelector('input[name="address"]').value;
    // const dob = creditCardForm.querySelector('input[name="dob"]').value;
    // const gender = creditCardForm.querySelector('select[name="Applications"]').value;
  
    // const creditCardData = { fullName, email, address, dob, gender };
    // dummyData.creditCard = { ...dummyData.creditCard, ...creditCardData };
    // console.log(dummyData);
    // populateDropdown();
    creditCardForm.reset();
  });
  
function accept(){
    const selectedOption = applicationDropdown.value;
    delete dummyData[selectedOption];
    applicationDropdown.value = "choose";
    form.style.display = "none";
    populateDropdown();
}
  
  
  
  