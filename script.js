window.addEventListener("DOMContentLoaded", init)

function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/10WsunyqoUN_-7VY_UIZcXW3kQdpq2t5ETf1WwyNlT7c/edit?usp=sharing',
        simpleSheet: true,
        callback: showData
    })
}

function showData(data) {
    const calendar = document.getElementById('calendar')

    data.forEach(event => {
        const div = document.createElement('div')
        div.className = 'event'
        div.innerHTML = `
            <strong>${event.Название}</strong><br>
            ${event.Тип}<br>
            ${event['Дата начала']} - ${event['Дата конца']}
            `

        calendar.appendChild(div)
    })
}