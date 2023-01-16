let enterList= document.getElementById("enterList")
let check = document.getElementById("check")
let aff =document.getElementById("aff")
function affichier(){
  if(enterList.value!=""){
    let para = document.createElement("div");
    let p =document.createElement("p")
    let check2 =document.createElement("input")
    check2.setAttribute("type","checkbox")

    p.innerHTML = enterList.value;
    let btn= document.createElement("button");
    para.appendChild(p)
    para.appendChild(btn);
    para.appendChild(check2)
    check2.addEventListener("click", function(e){
        if(check2.checked==true)
            e.target.parentElement.firstChild.style.textDecoration="line-through"
        else
        e.target.parentElement.firstChild.style.textDecoration="none"
    })
    aff.appendChild(para);
    para.classList.add("list")
    btn.innerHTML = "Done";
    btn.addEventListener("click", function(e){
        aff.removeChild(e.target.parentElement)

    })
    
    enterList.value= ""
  }

}
