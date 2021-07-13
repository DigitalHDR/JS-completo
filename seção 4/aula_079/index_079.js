// function recursiva(max) {
//     if (max >= 5) return
//     max++
//     console.log(max)
//     recursiva(max)
// }

// recursiva(0)
//?         1
//?         2
//?         3
//?         4
//?         5
//todo =====================================================
// function recursiva(max) {
//     console.log(max)
//     if (max >= 5) return
//     max++
//     recursiva(max)
// }

// recursiva(0)
//?         0
//?         1
//?         2
//?         3
//?         4
//?         5
//todo =====================================================]
function recursiva(max) {
    console.log(max)
    if (max >= 5) return
    max++
    recursiva(max)
}

recursiva(0)