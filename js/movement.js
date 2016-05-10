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
    redRight.set(7, .22);
    redRight.set(6, .19);
    redRight.set(5, .16);
    redRight.set(4, .13);
    redRight.set(15, .22);
    redRight.set(14, .19);
    redRight.set(13, .16);
    redRight.set(12, .13);
//left
    redLeft.set(0, .22);
    redLeft.set(1, .19);
    redLeft.set(2, .16);
    redLeft.set(3, .13);
    redLeft.set(8, .22);
    redLeft.set(9, .19);
    redLeft.set(10, .16);
    redLeft.set(11, .13);

    yellowRight.set(9, .25);
    yellowRight.set(8, .22);
    yellowRight.set(7, .19);
    yellowRight.set(6, .16);
    yellowRight.set(5, .12);
    yellowRight.set(19, .25);
    yellowRight.set(18, .22);
    yellowRight.set(17, .19);
    yellowRight.set(16, .16);
    yellowRight.set(15, .12);

    yellowLeft.set(0, .25);
    yellowLeft.set(1, .22);
    yellowLeft.set(2, .19);
    yellowLeft.set(3, .16);
    yellowLeft.set(4, .12);
    yellowLeft.set(10, .25);
    yellowLeft.set(11, .22);
    yellowLeft.set(12, .19);
    yellowLeft.set(13, .16);
    yellowLeft.set(14, .12);
}

mapInit();

function enemyMove(bugArray, iteration){

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
            bugArray[index][1].position.x -= mappingLeft.get(index);
        }
        else if(mappingLeft.has(index) && !tag) {
            bugArray[index][0].position.x += mappingLeft.get(index);
            bugArray[index][1].position.x += mappingLeft.get(index);
        }

        if(mappingRight.has(index) && tag){
            
            if(bugArray[middle][0].position.x <= 175){

                bugArray[index][0].position.x += mappingRight.get(index);
                bugArray[index][1].position.x += mappingRight.get(index);
                
                if(index = bugArray.length) {
                    console.log(bugArray[middle + 1][0].position.x + " false");

                    tag = false;
                }
            }
            else{
                bugArray[index][0].position.x += mappingRight.get(index);
                bugArray[index][1].position.x += mappingRight.get(index);
            }
        } 
        else if (mappingRight.has(index) && !tag) {
            
            if(bugArray[middle][0].position.x >= 188) {

                bugArray[index][0].position.x -= mappingRight.get(index);
                bugArray[index][1].position.x -= mappingRight.get(index);
                
                if(index = bugArray.length){
                    
                    console.log(bugArray[middle + 1][0].position.x + " true");
                    tag = true;
                }
            }
            else{
                bugArray[index][0].position.x -= mappingRight.get(index);
                bugArray[index][1].position.x -= mappingRight.get(index);
            }
        }


    }
    
    return bugArray;
}
