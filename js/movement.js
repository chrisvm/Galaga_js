/**
 * Created by benjamin on 05-04-16.
 */



var mappin = new Map();


function mappInit(){

//left
    mappin.set(92 , .6);
    mappin.set(116, .5);
    mappin.set(140, .4);
    mappin.set(164, .3);
    mappin.set(188, .2);

//right
    mappin.set(212, .2);
    mappin.set(236, .3);
    mappin.set(260, .4);
    mappin.set(284, .5);
    mappin.set(308, .6);
}

function enemyMoveOut(bugArray){

    console.log(bugArray.length);
    
    mappInit();
    var index = 0;

    for (var bug in bugArray){
        console.log(bugArray[index]);
        bugArray[index].x += mappin.get([bug.x]);
        console.log(bugArray[index]);

        index ++;
    }
    
    return bugArray;
}

function enemyMoveIn(bugArray){

    mappInit();
    var index = 0;

    for (var bug in bugArray){
        console.log(bugArray[index]);
        bugArray[index].x -= mappin.get([bug.x]);
        console.log(bugArray[index]);
        index ++;
    }
    return bugArray;
}
