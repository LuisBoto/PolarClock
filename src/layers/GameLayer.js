class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.xText = 1920*0.1;
        this.yText = 1080*0.1;
        this.currentBlock = null;
        this.texts = [];
        this.blockIDtext = new Text("", 1920*0.5, 1080*0.08);
        this.advance = false;
        this.loadBlockFile(0);
    }

    update() {
        //First command on block will be executed without user input
        if (this.currentBlock!=null && this.currentBlock.counter<=0)
            this.currentBlock.update(this);

        if (this.advance) { //Enter must have been pressed to update game
            if (awaitingInput) { //Current command must handle current user input
                this.currentBlock.repeat(this);
                userInput = "";
            }
            else //Simply advance to next command in line
                this.currentBlock.update(this);
            this.advance = false;
        }
    }

    awaitInput() {
        this.inputText = new Text(userInput, this.xText, this.yText);
        this.texts.push(this.inputText);
        awaitingInput = true;
        this.newLine();
    }

    draw() {
        this.background.draw();
        this.blockIDtext.draw();
        for (var i=0; i<this.texts.length; i++) {
            this.texts[i].draw();
        }
        if (awaitingInput) { //Update user's input text
            this.texts.pop()
            this.inputText = new Text(userInput, this.xText, this.yText);
            this.texts.push(this.inputText);
        }
    }

    printText(value) {
        //TODO: Add line wrap
        this.newLine();
        if (this.yText > 1080*0.9) {
            this.clearText();
        }
        this.texts.push(new TypeText("> "+value, this.xText, this.yText));
    }

    printCenteredText(value) {
        this.newLine();
        if (this.yText > 1080*0.9) {
            this.clearText();
        }
        this.texts.push(new TypeText(value, 1920*0.5, this.yText));
    }

    newLine() {
        this.yText = this.yText + 30;
    }

    clearText() {
        this.texts = [];
        this.yText = 1080*0.1;
    }

    loadBlockFile(blockNumber) {
        var route = blockRoute+blockNumber+blockExtension;
        if (!this.urlExists(route)){
            this.printText("Please input a valid BlockID.");
            this.awaitInput();
            return;
        }
        var file = new XMLHttpRequest();

        file.open("GET", route, false);

        file.onreadystatechange = function () {
            var block;
            var separator = "=";
            var text = file.responseText;
            var lines = text.split("\n");
            block = new Block(blockNumber, []);
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                switch (line.split(separator)[0]) {
                    case "T": //Plain text print command
                        var command = new TextCommand(line.split(separator)[1], null);
                        block.addCommand(command);
                        break;
                    case "Q": //Question command
                        var command = new QuestionCommand(line.split(separator)[1], null);
                        block.addCommand(command);
                        break;
                    case "L": //Block load command
                        var command = new LoadCommand(line.split(separator)[1], null);
                        block.addCommand(command);
                        break;
                    case "C":
                        var b = line.split(separator)[1].trim();
                        var command = new Command(function f(gameLayer) {gameLayer.loadBlockFile(b.toString())});
                        block.addCommand(command);
                        break;
                    case "M": //Music trigger command
                        var command = new MusicCommand(line.split(separator)[1], null);
                        block.addCommand(command);
                        break;
                    case "W":
                        var command = new WheelCommand(line.split(separator)[1],null);
                        block.addCommand(command);
                        break;
                    case "E":
                        var command = new CenteredTextCommand(line.split(separator)[1], null);
                        block.addCommand(command);
                        break;
                }
            }
            this.currentBlock = block;
            this.clearText();
            this.blockIDtext.setValue("BlockID: "+block.id);
        }.bind(this);

        file.send(null);
    }

    urlExists(url)
    {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status!=404;
    }

    processControls() {
        if (controls.enter) {
            this.advance = true;
            controls.enter = false;
        }
    }
}
