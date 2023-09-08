/*
// GET Method:
async function solve(){
    await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns").then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
//POST Method:
   await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns",{
     method:"POST",
     headers:{
          "Content-Type" : "application/json"
     },
     body : JSON.stringify({
        name:'gowtham',
        age:20
     }) 
    })
    await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns").then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
//PUT or PATCH : ID impotant to chnage the datas
 await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns/64f96f23b987ad03e87688a9",{
     method:"PUT",
     headers:{
          "Content-Type" : "application/json"
     },
     body : JSON.stringify({
        name:'gowtham Dharani',
        age:19
     }) 
    })
    
 //DELETE Method: ID impotant to delete the data
   await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns/64f96efdb987ad03e87688a7",{
    method:"DELETE",
    headers:{
         "Content-Type" : "application/json"
    }
   })

// AGAIN WE FETCH THE DATA TO SEE THE RESULT
await fetch("https://crudcrud.com/api/a6815d81976549fbbe3bb56970c75bfa/unicorns").then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    
}
solve()
*/
