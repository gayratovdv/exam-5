document.getElementById("myform").addEventListener("submit", function name(even) {
    even.preventDefault();

    const modemId = document.getElementById("firstInput").value;
    const password = document.getElementById("secondInput").value;

    if (modemId === "gayratov" && password === "78900") {
        alert("Siz ro'yhatdan o'ttingiz!😁")

        const addQuestionElement = document.createElement("h1")
        addQuestionElement.innerHTML = "Savol qo'shish uchun ushbu tugmani bosing!"
        const addQuestionbtn = document.createElement("button")
        addQuestionbtn.innerHTML = "Savol qo'shish"
        addQuestionbtn.className = "button"
        document.body.appendChild(addQuestionElement)
        addQuestionElement.style.textAlign = 'center';
        addQuestionElement.style.marginTop = '50px'
        addQuestionElement.style.fontFamily = 'sans-serif'
        addQuestionElement.style.fontWeight = '700'
        addQuestionbtn.style.textAlign = 'center';
        document.body.appendChild(addQuestionbtn)

        document.querySelector(".button").addEventListener("click", function text() {

            let test = prompt("Savolingizni kiriting");

            const newElement = document.createElement("p")
            newElement.innerHTML = test;
            document.body.appendChild(newElement)

            newElement.style.textAlign = 'center';
            newElement.style.marginTop = '20px';
            newElement.style.fontSize = '50px';
            newElement.style.color = 'black';
            newElement.style.fontFamily = 'sans-serif'
            newElement.style.fontWeight = '700'

            
        });
    } else {
        alert("Username yoki password xato!😔")
    }

    firstInput.value = "";
    firstInput.value = "";
});