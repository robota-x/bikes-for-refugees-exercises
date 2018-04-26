function getTitle( document ) {
  var element = document.getElementsByTagName('title')[0].innerHTML;
  return element;
};

function getNumberOfBikes( document ) {
  // get the number of bikes donated from the tag
  //  with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element
  var element = document.getElementById("donation-count-alert").innerHTML
     return parseInt(element)
};

function getAllButtonText( document ) {
  // get the text inside all tags with class 'btn'
  //  and return as an array of strings
  
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
  var docAll = document.getElementsByClassName('btn')
  var txtger=[]
  for (i = 0; i < docAll.length; i++) {
 var getBtn =  docAll[i].innerHTML;
 txtger.push(getBtn.trim())
 }
return txtger
};

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside 
  // element with id 'navbarSupportedContent'
  // reuturn as an array of strings
  var textwo = document.getElementById('navbarSupportedContent')
  
  var textthree = textwo.getElementsByTagName('a')

  var navb =[]
  for(i=0; i<textthree.length; i++){
    var navbone= textthree[i].textContent;
  navb.push(navbone.trim())
  }
return navb
};

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed
  var textwo = document.getElementsByClassName('nav-link')
  var navbone = []
  for(i=0; i< textwo.length; i++){
    var navbone = textwo[i].innerHTML;
    textwo[i].innerHTML= '-'+ navbone +'-';
    }
}
  addDashesToLinks( document )

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to 
  // italic using `<i>` tag
  // no return needed
  var italiDoc = document.querySelectorAll('.article-title a');
  for ( i=0; i< italiDoc.length; i++){
    var str = italiDoc[i].innerHTML;
    italiDoc[i].innerHTML = '<i>' + str + '</i>';
  }  
}

italicTitles( document )

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
  //  var learnGreen = document.querySelectAll('green')
  // if(i=0;i<learnGreen.length;i++ );{
  //   learnGreen[i].style.color"green
  // ";
  // }
  var turnGreen = document.querySelectorAll('.article-read-more a');
  for(i=0;  i<turnGreen.length;  i++){
    turnGreen[i].style.color = 'green';
  }
}

 greenLinks(document)

function addLink( document ){
  // Using `createElement` etc. 
  // create a new navbar item link 
  // 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. 
  // It should have same structure as the other links
  // no return needed
  var lisTer =document.createElement('li');
    lisTer.classList.add('nav-item');
    var listDoc = document.createElement('a')
    listDoc.classList.add('nav-link');
    listDoc.href ='https://codeyourfuture.io/';
    listDoc.innerHTML = 'Code Your Future';
    lisTer.appendChild(listDoc);
    document.body.appendChild(lisTer)
    
}
  addLink( document )

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
