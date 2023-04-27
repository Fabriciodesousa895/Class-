//uma nova class,que ao ser instanciada o metodo newproduct inseri um novo produto numa array
//método lengtharray mostra os objetos que o array contém
class inseri{
    static array = []
    constructor(Code,name,Price){
       this._Code = Code;
       this._name = name;
       this._Price = Price;
    }

    newproduct(){
        inseri.array.push({codigo:this._Code,nome:this._name,preco:this._Price})
    }
    get lengtharray(){
        return inseri.array
    }


}
let newproduct1 = new inseri(2,'Bola',12.47);
let newproduct2 = new inseri(4,'Boneca',17);
let newproduct3 = new inseri(3,'caneta',10);
let newproduct4 = new inseri(8,'lupa',15);
newproduct1.newproduct()
newproduct2.newproduct()
newproduct3.newproduct()
console.log(newproduct1.lengtharray )
//uma nova class que possui dois métodos
class calculo{
    static total = 0
    constructor(num){
       this._num = num
    }
    //Método soma verifica se há somente valores do tipo number,caso sim soma cada posição do array.
    soma(){
        if(!this._num.every((m) =>  typeof m === 'number')){
         throw new Error('O array deve possuir somente números.')
        }else{
            let somanum = 0
            this._num.forEach(e => { somanum += e; calculo.total += 1});
            return somanum //console.log(`Este array possui ${calculo.total} posições, e a soma de todos os numeros é ${somanum} `) 
        }

    }
   //Método fatorial verifica se o valor passado é do tipo number,caso sim faz um incremento de v vezes o seu antecessor
    fatorial(v){
        if(typeof v !== 'number'){
         throw new Error('Deve ser passado somente um numero,não será aceito strings ou outros tipos.')
        }else{
            let fatorial_ = 0
            for(let i = 0; i < v ;i++){
                fatorial_ += v * v-1
            }
            return fatorial_
        }
    }
}

let num1 = new calculo([1,2,7])

try{
    let resfat = num1.fatorial(5)
    let ressom = num1.soma()
    console.log("Resultado da fatorial é: "+resfat)
    console.log("Resultado da soma é: "+ressom)
}catch (err){
    console.log(err.message)
}




