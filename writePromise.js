class Commit{
    static PENDING='待定'
    static FULFILLED='成功'
    static REJECT='失败'
    constructor(func){
        this.status=Commit.PENDING;
        this.result=null;
        this.resolveCallback=[]
        this.rejectCallback=[]
        try{
            func(this.resolve.bind(this),this.reject.bind(this))
        }
        catch(error){
            this.reject(error);
        }}
        resolve(result){
            setTimeout(()=>{
                if(this.status==Commit.PENDING){
                    this.status=Commit.FULFILLED
                    this.result=result;
                    this.resolveCallback.forEach(callback=>{
                        callback(result);
                    })
                }
            });
        }
        reject(result){
            setTimeout(()=>{
                if(this.status==Commit.PENDING){
                    this.status=Commit.REJECT
                    this.result=result;
                    this.resolveCallback.forEach(callback=>{
                        callback(result);
                    });
                }
            });
        }
        then(onFULFILLED,onREJECTED){
            return new Commit((resolve,reject)=>{
                onFULFILLED= typeof onFULFILLED=='function'?onFULFILLED:()=>{}
                onREJECTED= typeof onREJECTED=='function'?onREJECTED:()=>{}
                if(this.status==Commit.PENDING){
                    this.resolveCallback.push(onFULFILLED)
                    this.rejectCallback.push(onREJECTED)
                }
                if(this.status==Commit.FULFILLED){
                    setTimeout(()=>{
                        onFULFILLED(this.result)
                    })
                }
                if(this.status==Commit.REJECT){
                    setTimeout(()=>{
                        onREJECTED(this.result)
                    })
                }    
            })
        }
    }