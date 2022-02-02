// escuchando el localstorage i;
window.addEventListener("storage", function (e) {
  console.log("storage event occured here");
  document.getElementById("counter-label1").innerHTML =
    localStorage.getItem("counter1");
  document.getElementById("counter-label2").innerHTML =
    localStorage.getItem("counter2");
  document.getElementById("counter-label3").innerHTML =
    localStorage.getItem("counter3");
  document.getElementById("counter-label4").innerHTML =
    localStorage.getItem("counter4");
     document.getElementById("counter-label5").innerHTML =
       localStorage.getItem("counter5");
});

// Imagen 1 ------------------------------------------------
if (!localStorage.getItem("counter1")) {
  localStorage.setItem("counter1", 0);
}

document.getElementById("counter-label1").innerHTML =
  localStorage.getItem("counter1");

//  Imagen 2-------------------------------------

if (!localStorage.getItem("counter2")) {
  localStorage.setItem("counter2", 0);
}

var counterVal2 = localStorage.getItem("counter2");

document.getElementById("counter-label2").innerHTML =
  localStorage.getItem("counter2");
var val2 = document.getElementById("2");
val2.addEventListener("click", function () {
  console.log("aaaaaa");
  ++counterVal2;
  localStorage.setItem("counter2", counterVal2);

  document.getElementById("counter-label2").innerHTML =
    localStorage.getItem("counter2");
});

//  Imagen 3-------------------------------------

if (!localStorage.getItem("counter3")) {
  localStorage.setItem("counter3", 0);
}

document.getElementById("counter-label3").innerHTML =
  localStorage.getItem("counter3");

//  Imagen 4-------------------------------------

if (!localStorage.getItem("counter4")) {
  localStorage.setItem("counter4", 0);
}

var counterVal4 = localStorage.getItem("counter4");

document.getElementById("counter-label4").innerHTML =
  localStorage.getItem("counter4");
var val4 = document.getElementById("4");
val4.addEventListener("click", function () {
  console.log("aaaaaa");
  ++counterVal4;
  localStorage.setItem("counter4", counterVal4);

  document.getElementById("counter-label4").innerHTML =
    localStorage.getItem("counter4");
});

//  Imagen 3-------------------------------------

if (!localStorage.getItem("counter5")) {
  localStorage.setItem("counter5", 0);
}

document.getElementById("counter-label5").innerHTML =
  localStorage.getItem("counter5");

// eles.addEventListener("click", function () {
//   modifyText("four");
// });

// function modifyText(new_text) {
//   var t2 = document.getElementById("1");
//   t2.firstChild.nodeValue = new_text;
// }

// document.querySelector(".click").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     var id = e.target.getAttribute("id");
//     console.log(id);
//      console.log(el);

//     if (i % 2 === 0) {
//     } else {
//       updateDisplay(++counterVal1);
//       function updateDisplay(val) {
//         document.getElementById("counter-label1").innerHTML = val;
//       }
//     }
//   });
// });

// for (let i; i < 5; i++) {
//   if ( i % 2 == 0) {
//     updateDisplay(++counterVal[i]);
//     function updateDisplay(val) {
//       document.getElementById("counter-labe"[i]).innerHTML = val;
//     }
//   } else {
//     updateDisplay(++counterVal[i]);
//     function updateDisplay(val) {
//       document.getElementById("counter-labe"[i]).innerHTML = val;
//     }
//   }
// }
// if (id % 2 == 0) {
//   updateDisplay(++counterVal2);
//   updateDisplay(++counterVal4);

//   function updateDisplay(val) {
//     document.getElementById("counter-label2").innerHTML = val;
//     document.getElementById("counter-label4").innerHTML = val;
//   }
// } else {
//   updateDisplay(++counterVal1);
//   updateDisplay(++counterVal3);
//   updateDisplay(++counterVal5);

//   function updateDisplay(val) {
//     document.getElementById("counter-label1").innerHTML = val;
//     document.getElementById("counter-label3").innerHTML = val;
//     document.getElementById("counter-label5").innerHTML = val;
//
