class NumberGuess {
    private userInp:HTMLInputElement;
    private subBtn:HTMLButtonElement;
    private reloadBtn:HTMLButtonElement;
    private prevEnt:HTMLDivElement;
    private randNum:number;
    private msgSuccess:HTMLDivElement;
    private msgErrClose:HTMLDivElement;
    private msgErrFar:HTMLDivElement;
    constructor() {
        this.reloadBtn = document.querySelector('.reload_btn') as HTMLButtonElement;
        this.subBtn = document.querySelector('#submit_btn') as HTMLButtonElement;
        this.userInp = document.querySelector('#num_inp') as HTMLInputElement;
        this.prevEnt = document.querySelector('.prev_ent') as HTMLDivElement;
        this.msgSuccess = document.querySelector('.msg.success') as HTMLDivElement;
        this.msgErrClose = document.querySelector('.msg.error.close') as HTMLDivElement;
        this.msgErrFar = document.querySelector('.msg.error.far') as HTMLDivElement;
        this.randNum = Math.floor(Math.random() * 100) + 1 as number;
        console.log(this.randNum);
        this.initFnc();
    }

    private initFnc():void {
        
        this.reloadBtn.addEventListener('click',()=>{
            this.prevEnt.innerHTML="";
            this.userInp.value="";
            if(this.msgSuccess.classList.contains('show')){
                this.msgSuccess.classList.remove('show');
            }
            if(this.msgErrClose.classList.contains('show')){
                this.msgErrClose.classList.remove('show');
            }
            if(this.msgErrFar.classList.contains('show')){
                this.msgErrFar.classList.remove('show');
            }

            this.randNum = Math.floor(Math.random() * 100) + 1 as number;
            console.log(this.randNum);
        })

        this.subBtn.addEventListener('click',()=>{
            this.prevEnt.innerHTML += '<span>' + this.userInp.value + '</span>';
            
            if(parseInt(this.userInp.value) == this.randNum){
                if(this.msgErrClose.classList.contains('show')){
                    this.msgErrClose.classList.remove('show');
                }
                if(this.msgErrFar.classList.contains('show')){
                    this.msgErrFar.classList.remove('show');
                }
                this.msgSuccess?.classList.add('show');
            } else if((parseInt(this.userInp.value) - this.randNum) <= 10 && (parseInt(this.userInp.value) - this.randNum) >= -10) {
                if(this.msgSuccess.classList.contains('show')){
                    this.msgSuccess.classList.remove('show');
                }
                if(this.msgErrFar.classList.contains('show')){
                    this.msgErrFar.classList.remove('show');
                }
                this.msgErrClose?.classList.add('show');
            } else {
                if(this.msgErrClose.classList.contains('show')){
                    this.msgErrClose.classList.remove('show');
                }
                if(this.msgSuccess.classList.contains('show')){
                    this.msgSuccess.classList.remove('show');
                }
                this.msgErrFar?.classList.add('show');
            }
            this.userInp.value="";
        })
    }
}

let obj = new NumberGuess();