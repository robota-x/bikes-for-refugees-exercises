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
  var buttonsList=document.getElementsByClassName('btn');
  for(let i=0; i<buttonsList.length; i++){
    var button=  buttonsList[i].innerHTML.trim();
    buttonStrings.push(button);
  }
  
  return buttonStrings;

  
};

function getNavLinksText( document ){
   var navBar= document.getElementById('navbarSupportedContent');
  var aTags=navBar.getElementsByTagName('A');
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
  var stringArray=[];
  for(let i=0; i<aTags.length; i++){
    var aTagString= aTags[i].textContent.trim();
    stringArray.push(aTagString);
  }
  return  stringArray; 
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

// // all elements with class Upcoming Events
  // var italicLinks= document.getElementsByClassName('article-title--sidebar'); 
  var italicLinks= document.querySelectorAll(".article-title--sidebar a"); 
  
  // loop around them
  for(let i=0; i<italicLinks.length; i++) {
  // // change the font
 italicLinks[i].innerHTML= '<i>'+ italicLinks[i].textContent +'</i>';
  // links2.style.font="italics" 
}
}
italicTitles( document );

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
  var turnLinksGreen= document.querySelectorAll('.article-read-more  a');
  for(i=0; i<turnLinksGreen.length; i++){
  turnLinksGreen[i].style.color= 'green'; 
}
}
greenLinks( document )

function addLink( document ){
  // EXAMPLE
 // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
// `https://codeyourfuture.io/`. It should have same structure as the other links
// no return needed
  var listItem= document.createElement('li'); //create list item <li> 
  listItem.className='nav-item' // add classname to Link
  var textNode = document.createTextNode("Code Your Future")// create a text node
 
  var link= document.createElement('a') //make an empmty link
  link.className='nav-link' //add class name to link
  link.appendChild(textNode); //add text to Link 


  link.href='https://codeyourfuture.io/'; // add the URL to the link
  listItem.appendChild(link); //add the link(a tag) to the list

  //put the listitem inside the newlistitem
  var newListItem= document.getElementsByClassName('navbar-nav mr-auto')[0];
  newListItem.appendChild(listItem) //add text to Link

function readMore( document ){
    var jsButton=document.createElement("btn") //create btn
    jsButton.className= 'nav-item2' //add classname to the btn
    // jsButton.setAttribute("class", "nav-item2"); will it give btn the class given?

    var textNode = document.createTextNode("Read More")//create a text node
    jsButton.appendChild(textNode); //add text to Link 

var readMoreButton=getElementsByClassName("buttons")[]; //create readMoreButton
readMoreButton.appendChild(textNode); //add text to Link
}
readMore(document)

function RefugeeNetWork(document){
    var newLink= document.createElement('li'); //create a list to add a tag inside
    newLink.className="nav-item" //add class name to new link
    var textNode=createTextNode('Mnchstr Refugee Support NetWork') //create a text node

    var  newLinkRefugee= document.creatElement('a')  //create a new <a>
    newLinkRefugee.className='nav-link' //add class to newLinkRefugee
    newLinkRefugee.appendChild(textNode); //add text to the link

    mnchstrRefugeeLink.href='http://mrsn.org.uk/'; //add the URL to mnchstrRefugeeLink
    newLink.appendChild(newLinkRefugee); //add link to <a> tag

 //put the newLink inside the mnchsterRefugeeSupport
  var mnchsterRefugeeSupport = document.getElementsByClassName("navbar-nav mr-auto")[ ];
  mnchsterRefugeeSupport.appendChild(newLink);
    }
    RefugeeNetWork(document)
};
addLink( document ) 

module.exports = {
  getTitle,
  getNumberOfBikes,
  getAllButtonText,
  getNavLinksText,
  addDashesToLinks,
  greenLinks,
  italicTitles,
  addLink
};  
