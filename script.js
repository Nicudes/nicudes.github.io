
var x = window.matchMedia("(max-width: 500px)")

function ShowAll(){
    document.getElementById('show-all').setAttribute("class", "red");
    document.getElementById('show-all1').setAttribute("class", "red");
    document.getElementById('show-all2').setAttribute("class", "red");
    document.getElementById('show-all3').setAttribute("class", "red");
    document.getElementById('show-all4').setAttribute("class", "red");
    document.getElementById('show-all5').setAttribute("class", "red");

    document.getElementById('display-all').style.display = "none";
    document.getElementById('display-none').style.display = "block";
}

function HideAll(){
    document.getElementById('show-all').setAttribute("class", "display-skill");
    document.getElementById('show-all1').setAttribute("class", "display-skill");
    document.getElementById('show-all2').setAttribute("class", "display-skill");
    document.getElementById('show-all3').setAttribute("class", "display-skill");
    document.getElementById('show-all4').setAttribute("class", "display-skill");
    document.getElementById('show-all5').setAttribute("class", "display-skill");

    document.getElementById('display-all').style.display = "block";
    document.getElementById('display-none').style.display = "none";
    
}

function NavHome(){

    document.getElementById('view-content-portfolio').style.opacity= 0;
    document.getElementById('view-content-about').style.opacity= 0;
    document.getElementById('view-content-contact').style.opacity= 0;
    document.getElementById('my-skills-mobile').style.opacity=1;

    
    setTimeout(() => {
        document.getElementById('view-content-portfolio').style.display = "none";
        document.getElementById('view-content-about').style.display = "none";
        document.getElementById('view-content-contact').style.display = "none";
        document.getElementById('my-skills-mobile').style.display = "block";

    }, 400);
    


    setTimeout(() => {
        document.getElementById('view-content-home').style.display="flex";
        if(!x.matches){
            document.getElementById('icon-wrapper').style.display = "flex";
        }
    }, 400);

    
    setTimeout(() => {
        document.getElementById('view-content-home').style.opacity= 1;   
        document.getElementById('icon-wrapper').style.opacity= 1;
    }, 700);    
}


function NavPortfolio(){
    
    document.getElementById('view-content-home').style.opacity= 0;   
    document.getElementById('view-content-about').style.opacity= 0;   
    document.getElementById('view-content-contact').style.opacity= 0;   
    document.getElementById('icon-wrapper').style.opacity= 0;
    document.getElementById('my-skills-mobile').style.opacity=0;
    setTimeout(() => {
        document.getElementById('view-content-home').style.display="none";
        document.getElementById('view-content-about').style.display = "none";
        document.getElementById('view-content-contact').style.display = "none";
        document.getElementById('icon-wrapper').style.display = "none";
        document.getElementById('my-skills-mobile').style.display="none";

    }, 400);


    setTimeout(() => {
        document.getElementById('view-content-portfolio').style.display = "flex";
    }, 400);
    
    setTimeout(() => {
        document.getElementById('view-content-portfolio').style.opacity= 1;
    }, 800); 
}


function NavAbout(){
    document.getElementById('view-content-contact').style.opacity= 0;
    document.getElementById('view-content-portfolio').style.opacity= 0;
    document.getElementById('view-content-home').style.opacity= 0;
    document.getElementById('icon-wrapper').style.opacity= 0;
    
    
    setTimeout(() => {
        document.getElementById('view-content-portfolio').style.display = "none";
        document.getElementById('view-content-contact').style.display = "none";
        document.getElementById('view-content-home').style.display = "none";
        document.getElementById('icon-wrapper').style.display = "none";
    }, 400);

    
    setTimeout(() => {
        document.getElementById('view-content-about').style.display="flex";
    }, 400);

    
    setTimeout(() => {
        document.getElementById('view-content-about').style.opacity= 1;   
    }, 700); 

}
function NavContact(){

    document.getElementById('view-content-portfolio').style.opacity= 0; 
    document.getElementById('view-content-about').style.opacity= 0;
    document.getElementById('view-content-home').style.opacity= 0;
    document.getElementById('icon-wrapper').style.opacity= 0;
    
    
    setTimeout(() => {
        document.getElementById('view-content-portfolio').style.display = "none";
        document.getElementById('view-content-about').style.display = "none";
        document.getElementById('view-content-home').style.display = "none";
        document.getElementById('icon-wrapper').style.display = "none";
    }, 400);

    
    setTimeout(() => {
        document.getElementById('view-content-contact').style.display="flex";
    }, 400);

    
    setTimeout(() => {
        document.getElementById('view-content-contact').style.opacity= 1;   
    }, 700); 
}

function CopyMail() {
    var copyText = document.getElementById("my-mail");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    ShowSnack();
  }
  function CopyNumber() {
    var copyText = document.getElementById("my-number");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    ShowSnack();
  }

  function ShowSnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

      var currentPage = 1;
      var portfolioText = "portfolio";
      var stringBuilderPortfolio;
 
  function PreviousPortfolio(){

   }

  function NextPortfolio(){
    if (currentPage <= 4) {
    stringBuilderPortfolio = portfolioText + currentPage.toString();
    
    document.getElementById(stringBuilderPortfolio).style.opacity = 0;

    setTimeout(() => {
        document.getElementById(stringBuilderPortfolio).style.display = "none";
        document.getElementById("previous-page").style.visibility = "block";
    }, 400);

    setTimeout(() => {
        currentPage++;
        stringBuilderPortfolio = portfolioText + currentPage.toString();

        setTimeout(() => {
            document.getElementById(stringBuilderPortfolio).style.opacity = 1;
            document.getElementById(stringBuilderPortfolio).style.display = "block";
        
                if (currentPage > 4) {
                document.getElementById("next-page").style.visibility = "hidden";
                }
        }, 400);
    

    }, 400);
      
    }
  
   }
  function PreviousPortfolio(){
    if (currentPage > 1) {
        stringBuilderPortfolio = portfolioText + currentPage.toString();
        document.getElementById(stringBuilderPortfolio).style.opacity = 0;

        setTimeout(() => {
            document.getElementById(stringBuilderPortfolio).style.display = "none";
            document.getElementById("previous-page").style.visibility = "block";
        }, 400);
     

         setTimeout(() => {
               
            currentPage--;
        
            stringBuilderPortfolio = portfolioText + currentPage.toString();
        
                setTimeout(() => {
                    document.getElementById(stringBuilderPortfolio).style.opacity = 1;
                    document.getElementById(stringBuilderPortfolio).style.display = "block";
                
                        if (currentPage > 3) {
                        document.getElementById("next-page").style.visibility = "hidden";
                        }
                }, 400);
            
        
            }, 400);
  
        document.getElementById(stringBuilderPortfolio).style.display = "block";
        console.log(stringBuilderPortfolio);
    
    


              
        }
  }