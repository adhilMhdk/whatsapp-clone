requests=[]
module.exports={
    push:(obj)=>{
        requests.push(obj)
    }
    ,
    log:()=>{
        console.log(requests);
    },
    get:()=>{
        console.log(requests);
        let r = requests
        requests=[]
        return r
    }
    
}