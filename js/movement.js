/**
 * Created by benjamin on 05-04-16.
 */

var redLeft,
    redRight,
    yellowLeft,
    yellowRight;

var tag;


function mapInit(){
    
    tag = true;

    redLeft  = new Map();
    redRight = new Map();
    yellowLeft  = new Map();
    yellowRight = new Map();

//right
    redRight.set(7, .4);
    redRight.set(6, .3);
    redRight.set(5, .2);
    redRight.set(4, .1);
    redRight.set(15, .4);
    redRight.set(14, .3);
    redRight.set(13, .2);
    redRight.set(12, .1);
//left
    redLeft.set(0, .4);
    redLeft.set(1, .3);
    redLeft.set(2, .2);
    redLeft.set(3, .1);
    redLeft.set(8, .4);
    redLeft.set(9, .3);
    redLeft.set(10, .2);
    redLeft.set(11, .1);

    yellowRight.set(9, .5);
    yellowRight.set(8, .4);
    yellowRight.set(7, .3);
    yellowRight.set(6, .2);
    yellowRight.set(5, .1);
    yellowRight.set(19, .5);
    yellowRight.set(18, .4);
    yellowRight.set(17, .3);
    yellowRight.set(16, .2);
    yellowRight.set(15, .1);

    yellowLeft.set(0, .5);
    yellowLeft.set(1, .4);
    yellowLeft.set(2, .3);
    yellowLeft.set(3, .2);
    yellowLeft.set(4, .1);
    yellowLeft.set(10, .5);
    yellowLeft.set(11, .4);
    yellowLeft.set(12, .3);
    yellowLeft.set(13, .2);
    yellowLeft.set(14, .1);
}

mapInit();

function enemyMove(bugArray){

    if(bugArray.length/2 == redRight.size)
        bugArray = filterBugs(bugArray, redRight, redLeft, bugArray.length/4 - 1);
        
    else if(bugArray.length/2 == yellowLeft.size)
        bugArray = filterBugs(bugArray, yellowRight, yellowLeft, bugArray.length/4 - 1);

    return bugArray;
}

///TODO: Fix bug; after some seconds of iteration bugs go crazy.
function filterBugs(bugArray, mappingRight, mappingLeft, middle) {

    for (var index = 0; index < bugArray.length; index++){

        if(mappingLeft.has(index) && tag){
            bugArray[index][0].position.x -= mappingLeft.get(index);
        }
        else if(mappingLeft.has(index) && !tag) {
            bugArray[index][0].position.x += mappingLeft.get(index);
        }

        if(mappingRight.has(index) && tag){

            if(bugArray[middle][0].position.x <= 180){

                bugArray[index][0].position.x += mappingRight.get(index);

                if(index = bugArray.length) {
                   // console.log(bugArray[middle + 1][0].position.x + " false");
                    tag = false;
                }
            }
            else{
                bugArray[index][0].position.x += mappingRight.get(index);
            }
        }
        else if (mappingRight.has(index) && !tag) {

            if(bugArray[middle][0].position.x >= 190) {

                bugArray[index][0].position.x -= mappingRight.get(index);

                if(index = bugArray.length){
                    //console.log(bugArray[middle + 1][0].position.x + " true");
                    tag = true;
                }
            }
            else{
                bugArray[index][0].position.x -= mappingRight.get(index);
            }
        }


    }

    return bugArray;
}
