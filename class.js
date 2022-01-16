class a{
    constructor(num,str){
        this.num=num;
        this.str=str;
    }
    static hello(){
        return 'hello'
    }
    static printHello(){
        let text=this.hello();
        console.log(text)
    }
    set add(value){
        this.value=value;
        document.querySelector('').innerHTML=this.value;
    }
    get add(){
        return `${this.num},${this.str},${this.value}`
    }
}
class b extends a{
    constructor(syb){
        super(num,str)
        this.syb=syb;
    }
    get add(){
        return `${this.num},${this.str},${this.value},${this.syb}`
    }
}

a.printHello(); //hello
const a1=new a(1,2);
a1.add=4;
console.log(a1.add)//1,2,4
const b1=new b(1,2,3);
b1.add=4;
console.log(b1.add)//1,2,4,3