
const canvas = document.getElementById("pong");

// getContext of canvas = methods and properties to draw and do a lot of thing to the canvas
let ctx = canvas.getContext('2d');

let count1,count2;
 count1=0;
 count2=0;

// Ball object
let ball={
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed :7,
    velX :5,
    velY :5,
    color: 'WHITE'
}

class Paddle{
    constructor(x,y,w,h,color){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.color=color;
        this.score=0;
    };
};

// CREATING USER PADDLE
let user = new Paddle(0,(canvas.height-100)/2,20,100,"WHITE");

//CREATING COMPUTER PADDLE
let comp = new Paddle(canvas.width-20,(canvas.height-100)/2,20,100,"WHITE");

//CREATING NET
let net = new Paddle((canvas.width-2)/2,0,2,10,"WHITE");

// function to draw rectangle /paddles /net
function drawRect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}


// function to draw the ball
function drawball(x,y,r,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();

}

//draw text
function drawtext(text,x,y){
      ctx.fillStyle="WHITE";
      ctx.font = "65px fantasy";
      ctx.fillText(text,x,y);
}

// function to reset the ball after a point is earned
function resetball(){
    ball.x = canvas.width/2-5;
    ball.y = canvas.height/2;
    ball.velX = -ball.velX;               //whoever wins the point the ball goes in that direction
    ball.speed = 7;
}

canvas.addEventListener('mousemove',mousepoint);
// function to know the y coordinate of the user paddle
function mousepoint(evt){
    let rect = canvas.getBoundingClientRect(); //to get the dimensions of the rectangle
    
    user.y = evt.clientY - rect.top -user.h/2;  // moves the centre of the user s paddle with the mouse
    
}

// FUNCTION TO MAKE THE NET 

function drawnet(){
    for(let i=0;i<canvas.height;i+=15){
        drawRect(net.x,net.y+i,net.w,net.h,net.color);
    }
}

//function to check when the ball has collided or not
function collide(p){
   p.top = p.y;
   p.right = p.x+p.w;
   p.left = p.x;
   p.bottom = p.y + p.h;

   ball.top = ball.y - ball.radius;
   ball.bottom = ball.y + ball.radius;
   ball.right = ball.x + ball.radius;
   ball.left = ball.x - ball.radius;

   return ball.right>p.left && ball.left< p.right && ball.top<p.bottom && p.top<ball.bottom;
}

// update function , the place where all the calculation takes place
function update(){
    if(user.score!==3 && comp.score!==3)
    {
     if(ball.x +ball.radius<0)        // for counting the score
     {
         comp.score++;
         resetball();
     }else if(ball.x + ball.radius > canvas.width){
         user.score++;
         resetball();
     }

     //moving the ball

     ball.x += ball.velX;     //the balls by this much in every frame per second
     ball.y += ball.velY;

     // moving the computer paddle using a simple AI 
     comp.y += (ball.y - ( comp.y + comp.h/2))*0.08;
    
     // In case the ball touches upper and lower boundries we change it Y velocity direction
    if(ball.y+ball.radius>canvas.height || ball.y-ball.radius<0) {
        ball.velY = - ball.velY;
    }

    let player = ball.x+ball.radius<canvas.width/2 ? user:comp;
    if(collide(player)){
          
          // we find the collision point w.r.t to the centre to the paddle
          let collidepoint = ball.y - (player.y+player.h/2);

          // normalizing the point to get it in the range of[-1,1]
          collidepoint = collidepoint/(player.h/2);
          
          // calculating the angle at which the ball hit the paddle
          let anglerad = collidepoint*(Math.PI/4);
          
          //changing the direction of the ball when it hits the computer paddle  collision 
          let direction = (ball.x + ball.radius <canvas.width/2) ?1:-1;  

          // changing the ball velocity 
          ball.velX = direction*ball.speed*Math.cos(anglerad);
          ball.velY = ball.speed*Math.sin(anglerad);

          ball.speed+=0.3;
          
          
    }     
    }
}
function render(){

    
    let text1,text2;     
    // TO PRINT WINS WHEN A PLAYER WINS THE GAME
    text1= user.score===3? "WINS":user.score;
    text2= comp.score===3?"WINS":comp.score;

    // drawing the gaming area
    drawRect(0,0,canvas.width,canvas.height,"DARKCYAN" );

    //drawing the user score
     drawtext(text1,canvas.width/4-50,canvas.height/5);

     //drawing the user score
     drawtext(text2,(canvas.width)*3/4-50,canvas.height/5);

    // drawing the user paddle
    drawRect(user.x,user.y,user.w,user.h,user.color);

    // drawing the computer paddle
    drawRect(comp.x,comp.y,comp.w,comp.h,comp.color);

    //drawing the net
    drawnet();

    //drawing the ball
    drawball(ball.x,ball.y,ball.radius,ball.color);
}

function game(){
   
    update();
     
    render();
}

let fps = 50;

let loop =setInterval(game,1000/fps);
