$(document).ready(function() {

    $('#contactForm').formValidation({
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            funame: {
                validators: {
                    notEmpty: {
                        message: 'Ce champs est obligatoire'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z-]+$/,
                        message: 'Le nom n\'est pas valide'
                    }
                }
            },
            fphone: {
                validators: {
                    notEmpty: {
                        message: 'Ce champs est obligatoire'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Le numéro n\'est pas valide'
                    }
                }
            },
            femail: {
                validators: {
                    notEmpty: {
                        message: 'Ce champs est obligatoire'
                    },
                    emailAddress: {
                        message: 'Adresse email invalide'
                    }
                }
            }
        }
    });
});