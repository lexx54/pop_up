const d=document,
  $addBtn=d.getElementById('add-info'),
  $showBtn=d.getElementById("show-info");

d.addEventListener("click",e=>{
  if (e.target.matches('#add-btn')) addName();
  if (e.target.matches('#show-btn')) showName();
})

function addName(){
  const $container=$addBtn.content.cloneNode(true)
  d.body.children[0].appendChild($container)
}

function showName(){
  const $container=$showBtn.content.cloneNode(true)
  d.body.children[0].appendChild($container)
}