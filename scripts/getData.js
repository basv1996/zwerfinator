//import modules
import convertToString from './filters/convertToString.js'
import checkIfEmpty from './filters/checkIfEmpty.js'
import convertToLowerCase from './filters/convertToLowerCase.js'
import removeSpaces from './filters/removeSpaces.js'
import removeStripe from './filters/removeStripes.js'

let SoortColumn = "Soort" 

function parseData() {
    //fetch('../data/Onderzoek_Drankverpakkingen_2017-2021.json')
    fetch('../data/data_small.json') //collect the data
    .then(results => results.json()) //parse it to a JavaScript object
    .then(data => {
        return data.map(obj => {
            Object.keys(obj).forEach(key => {
                obj[key] = convertToString(obj[key]) //convert to string
                obj[key] = checkIfEmpty(obj[key]) //check if the entry is empty
                obj[key] = convertToLowerCase(obj[key]) //converteer the string to lowercase
                obj[key] = removeSpaces(obj[key]) //remove the white spaces
                obj[key] = removeStripe(obj[key]) //remove the stripes in the names
            })
            //console.log(obj)
            return obj
        })
    })
    .then(data => {
        return data.map(obj => {
            // Haal de waarde 'Wat is je oogkleur?'-key uit het object dat terugkomt uit de loop van data
            obj['Soort'] = convertToString(obj['Soort']);
            return obj
        })
    })
    .then(cleanData => {
        // In deze .then() kunnen we vervolgens iets doen met de data, bijvoorbeeld renderen in een DOM   
        cleanData.map((item) => {
            convertToString(cleanData, SoortColumn)
            // data123 = item[SoortColumn]
            // let count = {}
            // data123.forEach(function(i){
            //     count[i] = (count[i] || 0) + 1
            //     console.log("count: ", count)
            // })
                // let ptje = document.createElement('p')
                // let divje = document.createElement('div')
                // ptje.innerHTML = item.Soort
                // document.querySelector('#my_dataviz').appendChild(divje)
                // divje.appendChild(ptje)
            // console.log(item[SoortColumn])
            // console.log(item)
            console.log(item.Soort)
            //console.log(typeof(item[SoortColumn])
            return item.Soort
        })
       
    })
    .catch(err => {
        console.log(err) // de .catch() vangt eventuele errors af die kunnen plaatsvinden
    })
}

parseData()