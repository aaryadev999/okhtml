Webcam.set({
    width: 1920,
    height: 1080,
    image_format: 'png',
    png_quality:1080
});
camera = document.getElementById("camera");

Webcam.attach("#camera");

function jhonny_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_caught_in_4k" src="'+data_uri+'"/>';
    });
};

console.log("ml5 Version: ",ml5.version);

classifier = ml5.imageClassifier('',modelLoaded);

function modelLoaded() {
    console.log("MODELLODED! YAY! JHONNY SUKS");
};
function check_jhonny(){
    img = document.getElementById("jhonny_result");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error)
        
    }
    else {
        console.log("results");
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}