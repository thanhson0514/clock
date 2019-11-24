let count = 0
let saveTime = []
document.querySelector('#boxTime').addEventListener('submit', (e) => {
    e.preventDefault()
        // get value time from input 
    const hour = document.querySelector('#hours').value
    const minutes = document.querySelector('#minutes').value
    const seconds = document.querySelector('#seconds').value

    // save time array
    const save = `${hour.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
    saveTime.push(String(save.split(':')))

    const div = document.createElement('div')
    const h2 = document.createElement('h2')

    h2.textContent = `Alert: ${save}`

    document
        .querySelector('#show')
        .appendChild(h2)
    console.log(saveTime)
    showTime(saveTime)
})

console.log(saveTime)
showTime(saveTime)

function showTime(saveTime) {
    setInterval(() => {

        let date = new Date()

        // setup time
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        let displayTime = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`

        document.querySelector('#clock').innerHTML = displayTime

        saveTime.forEach((e) => {
            if (e === String(displayTime.split(':'))) {
                document.querySelector('#audio').play()
                alert('Dậy !!!')
            }
        })
    }, 1000)
}