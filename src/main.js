const clock = () => {
    const time = new Date()

    // get hours, minutes, seconds
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    // get days, months, years
    const days = time.getDay()
    const dates = time.getDate()
    const months = time.getMonth()
    const years = time.getFullYear()

    document.querySelector('#hrs-mins').innerHTML = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}`
    document.querySelector('#secs').innerHTML = `${seconds.toString().padStart(2,0)}`

    // setup day
    let showDay = ''
    switch (days) {
        case 0:
            {
                showDay = 'Sun'
                break
            }
        case 1:
            {
                showDay = 'Mon'
                break
            }
        case 2:
            {
                showDay = 'Tue'
                break
            }
        case 3:
            {
                showDay = 'Wed'
                break
            }
        case 4:
            {
                showDay = 'Thu'
                break
            }
        case 5:
            {
                showDay = 'Fri'
                break
            }
        case 6:
            {
                showDay = 'Sat'
                break
            }
    }

    // setup month
    let showMonth = ''
    switch (months) {
        case 0:
            {
                showMonth = 'Jan'
                break
            }
        case 1:
            {
                showMonth = 'Feb'
                break
            }
        case 2:
            {
                showMonth = 'Mar'
                break
            }
        case 3:
            {
                showMonth = 'Apr'
                break
            }
        case 4:
            {
                showMonth = 'May'
                break
            }
        case 5:
            {
                showMonth = 'Jun'
                break
            }
        case 6:
            {
                showMonth = 'Jul'
                break
            }
        case 7:
            {
                showMonth = 'Aug'
                break
            }
        case 8:
            {
                showMonth = 'Sep'
                break
            }
        case 9:
            {
                showMonth = 'Oct'
                break
            }
        case 10:
            {
                showMonth = 'Nov'
                break
            }
        case 11:
            {
                showMonth = 'Dec'
                break
            }
    }

    // show screen 
    document.querySelector('#day-paragraph').innerHTML = `${showDay} ${dates} ${showMonth} ${years}`

}


setInterval(clock, 1000)