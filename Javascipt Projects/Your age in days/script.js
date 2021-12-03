function ageIndays()
{
    const yeaBorn=prompt("Please type ur born year ");
    
    const days =(2021-yeaBorn)*365;
    // var print=document.getElementById("flex-box-result")
    
    var h1 =document.createElement("h1");
    var textPrint=document.createTextNode("You are "+days+" old in days")
    console.log(textPrint); 
    h1.setAttribute("id","ageIndays");
    h1.appendChild(textPrint);
    document.getElementById("flex-box-result").appendChild(h1)
}
function reset()
{
    document.getElementById("ageIndays").remove();
}