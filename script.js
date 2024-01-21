let boxes=document.querySelectorAll(".box");
let rsbtn =document.querySelector(".reset-btn");
let msg = document.querySelector(".win");
let turnO = true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color ="green";
            turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color ="blueviolet";
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    });
});
const disabledbox = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const eneblebox=() =>{
    turnO = true;

    for(let box of boxes)
    {
        box.disabled =false;
        box.innerText = "";
    }
    msg.innerText = "ready to new game";

}
const showwinner= (player)=>{
    msg.innerText=`The Winner is ${player}`;
    disabledbox();
}
const checkwin =()=>{
    for(patterns of winpatterns){
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;
        if(posval1 !="" && posval2 !="" && posval3 !="")
        {
            if(posval1 ==posval2 && posval2==posval3)
            { 
                showwinner(posval1);
            }
           
        }
    }
}
rsbtn.addEventListener("click",()=>{
    console.log("hello");
    eneblebox();
})