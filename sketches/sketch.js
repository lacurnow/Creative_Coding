const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    //Outer box.
    context.lineWidth = 3;
    context.strokeStyle = "#000000";
    context.beginPath();
    context.rect(50, 50, 500, 500);
    context.stroke();

    //Inside box.
    context.fillStyle = "#b56d21";
    let innerBox_x = 75;
    let innerBox_y = 75;
    let innerBox_width = 500;
    let innerBox_height = 500;
    context.fillRect(innerBox_x, innerBox_y, innerBox_width, innerBox_height); // x,y,w,h



    let radius = 50;
    let distance_between_x = 10;
    let distance_between_y = 60;
    circle_num_x = 3;
    circle_num_y = 7;
    //Code for centering the circles (on x-axis and y- axis).
    let x = ((innerBox_width + ( 2 * innerBox_x)) / 2) - ((distance_between_x / 2) * (circle_num_x - 1));
    let y = ((innerBox_height + (2 * innerBox_y)) / 2) - ((distance_between_y / 2) * (circle_num_y - 1));



    for (let i = 0; i < circle_num_x; i++) {
        for (let j = 0; j < circle_num_y; j++) {
            context.beginPath();
            context.arc((new_x = x + distance_between_x * i), (y + distance_between_y * j), radius, 0, Math.PI * 2);
            if (i % 2 == 0) {
                context.strokeStyle = "#000000"
            } 
            else {
                context.strokeStyle = "#b54821"
            }
            context.stroke();
            console.log(new_x)

        }
    }

  };
};

canvasSketch(sketch, settings);
