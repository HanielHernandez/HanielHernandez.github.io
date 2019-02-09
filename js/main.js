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
    for(i=0;i<technologies.length;i++){
        var technology=technologies[i];
        var div = document.createElement('div');
        div.className = 'col-3 technologies';
        div.innerHTML = "<img src='"+technology.image+"'  style='width:128px; height:128px; margin:0px auto; display:block;'  alt=''> <p style='text-align: center;'>"+technology.name+"</p>"
        document.getElementById("technologies").appendChild(div);
        
    }
    document.getElementById('menu-button').addEventListener('click',function(){
      
        open= !open;
        openMenu();
    });
    function openMenu(){
        var menu = document.getElementsByClassName('hidden-menu')[0];
        if(open==true){
            document.getElementById('menu-button').innerHTML="<i class='fas fa-times' style='font-size:35px'></i>";
            menu.setAttribute('style',"display:block;")
        }else{
            document.getElementById('menu-button').innerHTML="<i class='fas fa-bars' style='font-size:35px'></i>";
            menu.setAttribute('style',"display:none;")
        }
      
    }
    document.addEventListener('scroll',function(){
        var normalMenu=document.getElementsByClassName('link');
       // normalMenu.st"color: rgb(0,0,0);")
        
       console.log(window.scro)
       if(Window.scrollY==1507){
           console.log("cambiar");
        for(i=0;i< normalMenu.length; i++){
            normalMenu[i].setAttribute('style',"color: rgb(0,0,0);");
        }
       }
        
    })
    document.get
    