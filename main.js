function preload(){}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
}

function clearCanvas(){
    background("white");
    random_number = Math.floor(quick_draw_data_set);
    console.log(sketch);
}

function draw(){
    check_sketch();
    if(drawn_sketch = sketch){
        answer_holder = "set";
        score = score++;
        document.getElementById("score") = score;
    }
}

function check_sketch(){
    timer_counter = timer_counter + 1;
    document.getElementById("timer") = timer_counter;
    if(timer_counter>500){
        timer_counter = 0;
    }
    if(answer_holder="set"){
        answer_holder = "";
        updatCanvas();
    }
}