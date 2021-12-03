function rpsgame(yourchoice){
    console.log(yourchoice.src)
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
     botchoice=noToChoice(randomInte());
    console.log("computer choic3 "+botchoice);
    results =winnerDecission(humanchoice,botchoice);
    console.log(results)
    message=finalMessege(results);
    console.log(message);
    displayPic(yourchoice,botchoice,message);

}

function randomInte()
{
    return Math.floor(Math.random()*3);
    
} 
function noToChoice(no)
{
    return ['rock','paper','scissor'][no];
}
function winnerDecission(yourchoice,computerchoice)
{
  var rpschoice={
    'rock':{
          "scissor":1,
          'rock':0.5,
          'paper':0
        },
    'paper':{
            "scissor":0,
            'rock':1,
            'paper':0.5
          },
    'scissor':{
            "scissor":0.5,
            'rock':1,
            'paper':0
          }
  }
  const yourscore=rpschoice[yourchoice][computerchoice];
  const comscore=rpschoice[computerchoice][yourchoice];
  return[yourscore,comscore];

}
function finalMessege([yourscore,comscore])
{
    if(yourscore===0)
    {
        return { 'message': 'You Lost', 
                  'color' :'red'
                }
    }
    else if(yourscore===0.5)
    {
        return {
            'message':'Well Draw',
            'color':'yellow'

        }
    }else{
    return{
        "message": "You won",
        "color":"green"
        }
    }

}
function displayPic( humanImagechoice,machineImagechoice,finalMessege)
{
    var image ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src  
    }

    document.getElementById("rock").remove();
    
    document.getElementById("paper").remove();
    
    document.getElementById("scissor").remove();

    var humanDiv=document.createElement("div");
    var botDiv=document.createElement("div");
    var mesDiv=document.createElement("div");

    humanDiv.innerHTML="<img src='"+humanImagechoice.src+"' height=150 width=150  style='box-shadow: 0px 10px 50px 5px green'>"
    console.log(humanImagechoice.src)

    document.getElementById('results').appendChild(humanDiv);

    
    mesDiv.innerHTML= "<h1 style='color:"+finalMessege.color+"'> "+finalMessege.message+"</h1> "
    console.log(finalMessege.message)

    document.getElementById('results').appendChild(mesDiv);
    
    botDiv.innerHTML="<img src='"+image[machineImagechoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px 5px blue'>"
    console.log()

    document.getElementById('results').appendChild(botDiv);


}