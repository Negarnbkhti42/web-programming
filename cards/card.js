let source_input = document.getElementById("source-input")
let source_option = document.getElementById("source-option")

source_input.addEventListener("focus", ()=>{
    source_option.hidden=false;
    CITIES.forEach((city)=>{
        let option = document.createElement("div")
        option.innerHTML = city
        source_option.appendChild(option)
    })
})


source_input.addEventListener((event)=>{

    source_option.innerHTML=""

    let value = event.target.value
    let filterdCity=[]
    console.log(value)
    CITIES.forEach((city)=>{
        if(city.includes(value)){
            filterdCity.push(city)
        }
    })

    console.log(filterdCity)

    filterdCity.forEach((city)=>{
        let option = document.createElement("div")
        option.innerHTML = city
        source_option.appendChild(option)
    })


})


