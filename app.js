//string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
let cumle = "huseyin emre budak";
let yeniCumle = cumle.split(" ");

for (i = 0; i < yeniCumle.length; i++) {
    yeniCumle[i] = yeniCumle[i].charAt(0).toUpperCase() + yeniCumle[i].slice(1)
}
console.log(yeniCumle.join(" "))

//0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
let sayilar = "";

for (let i = 1; i <= 100; i++) {
    sayilar += i + ",";
    if (i % 10 == 0) {
        sayilar += "\n"
    }
}
console.log(sayilar);

/*3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....*/
let asal = []
for (let i = 2; i < 100; i += 1) {
    let Boolean = true;
    for (let k = 2; k < i; k++) {
        if (i % k == 0) {
            Boolean = false;
        }
    }
    if (Boolean) {
        asal.push(i);
    }
}
console.log(asal);

//4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 
let numara = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sembol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];
let kHarf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "ü", "v", "y", "z"];
let bHarf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];
let sifre = [];
for (i = 1; i <= 50; i += 1) {
    let guvenli = "";
    for (j = 1; j <= (2); j += 1) {
        let sayi = numara[Math.floor(Math.random() * 10)];
        let ozelKarakter = sembol[Math.floor(Math.random() * 12)];
        let kücükHarf = kHarf[Math.floor(Math.random() * 23)];
        let büyükHarf = bHarf[Math.floor(Math.random() * 23)];
        guvenli += sayi + ozelKarakter + kücükHarf + büyükHarf;
    }
    sifre.push(guvenli);
}
console.log(sifre);

//5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
for (i = 1; i <= 6; i += 1) {
    console.log("*".repeat(i))
}