function getTitle( document ) {
  var element = document.getElementsByTagName('title')[0].innerHTML;
  return element;
};

function getNumberOfBikes( document ) {

  // var bikeCount = document.getElementById('donation-count-alert').innerHTML;
  // var numBikes = parseInt(bikeCount);
  // return numBikes;
var numberOfBikes=document.getElementById('donation-count-alert').innerHTML;
var numBikes=parseInt(numberOfBikes);
return numBikes;
// var a = parseInt("10")
  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element
};

function getAllButtonText( document ) {
  // get the text inside all tags with class 'btn' and return as an array of strings
 var buttonStrings=[];
 var buttons=getElementsByClassName('btn');
 for(let i=0; i<buttonStrings.length; i++){
  var buttonStrings=  buttons[i].innerHTML;
  buttonStrings.push('buttonStrings')
}
return buttonStrings;

// var arr =  document.getElementsByClassName("demo");
// //accessing the second element
// arr[1].innerHTML = "Hi"; 
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
 };

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
}

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(item){
   
    item.textContent ='-' + item.textContent + '-';
  });
 
}

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed
}

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
}

function addLink( document ){
  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. It should have same structure as the other links
  // no return needed
}

module.exports = {
  getTitle,
  getNumberOfBikes,
  getAllButtonText,
  getNavLinksText,
  addDashesToLinks,
  italicTitles,
  greenLinks,
  addLink
};