// selecting elements
        let inboy = document.getElementById("input1");
        let ingirl = document.getElementById('input2');
        let btn = document.getElementById("btn");
        let div = document.getElementById('main-div');
        // adding event listener in btn of result
       btn.addEventListener("click" ,() => {
          if (inboy.value == "" || ingirl.value == "") {
            alert("Please enter your and your couple name.");
            // all work in else syntax
          }
          else {
            console.log("geting your per");
            // math for % calculation
      let x = Math.floor( Math.random()*100) 
      // creating h3 element for result
        let h3 =  document.createElement("h3");
        // adding on last place of div
        div.append(h3);
        // inserting text in h3
        h3.innerText = `${inboy.value } and ${ingirl.value} love persentage is ${x}%`;
        btn.style.display = "none";
        // disabled input onclick
        inboy.setAttribute("disabled", true);
        ingirl.setAttribute("disabled", true);
        // creating reset button for restart
      let btn2 =  document.createElement("button");
      btn2.innerText = 'Reset';
      btn2.setAttribute("class" , "reset-btn");
      // adding on last of div element
      div.append(btn2);
      // adding event listener on Reset button for restart page
       btn2.addEventListener("click" , () => {
        ingirl.value = "";
        inboy.value = "";
        h3.innerText = "";
        btn2.style.display = "none";
        btn.style.display = "inline"
        // removing disabled attribute to both inputs
        inboy.removeAttribute("disabled");
        ingirl.removeAttribute("disabled")
           })
        }
         })
