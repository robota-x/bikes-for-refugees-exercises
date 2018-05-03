function getTitle( document ) {
  var element = document.getElementsByTagName('title')[0].innerHTML;
  return element;
};

// im in secand 

function getNumberOfBikes( document ){
  var element=document.getElementById('donation-count-alert').innerHTML;
  return parseInt(element)
  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element
};
// in tirty s

function getAllButtonText( document ){
  var newButtonString=[];
  var buttonString = document.getElementsByClassName('btn');
   for(i=0; i<buttonString.length; i++){
       var button = buttonString[i].innerHTML.trim();
       newButtonString.push(button);
  
    
   }
   return newButtonString ; 


  // get the text inside all tags with class 'btn' and return as an array of strings
  
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
};

function getNavLinksText( document ){
  // var 
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
var oldButton = document.getElementById('navbarSupportedContent');

var bButton =oldButton.getElementsByTagName('a');
var cButton =[]
  for (i=0; i<bButton.length;i++);{
    var dButton = bButton[i].textContent;
    cButton.push(dButton.trim())
  }
  return cButton;
};

function addDashesToLinks( document ){
  var links= document.querySelectorAll('.nav-link');
  links.forEach(function(item){
    item .textContent = '-'+item.textContent +'-';
  })
  // surround the text in navigation bar links with '-'
  // no return needed
}
  addDashesToLinks( document )

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed

  var italicMac = document.querySelectorAll('.article-title a')
   for( i=0; i<italicMac.length;i++){
  var italicDoc = italicMac[i].innerHTML;
     italicMac[i].innerHTML= '<i>'+ italicDoc +'</i>';
   }
}
italicTitles(document);

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed 
  var greenMap = document.querySelectorAll('.article-read-more a');
  for ( i=0; i< greenMap.length; i++){
    greenMap[i].style.color = 'green';
  }
}
greenLinks(document);

// function addLink( document ){
  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  //`https://codeyourfuture.io/`. //It should have same structure as the other links
  // no return needed
  // var listTag= document.createElement('li'); //create a li tag 
      // listTag.className= 'nav-item' //create a class name
    //  listTag.setAttribute("class", "nav-item"); //other way of creating a classe 
  // var textNode = document.createTextNode('Code Your Future'); //create a text node for the link  
  
  // var aTag= document.createElement('a');//create a Tag
    // aTag.setAttribute("class", "nav-link"); //create a class name
    // aTag.appendChild(textNode); //create a link 

    // aTag.href='https://codeyourfuture.io/'; //copi and inck
    // listTag.appendChild(aTag);   //puting the link

    // var newList= document.getElementsByClassName('navbar-nav mr-auto')[0]; //create new list link new 
        // newList.appendChild(listTag); //adding text on the new link
// }
  // addLink(document);
//   var newListItem= document.getElementsByClassName('navbar-nav mr-auto')[0]; //create the new link
//   newListItem.appendChild(listItem) //add text to Link
// }
function addLink( document ){
var lisTer = document.createElement('li');
    lisTer.classList.add('nav-item');
    var listDoc = document.createElement('a')
    listDoc.classList.add('nav-link');
    listDoc.href ='https://codeyourfuture.io/';
    listDoc.innerHTML = 'Code Your Future';
    lisTer.appendChild(listDoc);
    document.body.appendChild(lisTer)
    
}
addLink( document );




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

