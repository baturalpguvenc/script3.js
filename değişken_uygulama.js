// Ekim 1.Perşembe Değişkenler ile ilgili "uygulamalar" -Dante


/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : baturalp güvenç
            doğum tarihi        : 2000
            matematik notları   : 100, 90, 80

        öğrenci 2: 
            isim                : inek şaban
            doğum tarihi        : 1999
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

//Baturalp

let ogrenci1_isim = "Baturalp";
let ogrenci1_soyad = "Guvenc";
let ogrenci1_dogumTarihi = 2000;
//notlar1
let ogrenci1_mat1 = 100;
let ogrenci1_mat2 = 90;
let ogrenci1_mat3 = 80;
//ortalama1
let ogrenci1_ortalama = (ogrenci1_mat1 + ogrenci1_mat2 + ogrenci1_mat3) / 3;
console.log(parseFloat(ogrenci1_ortalama)); //parse ile tam sayı çıkartmamız lazım
console.log(typeof ogrenci1_ortalama);
//başarı1
console.log(ogrenci1_ortalama >= 50);

//yaş
let ogrenci1_yas = 2022 - ogrenci1_dogumTarihi;
console.log(ogrenci1_yas);


//Şaban

let ogrenci2_isim =  "İnek";
let ogrenci2_soyad = "Saban";
let ogrenci2_dogumTarihi = 1999;
//notlar2
let ogrenci2_mat1 = 40;
let ogrenci2_mat2 = 40;
let ogrenci2_mat3 = 30;
//ortalama2
let ogrenci2_ortalama = (ogrenci2_mat1 + ogrenci2_mat2 + ogrenci2_mat3) / 3;
console.log(parseFloat(ogrenci2_ortalama));
console.log(typeof ogrenci2_ortalama);
//başarı2
console.log(ogrenci2_ortalama >= 50);

//yaş
let ogrenci2_yas = 2022 - parseInt(ogrenci2_dogumTarihi);//parsint tam sayı çıkartır stringten
console.log(ogrenci2_yas);
