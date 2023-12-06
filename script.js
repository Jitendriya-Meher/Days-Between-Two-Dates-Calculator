
const submit = document.querySelector("#submit");
const output = document.querySelector(".output");


submit.addEventListener("click", () =>{
    const date1 = new Date(document.querySelector("#date-1").value);
    const date2 = new Date(document.querySelector("#date-2").value);

    // console.log(date1,date2);

    // check if the iputs are valid or not 

    if( date1.getTime() && date2.getTime()){
        // calculate the diff
        let diff = (date2.getTime() - date1.getTime());

        console.log(diff);

        if( diff < 0 ){
            let temp = document.querySelector("#date-1").value;
            document.querySelector("#date-1").value = document.querySelector("#date-2").value;
            document.querySelector("#date-2").value = temp;
        }

        // conver it to number of days
        const days = Math.abs(diff) / (1000*24*60*60);
        console.log(days);

        output.innerHTML = `
            Difference between the two dates is <span>${days}</span> days
        `;
    }
    else{
        output.innerHTML = `Please Select a valid date`;
    }

});