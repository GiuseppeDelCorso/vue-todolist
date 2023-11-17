const { createApp } = Vue;


const lista = {
    data: function () {
        return {
            barratura: false,
            index : '0',
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
                    flag: true,
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
            let index = '0'
            this.listaAzioni[index].flag = true
            
            console.log("fatto")
           
        }
    }
}



createApp(lista).mount('#app')

