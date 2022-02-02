var counterVal1 = localStorage.getItem("counter1");

function fun1() {
  ++counterVal1;
  localStorage.setItem("counter1", counterVal1);
  window.close(this.ref);
}

// 3 ------------------------------------------

var counterVal3 = localStorage.getItem("counter3");

function fun3() {
  ++counterVal3;
  localStorage.setItem("counter3", counterVal3);
  window.close(this.ref);
}

// 5------------------------------------------

var counterVal5 = localStorage.getItem("counter5");

function fun5() {
  ++counterVal5;
  localStorage.setItem("counter5", counterVal5);
  window.close(this.ref);
}
