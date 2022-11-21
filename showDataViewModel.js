const BASE_URL = "http://localhost/servicebus/run";

const Data = JSON.stringify([   
 { Name: "lastName", Value: "غفوری" },
 { Name: "phoneNumber", Value: "" }
]);
// console.log(Data);


document.getElementById("Btn").addEventListener("click", async () => {
   Snackbar.show({pos: 'top-center', text: "رزومه شما آماده مشاهده است"});
    event.preventDefault();
        await axios.post(`${BASE_URL}/GetData`, Data)
            .then((response) => {
               //   console.log(response.data);
             }).catch((err) => {
                  //   console.log(err);
                    Snackbar.show({pos: 'top-center', text: `متاسفانه خطای ${err.message} رخ داده است`});
            });
});

