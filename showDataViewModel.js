//ViewModel_1//

const CV = {
  firstName: ko.observable(""),
  lastName: ko.observable(""),
  CVDataRecieve: ko.observableArray(),

  //   {
  //   AboutMe: new ko.observable(""),
  //   Address: new ko.observable(""),
  //   GPA: new ko.observable(""),
  //   Grade: new ko.observable(""),
  //   Hoqoq: new ko.observable(""),
  //   Major: new ko.observable(""),
  //   Marriage: new ko.observable(""),
  //   MilitaryService: new ko.observable(""),
  //   RegDate: new ko.observable(""),
  //   University: new ko.observable(""),
  //   city: new ko.observable(""),
  //   email: new ko.observable(""),
  //   favoriteJob: new ko.observable(""),
  //   gender: new ko.observable(""),
  //   lastName: new ko.observable(""),
  //   name: new ko.observable(""),
  //   phoneNumber: new ko.observable(""),
  //   skills: new ko.observable(""),
  // },

  toast: function (id) {
    // Show Message For User //
    document.getElementById(id).classList.remove("hidden");
    // Hide the toast after 5 seconds (5000ms)
    // you can set a shorter/longer time by replacing "5000" with another number
    setTimeout(function () {
      document.getElementById(id).classList.add("hidden");
    }, 7000);
  },

  //Get Data For Show CV By DataBase Search //
  getData: async () => {
    const BASE_URL = "http://localhost/servicebus/run";
    const Data = JSON.stringify([
      { Name: "name", Value: CV.firstName() },
      { Name: "lastName", Value: CV.lastName() },
    ]);

    try {
      CV.toast("wellcom");
      const { data } = await axios.post(`${BASE_URL}/GetData`, Data);
      CV.CVDataRecieve(JSON.parse(data)[0]);
      console.log(CV.CVDataRecieve());
    } catch (error) {
      console.log(error);
      CV.toast("notExist");
    }
  },
};

ko.applyBindings(CV);
