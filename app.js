const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");


// kutucuklar
const SeçilenDk = document.getElementById("SeçilenDk");
const SeçilenSn = document.getElementById("SeçilenSn");

// butonlar
const başlatButonu = document.getElementById("başlat");
const sıfırlaButonu = document.getElementById("sıfırla");

let dur = false;

SeçilenDk.addEventListener("change", () => { 
    dakika.textContent = SeçilenDk.value;
});

SeçilenSn.addEventListener("change", () => { 
    saniye.textContent =
     SeçilenSn.value < 10 ? "0" + SeçilenSn.value : SeçilenSn.value;
});

başlatButonu.addEventListener("click", startTimer);

sıfırlaButonu.addEventListener("click", () => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    SeçilenDk.value = "00";
    SeçilenSn.value = "00";
        
})

function startTimer() {
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval = setInterval(() => {
      sn--;
      sn = sn < 10 ? "0" + sn : sn;
      if(sn == "0-1") {
        dk--;
        sn = 59;
      }
      if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
        var audio = new Audio("https://firebasestorage.googleapis.com/v0/b/sayac-e7275.appspot.com/o/nokia-ringtone.mp3?alt=media&token=854fb3e6-0084-4aa2-b4c6-d09bdbc353ce");
        audio.play();
        clearInterval(interval);
        SeçilenDk.value = "00";
        SeçilenSn.value = "00"; 
      }
      if(dur){
        clearInterval(interval);
        return;   
      }

      dakika.textContent = dk;
      saniye.textContent = sn;
    },1000) 
}


