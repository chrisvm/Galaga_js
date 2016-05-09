/**
 * Created by benjamin on 05-04-16.
 */

var redLeft  = new Map(),
    redRight = new Map(),
    yellowLeft  = new Map(),
    yellowRight = new Map();

var tag = true;


function mappInit(){

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
    yellowRight.set(5, .13);
    yellowRight.set(19, .25);
    yellowRight.set(18, .22);
    yellowRight.set(17, .19);
    yellowRight.set(16, .16);
    yellowRight.set(15, .13);

    yellowLeft.set(0, .25);
    yellowLeft.set(1, .22);
    yellowLeft.set(2, .19);
    yellowLeft.set(3, .16);
    yellowLeft.set(4, .13);
    yellowLeft.set(10, .25);
    yellowLeft.set(11, .22);
    yellowLeft.set(12, .19);
    yellowLeft.set(13, .16);
    yellowLeft.set(14, .13);

}

mappInit();

function enemyMove(bugArray){

    if(bugArray.length/2 == redRight.size)
        bugArray = filterBugs(bugArray, redRight, redLeft, 4);
        
    else if(bugArray.length/2 == yellowLeft.size)
        bugArray = filterBugs(bugArray, yellowRight, yellowLeft, 5);

    return bugArray;
}

function filterBugs(bugArray, mappingRight, mappingLeft, middle) {
    
    for (var index = 0; index < bugArray.length; index++){

        if(mappingRight.has(index) && tag) {
            if(bugArray[middle][0].position.x > 220){
                tag = false;
            }
            else{
                bugArray[index][0].position.x += mappingRight.get(index);
                bugArray[index][1].position.x += mappingRight.get(index);
            }
        } 
        else if (mappingRight.has(index) && !tag) {
            if(bugArray[middle][0].position.x <= 213) {
                tag = true;
            }
            else{
                bugArray[index][0].position.x -= mappingRight.get(index);
                bugArray[index][1].position.x -= mappingRight.get(index);
            }
        }

        if(mappingLeft.has(index) && tag){
            bugArray[index][0].position.x -= mappingLeft.get(index);
            bugArray[index][1].position.x -= mappingLeft.get(index);
        } 
        else if(mappingLeft.has(index) && !tag) {
            bugArray[index][0].position.x += mappingLeft.get(index);
            bugArray[index][1].position.x += mappingLeft.get(index);
        }
    }
    
    return bugArray;
}


function enemyMoveIn(bugArray){
    var index = 0;

    for (var bug in bugArray){
        // bugArray[index][0].position.x -= redLeft.get(bug[0].position.x);
        // bugArray[index][1].position.x -= redLeft.get(bug[1].position.x);
        index ++;
    }
    return bugArray;
}
