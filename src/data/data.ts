import data from './data.json';

const donne = data

let dataforborder: any = []

for (let i=0; i<donne.length; i++){
    dataforborder.push({name: donne[i].name, alphas3Code: donne[i].alpha3Code})
}

export default dataforborder