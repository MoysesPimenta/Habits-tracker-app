const form = document.querySelector("#formHabits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', registerDayButtonIsClicked)
form.addEventListener("change", save)

function registerDayButtonIsClicked() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
     
    
    if (dayExists){
            alert("We've updated your activities")
            return
        }
            nlwSetup.addDay(today)
            alert("Good to see you, now please add today's done activities ✅")

}

function save() {
    localStorage.setItem("NLWSetupHabitsDailySelection", JSON.stringify(nlwSetup.data))
    console.log(nlwSetup.data)
}

const data = JSON.parse(localStorage.getItem("NLWSetupHabitsDailySelection")) || {}
nlwSetup.setData(data)
nlwSetup.load()