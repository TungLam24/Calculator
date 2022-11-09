function addition () {
    let first_num = document.getElementById("1stnum").value;
    let second_num = document.getElementById("2ndnum").value;
    let result;
    result = parseInt(first_num) + parseInt(second_num)
    document.getElementById("result").innerHTML = "Result addition: " + result
}
function subtraction () {
    let first_num = document.getElementById("1stnum").value;
    let second_num = document.getElementById("2ndnum").value;
    let result;
    result = parseInt(first_num) - parseInt(second_num)
    document.getElementById("result").innerHTML = "Result subtraction: " + result
}
function multiplication () {
    let first_num = document.getElementById("1stnum").value;
    let second_num = document.getElementById("2ndnum").value;
    let result;
    result = parseInt(first_num) * parseInt(second_num)
    document.getElementById("result").innerHTML = "Result multiplication: " + result
}
function division () {
    let first_num = document.getElementById("1stnum").value;
    let second_num = document.getElementById("2ndnum").value;
    let result;
    result = parseInt(first_num) / parseInt(second_num)
    document.getElementById("result").innerHTML = "Result division: " + result
}