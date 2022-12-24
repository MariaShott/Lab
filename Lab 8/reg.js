let check = document.querySelector("#checking");
let button_reg = document.querySelector("#registration_button");

const ValueCheckBox = myCheckBox => {
    if (!myCheckBox.checked) {
        button_reg.disabled = true;
    } else {
        button_reg.disabled = false;
    }
};

check.addEventListener('change', function () { ValueCheckBox(this) });
document.addEventListener("DOMContentLoaded", ValueCheckBox(check));

let login = document.querySelector("#login");
let l1 = document.querySelector('#h4_comment_1')
let l2 = document.querySelector('#h4_comment_2')
login.addEventListener('input', function () {
    let log = /^[а-яА-Яa-zA-Z0-9\-@.+_]+$/.test(this.value);

    if (log) {
        l1.classList.remove('no');
        l1.classList.add('yes');
    } else {
        l1.classList.remove('yes');
        l1.classList.add('no');
    }

    if (this.value.length > 4) {
        l2.classList.remove('no');
        l2.classList.add('yes');
    } else {
        l2.classList.remove('yes');
        l2.classList.add('no');
    }
});

let pass = document.querySelector("#password");
let p1 = document.querySelector('#h4_comment_pass1')
let p2 = document.querySelector('#h4_comment_pass2')
let p3 = document.querySelector('#h4_comment_pass3')
let p4 = document.querySelector('#h4_comment_pass4')
pass.addEventListener('input', function () {
    let pas = /^\d+$/.test(this.value);

    if (this.value.length > 8) {
        p1.classList.remove('no');
        p1.classList.add('yes');
    } else {
        p1.classList.remove('yes');
        p1.classList.add('no');
    }

    if (!pas) {
        p2.classList.remove('no');
        p2.classList.add('yes');
    } else {
        p2.classList.remove('yes');
        p2.classList.add('no');
    }

    if (this.value !== '') {

        if (this.value === login.value) {
            p3.classList.remove('yes');
            p3.classList.add('no');
        } else {
            p3.classList.remove('no');
            p3.classList.add('yes');
        }

    }

});

let pass_ok = document.querySelector("#password_ok");
let c_pass_ok = document.querySelector('#h4_comment_pass_ok_1')
confpass.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {

        if (this.value === password.value) {
            c_pass_ok.classList.remove('yes');
            c_pass_ok.classList.add('no');
        } else {
            c_pass_ok.classList.remove('no');
            c_pass_ok.classList.add('yes');
        }
    }
});
