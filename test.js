function doJob(x,sec) {
  return new Promise(resolve => {
  console.log('Start: ' + x);
    setTimeout(() => {
        console.log('End: ' + x);
      resolve(x);
    }, sec *1000);
  });
}

// async function SerialFlow(){
 
//   let result1 = await doJob(1,1);
//   let result2 = await doJob(2,2);
//   let result3 = await doJob(3,3);
   
//   let finalResult = result1+result2+result3;
//   console.log(finalResult);
//   return finalResult;
//   }
   
//   SerialFlow();

// async function serialFlow2(arr) {
//   let final = 0;
//   for(let i = 0; i < arr.length; i++) {
//     let result = await doJob(arr[i], arr[i]);
//     final += result;
//   }
//   console.log('final', final);
  
// }

// serialFlow2([1, 2, 3])

// async function serialFlow3(arr) {
//   let result = await arr.reduce(async (total, item) => {
//     return await total + await doJob(item, item)
//   }, 0)
//   console.log('result', result);
  
// }

// serialFlow3([1, 2, 3]);

// async function ParallFlow(){
 
//   let result1 = doJob(1,1);
//   let result2 = doJob(2,2);
//   let result3 = doJob(3,3);
   
//   let finalResult = await result1+await result2+ await result3;
//   console.log(finalResult);
//   return finalResult;
//   }
   
//   ParallFlow();

// async function ParallMapFlow(arr) {
//   let result = arr.map(async(item) => await doJob(item, item));
  
//   let final = 0;
//   for(let val of result) {
//     final += await val
//   }
//   console.log('final', final);
  
  
// }

// ParallMapFlow([1, 2, 3]);

