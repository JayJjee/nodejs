import { CallTracker } from "assert";
import {promises as fs} from "fs";

init();

async function init(){
    try{
        await fs.writeFile("./teste.txt", "bla bla bla");
        await fs.appendFile("./teste.txt", "\nteste append file");
        const data = await fs.readFile("./teste.txt", "utf-8");
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

//import {promises as fs} from "fs";


//promisse hell

/*fs.writeFile("./teste.txt", "bla bla bla").then(() => {
    fs.appendFile("./teste.txt", "\nteste append file").then(() => {
        fs.readFile("./teste.txt", "utf-8").then(resp => {
            console.log(resp);
        }).catch(err =>{
            console.log(err);
        });
    }).catch(err =>{
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
});*/


//import fs from "fs";


//Modo Assincrono, Thread não travada

/*fs.writeFile("teste.txt", "bla bla bla", function(err){
    //quando a função terminar de escrever o conteudo dentro do texte.txt, ele vai executar o function
    if(err){
        console.log(err);
    } else{
        fs.appendFile("./teste.txt", "\nteste append file", (err) =>{
            if(err){
                console.log(err)
            } else{
                fs.readFile("./teste.txt", "utf-8", function(err, data){
                    if(err){
                        console.log(err);
                    } else{
                        console.log(data);
                    }
                });
            }
        });
    }
});*/

//Modo Sincrono, Thread travada
/*try{
    fs.writeFileSync("./teste.txt", "bla bla bla");
    const data = fs.readFileSync("./teste.txt", "utf-8");
    console.log(data);
} catch(err) {
    console.log(err);
}*/



