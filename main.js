const { createApp } = Vue;


const lista = {
    data: function () {
        return {
            barratura: false,
            index: 0,
            listaAzioni:[

                {
                    text: "Accendere il Computer",
                    flag: false,
                   
                },
                {
                    text: "Aprire Il Broswer",
                    flag: false,
                },
                {
                    text: "Digitare Youtube",
                    flag: false,
                },
                {
                    text: "Segliere Video",
                    flag: false,
                },

                
            ],


        }
    },
    methods: {
        fatto(){
            
            this.barratura = true
            console.log("fatto")
           
        }
    }
}



createApp(lista).mount('#app')

