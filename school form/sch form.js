// function removeAll() {
//   array = [];
//   arrayfather = [];
//   section1 = [];
//   section2 = [];
//   address = [];
//   caty = [];
//   region = [];
//   code = [];
//   country = [];
//   phone = [];
//   mail = [];
// }
let array = [];
let arrayfather = [];
let section1 = [];
let section2 = [];
let address = [];
let caty = [];
let region = [];
let code = [];
let country = [];
let phone = [];
let mail = [];
let show1=[];

// function removeAll() {
//   array = [];
//   arrayfather = [];
//   section1 = [];
//   section2 = [];
//   address = [];
//   caty = [];
//   region = [];
//   code = [];
//   country = [];
//   phone = [];
//   mail = [];
// }



function submit() {
  const student = document.getElementById("student name").value;
  console.log(" st name =>", student);
  array.push(student);

  const fathername = document.getElementById("fath").value;
  arrayfather.push(fathername);
  console.log("f_name=>", fathername );

  const dob = document.getElementById("class").value;
  section1.push(dob);
  console.log("class=>", dob);

  const dob1 = document.getElementById("date").value;
  section2.push(dob1);
  console.log("dob=>", dob1);

  //   console.log(dob, dob1);

  const addr = document.getElementById("line").value;
  console.log("add=>", addr);
  address.push(addr);

  const city = document.getElementById("city").value;
  caty.push(city);
  console.log("city=>", city);

  const reg = document.getElementById("region").value;
  region.push(reg);
  console.log("regionn=>", reg);

  const postal = document.getElementById("postal").value;
  code.push(postal);
  console.log("postal=>", postal);

  const count = document.getElementById("country").value;
  country.push(count);
  console.log("country=>", count);

  const call = document.getElementById("phone").value;
  phone.push(call);
  console.log("phone=>", call);

  const email = document.getElementById("mail").value;
  mail.push(email);
  console.log("email=>", email);

  console.log(
    array,
    arrayfather,
    section1,
    section2,
    address,
    "city=>",
    caty,
    "regionn=>",
    region,
    "code=>",
    code,
    "country=>",
    country,
   
  );
 
}

 let show=document.querySelector(".submit");

show.addEventListener("click" , (e) =>{
  e.preventDefault()
  // console.log('ddddd')
  document.querySelector('#show').innerHTML = `${array}`
  document.querySelector('#showfather').innerHTML = `${arrayfather}`
  document.querySelector('#apply').innerHTML = `${section1}`
  document.querySelector('#dob').innerHTML = `${section2}`
  document.querySelector('#address1').innerHTML = `${address}`
  document.querySelector('#city1').innerHTML = `${caty}`
  document.querySelector('#region').innerHTML = `${region}`
  document.querySelector('#postal1').innerHTML = `${code}`
  document.querySelector('#country1').innerHTML = `${country}`
  document.querySelector('#phone1').innerHTML = `${phone}`
  document.querySelector('#mail1').innerHTML = `${mail}`
  
})

console.log(show);


function removeAll() {
  array = [];
  arrayfather = [];
  section1 = [];
  section2 = [];
  address = [];
  caty = [];
  region = [];
  code = [];
  country = [];
  phone = [];
  mail = [];

// this section is just for show remove all data 
// mtlb ye is liye he k pehle array khali ho rh tha ab array khali hone k sath khali  show bhi ho rh he ...

  document.querySelector('#show').innerHTML = `${array}`
  document.querySelector('#showfather').innerHTML = `${arrayfather}`
  document.querySelector('#apply').innerHTML = `${section1}`
  document.querySelector('#dob').innerHTML = `${section2}`
  document.querySelector('#address1').innerHTML = `${address}`
  document.querySelector('#city1').innerHTML = `${caty}`
  document.querySelector('#region').innerHTML = `${region}`
  document.querySelector('#postal1').innerHTML = `${code}`
  document.querySelector('#country1').innerHTML = `${country}`
  document.querySelector('#phone1').innerHTML = `${phone}`
  document.querySelector('#mail1').innerHTML = `${mail}`
}


// document.querySelector("tab")



