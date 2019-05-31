
function cong() {
    let colum1 = parseFloat(document.getElementById("colum1").value);
    let colum2 = parseFloat(document.getElementById('colum2').value);
    result = colum1 + colum2;
    document.getElementById('result').innerHTML = result;
}
function tru() {
    let colum1 = parseFloat(document.getElementById("colum1").value);
    let colum2 = parseFloat(document.getElementById('colum2').value);
    result = colum1 - colum2;
    document.getElementById('result').innerHTML = result;
}
function nhan() {
    let colum1 = parseFloat(document.getElementById("colum1").value);
    let colum2 = parseFloat(document.getElementById('colum2').value);
    result = colum1 * colum2;
    document.getElementById('result').innerHTML = result;
}
function chia() {
    let colum1 = parseFloat(document.getElementById("colum1").value);
    let colum2 = parseFloat(document.getElementById('colum2').value);
    result = colum1/colum2;
    document.getElementById('result').innerHTML = result;
}