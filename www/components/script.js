// This is a JavaScript file
function funcao(){

  var idade = parseInt(document.getElementById("idade").value);
  var nome = document.getElementById("nome").value;

  let img = document.createElement('img')
  img.src = "https://blog.influx.com.br/storage/app/media/uploaded-files/hubfs/1415475/blog-files/maior-menor-de-idade-img1_2.png";
  img.style = " width: 100vw";

  let img2 = document.createElement('img')
  img2.src = "http://2.bp.blogspot.com/_qJ1wApaLt3I/TOuzqcsAcMI/AAAAAAAAA2E/q7aoFN4Aoko/s1600/_18anos.jpg";
  img2.style = "width: 100vw";

  if(idade > 18){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh; font-family: arial;'>"+nome+", você é maior de idade!</h1><br>");
    document.body.appendChild(img);

  }else{
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh; font-family: arial;'>"+nome+", você é menor de idade!</h1><br>");
    document.body.appendChild(img2);
  }
}

