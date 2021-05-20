
const ID = document.getElementById("ID");
const Nombre = document.getElementById("Nonbres");
const Apellido = document.getElementById("Apellidos");
const Telefono= document.getElementById("Numero de Telefono");
const Fecha  = document.getElementById("Fecha de Nacimiento");
const email = document.getElementById("Correo");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener('submit', e=> {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const IDValue=ID.nodeValue.trim();
    const NombreValue=Nombre.nodeValue.trim();
    const ApellidoValue=Apellido.nodeValue.trim();
    const TelefonoValue=Telefono.nodeValue.trim();
    const FechaValue=Fecha.nodeValue.trim();
    const emailValue=email.nodeValue.trim();
    const passwordValue=password.nodeValue.trim();
    const formValue=form.nodeValue.trim();

        if(IDValue===''){
            setErrorFor(ID,"Obliglatorio")

        }
}

function setErrorFor(input,message){
    const formControl=input.parentElemet;



function setErrorFor(input,message){
    const formControl=input.parentElemet;
}

function Enviar(){


        document.write("Registrado Exitosamente");
    
}
}