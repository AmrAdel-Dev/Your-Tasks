window.onload = function(){
    if (!window.localStorage.getItem('id')) {
        window.localStorage.id = 0
    }
}



let tasksTitle = document.getElementById('tasksTitle')
let clearBtn = document.getElementById('clearBtn')



clearBtn.onclick = function(){
    window.localStorage.clear()
    document.body.children[0].children[1].remove()
    window.localStorage.setItem('id', 0)
    let div = document.createElement('div')
    div.className = 'tasks'
    let p = document.createElement('p')
    let pText = document.createTextNode('The Task That You Should To Do')
    p.appendChild(pText)
    p.id = 'tasksTitle'
    let btn = document.createElement('button')
    let btnText = document.createTextNode('Clear All')
    btn.appendChild(btnText)
    btn.id = 'clearBtn'
    div.appendChild(p)
    div.appendChild(btn)
    document.body.children[0].appendChild(div)
}



let task = document.querySelector('.input')
let addBtn = document.querySelector('.add')
let tasks = document.querySelector('.tasks')

for (let i = 0; i < +window.localStorage.id; i++) {
    let numDiv = document.createElement('div')
    let numDivP = document.createElement('p')
    let numDivPText = document.createTextNode(`${i + 1}`)
    numDivP.appendChild(numDivPText)
    numDiv.appendChild(numDivP)
    numDiv.classList.add('numDiv')
    let p = document.createElement('p')
    let pText = document.createTextNode(`${window.localStorage[`pText${i}`]}`)
    p.appendChild(pText)
    let div = document.createElement('div')
    div.appendChild(numDiv)
    div.append(p)
    div.id = i
    div.className = 'task'
    document.querySelector('.tasks').appendChild(div)
    if (+window.localStorage.id >= 1) {
        tasksTitle.style.display = 'inline'
        setTimeout(function(){
            clearBtn.style.display = 'inline'
        }, 3000)
    } 
    if (+window.localStorage.id == 0) {
        tasksTitle.style.display = 'none'
        clearBtn.style.display = 'none'
    }
}



addBtn.onclick = function(){
    if (task.value !== '' && task.value.split('').length <= 35) {
        document.getElementById('taskError1').style.cssText = 'display: none; opacity: 0;'
        document.getElementById('taskError2').style.cssText = 'display: none; opacity: 0;'
        let div = document.createElement('div')
        let p = document.createElement('p')
        let pText = document.createTextNode(`${task.value}`)
        let numDiv = document.createElement('div')
        let numDivP = document.createElement('p')
        let numDivPText = document.createTextNode(`${+window.localStorage.id + 1}`)
        numDivP.appendChild(numDivPText)
        numDiv.appendChild(numDivP)
        numDiv.classList.add('numDiv')
        p.appendChild(pText)
        p.id = window.localStorage.id
        div.appendChild(numDiv)
        div.appendChild(p)
        div.id = window.localStorage.id
        div.classList.add('task')
        document.querySelector('.tasks').appendChild(div)
        window.localStorage.setItem(`pText${window.localStorage.id}`,`${p.innerHTML}`)
        window.localStorage.id = ++window.localStorage.id
    } else if (task.value.split('').length > 35){
        document.getElementById('taskError1').style.cssText = 'display: block; opacity: 1;'
    } else if (task.value === '') {
        document.getElementById('taskError2').style.cssText = 'display: block; opacity: 1;'
    }
    if (+window.localStorage.id >= 100) {
        window.localStorage.clear()
        document.body.children[0].children[1].remove()
        window.localStorage.id = 0
        let div = document.createElement('div')
        div.classList.add('tasks')
        document.body.children[0].appendChild(div)
    }
    if (+window.localStorage.id >= 1) {
        tasksTitle.style.display = 'inline'
        setTimeout(function(){
            clearBtn.style.display = 'inline'
        }, 3000)
    } 
    if (+window.localStorage.id == 0) {
        tasksTitle.style.display = 'none'
        clearBtn.style.display = 'none'
    }
}