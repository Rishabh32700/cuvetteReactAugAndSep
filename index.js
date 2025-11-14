function hello(){
  console.log("hii i am inside hello");
  return hello()
}

const res = hello()
console.log(res());
