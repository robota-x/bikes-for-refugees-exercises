function getTitle( document ) {

  var element = document.getElementsByTagName('title')[0].innerHTML;
  return element;
};

function getNumberOfBikes( document ) {

  var bikeCount = document.getElementById('donation-count-alert').innerHTML;
  var numBikes = parseInt(bikeCount);
  return numBikes;

  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element
};

function getAllButtonText( document ) {
  var buttonText = document.getElementsByClassName('btn');// get the text inside all tags with class 'btn'
    var buttonList = [];

    for (i=0; i<buttonText.length; i++){
     
      buttonList.push(buttonText[i].innerHTML.trim());

    } // and return as an array of strings
 return buttonList;
 
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
  
};

function getNavLinksText( document ){
  var navBar= document.getElementById('navbarSupportedContent');
  var links= navBar.getElementsByTagName('a');
  var newArray = [];

  for (i=0; i<links.length; i++){
    newArray.push(links[i].textContent.trim());

  }
return newArray;
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

//console.log(document.all)
  var title =document.querySelectorAll(".article-title--sidebar a")
  title.forEach(function(item){
     item.innerHTML='<i>'+ item.innerHTML +'</i>';
   })

  

  }

function greenLinks( document ){
  var elements = document.querySelectorAll(".article-read-more a");
  elements.forEach(function(item) {
  item.style.color = "green";
});
  // make `Learn more` links green
  // no return needed
}

function addLink( document ){

  var newulTag = document.createElement('ul'); //create ul tag
  newulTag.setAttribute("class", "navbar-nav mr-auto")

  var newLiTag = document.createElement('li'); //create li tag
  newLiTag.setAttribute("class", "nav-item")
  newulTag.appendChild(newLiTag)
  
  var newATag= document.createElement('a');// create an A tag
  newATag.setAttribute('class', 'nav-link');
  newATag.setAttribute('href','https://codeyourfuture.io/'); 
   
  var text = document.createTextNode ('Code Your Future');
  newATag.appendChild(text)
  newLiTag.appendChild(newATag)
  newulTag.appendChild(newLiTag);  //<a> added into the <li> element

   //create new class

                  
  


var navList= document.getElementsByClassName('navbar-nav mr-auto')[0];
navList.appendChild(newulTag);




  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. It should have same structure as the other links
  // no return needed
}

if (typeof module !== 'undefined') {
  module.exports = {
    getTitle,
    getNumberOfBikes,
    getAllButtonText,
    getNavLinksText,
    addDashesToLinks,
    italicTitles,
    greenLinks,
    addLink
  }
};
//addLink( document )
italicTitles( document )
greenLinks(document)
// console.log('hello');
// addDashesToLinks(document);
// italicTitles(document);