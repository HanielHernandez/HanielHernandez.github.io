// import {sal} from "sal.js";
var technologies=[
        {name:"HTML5",image:"assets/images/html_logo.png"},
        {name:"CSS3",image:"assets/images/css3_logo.png"},
        {name:"Javascript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"},
        {name:"Angular",image:"assets/images/angular_logo.png"},
        {name:"Bootstrap",image:"assets/images/boostrap_logo.png"},
        {name:"Materialize",image:"assets/images/materialize_logo.png"},
        {name:"Ionic",image:"assets/images/ionic_logo.png"},
        {name:"Firebase",image:"assets/images/firebase_logo.png"},
        {name:"Android",image:"assets/images/android_logo.png"}
    ];
var projectss=[
    {name:"Invemu",description:"Loremp iasdasd",link:""}
];
var open=false;
var menu = document.getElementById('responsive-menu');
var lines= document.querySelectorAll('.btn-line');

    
    for(i=0;i<technologies.length;i++){
        var technology=technologies[i];
        var div = document.createElement('div');
        div.className = 'col-2 technologies';
        div.innerHTML = "<img src='"+technology.image+"'  style='width:100%; margin:0px auto; display:block;'  alt=''> <p style='text-align: center;'>"+technology.name+"</p>"
        document.getElementById("technologies").appendChild(div);
        
    }
    document.getElementById('menu-btn').addEventListener('click',function(){
        console.log(open);
        if(open==false){
            menu.setAttribute('class','menu-open');
            lines[0].classList.add('line-left');
            lines[1].classList.add('line-erased');
            lines[2].classList.add('line-right');
            open=true;
        }else{
            menu.setAttribute('class',"menu-close");
            lines[0].classList.remove('line-left');
            lines[1].classList.remove('line-erased');
            lines[2].classList.remove('line-right');
            open=false;
        }   
        console.log(open);
    });



    document.addEventListener('scroll',function(){
        var normalMenu=document.getElementsByClassName('link');
       // normalMenu.st"color: rgb(0,0,0);")
        
       console.log(window.scrollY);
       if(Window.scrollY>1507){
           console.log("cambiar");
            console.log(normalMenu);
       }
    })
    document.get
    