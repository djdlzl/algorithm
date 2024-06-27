import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let text = [];

rl.on("line", (countInput) => {
    const count = parseInt(countInput);
    for(let i=0; i<count;i++){
        await new promise(
            rl.question('',(input)=>{
                text.push(input);
    
            })
        )
        
    }
});
