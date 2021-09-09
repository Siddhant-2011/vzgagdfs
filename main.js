lwx=0;
lwy=0;
rs=0;
rwx=0;
rwy=0;
song1='';
song2='';

ls=0;

function preload() {

}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet('video',modelLoaded);
posenet.on('pose',gotPoses);
}

function  draw(){
   
    fill('#FF0000');
    stroke('#FF0000');

   
 
    image(video,0,0,450,300)

    if(ls>0.2){
        circle(lwx,lwy,20);
song1.play('music2.mp3')
loadSound(music.mp3)
        if(ls==false){
song2.play('music.mp3');
        }
    }

}

if(rs>0.2){
    circle(rwx,rwy,20);
song1.play('music2.mp3')
loadSound(music.mp3)
    if(rs==false){
song2.play('music.mp3');
    }
}




function modelLoaded(){
    console.log('jgfdahfjlfdgjalhgfljhagf');
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
        console.log('lx= '+lwx+'ly= '+lwy+'rx= '+rwx+'ry= '+rwy);    
    }
}