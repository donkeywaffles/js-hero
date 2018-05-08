document.addEventListener("DOMContentLoaded", ()=>{
  const button = document.getElementById('play-game')
  const body = document.getElementById('mainbody')

  button.addEventListener('click', (e)=>{
    e.target.remove()
    let instructions = document.createElement('h2')
    instructions.innerText = "Choose a song to play!"
    body.append(instructions)
    SongAdapter.getSongs()
    .then(resp => {
      resp.forEach((song)=>{
        songButton = document.createElement('button')
        songButton.setAttribute('id', `${song.id}`)
        songButton.innerText = `${song.name} by ${song.artist}`
        body.append(songButton)})
        body.addEventListener('click', (e)=>{
          if(e.target.tagName == "BUTTON"){
            body.innerHTML = " "
            setUpSong(e.target.id)
          }
        })
      })
    })

    function setUpSong(id) {
      SongAdapter.getSong(id)
      .then(song => {
        setUpGame()
        gameStart = true
        let audio = new Audio('./audio/The White Stripes.mp3');
        audio.play()
      })
    }
    // <h2>Score: <span id="score">0</span> </h2>
    // gameStart = true
    // e.target.remove()
    // //fetch(song)
    // let audio = new Audio() // song.file_path
    // audio.play()

    function setUpGame() {
      let score = document.createElement('span')
      score.setAttribute('id', 'score')
      score.innerText = '0'
      let scoreCard = document.createElement('h2')
      scoreCard.innerText = 'Score: '
      scoreCard.append(score)
      body.append(scoreCard)
      let multiplier = document.createElement('span')
      multiplier.setAttribute('id', 'multiplier')
      multiplier.innerText = '1'
      let multiplierCard = document.createElement('h2')
      multiplierCard.innerText = 'Multiplier: x '
      multiplierCard.append(multiplier)
      body.append(multiplierCard)
      let multiplierVisual = document.createElement('p')
      multiplierVisual.setAttribute('id', 'visual')
      multiplierVisual.innerText = "."
      body.append(multiplierVisual)
    }

    document.addEventListener("keyup", (e)=>{
      let score = document.getElementById('score')
      let multiplier = document.getElementById('multiplier')
      let visual = document.getElementById('visual')
      keyPush(e)});

    function keyPush(evt) {
      switch(evt.keyCode) {
        case 81:
        AddScore(qArr)
        break;
        case 87:
        AddScore(wArr)
        break;
        case 69:
        AddScore(eArr)
        break;
        case 82:
        AddScore(rArr)
        break;
        case 84:
        AddScore(tArr)
        break;
      }
    }



  })
