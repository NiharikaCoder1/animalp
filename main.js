function start() {
    navigator.mediaDevices.getUserMedia ({audio: true})
   classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Cvfh4S2D4/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else {
       console.log(results)
        document.getElementById('hear').innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById('accu').innerHTML = 'Accuracy - ' + (results[0].confidence *100).toFixed(2)+  ' % ';
    
    if(results[0].label == 'Background Noise'){
    document.getElementById('i1').src='people.jpg';
    }
    else if(results[0].label == 'Cat'){
        document.getElementById('i1').src='cat.webp';
        }
        else if(results[0].label == 'Dog'){
            document.getElementById('i1').src='dog.webp';
            }
        }
    }