$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    
    $('#formulario').validate({
        rules: {
            nome : {
                required:true,
            },
            email : {
                required:true,
            },
            mensagem : {
                required:true,
            }
        }
    })
});