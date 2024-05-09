let input=document.getElementById("ipbox")
let btn= document.querySelectorAll('button')
let string=""
let arr= Array.from(btn);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
            string= eval(string) //evaluates the string
            input.value=string; //shows the value
        }
        else if(e.target.innerHTML== 'AC'){
            string=""
            input.value= string;
        }
        else if(e.target.innerHTML== 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += e.target.innerHTML;//adds the numbers in string
            input.value=string;
        }
    })
})
