var styleNum = 1;

function changeCSS() {
    // HTML --> Style 1
    if(styleNum == 0) {
        document.getElementById("styleSelect").href="style1.css";
        document.getElementById("styleStatus").innerHTML = "Currently showing CSS style 1";
    }
    // Style 1 --> Style 2
    if(styleNum == 1) {
        document.getElementById("styleSelect").href="style2.css";
        document.getElementById("styleStatus").innerHTML = "Currently showing CSS style 2";
    }
    // Style 2 --> HTML
    if(styleNum == 2) {
        document.getElementById("styleSelect").href="";
        document.getElementById("styleStatus").innerHTML = "Currently showing plain HTML";
    }
    
    // Use modulus to cycle through the 3 different styles of the website
    styleNum = (styleNum + 1) % 3;
}
