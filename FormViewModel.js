// ViewModel
const form = {
  firstName: ko.observable(""),
  lastName: ko.observable(""),
  email: ko.observable(""),
  phone: ko.observable(""),
  sexuality: ko.observable(false), ///////bolean
  Maritalstatus: ko.observable(false), //////bolean
  MilitaryService: ko.observable(""), ////selected
  city: ko.observable(""), //////selected
  skills: ko.observable(""),
  Grade: ko.observable(""), ////selected
  Major: ko.observable(""),
  univercity: ko.observable(""),
  GPA: ko.observable(""),
  DateOfBirth: ko.observable(""),
  right: ko.observable(""), //////selected
  GPA: ko.observable(""),
  Address: ko.observable(""),
  aboutMe: ko.observable(""),
  favorite: ko.observable(""),

  optionsMilitaryService: ko.observableArray([
    "",
    "انجام شده",
    "معافیت تحصیلی",
    "معافیت دايم",
    "مشمول",
  ]),
  optionsCity: ko.observableArray([
    "تهران",
    "مشهد",
    "سنندج",
    "ایلام",
    "اهواز",
    "شاهرود",
    "کرج",
    "زنجان",
  ]),
  optionRightsRequested: ko.observableArray([
    "2 تا 3 میلیون تومان",
    "3 تا 4 میلیون تومان",
    "4 تا 5 میلیون تومان",
    "5 تا 6 میلیون تومان",
    "بر اساس قانون کار",
  ]),
  optionGrade: ko.observableArray([
    "زیر دیپلم",
    "دیپلم",
    "کاردانی",
    "کارشناسی",
    "کارشناسی ارشد",
    "دکتری",
  ]),
};

function showToast(id) {
  document.getElementById(id).classList.remove("hidden");
  // Hide the toast after 5 seconds (5000ms)
  // you can set a shorter/longer time by replacing "5000" with another number
  setTimeout(function () {
    document.getElementById(id).classList.add("hidden");
  }, 5000);
}

const BASE_URL = "http://192.168.100.152/servicebus/run";

const POST = async () => {
  const Data = ko.toJSON([
    { Name: "name", Value: form.firstName() },
    { Name: "lastName", Value: form.lastName() },
    { Name: "gender", Value: form.sexuality() },
    { Name: "Marriage", Value: form.Maritalstatus() },
    { Name: "MilitaryService", Value: form.MilitaryService() },
    { Name: "city", Value: form.city() },
    { Name: "Hoqoq", Value: form.right() },
    { Name: "favoriteJob", Value: form.favorite() },
    { Name: "Grade", Value: form.Grade() },
    { Name: "Major", Value: form.Major() },
    { Name: "University", Value: form.univercity() },
    { Name: "phoneNumber", Value: form.phone() },
    { Name: "Address", Value: form.Address() },
    { Name: "AboutMe", Value: form.aboutMe() },
    { Name: "skills", Value: form.skills() },
    { Name: "GPA", Value: form.GPA() },
    { Name: "email", Value: form.email() },
  ]);


  await axios
    .post(`${BASE_URL}/PostData`, Data)
    .then(() => {
      showToast("success");
    })
    .catch((err) => {
      console.log(err.message);
      showToast("faild");
    });
};

ko.applyBindings(form);
