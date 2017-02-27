/*
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, changeCompletely ) {
  array.forEach(changeCompletely)
}
*/
function iterativeLog( array ) {

  //array.forEach(  doToArray )
  array.forEach(  (element, index, array) => console.log( `${index}: ${element}` ) )

}

function iterate( callback ) {

  var myArray = [1,2,3,4,5]

  myArray.forEach( callback )

  return myArray
}

function doToArray( array, callback ) {

  array.forEach( callback )
   //  array.forEach(  console.log( `${index}: ${element}`) )

}
