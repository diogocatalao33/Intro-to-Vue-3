// The create App , takes tghe optionsObject (data) 
// as an argument, it always takes at leats one empty object

const app = Vue.createApp({
    data : function(){
        return{
            product: 'Socks',
            description: 'Blue'
        }
    }
})
