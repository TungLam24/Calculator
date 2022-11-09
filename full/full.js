let display_screen =""
let index;
let result;
let final_result;
function touch(x){
    index = x.value
    if (index === "=") {
        final_result = eval(result)
        document.getElementById("display").innerHTML = display_screen + " = " + final_result
    } else if (index === "*") {
        display_screen = display_screen + " x "
        result = display_screen.replace(/ x /g, "*")
        result = result.replace(/ \÷ /g, "/")
        document.getElementById("display").innerHTML = display_screen

    } else if (index === "/") {
        display_screen = display_screen + " ÷ "
        result = display_screen.replace(/ \÷ /g, "/")
        result = result.replace(/ x /g, "*")
        document.getElementById("display").innerHTML = display_screen
    } else {
        display_screen = display_screen + index
        result = result + index
        document.getElementById("display").innerHTML = display_screen
    }
}
function reset() {
    document.getElementById("display").innerHTML = "0"
    result = 0
    display_screen = ""
}