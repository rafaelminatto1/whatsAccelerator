const interval = setInterval(()=>{
  const header = document.querySelector("._3auIg")
  if(header){
    console.log(header)
    clearInterval(interval)
    
    const buttonX1 = document.createElement("button")
    buttonX1.innerHTML="1x"
    buttonX1.classList.add("speed1Button")
    buttonX1.addEventListener("click",()=>{

      const audios = document.querySelectorAll("audio");
      console.log(audios)
      audios.forEach((audio)=>{
        console.log(audio)
        audio.playbackRate = 1
              
      })
    })
    const buttonX2 = document.createElement("button")
    buttonX2.innerHTML="2x"
    buttonX2.classList.add("speed2Button")
    buttonX2.addEventListener("click",()=>{

      const audios = document.querySelectorAll("audio");
      console.log(audios)
      audios.forEach((audio)=>{
        console.log(audio)
        audio.playbackRate = 2
              
      })
    })

    header.appendChild(buttonX1)
    header.appendChild(buttonX2)
  }

},1000)
