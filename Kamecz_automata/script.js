var type = prompt('Add meg a kávé típuát');
var plus = prompt('Add meg hogy milyen plusz kell hozzá')

console.log(plus);
console.log(type);
console.log(price);
console.log(total);

var types = {
    latte: 600,
    espresso:350,
    capuccino:500,
};

var price = types[type];
var total = type + plus;


var pluss = {
    laktozmentes: 150,
    cukor:50,
    tejszin:100,

}
var parosakSzama = 0;

parosakSzama += szamok[0] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[1] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[2] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[3] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[4] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[5] % 2 === 0 ? 1 : 0;

console.log(szamok[0]);


var index = 0;
var paratlanokSzama = 0;
while(index < 6) {
    console.log(index);
    index++;

}