const btn = document.getElementById('btn');
const btn3= document.getElementById('btn2');
const p=document.querySelector('p');

function tentang(){
    p.innerHTML="Hai saya imam, nama lengkap Imam Windharko. Saya mahasiswa dari prodi Teknik Informatika";
}

function ubah(){
    var styles = `html{margin; 0;padding: 0;}
    body {
        background-color: rgba(196, 253, 255, 0.986);
        font-family: Georgia, "Times New Roman", Times, serif;
    }
    .menu{
        background-color: rgb(19, 248, 218);    
    }
    .title{
        margin: auto;
    }
    .isi {
        background-color: rgb(255, 255, 255);
    }
    #tentang {
        font-family: Arial, Helvetica, sans-serif;
    }
    .foto {
        width: 100px;
        height: 90px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
    .hubungi{
    }
    .btn{
        margin:auto
        align-items: center;
    }
    .hubungi{
        background-color: rgb(255, 255, 255);
        margin:auto;
        align-items:center;
    }
    `;
    var styleSheet = document.querySelector('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

btn.addEventListener("click", tentang);
btn2.addEventListener("click", ubah);