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

            if (this.listaAzioni[key].flag == true){

                
                this.listaAzioni[key].flag = false

            }else(this.listaAzioni[key].flag == false)
            
            {
                this.listaAzioni[key].flag = true
            }

            console.log("fatto")
           
        },
        add(){


            let contenutoNuovaAzione = {
                text : this.nuovaAzione,
                flag: false,
            }
            this.listaAzioni.push( contenutoNuovaAzione)
        }



    }

}



createApp(lista).mount('#app')

