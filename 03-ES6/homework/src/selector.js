var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for(let i=0; i< startEl.children.length; i++){
    
    let elementss = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet= resultSet.concat(elementss);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // if(selector[0]=== '#') return 'id';
  // else if (selector[0]=== '.') return 'class';
  // else{
  //   let temp = selector.split('.')
  //   if(temp.length === 1) return 'tag';
  //   else{
  //     temp[0]='tag';
  //     for(let i=1; i<temp.length; i++){
  //       temp[i] = 'class'
  //     }
  //     return temp.join('.');
  //   }
    
  // }

  // if(selector[0]=== '#') return 'id';
  // else if(selector[0]=== '.') return 'class';
  // else if(selector.split('.').length > 1) return 'tag.class';
  // else return 'tag';

  return selector[0]==='#' ? 'id' : selector[0]==='.' ? 'class': selector.includes('.') ? 'tag.class':'tag'
};

// selector = 'img.thumbnail';
// console.log(selectorTypeMatcher(selector))

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {  //#coco, .piña ....
  var selectorType = selectorTypeMatcher(selector);//id, class, tag, tag.class
  var matchFunction; 
  if (selectorType === "id") { 
    // matchFunction = function(element){
    //   if('#'+ element.id === selector) {
    //     return true;
    //   } else return false;
    // }
    matchFunction = (element) => `#${element.id}` === selector;
  
  } else if (selectorType === "class") {
    
    // matchFunction = function (element) {
    //   let newArray = element.classList;
    //     for(let i = 0; i < newArray.length; i++) {
    //       if('.' + newArray[i] === selector) return true;
    //     } 
    //     return false;
    //   }
    matchFunction = (element) => element.classList.contains(selector.substring(1));

  } else if (selectorType === "tag.class") {

    // matchFunction =  function (element) {
    //   let array = selector.split('.');
    //   let tag = array[0];
    //   let cla = array[1];

    //   let seekFunctionTag = matchFunctionMaker(tag);
    //   let resTag = seekFunctionTag(element);
    //   let seekFunctionClass = matchFunctionMaker('.'+ cla);
    //   let resClass = seekFunctionClass(element);

    //   return resTag && resClass;
    // }

    matchFunction = (element) => matchFunctionMaker(selector.split('.')[0])(element) && matchFunctionMaker(`.${selector.split('.')[1]}`)(element);
    
  } else if (selectorType === "tag") {
    
    matchFunction =(element) => element.tagName.toLowerCase() === selector.toLowerCase()

  }
  return matchFunction;
};



var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
