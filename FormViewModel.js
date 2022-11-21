const axios = required('axios');

// ViewModel
const form = {
    firstName: ko.observable(""),
    lastName: ko.observable(""),
    email: ko.observable(""),
    phone: ko.observable(""),
    sexuality: ko.observable(false),///////bolean
    Maritalstatus: ko.observable(false),//////bolean
    MilitaryService: ko.observable(""),////selected
    city: ko.observable(""),//////selected
    skills: ko.observable(""),
    Grade: ko.observable(""),////selected
    Major: ko.observable(""),
    univercity: ko.observable(""),
    GPA: ko.observable(""),
    DateOfBirth: ko.observable(""),
    right: ko.observable(""),//////selected
    GPA: ko.observable(""),
    Address: ko.observable(""),
    optionsMilitaryService: ko.observable([
        "",
        "انجام شده",
        "معافیت تحصیلی",
        "معافیت دايم",
        "مشمول"
    ]),  
    optionsCity: ko.observable([
            "",
            "تهران",
            "مشهد",
            "سنندج",
            "ایلام",
            "اهواز",
            "شاهرود",
            "کرج",
            "زنجان"
        ]),
    optionRightsRequested: ko.observable([
            "",
            "2 تا 3 میلیون تومان",
            "3 تا 4 میلیون تومان",
            "4 تا 5 میلیون تومان",
            "5 تا 6 میلیون تومان",
            "بر اساس قانون کار"
    ]),
    optionGrade: ko.observable([
        "",
        "زیر دیپلم",
        "دیپلم",
        "کاردانی",
        "کارشناسی",
        "کارشناسی ارشد",
        "دکتری"
    ]),

    Data: ko.toJSON({
        firstName: ko.observable(""),
        lastName: ko.observable(""),
        email: ko.observable(""),
        phone: ko.observable(""),
        sexuality: ko.observable(false),///////bolean
        Maritalstatus: ko.observable(false),//////bolean
        MilitaryService: ko.observable(""),////selected
        city: ko.observable(""),//////selected
        skills: ko.observable(""),
        Grade: ko.observable(""),////selected
        Major: ko.observable(""),
        univercity: ko.observable(""),
        GPA: ko.observable(""),
        DateOfBirth: ko.observable(""),
        right: ko.observable(""),//////selected
        GPA: ko.observable(""),
        Address: ko.observable(""),   
    }),

    BASE_URL: "http://localhost/servicebus/run",
    Post : async (body) => {
        alert("Your CV create successfully");
        const response = await axios.post(`${BASE_URL}/ContactUs`, body);
        return response.data;
    }

};

 

