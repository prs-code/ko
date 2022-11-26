// ViewModel //
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
    {
      Value: 3,
      Text: "در حال انجام",
    },
    {
      Value: 4,
      Text: "انجام شده",
    },
    {
      Value: 5,
      Text: "مشمول",
    },
    {
      Value: 6,
      Text: "معافیت دایم",
    },
    {
      Value: 7,
      Text: "معافیت تحصیلی",
    },
  ]),
  optionsCity: ko.observableArray([
    {
      Value: 8,
      Text: "تهران",
    },
    {
      Value: 9,
      Text: "مشهد",
    },
    {
      Value: 10,
      Text: "اهواز",
    },
    {
      Value: 11,
      Text: "ایلام",
    },
    {
      Value: 12,
      Text: "کردستان",
    },
    {
      Value: 13,
      Text: "کرج",
    },
    {
      Value: 14,
      Text: "خوزستان",
    },
    {
      Value: 15,
      Text: "سنندج",
    },
    {
      Value: 16,
      Text: "بجنورد",
    },
    {
      Value: 17,
      Text: "یزد",
    },
    {
      Value: 18,
      Text: "تبریز",
    },
    {
      Value: 19,
      Text: "شیراز",
    },
  ]),
  optionRightsRequested: ko.observableArray([
    {
      Value: 26,
      Text: "2 تا 3 میلیون تومان",
    },
    {
      Value: 27,
      Text: "3 تا 4 میلیون تومان",
    },
    {
      Value: 28,
      Text: "4 تا 5 میلیون تومان",
    },
    {
      Value: 29,
      Text: "5 تا 6 میلیون تومان",
    },
    {
      Value: 30,
      Text: "6 تا 7 میلیون تومان",
    },
    {
      Value: 31,
      Text: "بر اساس قانون کار",
    },
  ]),
  optionGrade: ko.observableArray([
    {
      Value: 20,
      Text: "زیر دیپلم",
    },
    {
      Value: 21,
      Text: "دیپلم",
    },
    {
      Value: 22,
      Text: "کاردانی",
    },
    {
      Value: 23,
      Text: "کارشناسی",
    },
    {
      Value: 24,
      Text: "کارشناسی ارشد",
    },
    {
      Value: 25,
      Text: "دکتری",
    },
  ]),

  toast: function (id) {
    document.getElementById(id).classList.remove("hidden");
    // Hide the toast after 5 seconds (5000ms)
    // you can set a shorter/longer time by replacing "5000" with another number
    setTimeout(function () {
      document.getElementById(id).classList.add("hidden");
    }, 5000);
  },

  POSTDATA: async () => {
    const BASE_URL = "http://192.168.100.152/servicebus/run";
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
      { Name: "DateOfBirth", Value: form.DateOfBirth() },
    ]);

    await axios
      .post(`${BASE_URL}/PostData`, Data)
      .then(() => {
        form.toast("success");
      })
      .catch((err) => {
        console.log(err.message);
        form.toast("faild");
      });

    console.log(JSON.parse(Data));
  },
};

ko.applyBindings(form);
