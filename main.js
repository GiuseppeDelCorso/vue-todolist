const { createApp } = Vue;


const lista = {
    data: function () {
        return {
            barratura: false,
            nuovaAzione:"",
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
        fatto(key){

            this.listaAzioni[key].flag = this.barratura = true
            
            
            

            console.log("fatto")
           
        },
        add(){
            console.log(this.nuovaAzione)

            let contenutoNuovaAzione = {
                text : this.nuovaAzione,
                flag: false,
            }
            this.listaAzioni.push( contenutoNuovaAzione)
        }



    }

}



createApp(lista).mount('#app')

