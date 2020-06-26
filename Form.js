class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("THE HURDLES GAME");
    this.title.position(displayWidth/2 - 140, 40);
    this.input.position(displayWidth/2 - 70 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 20, displayHeight/2);
    this.reset.position(displayWidth - 70,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello, " + player.name)
      this.greeting.position(displayWidth/2 - 60, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0); 
      game.update(0);
    });
  }
}
