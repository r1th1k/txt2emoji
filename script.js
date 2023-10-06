function btnClick(){
    document.querySelector('#dec-btn').addEventListener('click', function(){
        document.querySelector("#decryption").style.display = "flex"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#455"
        document.querySelector("#enc-btn").style.backgroundColor = "#450"
        document.querySelector("#main>h1 span img").style.rotate = "180deg"
        document.querySelector("#result").innerHTML = ""
        document.querySelector("#result").style.display="none"
    })
    
    document.querySelector('#enc-btn').addEventListener('click', function(){
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#encryption").style.display = "flex"
        document.querySelector("#dec-btn").style.backgroundColor = "#450"
        document.querySelector("#enc-btn").style.backgroundColor = "#455"
        document.querySelector("#main>h1 span img").style.rotate = "360deg"
        document.querySelector("#result1").innerHTML = ""
        document.querySelector("#result1").style.display="none"
    })
}


var clutter = ""
var a1 = ""
var a2 = ""
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        var txt = document.getElementById("txtmsg").value
        var pass = document.getElementById("password").value
        txt = txt.trim().replace(/\s/g, "")
        // console.log(txt)
        const str = txt.split("")
        
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        
        // console.log(clutter)
        localStorage.setItem("pass", pass)

        document.querySelector("#result").style.display="flex"
        document.querySelector("#result").innerHTML = clutter
        
    })
}

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        var txt = document.getElementById("txtmsg1").value
        var givenPass = document.getElementById("password1").value
        
        enteredPass = localStorage.getItem("pass")

        

        console.log(a2)
        if (givenPass === enteredPass) {

            rep = txt.length
        
            for (let i = 0; i < rep; i=i+2) {
                a1 = txt.codePointAt(i);
                a2 += String.fromCharCode(parseInt(String(a1).slice(3)))
            }
    
            document.querySelector("#result1").style.display="flex"
            document.querySelector("#result1").innerHTML = a2
            
        } else {
            console.log("wrong Pass")
            document.querySelector("#result1").style.display="flex"
            document.querySelector("#result1").innerHTML = "Incorrect Password"
        }

        
        
        
    })
}

btnClick()

encryption()

decryption()