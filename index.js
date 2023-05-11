import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório.'));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding) 
            console.log(chalk.magenta(texto));
    } catch (erro) {
        trataErro(erro)
    }
}

//pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');