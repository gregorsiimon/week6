const Userinput = document.querySelector("#textInput")
const Button = document.querySelector("#addBtn")
const Groceries_display = document.querySelector(".outputList")
let listofgroceries = []


Button.addEventListener("click", (event) =>  {
    const grocery = Userinput.value
    listofgroceries.push(grocery)

    if(grocery !== "") {
        Userinput.value = ""
        Groceries_display.innerHTML = ""
        
        listofgroceries.forEach(item => {
            const List_element = document.createElement("li")
            List_element.innerText = item
            Groceries_display.appendChild(List_element)
        })

    } else {
        console.log("Erorr.Blank input.")
    }

    
    event.preventDefault()
})