/*console.log('je suis hello'); /*pas de = !!) & test pour vérifier le lien html > js --*/
//function nom() {
//function titleJS() {
 
//}
function hollow1() {
    var apparait=document.querySelector('.calcule');
    
    event.preventDefault();
    apparait.innerHTML = " ";
    console.log(apparait);
    /*var integration = document.querySelector('.calcule');
    //integration.innerHTML = "";
    apparait.innerHTML = integration.innerHTML;*/
    //apparait= document.getElementsByClassName('.MedianeH').ClassList.remove(document.querySelector('.calcule'));
    //return hollow1();
}
function hollow2() {
    apparait=document.querySelector('.calcule');

    //var integration = document.querySelector('.calcule');
    //integration.innerHTML = "";
    //document.getElementsByClassName('.MedianeH').ClassList.add(document.querySelector('.calcule'));
 
}
function addition(...params){
    var resultat=0;
    params.forEach(element => {
    resultat += element;
    });
    return resultat;
    }
    
function calculer() {
    var soustraire = function (chiffre1, chiffre2){
        return chiffre1 - chiffre2;
    };
    var divise = function (chiffre1, chiffre2){
        return chiffre1 / chiffre2;
    };
    var multiplie = function (chiffre1, chiffre2){
        return chiffre1 * chiffre2;
    };
    var Nbre1=(document.getElementById('nbre1').value);
    var Nbre2=(document.getElementById('nbre2').value);
    const calcul=document.getElementById('selection').value;
    console.log(Nbre1);
    var nb1=parseInt(Nbre1);
    console.log(Nbre2);
    var nb2=parseInt(Nbre2);
    console.log(calcul);
    event.preventDefault();
    if (calcul =="+") {
        alert(addition(nb1,nb2));
    }
    if (calcul =="-") {
        alert(soustraire(nb1,nb2));  
    } 
    if (calcul =="/") {
        alert(divise(nb1,nb2));
    }
    if (calcul =="*") {
        alert(multiplie(nb1,nb2));
    }
    return false
    
}
/*function flagnbre1(){
    var flag_Nbre1= document.querySelector(".nombre1");
    flag_Nbre1.innerHTML=" ";
    flag_Nbre1.innerHTML +="Saisir : un nombre";
    flag_Nbre1.style.backgroundColor="yellow";
    

}*/

document.querySelector("#nbre1").onmouseover = function(){
        document.querySelector(".nombre1").innerHTML =" ";   
        document.querySelector(".nombre1").innerHTML +="Saisir : un nombre";
        document.querySelector(".nombre1").style.backgroundColor="yellow";
}
document.querySelector("#nbre1").onmouseout = function(){
    document.querySelector(".nombre1").innerHTML =" ";   
    /*document.querySelector(".nombre2").innerHTML +="Saisir : un nombre";
    document.querySelector(".nombre2").style.backgroundColor="yellow";*/
}
document.querySelector("#nbre2").onmouseover = function(){
    document.querySelector(".nombre2").innerHTML =" ";   
    document.querySelector(".nombre2").innerHTML +="Saisir : un nombre";
    document.querySelector(".nombre2").style.backgroundColor="yellow";
}
document.querySelector("#nbre2").onmouseout = function(){
document.querySelector(".nombre2").innerHTML =" ";   
/*document.querySelector(".nombre2").innerHTML +="Saisir : un nombre";
document.querySelector(".nombre2").style.backgroundColor="yellow";*/
}
document.querySelector("#selection").onmouseover = function(){
    document.querySelector(".Operator").innerHTML =" ";   
    document.querySelector(".Operator").innerHTML +="Saisir : + - / ou *";
    document.querySelector(".Operator").style.backgroundColor="yellow";
}
document.querySelector("#selection").onmouseout = function(){
document.querySelector(".Operator").innerHTML =" ";   
/*document.querySelector(".nombre2").innerHTML +="Saisir : un nombre";
document.querySelector(".nombre2").style.backgroundColor="yellow";*/
}




/*function flagOperator(){
    var flag_Operation= document.querySelector('.Operator');
    flag_Operation.innerHTML=" ";
    flag_Operation.innerHTML +="Saisir : + - / ou *";
    flag_Operation.style.backgroundColor="yellow";
}*/



/*function hollow2() {
    var apparait=document.querySelector('.calcule');
    apparait.innerHTML = " ";

    //var integration = document.querySelector('.calcule');
    //integration.innerHTML = "";
    document.getElementsByClassName('.MedianeH').ClassList.add(document.querySelector('.calcule'));
 
}
/*var resultat = document.getElementById('#demo');
console.log(resultat.innerHTML);*/