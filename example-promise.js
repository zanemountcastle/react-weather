// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback ('Philidelphia', function(err, temp) {
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philidelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })



//Challenge Area
function addPromise (a,b){
  return new Promise(function(resolve, reject){
    if (typeof a==='number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('A & b need to be numbers');
    }
  });
}

addPromise(1,2).then(function(result){
  console.log('promise success', result);
}, function(err){
  console.console.log('promise error', err);
});

addPromise('hi',2).then(function(result){
  console.log('This shouldnt be here');
}, function(err){
  console.log('This is correct', err);
});
