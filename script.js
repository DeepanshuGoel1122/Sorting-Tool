console.log("SortingTool");

let input_text = document.querySelector(".input-text");
let output_box = document.querySelector(".output-box");

let ascending_btn = document.getElementById("ascending-btn");
let descending_btn = document.getElementById("descending-btn");


// ------------------------------On Button Click-----------------------------------------------------
function ascendingSort(){
    ascending_btn.classList.add("active");
    descending_btn.classList.remove("active");
    doSort();
    
}

function descendingSort(){
    descending_btn.classList.add("active");
    ascending_btn.classList.remove("active");
    doSort();
}

// -----------------------------------------------------------------------------------------------------



window.addEventListener(
    "input",
    function (event) {
        if (event.target.matches(".input-text")) {
            doSort();
        }
    },
    false
);



function doSort() {
    let text = input_text.value;

    let split_text = text.split(/[\r?\n ,]+/);

    let numArr = [];
    let strArr = [];

    for (let i = 0; i < split_text.length; i++) {
        if (split_text[i].match(/^[0-9]*(?<![a-zA-Z])$/)) {

            numArr.push(split_text[i]); //To add only numbers to seprate array 
        }
        else {
            strArr.push(split_text[i]); //To add only characters to seprate array 
        }

    }

    
    numArr = numArr.filter(v => v != '');   //To remove extra empty element in array

    // ----------Sort Numbers----------------
    numArr.sort(function (a, b) {
        return a - b;
    });


    //-----------Sort String-----------------
    strArr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });



    // ------------------Printing Result------------------------------------------------------------

    if(ascending_btn.classList.contains("active")){
        output_box.innerHTML = numArr.join('</br>') + strArr.join('</br>');
    }
    else if(descending_btn.classList.contains("active")){
        output_box.innerHTML = numArr.reverse().join('</br>') + strArr.reverse().join('</br>');
    }
    
}



// ---------------------------------------------END------------------------------------------------------------------
