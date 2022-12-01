let paymentButton = document.getElementById("button1")

// const pay = () => {
//     Instamojo.open('https://test.instamojo.com/@fahej28047')
// }

function onButtonClick() {
    Instamojo.open('https://test.instamojo.com/@fahej28047');
  }

let form = document.querySelector("#registration")
        form.addEventListener('submit', (e)=> {
            e.preventDefault()
            document.querySelector("#sub").value = "Submitting...."
            let data = new FormData(form)
            fetch('https://script.google.com/macros/s/AKfycbx9O_22q-Dw-1IVOYHfsw1tezrYPlbDqeA4owW4FIqm1djgrd-bYeF0B2AlWXzyezMC2w/exec', {
                method: "POST",
                body: data
            })
                .then(res => res.text())
                .then(data => {
                    document.querySelector("#msg").innerHTML=data
                    document.querySelector("#sub").value="Submit"
                })
                .then(() => {
                    form.reset()
                    setTimeout(function(){document.querySelector("#msg").innerHTML=""}, 2000)
                })
        })

       paymentButton.addEventListener("click", onButtonClick);