const d=document,
  $addBtn=d.getElementById('add-info'),
  $showBtn=d.getElementById("show-info");

  let $nameValue='Desconocido';

d.addEventListener("click",e=>{
  if (e.target.matches('#add-btn')){
    if(d.body.children[0].lastElementChild.id=='btn-container') addName()
    else{
      remove()
      addName();
    }
  } 

  if (e.target.matches('#show-btn')) {
    if(d.body.children[0].lastElementChild.id=='btn-container') showName();
    else{
      remove()
      showName();
    }
  }

  if (e.target.matches('#accept')) {
    $nameValue=saveName('name');
    remove()
  }
  if (e.target.matches('#cancel')) remove();
})

function addName(){
  const $container=$addBtn.content.cloneNode(true)
  d.body.children[0].appendChild($container)
}

function showName(){
  const $container=$showBtn.content.cloneNode(true)
  $container.children[0].children[2].textContent=$nameValue;
  console.log($container.children[0].children[2])
  d.body.children[0].appendChild($container)
}

function saveName(input){
  newValue=d.getElementById(input).value
  return newValue
}

function remove(){
  d.body.children[0].removeChild(d.body.children[0].lastElementChild)
}
