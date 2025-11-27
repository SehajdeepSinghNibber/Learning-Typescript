//regular function annotations

function addOne(num: number){
  return num + 1;
}   

const result=addOne(10);
console.log(result);
console.log(addOne(5));

//Arrow function annotations

const double=(x: number, y: number)=> x*y;

const res=double(2,10)
console.log(res)