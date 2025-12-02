function szamol(){
    var a = document.getElementById('le').value;
    var b = document.getElementById('fel').value;
    var c = Math.abs(b-a);
    if(c==0)
    {
        alert('Hiba');
    }
    else
    {
        alert('menetidő');
    }
}