
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
    aboutMe: ko.observable(""),
    favorite: ko.observable(""),
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
    };
    
    const  Data = ko.toJSON([
         { Name: "name", Value: form.firstName },
         { Name: "lastName", Value: form.lastName },
         { Name: "gender", Value: form.sexuality },
         { Name: "Marriage", Value: form.Maritalstatus },
         { Name: "MilitaryService", Value: form.MilitaryService },
         { Name: "city", Value: form.city },
         { Name: "Hoqoq", Value: form.right },
         { Name: "favoriteJob", Value: form.favorite },
         { Name: "Grade", Value: form.Grade },
         { Name: "Major", Value: form.Major },
         { Name: "University", Value: form.univercity },
         { Name: "phoneNumber", Value: form.phone },
         { Name: "Address", Value: form.Address },
         { Name: "AboutMe", Value: form.aboutMe },
         { Name: "skills", Value: form.skills },
         { Name: "GPA", Value: form.GPA },
        ]);

        const BASE_URL = "http://192.168.100.152/servicebus/run";
    
    const POST = async () => {
        await axios.post(`${BASE_URL}/PostData`, Data)
            .then((response) => {
                // console.log(response.status);  
                new Snackbar({
                    message: "رزومه شما با موفقیت ساخته شد",
                    dismissible: true,
                    timeout:5000,
                }); 
            }).catch((err) => {
                console.log(err.message);
                new Snackbar({
                    message: "به دلیل بروز خطا عملیات ناموفق بود",
                    timeout:5000,
                    status: error,
                });
            });
    };          
    

    

   
    