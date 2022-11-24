//ViewModel_1//

const CV = {
  firstName: ko.observable("نام"),
  lastName: ko.observable("نام خانوادگی"),
  CVDataRecieve: ko.observableArray(),
  fullName: ko.observable(""),
  
  toast: function (id) {
    // Show Message For User //
    document.getElementById(id).classList.remove("hidden");
    // Hide the toast after 5 seconds (5000ms)
    // you can set a shorter/longer time by replacing "5000" with another number
    setTimeout(function () {
      document.getElementById(id).classList.add("hidden");
    }, 5000);
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
      // if (CVDataRecieve) {
        //   CV.fullName = ko.computed(function () {
      //     return CV.CVDataRecieve.name() + " " + CV.CVDataRecieve.lastName();
      //   });
      // }

      console.log(CV.CVDataRecieve.fullName);
      console.log(CV.CVDataRecieve());
    } catch (error) {
      console.log(error);
      CV.toast("notExist");
    }
  },
};

CV.fullName = ko.computed(function () {
  return CV.CVDataRecieve.name() + " " + CV.CVDataRecieve.lastName();
});

ko.applyBindings(CV);
