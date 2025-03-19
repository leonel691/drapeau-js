
// // declaration et affectation des balises html dans les constantes
const blocDrapeau=document.getElementById("drapeauContainer");
const blocElement1=document.getElementById("element1");
const blocElement2=document.getElementById("element2");
const blocElement3=document.getElementById("element3");
const blocElement2_component1=document.getElementById("element2_component1");
// // lecture de la valeur entrer dans l'input
function lecture(){
    let paysEntrer=document.getElementById("pays").value.toLowerCase();
    // console.log(paysEntrer)
    console.log("bienvenu au" ,paysEntrer)
    switch (paysEntrer) {
        case "":
        alert("entrer quelque chose")
        break;
        case "japon"|| "japan":
        blocDrapeau.style.display="flex";
        blocDrapeau.style.alignItems="center";
        blocDrapeau.style.justifyContent="center";
        blocElement1.style.width=" 20rem"
        blocElement1.style.height="20rem"
        blocElement1.style.backgroundColor="red"
        blocElement1.style.borderRadius="50%"
        break;
        case "cameroun"|| "cameroon":
        blocDrapeau.style.display="flex";
        blocDrapeau.style.alignItems="center";
        blocDrapeau.style.justifyContent="center";
        blocElement1.style.backgroundColor="green"
        blocElement1.style.flex="1"
        blocElement1.style.height="100%";
        blocElement2.style.backgroundColor="red"
        blocElement2.style.flex="1"
        blocElement2.style.display="flex"
        blocElement2.style.justifyContent="center"
        blocElement2.style.alignItems="center"
        blocElement2.style.height="100%";
        blocElement3.style.backgroundColor="yellow"
        blocElement3.style.flex="1"
        blocElement3.style.height="100%";
        blocElement2_component1.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        blocElement2_component1.style.width="10rem"
        blocElement2_component1.style.height="10rem"
        blocElement2_component1.style.backgroundColor="yellow"
        break;
        case "senegal"|| "senegale":
            blocDrapeau.style.display="flex";
            blocDrapeau.style.alignItems="center";
            blocDrapeau.style.justifyContent="center";
            blocElement1.style.backgroundColor="green"
            blocElement1.style.flex="1"
            blocElement1.style.height="100%";
            blocElement2.style.backgroundColor="yellow"
            blocElement2.style.flex="1"
            blocElement2.style.display="flex"
            blocElement2.style.justifyContent="center"
            blocElement2.style.alignItems="center"
            blocElement2.style.height="100%";
            blocElement3.style.backgroundColor="red"
            blocElement3.style.flex="1"
            blocElement3.style.height="100%";
            blocElement2_component1.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
            blocElement2_component1.style.width="10rem"
            blocElement2_component1.style.height="10rem"
            blocElement2_component1.style.backgroundColor="green"
            break;
        case "tchad" || "chad":
            blocDrapeau.style.display="flex";
            blocDrapeau.style.alignItems="center";
            blocDrapeau.style.justifyContent="center";
            blocElement1.style.backgroundColor="blue"
            blocElement1.style.flex="1"
            blocElement1.style.height="100%";
            blocElement2.style.backgroundColor="yellow"
            blocElement2.style.flex="1"
            blocElement2.style.height="100%";
            blocElement3.style.backgroundColor="red"
            blocElement3.style.flex="1"
            blocElement3.style.height="100%";
            break;
        case "guinée"|| "guinea":
            blocDrapeau.style.display="flex";
            blocDrapeau.style.alignItems="center";
            blocDrapeau.style.justifyContent="center";
            blocElement1.style.backgroundColor="red"
            blocElement1.style.flex="1"
            blocElement1.style.height="100%";
            blocElement2.style.backgroundColor="yellow"
            blocElement2.style.flex="1"
            blocElement2.style.height="100%";
            blocElement3.style.backgroundColor="green   "
            blocElement3.style.flex="1"
            blocElement3.style.height="100%";
            break;
        case "nigeria":
            blocDrapeau.style.display="flex";
            blocDrapeau.style.alignItems="center";
            blocDrapeau.style.justifyContent="center";
            blocElement1.style.backgroundColor="green"
            blocElement1.style.flex="1"
            blocElement1.style.height="100%";
            blocElement2.style.backgroundColor="white"
            blocElement2.style.flex="1"
            blocElement2.style.height="100%";
            blocElement3.style.backgroundColor="green"
            blocElement3.style.flex="1"
            blocElement3.style.height="100%";
            break;
        case "libye" || "libya": 
            blocDrapeau.style.display="flex";
            blocDrapeau.style.flexDirection="column";
            blocDrapeau.style.alignItems="center";
            blocDrapeau.style.justifyContent="center";
            blocElement1.style.backgroundColor="red"
            blocElement1.style.flex="1"
            blocElement1.style.width="100%"
            blocElement2.style.backgroundColor="black"
            blocElement2.style.flex="1" 
            blocElement2.style.display="flex"
            blocElement2.style.justifyContent="center"
            blocElement2.style.alignItems="center"
            blocElement2.style.width="100%"
            blocElement3.style.backgroundColor="green"
            blocElement3.style.flex="1"
            blocElement3.style.width="100%";
            blocElement2_component1.style.width=" 10rem"
            blocElement2_component1.style.height="10rem"
            // blocElement2_component1.style.backgroundImage="url('./assets/images/libye.jpeg')"
            // blocElement2_component1.style.backgroundColor="gray"
            break;
        default:
           alert("ce pays n'existe pas")
            break;
    }
}
// // utilisation des conditions d'execution









