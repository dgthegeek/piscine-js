export function getArchitects(){
    let a = document.querySelectorAll('a')
    let span = document.querySelectorAll('span')
    return [Array.from(a), Array.from(span)]
}

export function getBonannoPisano(){
    let bonano = document.getElementById('BonannoPisano')
    let nonbonano = document.querySelectorAll('a:not(#BonannoPisano)')
    return [bonano, Array.from(nonbonano)]
}

export function getActive(){
    let active = document.getElementsByClassName('classical active')
    let nonactive = document.querySelectorAll('a:not(.active)')
    return [Array.from(active), Array.from(nonactive)]
}

export function getClassical(){
    let classicals = document.querySelectorAll('.classical')
    let nonclassicals = document.querySelectorAll('a:not(.classical)')
    return [Array.from(classicals), Array.from(nonclassicals)]
}
