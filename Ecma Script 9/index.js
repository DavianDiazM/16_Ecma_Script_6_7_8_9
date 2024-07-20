//Decontruccion (TIZA PARA RECOGER SOLO ELEMENTOS QUE NECESITO)
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

let {name, ...all} = obj;
console.log(name, all)

const obj2 = {
    name: 'Oscar',
    age: 32
}

const obj3 = {
    ...obj2,
    country: 'MX'
}

//Sabe cuando a terminado el llamado de una funcion
const hellolWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ?resolve ('Hello World')
            :reject (new Error('Test error'))
    })
}

hellolWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))       //Se ejecuta cuando finaliza la promesa