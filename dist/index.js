"use strict";
class NumberGuess {
    constructor() {
        this.reloadBtn = document.querySelector('.reload_btn');
        this.subBtn = document.querySelector('#submit_btn');
        this.userInp = document.querySelector('#num_inp');
        this.prevEnt = document.querySelector('.prev_ent');
        this.msgSuccess = document.querySelector('.msg.success');
        this.msgErrClose = document.querySelector('.msg.error.close');
        this.msgErrFar = document.querySelector('.msg.error.far');
        this.randNum = Math.floor(Math.random() * 100) + 1;
        console.log(this.randNum);
        this.initFnc();
    }
    initFnc() {
        this.reloadBtn.addEventListener('click', () => {
            this.prevEnt.innerHTML = "";
            this.userInp.value = "";
            if (this.msgSuccess.classList.contains('show')) {
                this.msgSuccess.classList.remove('show');
            }
            if (this.msgErrClose.classList.contains('show')) {
                this.msgErrClose.classList.remove('show');
            }
            if (this.msgErrFar.classList.contains('show')) {
                this.msgErrFar.classList.remove('show');
            }
            this.randNum = Math.floor(Math.random() * 100) + 1;
            console.log(this.randNum);
        });
        this.subBtn.addEventListener('click', () => {
            var _a, _b, _c;
            this.prevEnt.innerHTML += '<span>' + this.userInp.value + '</span>';
            if (parseInt(this.userInp.value) == this.randNum) {
                if (this.msgErrClose.classList.contains('show')) {
                    this.msgErrClose.classList.remove('show');
                }
                if (this.msgErrFar.classList.contains('show')) {
                    this.msgErrFar.classList.remove('show');
                }
                (_a = this.msgSuccess) === null || _a === void 0 ? void 0 : _a.classList.add('show');
            }
            else if ((parseInt(this.userInp.value) - this.randNum) <= 10 && (parseInt(this.userInp.value) - this.randNum) >= -10) {
                if (this.msgSuccess.classList.contains('show')) {
                    this.msgSuccess.classList.remove('show');
                }
                if (this.msgErrFar.classList.contains('show')) {
                    this.msgErrFar.classList.remove('show');
                }
                (_b = this.msgErrClose) === null || _b === void 0 ? void 0 : _b.classList.add('show');
            }
            else {
                if (this.msgErrClose.classList.contains('show')) {
                    this.msgErrClose.classList.remove('show');
                }
                if (this.msgSuccess.classList.contains('show')) {
                    this.msgSuccess.classList.remove('show');
                }
                (_c = this.msgErrFar) === null || _c === void 0 ? void 0 : _c.classList.add('show');
            }
            this.userInp.value = "";
        });
    }
}
let obj = new NumberGuess();
