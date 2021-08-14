// type MapStringsCallback = (item: string) => string;

// export function mapStrings(
//   array: string[],
//   callbackfn: MapStringsCallback,
// ): string[] {
//   const newArray: string[] = [];

//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     newArray.push(callbackfn(item));
//   }

//   return newArray;
// }

// const abc = ['a', 'b', 'c'];
// const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
// console.log(abc);
// console.log(abcMapped);
//todo =====================================================
// function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
//   const newArray: string[] = []

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callbackfn(array[i]))
//   }

//   return newArray
// }

// const abc = ['a', 'b', 'c']
// const abcMapped = mapStrings(abc, function (item: any) {
//   return item.toUpperCase()
// })
// console.log(abcMapped)
//?     [ 'A', 'B', 'C' ]
//todo =====================================================
// function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
//   const newArray: string[] = []

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callbackfn(array[i]))
//   }

//   return newArray
// }

// const abc = ['a', 'b', 'c']
// const abcMapped = mapStrings(abc, function (item: any) {
//   return item.toUpperCase()
// })
// console.log(abc)
// console.log(abcMapped)
//?     [ 'a', 'b', 'c' ]
//?     [ 'A', 'B', 'C' ]
//todo =====================================================
type MapStringsCallback = (item: string) => string

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callbackfn(array[i]))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())
console.log(abc)
console.log(abcMapped)
