//ViewModel_1
const CV = {
  firstName: ko.observable(""),
  lastName: ko.observable(""),
};

//ViewModel_2
const result = undefined;

function showToast(id) {
  document.getElementById(id).classList.remove("hidden");
  // Hide the toast after 5 seconds (5000ms)
  // you can set a shorter/longer time by replacing "5000" with another number
  setTimeout(function () {
    document.getElementById(id).classList.add("hidden");
  }, 7000);
}

const BASE_URL = "http://localhost/servicebus/run";

const getData = async () => {
  const Data = JSON.stringify([
    { Name: "name", Value: CV.firstName() },
    { Name: "lastName", Value: CV.lastName() },
  ]);

  await axios
    .post(`${BASE_URL}/GetData`, Data)
    .then( async (response) => {
     const result = await JSON.parse(response.data);
     console.log(result);
      showToast("wellcom");
    })
    .catch((err) => {
      showToast("notExist");
    });

};

ko.applyBindings(CV, document.getElementById("form"));
ko.applyBindings(result, document.getElementById("showCV"))
