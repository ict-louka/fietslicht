let status=1;
let interval=100;
basic.forever(function () {   

    input.onButtonPressed(Button.A, function () {
        status++;
    })

    if (status>2) {
        status=0;
    }
    input.onButtonPressed(Button.B, function () {
        interval=interval-50;
    })

    if (interval==0) { 
        interval=250;
    }

    if (status===0){
        basic.clearScreen();
    }
    else if (status===1) {
        basic.pause(interval);
        basic.showIcon(IconNames.SmallDiamond);
        basic.pause(interval);
        basic.clearScreen();
    }
    else if (status===2) {
    basic.showIcon(IconNames.Chessboard);

    }
})