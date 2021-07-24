class Form{
    constructor(){
         this.name=createInput("Enter Your Name")
         this.title=createElement("h1")
    }
    hide(){
      this.name.hide();
      this.title.hide();
    }
    display(){
       
    
    this.title.html("𝕵𝖔𝖚𝖗𝖓𝖊𝖞 𝕿𝖔 𝕿𝖍𝖊 𝕸𝖆𝖗𝖎𝖆𝖓𝖆 𝕿𝖗𝖊𝖓𝖈𝖍 ")
    this.title.position(windowWidth/2-150,20);
    
    
    this.name.position(windowWidth/2-100,200);

   /* var button=createButton("Start");
    button.position(windowWidth/2+50,240)*/

      
      
    
}
}