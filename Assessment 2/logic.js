const signup=()=>{
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let mobilenumber=document.getElementById("mobilenumber").value;

    fetch("http://localhost:3000/registerDetails",{
        method:"POST",
        body:JSON.stringify({"firstName":fname,
                              "lastName":lname,
                              "username":username,
                              "email":email,
                              "password":password,
                              "mobilenumber":mobilenumber}),
        headers:{
             'Content-Type':'application/json'
              }
                }).then(response=>response.json())
                     .then(response=>{
                           console.log(response)
                });


    //Credentials of users
        
         console.log("hello Cred");
         console.log("Cred:::::");
        fetch("http://localhost:3000/users",{
            method:"POST",
            body:JSON.stringify({"username":username,
                                 "password":password}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json())
            .then(response=>{
                console.log(response)
            });



        return alert("SignUp process is done :) ");

}

const login=()=>{
    
        let email = document.getElementById('email').value;
        let pswd = document.getElementById('pswd').value;
        var flag=0;
    fetch("http://localhost:3000/users",{
        method:'GET',
        headers:{
            "Content-type":"application/json"
        }

    }).then(response=>response.json())
        .then(response=>{
            //console.log(response);
            res=response;
            for(let r of response){                   
                if(r.username==email && r.password==pswd){
                    flag=1
                }
                    
                }

                if(flag==1){
                    window.location.href ="C:\\Users\\asus\\Desktop\\Mine\\Assessment 2\\Home.html";
                }
                    else{
                        alert('invalid credential');
                    }
                
                
                }                 
        )
       }

const listAllUsers=()=>{
    fetch("http://localhost:3000/registerDetails",{
           method:"GET",
           headers:{
               "Content-Type": "application/json"
           }
       }).then(response=>response.json())
       .then(response=>{console.log(response);
           let tab=`<tr>
               <th>ID</th>
               <th>FirstName</th>
               <th>LastName</th>
               <th>UsetName</th>
               <th>Email</th>
               <th>Phone</th>
               </tr>`;
               for(let d of response){
                   tab += `<tr>
           <td>${d.id}</td>
           <td>${d.firstName}</td>
           <td>${d.lastName}</td>
           <td>${d.username}</td>
           <td>${d.email}</td>
           <td>${d.mobilenumber}</td>
           </tr>`
               }
            document.getElementById("Users").innerHTML=tab; 
       });

}

const logout=()=>{
        window.location.href="C:\\Users\\asus\\Desktop\\Mine\\Assessment 2\\login.html";
   
}

