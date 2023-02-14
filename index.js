// console.log("opp")
let a=new Promise((resolve,reject)=>{
  // console.log("a in a")
  resolve("a");
  reject("a rej");
})
let b=new Promise((resolve,reject)=>{
  // console.log("b")
  resolve("b");
  // resolve("c")
  reject("b");
})
a.then(()=>{return b})
.then((e)=>{
  console.log("abc",e)
})
.then((e)=>{
  console.log("abc",e)
})
.then((e)=>{
  console.log("abc",e)
})
.catch((x)=>{console.log("x",x)})
.catch((x)=>{console.log("x",x)})
// b.catch((e)=>{
//   console.log("its rejected b",e)
// })
// .then((e)=>{
//   console.log("resolved2",e)
// })

//learning
//if .then() run it mean promoise resolved so .catch() not work
// .then() resolved work once after this only fuction run but inside .then() becuse first .then() not returned
//example  is this
a.then(()=>{return b})
.then((e)=>{
  console.log("abc",e)
})
.then((e)=>{
  console.log("abc",e)
})
.then((e)=>{
  console.log("abc",e)
})
.catch((x)=>{console.log("x",x)})
.catch((x)=>{console.log("x",x)})
//q why the .then() work mutiple because first .then() not  returned any promise,but since it .then() run many time then why and what the reason