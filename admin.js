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
    
    let users = JSON.parse(localStorage.getItem("Admin_Data"))||[];
    let users_id=JSON.parse(localStorage.getItem("User_id"))||[];
   
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
            alert("Users already registered!");
        }
        else{
            if(fsignUp.password.value!=fsignUp.passwordChk.value)
            {
                alert("password do not match");
            }
            else{
                let user ={
                    name: fsignUp.name.value,
                    User_Name:fsignUp.User_name.value,
                    email: fsignUp.email.value,
                    mobile: fsignUp.mobile.value,
                    password: fsignUp.password.value
                }
                users.push(user);
                localStorage.setItem("Admin_Data",JSON.stringify(users));
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
        alert("User not registered");
       }
       else{
        if(temp.password != obj.password)
        {
            alert("wrong password");
        }
        else{
            alert("login successfull");
            users_id.push(obj)
            localStorage.setItem("User_id",JSON.stringify(users_id))

            window.location.assign("./Admin_Data.html")
        }
       }
      
    })