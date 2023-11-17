const { createApp } = Vue;


const lista = {
    data: function () {
        return {
            
            index: 0,
            listaAzioni:[

                {
                    text: "Accendere il Computer",
                   
                },
                {
                    text: "Aprire Il Broswer",

                },
                {
                    text: "Digitare Youtube",

                },
                {
                    text: "Segliere Video",

                },

                
            ],


        }
    },
}



createApp(lista).mount('#app')

