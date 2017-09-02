//Declarar funciones 
/*
function myFunction(){
document.getElementById('welcometext').innerHTML = 'Lel Did you belive it';

// Las variables se definen como tu gustes y mandes
//Se escribe Cammelcase o Pascalcase 
var firstName = 'Fernanda';
var secondName = 'Patricia'
var fullName = firstName + " " + secondName

var weight = 70 ;
var clothesweight = 2 ;
var totalweight = weight + clothesweight ;
//  lectura lineal, 
totalweight = weight + 30 ;


//Operaciones

var alumns = 13 ;

// Estas dos lineas son iguales pero ++ es un incrementador 
var alumnsToday = alumns + 1 ;
var alumnsToday = --alumns ;
var alumnsNextClass = alumns * 2 

// % es un modulo, es el residuo  
var num = 24 % 5 ;
//Jerarquización de las operaciones, Siempre usas parentesis! :3
var num2 = alumns / num ; 
var totalCost = (1+3) + (5*2);
var totalCost2 = ((2*4)* 2)

//alert(question)

}
/*
 si pones la info fuera de una función lo trabaja directamente
//var question = prompt('what`s your favorite music band?', 'Maroon 5')
//alert(question)

// condicionales 

if (question === "Kaloncho"){
   alert('Que mal gusto') 
}

else if (question === 'Cartel de santa'){
    alert('tirando barrio perros')
}

else{
    alert('Abrete a la vida hermano');
}

*/
//Variables
var age = prompt ('what`s your age' , '')
var gender = prompt ('what`s your gender' , '')
var band = prompt ('what`s your favorite band' , '')


if (age >= 18 && band === 'maluma'){
    if (gender === 'male'){
        alert("Eres hombre y tienes mal gusto")
    }
    else if (gender === 'female'){
        alert("Eres una chica con muy mal oido")
    }
    else if (gender !== 'female','male'){
        alert("Eres un pecesito malo")
    }   
}

else if (age >= 18 && band !== 'maluma'){
    if (gender === 'male'){
        alert("Bien hecho guapo")
    }
    else if (gender === 'female'){
        alert("Muy bien bebe")
    }
    else if (gender !== 'female','male'){
        alert("Pez alfa lider del banco")
    }   
}

console.log('Tu edad es'+ ' ' + age + ' ' + 'Tu genero es'+ ' ' + gender + ' ' +'Te gusta');














