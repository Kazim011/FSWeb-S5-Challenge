const Header = (baslik, tarih, yazi) => {

  const header = document.createElement("div");
  header.classList.add("header");
  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = tarih;
  header.appendChild(date);
  const baslikOrta = document.createElement("h1");
  baslikOrta.textContent = baslik;
  header.appendChild(baslikOrta);
  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = yazi;
  header.appendChild(temp);


  return header;




  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {

  document.querySelector(secici).appendChild(Header("Workintech","31 Aralık 2022","En İyilerin Topluluğu..."));
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
}

export { Header, headerEkleyici }
