
let input = Array.from(document.querySelectorAll(".inner-input"));
console.log(input);
  function myFunction(){
     alert("thanks for your information!!!")
     //console.log("hi");
};
let button = document.querySelector(".butt");
// document.addEventListener("keydown",function(e){
//  // console.log(e);
//  if(e.key==='Enter'){
//   myFunction();
//   console.log("hi");
//  }
// });
if(input.value===''){
  button.stopPropagation()

}else{
  button.addEventListener("click",myFunction);
}
