let shape = "";

function goToStep2() {
  this.selectedShape = document.querySelector(
    'input[name="shape"]:checked'
  ).value;
  document.getElementById("caltitle").innerHTML = "Step 2 : Insert your values";
  document.getElementById("caldesc").innerHTML =
    "You have selected a " +
    this.selectedShape +
    ", please input the required variables";
  document.getElementById("shapesoption").style.display = "none";
  document.getElementById("step1").style.display = "none";
  document.getElementById("stepOneButton").style.display = "none";
  this.shape = this.selectedShape;

  switch (this.shape) {
    case "rectangle":
      document.getElementById("rectangleValues").style.display = "block";
      break;
    case "circle":
      document.getElementById("circleValues").style.display = "block";
      break;
    case "square":
      document.getElementById("squareValues").style.display = "block";
      break;
    case "ellipse":
      document.getElementById("ellipseValues").style.display = "block";
      break;
  }
  document.getElementById("step2").style.display = "block";
  document.getElementById("stepTwoButton").style.display = "flex";
}

function goToStep3() {
  assignValues();
  calculateArea();
  document.getElementById("caltitle").innerHTML = "Step 3 : Your results";
  switch (this.shape) {
    case "rectangle":
      document.getElementById("caldesc").innerHTML =
        "You have calculated the area of a " +
        this.shape +
        " with a length of " +
        this.rectangleLength +
        " and a width of " +
        this.rectangleBreadth +
        ". Below is your result:";
      break;
    case "circle":
      document.getElementById("caldesc").innerHTML =
        "You have calculated the area of a " +
        this.shape +
        " with a radius of " +
        this.circleRadius +
        ". Below is your result:";
      break;
    case "square":
      document.getElementById("caldesc").innerHTML =
        "You have calculated the area of a " +
        this.shape +
        " with a side of " +
        this.squareSide +
        ". Below is your result:";
      break;
    case "ellipse":
      document.getElementById("caldesc").innerHTML =
        "You have calculated the area of a " +
        this.shape +
        " with a long axis of " +
        this.ellipseLongAxis +
        " and a short axis of " +
        this.ellipseShortAxis +
        ". Below is your result:";
      break;
  }
  document.getElementById(this.shape + "Values").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("arearesult").innerHTML = "The Area is " + this.area;
  document.getElementById("step2").style.display = "none";
  document.getElementById("stepTwoButton").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

function assignValues() {
  this.rectangleLength = document.querySelector("#length").value;
  this.rectangleBreadth = document.querySelector("#breadth").value;
  this.circleRadius = document.querySelector("#radius").value;
  this.squareSide = document.querySelector("#side").value;
  this.ellipseLongAxis = document.querySelector("#longaxis").value;
  this.ellipseShortAxis = document.querySelector("#shortaxis").value;
  console.log(
    this.rectangleLength,
    this.rectangleBreadth,
    this.circleRadius,
    this.squareSide,
    this.ellipseLongAxis,
    this.ellipseShortAxis
  );
}

function calculateArea() {
  this.area = 0;
  switch (this.shape) {
    case "rectangle":
      this.area = this.rectangleLength * this.rectangleBreadth;
      break;
    case "circle":
      this.area = 2 * Math.PI * this.circleRadius;
      break;
    case "square":
      this.area = this.squareSide * this.squareSide;
      break;
    case "ellipse":
      this.area = Math.PI * this.ellipseLongAxis * this.ellipseShortAxis;
      break;
  }
}

function goToStep1() {
  document.getElementById("caltitle").innerHTML = "Step 1 : Select your shape";
  document.getElementById("caldesc").innerHTML =
    'Please select the shape that you would like to calculate the area of and press the button "Go to step 2"';
  document.getElementById("result").style.display = "none";
  document.getElementById("step3").style.display = "none";
  document.getElementById("shapesoption").style.display = "flex";
  document.getElementById("step1").style.display = "block";
}