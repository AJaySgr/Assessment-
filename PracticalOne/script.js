let signIn=()=>{
        var userName = document.getElementById("email").value;
        var pswd = document.getElementById("pswd").value;
        var res,flag=0;
        
        
        
        fetch("http://localhost:3000/usersCredentails",{
            method:'GET',
            headers:{
                "Content-type":"application/json"
            }

        }).then(response=>response.json())
            .then(response=>{
                //console.log(response);
                res=response;
                for(let d of response){                   
                    if(d.userN==userName && d.passwd==pswd){
                        flag=1
                    }
                        
                    }

                    if(flag==1){
                        window.location.href = "C:\\Users\\asus\\Desktop\\Rapid\\Rapid\\index.html";
                    }
                        else{
                            alert('invalid credential');
                        }
                    
                    
                    }                 
            )
           }

   

   

let registerUser = ()=>{
//function registerUser(){
    const userDerails = [{
        "username":null,
        "password":null,
        "email":null,
        "phone":null,
        "gender":null,
        "age":null,
        "city":null,
        "state":null,
        "pincode":null,
        "country":null
    }];

    userDerails.username = document.getElementById("Uname").value;
    userDerails.password = document.getElementById("Pswd").value;
    userDerails.email=document.getElementById("email").value;
    userDerails.phone=document.getElementById("phone").value;
    userDerails.gender=document.getElementById("gender").value;
    userDerails.age=document.getElementById("age").value;
    userDerails.city=document.getElementById("city").value;
    userDerails.state=document.getElementById("state").value;
    userDerails.pincode=document.getElementById("pincode").value;
    userDerails.country=document.getElementById("country").value;
    
    console.log(userDerails);
    //console.log(userDerails.username);

    //For storing the data into json by user
    fetch("http://localhost:3000/usersData",{
        method:"POST",
        body:JSON.stringify({"username": userDerails.username,
                            "password": userDerails.password,
                            "email": userDerails.email,
                            "phone": userDerails.phone,
                            "gender": userDerails.gender,
                            "age":userDerails.age,
                            "city":userDerails.city,
                            "state":userDerails.state,
                            "pincode":userDerails.pincode,
                            "country":userDerails.country}),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>response.json())
        .then(response=>{
            console.log(response)
           
                     
         });
        
         //Credentials
         const credData =[{
            "username":userDerails.username,
            "password":userDerails.password
         }];

         console.log("hello Cred");
         console.log("Cred:::::",credData);
        fetch("http://localhost:3000/usersCredentails",{
            method:"POST",
            body:JSON.stringify({"userN":userDerails.username,
                                 "passwd":userDerails.password}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json())
            .then(response=>{
                console.log(response)
            });

            //window.open(
              //  "https://www.geeksforgeeks.org", "_blank");
            //window.open("C:\\Users\\asus\\Desktop\\Rapid\\Rapid\\Signin.html")
            return alert("Data has been saved :) ");


}

function resetDetails(){
    document.getElementById("userPanel").reset();
}