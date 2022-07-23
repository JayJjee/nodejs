import {promises as fs} from "fs";

writeReadJson();

async function writeReadJson(){
    try{

        // escrito com valores iniciais
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = {
            carros: arrayCarros
        };
        await fs.writeFile("teste.json", JSON.stringify(obj));

        //leitura do conteudo atual
        const data = JSON.parse(await fs.readFile("teste.json"));

        //modificar o conteudo
        data.carros.push("Sandero");
        console.log(data)

        //sobrescreve o arquivo com o conteudo modificado
        await fs.writeFile("teste.json", JSON.stringify(data));
    } catch(err){
        console.log(err);
    }
}