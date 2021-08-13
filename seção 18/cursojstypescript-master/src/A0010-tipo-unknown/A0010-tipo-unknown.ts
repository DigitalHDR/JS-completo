// let x: unknown;

// x = 100;
// x = 'Luiz';
// x = 900;
// x = 10;
// const y = 800;

// if (typeof x === 'number') console.log(x + y);

// // Module mode
// export default 1;
//todo =====================================================
// let x: any

// x = 100
// x = 'Lucas'
// x = 900
// x = '10'
// const y = 800

// console.log(x + y)
//?     10800
//todo =====================================================
// let x: unknown

// x = 100
// x = 'Lucas'
// x = 900
// x = 10
// const y = 800

// if (typeof x === 'number') console.log(x + y)
//?     810
//?     perceba que da certo mesmo x = 'Lucas', sendo string
//?     isso porque o typescript percebe que mesmo não estando
//?     entre string será string do mesmo jeito

//?     perceba que x = 10 erá string, aqui nos tiramos as aspas
//?     pois se não da erro, pois x deve ser 100% string
//!     UNKNOWN FORÇA VC A FAZER A CHECAGEM PRA VER SE ESTÁ TUDO CERTO
