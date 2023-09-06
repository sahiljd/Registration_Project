
                    function check() {
                        var ui=document.getElementById("exampleFormControlInput1").value;
                        var Phone=document.getElementById("phnumber").value;
                        var Age=document.getElementById("age").value;
                        var Mail=document.getElementById("mail").value;
                        var pattern=/^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
                        
                        
                        
                        if (ui=="") {
                            alert("Name field cannot be empty")
                        }

                        if(isNaN(Phone))
                        {
                            alert("Phone should be a number")
                        }
                        else if (Phone =="") {
                            alert("Phone Number cannot be empty")
                        }
                        else if (Phone.length>10 || Phone.length<10) {
                            alert("Phone number should be of 10 Digits")
                        }
                        else{

                        }

                        if(isNaN(Age))
                        {
                            alert("Age should be a number")
                        }
                        else if (Age =="") {
                            alert("Age cannot be empty")
                        }
                        else if(Age.length>2) {
                            alert("Invalid age")
                        }
                        else{

                        }



                        if(pattern.test(Mail))
                        {
                            alert("Mail is vaild")
                        }
                        else if (Mail=="") {
                            alert("Mail cannot be empty")
                            
                        }
                        else
                        {
                            alert("Invalid Email")
                        }

                        if(ui!="" && pattern.test(Mail) && Phone !="" && Phone.length<=10 && Age !="" && Age.length<=2)
                        {
                            alert("Thank you for registration "+ui)
                        }

                        
                        

                    }
                   

               