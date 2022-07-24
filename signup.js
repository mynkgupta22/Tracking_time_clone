let arr = JSON.parse(localStorage.getItem("signup")) || [];
let obj = {};

let body = document.querySelector("body");
let form = document.querySelector("form");
let x = window.matchMedia("(max-width:600px)")
form.addEventListener("submit", firstclick);
function firstclick(event) {
  event.preventDefault();
  obj = {
    email: form.email.value,
    pass: form.pass.value,
  };

  displaysecondpage();
  localStorage.setItem("firstarr", JSON.stringify(arr));
}

function displaysecondpage() {
  body.innerHTML = "";

  let maindiv = document.createElement("div");
  maindiv.setAttribute("class", "main");
  let leftdiv = document.createElement("div");
  leftdiv.setAttribute("class", "left");
  let rightdiv = document.createElement("div");
  
  

  rightdiv.setAttribute("class", "right");
  rightdiv.style.textAlign = "start";
  let progress = document.createElement("div");
  progress.setAttribute("id", "progressbar");
  let mybar = document.createElement("div");
  mybar.setAttribute("id", "bar");
  mybar.style.width = "80px";
  rightdiv.append(progress);
  progress.append(mybar);

  let image1 = document.createElement("img");
  image1.src = "https://pro.trackingtime.co/img/onboarding/JoinAccount.svg";
  body.append(maindiv);
  maindiv.append(leftdiv);
  leftdiv.append(image1);

  let title = document.createElement("h3");
//   if (rightdiv.matches){
//     title.style.padding = "50px";
//   }else{
    
//   }
  
  title.style.marginBottom = "0px";
  let spn1 = document.createElement("span");
  spn1.innerText = "TIME";
  spn1.style.fontWeight = "bold";
  title.innerText = "TRACKING";
  title.style.fontSize = "26px";
  title.append(spn1);
  title.style.marginTop = "150px";
  let headline = document.createElement("h4");
  headline.innerText = "Create your organization";
  headline.style.margin = "0px";
  headline.style.marginTop = "20px";
//   if (rightdiv.matches){
//     headline.style.paddingLeft = "50px";
//   }else{
//     headline.style.paddingLeft = "150px";
//   }
  
  

  headline.style.fontSize = "28px";
  let ptag = document.createElement("p");
  ptag.innerText = "Set up your company in TrackingTime.";
  
  let form1 = document.createElement("form");
  
  let label1 = document.createElement("label");
  label1.innerText = "Organization name";
  label1.setAttribute("class", "labform");
  let input1 = document.createElement("input");
  input1.setAttribute("id", "org");

  let brc = document.createElement("br");
  let brc1 = document.createElement("br");
  input1.setAttribute("type", "text");
  form1.append(label1);
  form1.appendChild(brc);
  form1.append(input1);
  form1.appendChild(brc1);

  let backbtn = document.createElement("a");
  backbtn.innerText = "Back";
  backbtn.style.fontSize = "22px";
  backbtn.style.marginTop = "15px";
  let nextbtn = document.createElement("button");
  nextbtn.setAttribute("type", "button");
  nextbtn.innerText = "CONTINUE >";
  nextbtn.style.border = "0px";
  nextbtn.style.marginLeft = "30px";
  nextbtn.style.height = "40px";
  nextbtn.style.borderRadius = "5px";
  nextbtn.style.marginTop = "15px";
  nextbtn.addEventListener("click", function () {
    (obj.organization = form1.org.value), console.log(obj);

    thirdpage();
  });
  if (rightdiv.matches){
    rightdiv.style.marginTop = "30px";
    headline.style.paddingLeft = "50px";
    form1.style.paddingLeft = "50px";
    ptag.style.paddingLeft = "50px";
    title.style.paddingLeft = "50px";
  }else{
    rightdiv.style.marginTop = "70px";
    headline.style.paddingLeft = "150px";
    form1.style.paddingLeft = "150px";
    ptag.style.paddingLeft = "150px";
    title.style.paddingLeft = "150px";
  }

  nextbtn.setAttribute("class", "sub");
  maindiv.append(rightdiv);
  form1.append(backbtn, nextbtn);

  rightdiv.append(title, headline, ptag, form1);
}
function thirdpage() {
  body.innerHTML = "";
  let maindiv = document.createElement("div");
  maindiv.setAttribute("class", "main");
  let leftdiv = document.createElement("div");
  leftdiv.setAttribute("class", "left");
  let rightdiv = document.createElement("div");
  //rightdiv.style.marginTop = "70px";

  rightdiv.setAttribute("class", "right");
  rightdiv.style.textAlign = "start";
  let progress = document.createElement("div");
  progress.setAttribute("id", "progressbar");
  let mybar = document.createElement("div");
  mybar.setAttribute("id", "bar");
  mybar.style.width = "160px";
  rightdiv.append(progress);
  progress.append(mybar);

  let image1 = document.createElement("img");
  image1.src = "https://pro.trackingtime.co/img/onboarding/JoinAccount.svg";
  body.append(maindiv);
  maindiv.append(leftdiv);
  leftdiv.append(image1);

  let title1 = document.createElement("h3");
 // title1.style.paddingLeft = "150px";
  
  title1.style.marginTop = "150px";
  title1.style.marginBottom = "10px";
  let spn2 = document.createElement("span");
  spn2.innerText = "TIME";
  spn2.style.fontWeight = "bold";
  title1.innerText = "TRACKING";
  title1.style.fontSize = "26px";
  title1.append(spn2);
  let form2 = document.createElement("form");
  //form2.style.paddingLeft = "150px";

  let label2 = document.createElement("label");
  label2.innerText = "Team size";
  label2.setAttribute("class", "labform");
  let input2 = document.createElement("input");

  input2.setAttribute("id", "teamsize");
  let brc2 = document.createElement("br");
  let brc3 = document.createElement("br");
  input2.setAttribute("type", "number");
  form2.append(label2);
  form2.appendChild(brc2);
  form2.append(input2);
  form2.appendChild(brc3);
  let backbtn = document.createElement("button");
  backbtn.setAttribute("type", "button");
  backbtn.innerText = "Back";
  backbtn.style.fontSize = "22px";
  backbtn.style.marginTop = "15px";
  backbtn.style.backgroundColor = "transparent";
  backbtn.style.border = "0px";
  backbtn.addEventListener("click", function () {
    displaysecondpage();
  });
  let nextbtn = document.createElement("button");
  nextbtn.setAttribute("type", "button");
  nextbtn.innerText = "CONTINUE >";
  nextbtn.style.border = "0px";
  nextbtn.style.marginLeft = "30px";
  nextbtn.style.height = "40px";
  nextbtn.style.borderRadius = "5px";
  nextbtn.style.marginTop = "15px";
  nextbtn.addEventListener("click", function () {
    obj.teamsize = form2.teamsize.value;
    console.log(obj);
    fourthpage();
  });
  if (rightdiv.matches){
    rightdiv.style.marginTop = "30px";
   // headline.style.paddingLeft = "50px";
    form2.style.paddingLeft = "50px";
    //ptag.style.paddingLeft = "50px";
    title1.style.paddingLeft = "50px";
  }else{
    rightdiv.style.marginTop = "70px";
    //headline.style.paddingLeft = "150px";
    form2.style.paddingLeft = "150px";
   // ptag.style.paddingLeft = "150px";
    title1.style.paddingLeft = "150px";
  }
  nextbtn.setAttribute("class", "sub");
  maindiv.append(rightdiv);
  form2.append(backbtn, nextbtn);

  rightdiv.append(title1, form2);
}
function fourthpage() {
  body.innerHTML = "";
  
  let maindiv = document.createElement("div");
  maindiv.setAttribute("class", "main");
  let leftdiv = document.createElement("div");
  leftdiv.setAttribute("class", "left");
  let rightdiv = document.createElement("div");
  //rightdiv.style.marginTop = "70px";
  
  rightdiv.setAttribute("class", "right");
  rightdiv.style.textAlign = "start";
  let progress = document.createElement("div");
  progress.setAttribute("id", "progressbar");
  let mybar = document.createElement("div");
  mybar.setAttribute("id", "bar");
  mybar.style.width = "240px";
  rightdiv.append(progress);
  
  
  progress.append(mybar);

  let image1 = document.createElement("img");
  image1.src = "https://pro.trackingtime.co/img/login/1.svg";
  body.append(maindiv);
  maindiv.append(leftdiv);
  leftdiv.append(image1);

  let title1 = document.createElement("h3");
  
  //title1.style.paddingLeft = "150px";
  title1.style.marginTop = "150px";
  title1.style.marginBottom = "10px";
  let spn2 = document.createElement("span");
  spn2.innerText = "TIME";
  spn2.style.fontWeight = "bold";
  title1.innerText = "TRACKING";
  title1.style.fontSize = "26px";
  title1.append(spn2);
  let form1 = document.createElement("form");
  //form1.style.paddingLeft = "150px";

  let brc4 = document.createElement("br");
  let brc5 = document.createElement("br");

  let label3 = document.createElement("label");
  label3.innerText = "Your first name";
  label3.setAttribute("class", "labform");
  let input3 = document.createElement("input");

  input3.setAttribute("type", "text");
  input3.setAttribute("id", "firstname");
  form1.append(label3);
  form1.appendChild(brc4);
  form1.append(input3);
  form1.appendChild(brc5);
  let backbtn = document.createElement("button");
  backbtn.setAttribute("type", "button");
  backbtn.innerText = "Back";
  backbtn.style.fontSize = "22px";
  backbtn.style.marginTop = "15px";
  backbtn.style.backgroundColor = "transparent";
  backbtn.style.border = "0px";
  backbtn.addEventListener("click", function () {
    thirdpage();
  });
  let nextbtn = document.createElement("button");
  nextbtn.setAttribute("type", "button");
  nextbtn.innerText = "CONTINUE >";
  nextbtn.style.border = "0px";
  nextbtn.style.marginLeft = "30px";
  nextbtn.style.height = "40px";
  nextbtn.style.borderRadius = "5px";
  nextbtn.style.marginTop = "15px";
  nextbtn.addEventListener("click", function () {
    obj.firstname = form1.firstname.value;
    console.log(obj);
    fifthpage();
  });
  if (rightdiv.matches){
    rightdiv.style.marginTop = "30px";
   // headline.style.paddingLeft = "50px";
    form1.style.paddingLeft = "50px";
    //ptag.style.paddingLeft = "50px";
    title1.style.paddingLeft = "50px";
  }else{
    rightdiv.style.marginTop = "70px";
    //headline.style.paddingLeft = "150px";
    form1.style.paddingLeft = "150px";
   // ptag.style.paddingLeft = "150px";
    title1.style.paddingLeft = "150px";
  }

  nextbtn.setAttribute("class", "sub");
  maindiv.append(rightdiv);
  form1.append(backbtn, nextbtn);
  
  rightdiv.append(title1, form1);
}
function fifthpage() {
  body.innerHTML = "";
  let maindiv = document.createElement("div");
  maindiv.setAttribute("class", "main");
  let leftdiv = document.createElement("div");
  leftdiv.setAttribute("class", "left");
  let rightdiv = document.createElement("div");
 // rightdiv.style.marginTop = "70px";

  rightdiv.setAttribute("class", "right");
  rightdiv.style.textAlign = "start";

  let image1 = document.createElement("img");
  image1.src = "https://pro.trackingtime.co/img/onboarding/JoinAccount.svg";
  body.append(maindiv);
  maindiv.append(leftdiv);
  leftdiv.append(image1);
  let progress = document.createElement("div");
  progress.setAttribute("id", "progressbar");
  let mybar = document.createElement("div");
  mybar.setAttribute("id", "bar");
  mybar.style.width = "320px";
  rightdiv.append(progress);
  progress.append(mybar);

  let title1 = document.createElement("h3");
  //title1.style.paddingLeft = "150px";
  title1.style.marginTop = "150px";
  title1.style.marginBottom = "10px";
  let spn2 = document.createElement("span");
  spn2.innerText = "TIME";
  spn2.style.fontWeight = "bold";
  title1.innerText = "TRACKING";
  title1.style.fontSize = "26px";
  title1.append(spn2);
  let form1 = document.createElement("form");
  //form1.style.paddingLeft = "150px";

  let brc6 = document.createElement("br");
  let brc7 = document.createElement("br");

  let label4 = document.createElement("label");
  label4.innerText = "Last name";
  label4.setAttribute("class", "labform");
  let input4 = document.createElement("input");

  input4.setAttribute("type", "text");
  input4.setAttribute("id", "lastname");
  form1.append(label4);
  form1.appendChild(brc6);
  form1.append(input4);
  form1.appendChild(brc7);
  let backbtn = document.createElement("button");
  backbtn.setAttribute("type", "button");
  backbtn.innerText = "Back";
  backbtn.style.fontSize = "22px";
  backbtn.style.marginTop = "15px";
  backbtn.style.backgroundColor = "transparent";
  backbtn.style.border = "0px";
  backbtn.addEventListener("click", function () {
    fourthpage();
  });
  let nextbtn = document.createElement("button");
  nextbtn.setAttribute("type", "button");
  nextbtn.innerText = "Submit";
  nextbtn.style.border = "0px";
  nextbtn.style.marginLeft = "30px";
  nextbtn.style.height = "40px";
  nextbtn.style.borderRadius = "5px";
  nextbtn.style.marginTop = "15px";
  nextbtn.style.paddingLeft = "20px";
  nextbtn.style.paddingRight = "20px";
  nextbtn.style.fontSize = "18px";
  nextbtn.addEventListener("click", function () {
    obj.lastname = form1.lastname.value;
    sixpage();
  });
  if (rightdiv.matches){
    rightdiv.style.marginTop = "30px";
   // headline.style.paddingLeft = "50px";
    form1.style.paddingLeft = "50px";
    //ptag.style.paddingLeft = "50px";
    title1.style.paddingLeft = "50px";
  }else{
    rightdiv.style.marginTop = "70px";
    //headline.style.paddingLeft = "150px";
    form1.style.paddingLeft = "150px";
   // ptag.style.paddingLeft = "150px";
    title1.style.paddingLeft = "150px";
  }
  nextbtn.setAttribute("class", "sub");
  maindiv.append(rightdiv);
  form1.append(backbtn, nextbtn);

  rightdiv.append(title1, form1);
}

function sixpage() {
  arr.push(obj);
  alert("Thankyou for Sign Up");

  localStorage.setItem("signup", JSON.stringify(arr));
  window.location.href = "login.html";
}