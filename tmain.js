function preload(){
}

function setup(){
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o8WsPgih1/model.json',modelLoaded);
}

function modelLoaded(){
    console.log ("model loaded successfully");
}

function draw(){    
    image(video,0,0,350,300);
    classifier.classify(video,got_result);
}

function got_result(results,error){
    if(error){
        console.log (error);
    }
    else{
        console.log (results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}