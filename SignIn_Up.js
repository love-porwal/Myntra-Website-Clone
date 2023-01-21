let signIn=document.querySelector(".signIn");
    let signUp=document.querySelector(".signUp");
    let fsignIn=document.querySelector("#signIn");
    let fsignUp=document.querySelector("#signUp");

    document.querySelector("#pSignIn").addEventListener("click",function(e){
     signIn.style.display="block";
        signUp.style.display="none";
        document.title="Sign In"
    })
    document.querySelector("#pSignUp").addEventListener("click",function(){
        signIn.style.display="none";
        signUp.style.display="block";
        document.title="Sign Up"
    })
    
    let users = JSON.parse(localStorage.getItem("usersData"))||[];
   
    fsignUp.addEventListener("submit",function(e){
        e.preventDefault();
        let count=0;
        users.forEach(function(el){
            if(el.email==fsignUp.email.value)
            {
                count++;
            }
        })
        if(count>0)
        {
            alert("Users Already Registered!");
        }
        else{
            if(fsignUp.password.value!=fsignUp.passwordChk.value)
            {
                alert("Password do not Match");
            }
            else{
                let user ={
                    name: fsignUp.name.value,
                    email: fsignUp.email.value,
                    mobile: fsignUp.mobile.value,
                    password: fsignUp.password.value
                }
                users.push(user);
                localStorage.setItem("usersData",JSON.stringify(users));
                alert("Sign up successfull!");
                signIn.style.display="block";
                signUp.style.display="none";
                document.title="Sign In"
                fsignUp.reset();
            }
        }
    })

    fsignIn.addEventListener("submit",function(e){
        e.preventDefault();
        
       let obj={
        email:fsignIn.email1.value,
        password:fsignIn.password1.value
       }
       let count=0;
       let temp;
       users.forEach((elem)=>{
        if(obj.email==elem.email)
        {
            count++;
            temp=elem;
        }
       })
       if(count==0)
       {
        alert("User Not Registered");
       }
       else{
        if(temp.password != obj.password)
        {
            alert("Wrong Password");
        }
        else{
            alert("Login Successfull");
            window.location.assign("./home.html")
        }
       }
      
    })