const btn = document.getElementById('btn');
const btn2= document.getElementById('btn2');
const btn3= document.getElementById('btn3');
const p=document.querySelector('p');
const div=document.getElementsByClassName('hubungi');

function tentang(){
    p.innerHTML="Hai saya imam, nama lengkap Imam Windharko. Saya mahasiswa dari prodi Teknik Informatika";
}

function hubungi(){
    div.innerHTML=`<table style="border:0">
    <tr><td>instargram</td><td> : </td><td><a href="https://instagram.com/dharkoz28?igshid=YmMyMTA2M2Y=">dharkoz28</a></td></tr>
    <tr><td>Kontak Pribadi</td><td> : </td><td><a style="color:blue">089630525481</a></td></tr>
    <tr><td>email pribadi</td><td> : </td><td><a href="mailto:windharko.imam@gmail.com">windharko.imam@gmail.com</a></td></tr>
    </table><hr>`
    
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
    .home{
        display: flex;
        padding: 0;
        list-style: none;
    }
    .home li {
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
        float: right;
    }
    .pendidikan,
    .pendidikan td,
    .pendidikan th {
        margin: auto;
        border-radius: 5px;
        background-color: rgb(150, 150, 150);
        border:0;
    }
    .pendidikan th {
        background-color: rgb(131, 187, 187);
    }
    .pendidikan td {
        background-color: aquamarine;
    }
    .pendidikan {
        width: 75%;
    }`;
    var styleSheet = document.querySelector('style');
    styleSheet.innetText = styles;
    document.head.appendChild(styleSheet);
}

btn.addEventListener("click", tentang);
btn2.addEventListener("click", hubungi);
btn3.addEventListener("click", ubah);