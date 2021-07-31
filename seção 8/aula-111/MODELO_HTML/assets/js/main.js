//?         Essa aula é apenas educasional pois com axios faz tudo bem
//?         mais simples e rapido






//! #################################################################










//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Forma antiga | com callback
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const request = obj => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(obj.method, obj.url, true)
//     xhr.send()

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText)
//         } else {
//             obj.error(xhr.statusText);
//         }
//     })
// }

// document.addEventListener('click', e => {
//     e.preventDefault()
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         carregaPagina(el);
//     }
// })

// function carregaPagina(el) {
//     const href = el.getAttribute('href')
    
//     request({
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response)
//         },
//         error(errorText) {
//             console.log(errorText)
//         }
//     })
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado')
//     resultado.innerHTML = response
// }
//?         Ver no console.log do google chrome
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | forma nova | com Promise
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(obj.method, obj.url, true)
//         xhr.send()
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText);
//             }
//         })
//     })
// }

// document.addEventListener('click', e => {
//     e.preventDefault()
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         carregaPagina(el);
//     }
// })

// function carregaPagina(el) {
//     const href = el.getAttribute('href')
    
//     const objConfig = {
//         method: 'GET',
//         url: href
//     }

//     request(objConfig).then(response => {
//         carregaResultado(response)
//     }).catch(error => console.log(error))
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado')
//     resultado.innerHTML = response
// }
//?         Ver no console.log do google chrome
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | forma nova | com async O MELHOR JEITO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', e => {
    e.preventDefault()
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    
    const objConfig = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(objConfig)
        carregaResultado(response)
    } catch(e) {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}