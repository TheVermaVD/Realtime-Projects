// Formula of Celcious to Fahrenheit Converter -

/*  F(Temp) = (9C/5) + 32 ;

    (9C/5) = F- 32
    c  = 5/9(F-32) ; 

*/

let cel_Element = document.getElementById("cel");
let fah_Element = document.getElementById("fah");

cel_Element.addEventListener("input", function () {
  let c = this.value;
  // console.log(c);
  let f = (9 * c) / 5 + 32;
  console.log(f, typeof f); // number datatype

  if (Number.isInteger(f) == false) {
    f = f.toFixed(4); //value get updated to 4 decimal place only.
  }
//   console.log(typeof f); //returns a string datatype

  fah_Element.value = f;
});

fah_Element.addEventListener("input", function () {
  let f = this.value;

  let c = (5 / 9) * (f - 32);

  if (Number.isInteger(c) == false) {
    c = c.toFixed(4);

  }

  //console.log(typeof c); //returns a string datatype

  cel_Element.value = c;


});
