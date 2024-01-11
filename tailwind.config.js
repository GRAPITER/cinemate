
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
              
            screens: {

                'respon': {'max' : '1265px'},
                'ims' : {'max' : '1152px'},
                'pad' : {'min' : '601px'},

            },

            colors:{
                "pnf" : '#181828'
            }


        },
        
    },
    plugins: [],
}