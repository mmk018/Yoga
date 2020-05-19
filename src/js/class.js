class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        
        
        
    }
    makeDiv(text) {
        
        let div = document.createElement('div');
        div.innerHTML = `${text}`;
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontsize: ${this.fontSize}; text-align: ${this.textAlign};`;
        document.body.appendChild(div);
        console.log(div);
        
        
    }
    

}

const block = new Options ('100px', '100px','#333', '20px', 'center');
block.makeDiv('I am new Div!');

/* Example */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
 
const square = new Rectangle(10,10);
console.log(square);
console.log(typeof square);


function makeDiv() {
        
    let div = document.createElement('div');
    div.innerHTML = "I am a new div";
    


}

let div20 = document.createElement('div');
div20.innerHTML = "I am a new div";
console.log(div20);

let rgb = function () {
    let a = 15+25;
    return a;
}

console.log(rgb());


