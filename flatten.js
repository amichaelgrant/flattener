/**
  Nested Array flattener JS
  @author amike0140
*/

function flatten(inputs){
  if(!inputs) throw new Error('Input array must be given!');
  if(!Array.isArray(inputs))
    throw new TypeError('Not an array');

  let result = [];

  function inner (arrs){
    for(let i = 0; i < arrs.length; i++){
      if(Array.isArray(arrs[i])){
        inner(arrs[i]);
      } else {
        result.push( arrs[i] );
      }
    };
  };

  inner(inputs);
  return result;
};

const nestedDeep = [
  [
    [
      [
        [
          0,
          [
            1,
            [
              2,
              [
                3,
                [
                  4,
                  [5]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

// Uncomment a test to run the specific test

// console.log("[[1,2,[3]],4] => ", flatten([[1,2,[3]],4]));
// console.log("[1,2,[3],4] => ", flatten([1,2,[3],4]));
// console.log("[[1,2,[3,[4,[5]],6],7],8] => ", flatten([[1,2,[3,[4,[5]],6],7],8]));
// console.log("[[[1,[2]],[[3]],[]],[[4]]] => ", flatten([[[1,[2]],[[3]],[]],[[4]]]));
// console.log("nestedDeep => ", flatten(nestedDeep));
//
// const longArray = new Array(1000000).fill(nestedDeep);
// console.log("longArray => ", flatten(longArray));

//1000000 x 1000000 x 6 if you have the memory to support it//
//If you need to process that much data in memory you might as well
//just do it in smaller chunks, way more effective

// const longArray = new Array(1000000).fill(nestedDeep);
// const longArrayOflongArray = new Array(1000000).fill(longArray);
// console.log("longArrayOflongArray => ", flatten(longArrayOflongArray));

// console.log("Empty input => ", flatten());
// console.log("Null input => ", flatten(null));
// console.log("Undefined input => ", flatten(undefined));
// console.log("Object input => ", flatten({}));
// console.log("None array input => ", flatten(1));
