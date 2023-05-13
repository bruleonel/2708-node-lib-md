** Olá mundo, como de costume, deixo registrado aqui todos os conteúdos das minhas aulas, para que em caso de reprodução eu possa usar como consulta, seja bem vindo(a).**


# O que é o Node?

- É um mototor de interpretação do JavaScript fora do ambiente do navegador;
- É um run time, ambiente de execução, para que o JS seja usado em outros ambientes que não estão relacionados ao Front - End.


## Começando o projeto
Para entendermos melhor a ideia de pegar códigos, métodos e funções disponibilizadas por outras empresas ou pessoas, vamos instalar outra biblioteca no nosso projeto.

Nesse momento, nosso projeto "index.js" só tem uma linha de código, que devolve uma string no terminal:

````js
console.log('ola mundo');
````
Porém, usaremos o terminal para fazer tudo do projeto, inclusive exibir nossa lista de links. Quando o terminal começa a ficar com muita informação, a tendência é que nos perdamos um pouco entre textos. Teremos dificuldade em encontrar nossos console.log, por exemplo.

Seria interessante separar as informações que queremos exibir no terminal. Assim, a visualização seria facilitada. Antes de instalarmos a biblioteca, vamos copiar a primeira, e, até agora, única linha do nosso código. Vamos repeti-la duas vezes, com uma quebra de linha antes de cada repetição:

````js
console.log('ola mundo');
console.log('ola mundo');
console.log('ola mundo');
````

Agora vamos abrir o arquivo "texto.md" e copiar o conteúdo da linha 3, até https://developer.mozilla.com/pt-NR/docs/Web/API/HTMLCanvasElement. Vamos substituir a string 'ola mundo' nas linhas 2 e 3 de "index.js" por essas informações:

````js
console.log('ola mundo');
console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
````

Agora temos 3 console.log que aparecerão no terminal quando executarmos o arquivo. Vamos voltar ao terminal, na pasta correta do projeto, e realizar a execução com o comando node index.js.

Em seguida, vários textos serão exibidos no console.

Para resolver o problema no NPM, vamos encontrar a biblioteca necessária para possibilitar que separemos textos por cor, adicionemos negrito, highlights ou underlines em algum dos textos para facilitar a identificação no terminal.

Acesse <a href="https://www.npmjs.com/package/chalk">aqui</a> uma biblioteca pública do NPM chamada Chalk, que significa giz de cera em português. Nesse site, temos acesso a várias informações, como exemplos de uso, como instalar, documentação da biblioteca e versão.

No momento de gravação do curso, o Chalk estava na versão 5.0.1. Guarde esse número, porque é nessa versão que devemos trabalhar. Agora vamos instalar a biblioteca e aprender a utilizá-la.

De volta ao terminal, vamos rodar o comando:
- npm install chalk@5.0.1 --save-exact.

*Obs: Se você já começou a trabalhar com Node.js e instalou suas primeiras dependências, bastaria digitar npm install chalk para realizar a instalação. No vídeo, a instrutora escreve um comando maior para baixarmos especificamente a versão 5.0.1, utilizada por ela no curso. Para que não haja nenhum conflito com o que é ensinado no vídeo, devemos trabalhar com essa exata versão.*

Depois de executar o comando, os arquivos do Chalk *serão puxados do repositório do *NPM para nosso terminal local. Se voltarmos à nossa IDE, veremos que a pasta "node_modules" foi baixada. Dentro dela há a pasta "chalk", com os arquivos da biblioteca.

Além disso, recebemos os arquivos package-lock.json, que controla as dependências e suas versões, e package.json, na parte de dependências, com a informação da versão do Chalk instalada na linha 21 do código.

As bibliotecas, muitas vezes, são desenvolvidas por pessoas, comunidades ou empresas para universalizar a solução de problemas comuns. No caso do Chalk, vamos adicionar cores e efeitos aos textos do terminal. E, dentro da página do Chalk no NPM, aprendemos a usar a biblioteca.

Sempre começaremos importando a biblioteca no projeto, com o código import chalk from 'chalk';. Depois, encontramos um console.log inicial de uso. Vamos inserir essas informações na primeira linha do código em "index.js", substituindo 'Hello world!' por 'olá mundo':

````js
import chalk from 'chalk';

console.log(chalk.blue('olá mundo'));

console.log('ola mundo');
console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
````

Agora vamos salvar e voltar ao terminal. É hora de tentarmos executar o arquivo "index.js" com o comando node index.js. Ao fazer isso, vamos nos deparar com um erro importante para entendermos como o Node.js funciona.

Esse erro de sintaxe aconteceu na primeira linha, onde lemos import chalk from 'chalk';. Ou seja, a linha na qual importamos o conteúdo da biblioteca para o nosso arquivo. O Node.js também nos informa que não podemos usar o statement import fora de um módulo.

Até sua versão 13, o Node.js importava e exportava códigos entre arquivos e projetos de outra maneira. Isso era feito a partir da criação de uma constante, usando a função require. E, dentro da função, passávamos uma string com o nome da biblioteca desejada.

Essa forma foi substituída, nas versões mais atuais, pela sintaxe ECMAScript Modules. Ela é, basicamente, a sintaxe que utilizamos na primeira linha do nosso código. Ela é a forma mais moderna e indicada para trabalhar com importação no JavaScript.

O indicador que utilizamos junto ao import, chalk, no caso, age como uma variável. E, 'chalk', após o from, passa o nome, caso seja uma biblioteca externa. Caso estejamos lidando com outra função, ou uma variável de outra parte do código, passaremos o endereço do arquivo.

O uso da função require está sendo abandonado aos poucos, embora ainda consigamos encontrar informações sobre ela nas documentações do Node.js.

*Obs: Depois desse vídeo, nós encontraremos um conteúdo extra que esclarece as questões relacionadas a importação e exportação de módulos em JavaScript e em Node.js.*

Para que o erro de sintaxe da primeira linha não aconteça, precisaremos acessar o arquivo package.json e adicionar a propriedade type: "module", para avisar que estamos usando a sintaxe de módulos, após a propriedade main. Sempre entre aspas, porque estamos manipulando um arquivo .json:

````js
"main": "index.js",
"type": "module",
````

Depois de salvar, podemos voltar ao terminal e tentar executar novamente com o comando node index.js. Basta apertar a seta para cima para recuperar este comando, porque ele foi o último que executamos.

Agora teremos sucesso. O console.log "olá mundo" será exibido na nossa tela, pintado de azul, e os outros textos terão a cor branca. Agora, podemos ir à documentação do Chalk e deixar a imaginação correr solta, porque há inúmeras opções de cores, efeitos e visualizações.

É possível inverter a cor do texto ou do fundo, por exemplo. Vamos voltar ao projeto e, em sua raiz, adicionar o arquivo ".gitignore". Esse arquivo serve para não incluir a pasta "node_modules" no Git, quando salvarmos nosso projeto.

Essa pasta só deve existir localmente, porque, sempre que fazemos a instalação de um projeto, o NPM puxa os arquivos. Isso faz com que a pasta tenda a ficar muito grande. Por esta razão, não devemos subir essa pasta para o Git.

À linha 1 do código do arquivo ".gitignore", vamos adicionar node_modules. Caso estejamos utilizando o sistema operacional macOS para desenvolver, podemos adicionar uma segunda linha com o arquivo .DS_Store, um arquivo oculto desse sistema que guarda atributos visuais das pastas e outras informações.

Agora aprendemos a utilizar uma biblioteca de pequenos trechos de código para resolver problemas comuns de código. Na maior parte das vezes, alguém já enfrentou esses problemas antes e o código para resolvê-los já existe.

No próximo vídeo, vamos começar a pensar em como fazer o JavaScript ler um arquivo.

## Carregando arquivos

### A lib fs

vamos começar fazendo o JavaScript acessar um arquivo, que está em algum lugar do computador, e importar esse conteúdo. Esse é um problema relativamente comum e, para resolvê-lo, vamos aplicar uma biblioteca que já existe. O nome dela é FS (File System).

Vamos voltar ao arquivo "index.js" e deletar os console.log utilizados na última aula. Vamos manter apenas a linha de importação da biblioteca Chalk, porque ainda a utilizaremos para assinalar e diferenciar os retornos do nosso terminal. Vamos descê-la para a segunda linha, porque na primeira importaremos a biblioteca FS.

Nesse caso, não precisaremos usar o npm install, porque FS é uma biblioteca nativa do Node.js. Ela também existe em outras linguagens, mas sempre com a mesma funcionalidade: possibilitar a interação entre linguagens de programação e arquivos do computador. Para importá-la, vamos usar o método import.

Depois, vamos deixar tudo mais organizado com uma função que traga o conteúdo do arquivo "texto.md", que estamos trabalhando, e definir os parâmetros caminhoDoArquivo, encoding e um callback.

Na sequência, abriremos uma arrow function (=>) e pediremos para que a função nos retorne um console.log. Dentro dele, vamos chamar a variável chalk, que grava os métodos da biblioteca, para colorir nossa mensagem. No parâmetro do método, por fim, passaremos o retorno texto:

````js
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        console.log(chalk.green(texto))
    })
}
````
Como não estamos usando o parâmetro erro nesse momento, vamos substitui-lo por um _, um padrão do JavaScript que serve para desconsiderar parâmetros que não estão sendo utilizados. No futuro, quando voltarmos a usar o erro, retornaremos com esse parâmetro.

Vamos executar, também, a função pegaArquivo, passando a string ./arquivos/texto.md, que representa o caminho do arquivo:

````js
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md');
````
Agora vamos voltar ao terminal e conferir se está tudo funcionando, executando o comando node index.js. O terminal exibirá o conteúdo do arquivo, o que significa que nossas intervenções deram certo. O resultado do read file foi exibido na cor verde, conforme determinamos.

Agora, vamos pegar esse resultado, guardá-lo numa variável e trabalhar com o texto para extrair links. Antes disso, porém, vamos refatorar o código no próximo vídeo. Assim, podemos descobrir se algum erro de execução aconteceu.

### Tratando Erros

Durante a execução de um programa, podem ocorrer diversos erros, como quando o programa não consegue localizar um arquivo, arquivo inexistente, arquivo vazio ou pasta não encontrada.

Quando programamos, precisamos dar atenção a esses cenários. O ideal é que o programa que usamos para escrever código consiga lidar com esses erros e situações inesperadas. É preciso que ele capture os erros, para podermos dizer o que o código precisa fazer quando esses erros acontecem.

Agora vamos refatorar nossa função pegaArquivo para informar como o código deve se comportar caso algo dê errado na execução. Internamente, o readFile está preparado para passar erros à frente, sinalizando-os, quando eles acontecem.

Antes de fazer a refatoração, vamos criar outra função acima dela, à qual chamaremos de trataErro. Ela receberá como parâmetro erro. Isso nada mais é do que os dados recebido por readFile em caso de erro. Mais especificamente, é o primeiro parâmetro da função callback que substituímos por _ na última aula. Vamos trazê-lo de volta ao código.

No corpo da função, chamaremos a palavra chave throw, que significa lançar, em português. Usamos essa terminologia porque vamos "lançar" erros para fora do programa. Para fazer isso, vamos inserir new Error(erro) após throw. Agora podemos informar, dentro da função callback, o que o código deve fazer nesses casos.

Vamos adicionar um if para representar que, se houver erro na execução do readFile, chamaremos a função trataErro, passando como parâmetro o erro que está sendo recebido. Caso nossa código não caia no if, ele seguirá para console.log.

Como, com essas mudanças, a função pegaArquivo está preparada para pegar um arquivo, vamos texto.md da última linha:

````js
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(erro);
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
````

Se tudo der certo no código, não cairemos no erro e veremos o texto encodado, recebido via readFile, passar para o console.log. Caso o erro ocorra, no caso de passarmos um caminho errado ou um arquivo que não existe, automaticamente a função readFile passará o objeto de erro para dentro do parâmetro de mesmo nome.

Agora vamos executar tudo para ver se nosso código funcionará. De volta ao terminal, vamos inserir o comando node index.js para verificar a execução. Quando fizermos isso, seremos informados que um erro de diretório aconteceu.

Isso significa que o sistema esperava ler um arquivo, mas recebeu um diretório. Essa operação é classificada como ilegal. O terminal nos informa o erro, seu código, descreve-o, diz onde ele ocorre e passa o stack trace, com todos os lugares do código em que o erro aconteceu.

Vamos voltar ao arquivo "index.js" para refatorar nossa função de erro outra vez. Em new Error, vamos remover o objeto erro genérico e chamar a biblioteca Chalk para pintar os erros de vermelho.

Dentro disso, vamos passar o parâmetro erro.code, que se relaciona ao código dos erros, e a mensagem 'não há arquivo no diretório':

````js
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
````

Vamos limpar o console com "Ctrl + L" e executar o código novamente. Agora vemos outro erro, em vermelho: dessa vez, ele acontece porque não há arquivo no diretório. Agora o problema ficará mais claro para o nosso usuário.

Normalmente, utilizamos os códigos dos erros para fazer verificações. Vamos realizar um último teste para ver se o nosso console.log funcionará. Editaremos, dessa vez, a chamada da função pegaArquivo. Nela, adicionaremos /texto.md.

De volta ao terminal, executaremos o código outra vez. Dessa vez, o texto em verde volta a aparecer, o que significa que o caminho do console.log continua funcionando.

É importante que consigamos acessar os erros quando eles acontecem, para que entendamos as mensagens passadas por eles. Essas mensagens são dicas do que está acontecendo no nosso código e facilitam o processo de correção.

Se quisermos, podemos adicionar um console.log ao objeto erro. Assim, podemos visualizar o objeto inteiro. Vamos remover, também, texto.md da chamada da função, para provocar o erro:

````js
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/');
````

Assim, podemos voltar ao terminal e executar o código. Com essas alterações, visualizaremos o objeto erro, que está sendo recebido pela função, e o erro em si.

Esse objeto tem algumas propriedades: errno, o número do erro, code, o código do erro, e syscall, a chamada geradora do erro. No nosso caso, uma chamada de leitura.

A partir disso, é possível continuar a refinar nosso tratamento de erros. É importante consultar a documentação do Node.js, para analisar o construtor de erros da ferramenta. Lá, encontramos todas as opções e métodos disponíveis para o construtor.

No próximo vídeo, vamos continuar a trabalhar no desenvolvimento da nossa biblioteca.

### Promessas

As funções e variáveis exigidas para o funcionamento do código estavam basicamente nos mesmos diretórios.

Agora vamos garantir que o JavaScript consiga trabalhar com arquivos externos, como os Markdown, nos quais não conseguimos garantir o tamanho ou a quantidade de links. O JavaScript precisará processar o arquivo e trazer seus links.

Não temos como saber, portanto, quanto tempo o JavaScript levará para fazer tudo isso. Ao mesmo tempo, precisamos garantir a continuidade da execução. Então precisamos pedir que o JavaScript espere pelo fim do processamento antes de manipular o arquivo Markdown.

A situação com a qual nos deparamos é, portanto, de código síncrono versus código assíncrono. Códigos síncronos são executados em sequência, com uma instrução após a outra.

Para facilitar o entendimento podemos estabelecer uma comparação com comunicação síncrona, como a feita via rádio, na qual uma pessoa fala e a outra fala logo depois.

Já os códigos assíncronos não esperam a finalização de uma tarefa para iniciar a seguinte. Não podemos esperar o JavaScrip terminar de processar um arquivo ou buscar dados de banco sem sabermos quando isso acontecerá. Em outras palavras, não é possível travar o funcionamento do código.

Esse tipo de código também precisa esperar a finalização da tarefa para retornar o resultado. Por exemplo, se pedirmos para o JavaScrip processar um arquivo de texto muito grande, ao mesmo tempo em que não podemos travar o programa, também precisamos esperar que ele finalize o processamento do arquivo para pegar o retorno.

Vamos criar um paralelo com a comunicação assíncrona, feita via aplicativos de mensagem, por exemplo. Como não sabemos quando receberemos uma resposta para nossas mensagens, podemos deixar o celular de lado enquanto resolvemos outras coisas.

Como não sabemos o tamanho dos arquivos que precisaremos processar, vamos refatorar nossa função pegaArquivo. O objetivo é fazê-la trabalhar de forma assíncrona. De volta à IDE, vamos transformar nossa função em comentário.

Vamos reescrevê-la, dessa vez com métodos assíncronos do Node.js. Podemos copiar as duas primeiras linhas. Na terceira, porém, ao invés de fs.readFile, vamos utilizar fs.promises.readFile. Vamos alterar também a forma de processamento de resposta do readFile.

Vamos remover o terceiro parâmetro do readFile. No caso, o callback. O JavaScript tem duas formas de trabalhar com código assíncrono. Vamos usar a primeira agora e, no próximo vídeo, a segunda. A primeira forma consiste na utilização do método then, que serve para encadear código assíncrono.

Dentro do método, passaremos o parâmetro callback (texto) e chamaremos uma arrow function, passando um console.log, chamando a biblioteca Chalk, para que consigamos exibir o resultado do processamento.

A função trataErro não está mais sendo chamada. Por isso, vamos inserir também a função catch, que serve para pegar erros de forma assíncrona. Dentro dela, passaremos o parâmetro erro e abriremos outra arrow function, chamando a função trataErro:

````js
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
        then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}
````

Quando falamos de promises, as promessas do JavaScript, estamos falando de código assíncrono. Com o JavaScript, não é possível pegar o valor de um código assíncrono de forma síncrona, podemos apenas utilizar métodos, como o then, para resolver a promessa e trazer seu valor.

No caso, o valor da promessa de readFile é o texto que esperamos receber no terminal. No nosso código, caso algum erro aconteça dentro da função then, ele será lançado para a função catch. Essas funções, assim como a readFile, não estão uma dentro da outra, mas encadeadas.

Inclusive, podemos passar a readFile para a linha seguinte e alinhar essas três funções uma abaixo da outra. A função readFile devolve uma promessa que será recebida e tratada por then. Se durante a resolução, algum erro acontecer, ela será lançado para catch.

No próximo vídeo, vamos aprender a utilizar as palavras-chave async e await para trabalhar com assincronicidade.

### Async/Await

Uma das características do JavaScript é que há mais de uma maneira de executar a mesma tarefa de código. Isso acontece porque a ferramenta é totalmente retrocompatível. Ou seja, funcionalidades implementadas nas versões mais antigas nunca deixam de funcionar, por mais que as versões mais atuais implantem novos métodos.

Nesse vídeo, vamos resolver promessas em JavaScript utilizando uma técnica mais recente. No vídeo anterior, usamos o then para fazer isso. No arquivo "index.js", vamos apagar a versão síncrona e transformar a função pegaArquivo do vídeo anterior em comentário.

Agora, vamos resolver as promises usando as palavras-chave async e await. Chegou a hora de refazer a função, mantendo as duas primeiras linhas da versão anterior, mas adicionado a constante texto para pegar o retorno do processamento de fs.promises.readFile.

Depois, passaremos um console.log em texto, para conferirmos o retorno, sem esquecer de passar /texto.md na função pega arquivo:

````js
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(texto);
}

pegaArquivo('./arquivos/texto.mmd');
````

Abrindo o terminal, executaremos o comando node index.js. O retorno será a promessa Promise { <pending> }, uma promessa pendente. No vídeo anterior, aprendemos que as promises são o método de trabalho com código assíncrono do JavaScript e que ele torna inacessível o conteúdo das promessas.

Precisamos pedir que ele as resolva e apresente a promessa resolvida para que a guardemos em uma variável, por exemplo. Vamos refatorar a função pegaArquivo para torná-la assíncrona.

Escrevendo async antes de function, avisamos ao JavaScript que essa será uma função assíncrona que precisará ser resolvida antes de retornar o resultado. Já o await precisará ser adicionado a todos os trechos de código da função que precisam aguardar o retorno da promessa ou o processamento.

No caso, adicionaremos await à linha 13, no retorno de fs.promises, antes do restante do código. Não podemos esquecer, também, de chamar a biblioteca Chalk para que o retorno tenha a cor verde:

````js
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.geent(texto));
}

pegaArquivo('./arquivos/texto.mmd');
````

Em resumo, nossas alterações informam ao JavaScript que a função precisa ser resolvida para que seus dados sejam passados à variável texto. Vamos voltar ao terminal e executar novamente o comando node index.js.

Agora sim, o JavaScript conseguirá resolver a promessa e trazer os dados para a variável texto. Isso fará com que o valor dessa variável nos seja retornado no console. Vamos voltar ao nosso código, na função pegaArquivo, para remover texto.md da chamada da função, algo que ocasionou erro anteriormente.

Quando executamos a função, porém, outro erro acontecerá, porque a função trataErro não está sendo chamada pela nossa função assíncrona. Para resolvermos isso, criaremos um bloco Try catch. Na segunda linha da função, abriremos o bloco try e, dentro dele, vamos adicionar tudo o que queremos que aconteça em caso de sucesso.

No caso, todas as outras linhas que escrevemos para a função pegaArquivo até agora. Ao fim desse primeiro bloco, criamos o bloco catch e, entre parênteses, passamos o parâmetro erro. Em catch, vamos chamar a função trataErro recebendo erro.

Agora vamos descer até a função pegaArquivo. Vamos duplicá-la e, na primeira, passar o caminho de sucesso, incluindo texto.md à chamada, e, na segunda, excluir texto.md, para provocar o erro:

````js
async function pegaArquivo(caminhoDoArquivo) {
    try {
const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.geent(texto));
    } catch (erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');
````

De volta ao terminal, chamaremos node index.js novamente. Primeiro, receberemos o retorno do texto em verde. E, em seguida, o erro que esperávamos, com a mensagem em vermelho. O novo objeto Error está sendo lançado com os valores solicitados, o que significa que está tudo funcionando.

Os métodos then e async/await funcionaram, mas a diferença entre eles está na escrita. Em termos de processamento e performance, elas são similares. A primeira opção tem uma escrita um pouco mais funcional, com encadeamento de funções uma abaixo da outra, enquanto a segunda faz com que escrevamos código assíncrono de uma maneira semelhante ao código síncrono.

Se tirarmos async da linha 11 do código e await da linha 14, a função será exatamente igual a uma função síncrona.

No próximo vídeo, vamos trabalhar com expressões regulares.

## Capturansdo links

### Expressões regulares

A segunda funcionalidade que precisamos implementar na nossa biblioteca é capturar todos os links de um arquivo. Existem alguns métodos de string do JavaScript, como includes, por exemplo, que servem para localizar determinado texto dentro de strings. Mas isso não é o que queremos.

Nós não sabemos quais links receberemos do arquivo e, muito menos, o que há dentro deles. O que sabemos é que, no Markdown, links são assinalados com seus títulos entre colchetes, seguidos pela URL entre parênteses. O que precisamos é identificar, no texto, cada ocorrência desse padrão.

Nesse caso, não existe apenas uma biblioteca para essa finalidade, mas uma linguagem própria, conhecida como expressão regular. Esse tipo de expressão consiste em padrões que montamos para capturar combinações específicas de caracteres em textos. Conseguimos, por exemplo, usar a linguagem e os recursos da expressão regular para acesar um texto e capturar o padrão que desejarmos.

No nosso caso, texto entre colchetes seguido de URLs entre parênteses. Acessando a documentação sobre expressões regulares <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions">aqui</a> em JavaScript no site do MDN, vemos que elas podem ser utilizadas tanto com métodos próprios do objeto RegExp ou com os métodos de string que veremos em seguida.

Como podemos ver também na documentação, as expressões regulares utilizam caracteres especiais (metacaracteres) para assinalar padrões. Por exemplo, +, /, \, *, ?, (), [] são utilizados para que consigamos capturar padrões em um texto.

Vamos acessar o site <a href="https://regex101.com">aqui</a>. Nele, vamos escrever expressões regulares e testar se elas funcionam ou não. Vamos voltar ao nosso texto de modelo, em "texto.md", e copiar o parágrafo que começa na linha 3. Vamos colá-lo na caixa de texto abaixo da opção "TEST STRING", no site.

Agora, na caixa de texto* "REGULAR EXPRESSION", vamos entender um pouco mais sobre o funcionamento das expressões regulares. Como já falamos, elas capturam padrões de caracteres em sequência. Então, se pegarmos qualquer palavra desse texto, como "objeto", e o escrevermos em *"REGULAR EXPRESSION", a ferramenta capturará todas as ocorrências dessa sequência de caracteres.

Fazendo outro teste, supondo que queremos pegar todas as ocorrências da letra "a", podemos escrever essa letra na caixa de texto. Porém, se quisermos pegar todas as ocorrência das letras "a", "b" e "c", e, se buscarmos como "abc", não capturaremos nenhuma ocorrência.

Isso acontece porque, se escrevermos dessa forma, a ferramenta vai procurar o padrão das letras "a", seguida de "b" e, por fim, "c", que não existe na nossa "TEST STRING". Para que a expressão regular entenda que queremos pegar todos as ocorrências desses caracteres no texto, sem que estejam em sequência, vamos usar a ferramenta classe, envolvendo o "abc" entre colchetes:

[abc]

Fazendo isso, a expressão regular consegue capturar todas as ocorrências dessas letras, porque, ao utilizar os colchetes, informamos à ferramenta que se trata de uma classe de caracteres.

Vamos fazer outro teste. Se quisermos capturar todos os caracteres do texto, com exceção de "abc", vamos utilizar outro metacaracter, mas sem remover os colchetes. Trata-se do acento circunflexo:

[^abc]

Depois disso, pegaremos todos os caracteres do texto, exceto pelas letras "a", "b" e "c".

Se quisermos pegar todas as letras do alfabeto, de "A" maiúsculo a "z" minúsculo, não precisamos inserir todas elas entre colchetes. Basta unir os dois caracteres por um hífen, dentro dos colchetes:

[A-z]

Agora a expressão regular pegará todas as ocorrências entre essas letras, mas não pega caracteres especiais, como "ç", "~", ".", "/", etc.

Se o objetivo for pegar todos os caracteres que não são letras do alfabeto, usaremos, outra vez, o circunflexo:

[^A-z]

Fazendo isso, ele pegará espaços em branco, "/", ";" e todos os caracteres que não forem letras.

Existem letras que são consideradas caracteres especiais da expressão regular, como espaços em branco, representados por \s_. Inserindo isso entre colchetes, pegaremos todas as ocorrências de espaços em branco.

Para pegarmos os espaços em branco e as letras "s", basta adicionar um "s":

[\ss]

Agora, pegamos todos os espaços em branco e ocorrências da letra "s".

Se usamos colchetes na expressão regular para identificar classes, como fazemos para pegar as ocorrências de colchetes no texto. Para informar que não estamos falando de um metacaractere, mas de um caractere que queremos buscar no texto, adicionamos uma barra invertida antes dele:

\[

Fazendo isso, o* Regex* pegará as ocorrências de colchetes abrindo no texto. Podemos fazer o mesmo com colchetes fechando:

\[\]

Se fizermos isso, o Regex não pega nada, porque essa ocorrência é exata, assim como a primeira que testamos com as letras "a", "b" e "c". Vamos precisar informar que esses colchetes são uma classe, envolvendo-os, por mais estranho que pareça, em colchetes:

[\[\]]

Agora a expressão regular consegue identificar, em separado, colchetes abrindo e colchetes fechando. Esse é um exemplo muito interessante, porque quando começarmos a compor precisaremos usar metacaracteres e caracteres juntos.

Já que queremos pegar os colchetes e a ocorrência que está dentro deles, vamos criar a classe entre o colchete abrindo e o colchete fechando. Existe outro caractere que conseguimos usar para pegar palavras, que é o "w". Utilizando ele, pegaremos todas as palavras entre caracteres de colchete.

Vamos inserir também "*" e "?" depois da classe, para explicar para a expressão regular quantas vezes ela precisará pegar essa ocorrência:

\[[\w]*?\]

Agora, a expressão consegue capturar 3 das 5 ocorrências do nosso texto base. "[]" não foi capturada porque está entre chaves e a letra "w" não pega caracteres especiais. Já "[Implementation notes]" não foi capturada porque consiste em duas palavras separadas por um espaço em branco.

Para resolver isso, vamos adicionar \s à busca, para encontrarmos espaços em branco:

\[[\w\s]*?\]

Depois disso, só precisaremos dar um jeito de pegar "[]". Vamos apagar \w\s e, ao invés disso, criar algo mais genérico. Pediremos que a expressão regular pegue tudo que estiver entre colchetes, exceto por outros colchetes. Faremos isso adicionando ^[\] à classe:

\[[^[\]]*?\]

Agora, o Regex pegará as cinco ocorrências entre colchetes. A primeira parte da nossa expressão regular está completa.

Essa é apenas uma introdução ao assunto, mas nós temos cursos completos de expressão regular, nos quais você pode praticar todos os cenários possíveis.

Como só queremos ter uma noção do que fazer com essa ferramenta, vamos ficar por aqui nesta aula.

Vamos copiar \[[^[\]]*?\] e guardar essa expressão como comentário, no final do arquivo "index.js". Assim, não perderemos a primeira parte da nossa expressão. Vamos apagar a parte de promises com then que fizemos anteriormente, porque, na sequência do treinamento, vamos continuar a utilizar o método com async await.

No próximo vídeo, vamos aprender a pegar os links que estão entre parênteses.

Vamos seguir então com a segunda parte da nossa expressão regular. Vamos aprender a capturar a URL, que está entre parênteses no "TEST STRING", em https://regex101.com.

Vamos começar de fora para dentro. Os parênteses, assim com os colchetes, também são metacaracteres no contexto da expressão regular. Em "REGULAR EXPRESSION", vamos inserir () e fazer com que eles escapem, usando \:

\(\)

Com esse comando, só conseguimos pegar uma ocorrência, a única do texto que tem parênteses abrindo e fechando sem outros caracteres dentro. Precisamos, novamente, criar uma classe para pegar todos os parênteses abrindo e fechando e o conteúdo entre eles.

Em "TEST STRING", vamos apagar, por enquanto, o parênteses fechando e deixar apenas o de abertura. Os links têm algo em comum: todos começam em "http". Precisaremos levar essa informação, também, para a expressão.

Links podem ser iniciados por "http" ou "https". Por isso, se pesquisássemos "https" na "TEST STRING", não pegaríamos as ocorrências iniciadas em "http", embora isso não aconteça no nosso texto base. Para exemplificar isso, a instrutora retira o "s" do primeiro link do texto, transformando-o em "http".

Por isso, precisaremos informar se a letra "S" ocorre ou não. Faremos isso usando "?". Depois da interrogação, podemos inserir o "://". Como as barras também são metacaracteres, precisaremos usar "" para que elas sejam consideradas caracteres normais.

Agora queremos fazer a captura até o primeiro ponto da URL, construido, com a ajuda de colchetes, uma classe. Dentro dela, vamos usar o "^" para pegar tudo que não seja espaços em branco, interrogações, cerquilhas e pontos. Precisamos informar para o Regex quantas vezes queremos pegar, com um asterisco.

Por enquanto, estamos pegando tudo até o primeiro ponto. A segunda parte de expressão regular está assim, até agora:

\(https?:\/\/[^\s?#.]*

Agora vamos para a segunda parte, removendo, por enquanto, o asterisco. Criaremos, com colchetes, uma segunda classe. Como, depois do primeiro ponto, a URL pode apresentar caracteres especiais, vamos usar ^\s para pegar tudo que não seja espaços em branco.

É hora de inserir o asterisco outra vez, para que a ocorrência se repita. Ainda não está funcionando porque falta apontar o local de fechamento da ocorrência. Ela se encerrará no fechamento dos parênteses. Informaremos isso inserindo \):

\(https?:\/\/[^\s?#.].[^\s]*\)

## Capturando Grupos

Agora vamos juntar as duas partes da expressão regular que criamos em https://regex101.com.

De volta ao arquivo "index,js", vamos copiar a primeira parte:

````
\[[^[\]]*?\]
````

e colá-la no Regex, em "REGULAR EXPRESSION". Adicionando a segunda parte da expressão:

````
\(https?:\/\/[^\s?#.].[^\s]*\)
````
teremos:

````
\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)
````

Como resultado, o Regex usará a expressão para pegar todas as cinco ocorrências de links em sua totalidade. Ou seja, pegou o título entre colchetes e a URL entre parênteses. Todas as variações de links, com caracteres especiais no título ou no link, por exemplo, foram capturados.

Agora vamos dar uma olhada na parte lateral do Regex, onde encontramos a seção "MATCH INFORMATION". Nessa parte, encontramos cada um dos padrões encontrados pelo Regex, onde eles começam e onde terminam. Para que passemos os links para o JavaScript, porém, eles não podem estar entre parênteses.

Para capturar os nomes, o ideal também seria que eles estivessem fora dos colchetes. Vamos resolver essas duas situações facilmente, porque o Regex já está pronto para lidar com essas questões. O recurso de grupos da ferramenta serve para separar a expressão regular em partes. Dessa maneira, o Regex captura tanto a ocorrência inteira como os grupos separados.

Os caracteres que usamos para marcar grupos, nas expressões regulares, são os parênteses. O primeiro grupo seria o texto que está dentro do título, entre colchetes, mas queremos remover os colchetes. O grupo começa depois do primeiro colchete, então vamos passar, na expressão, um (. Fecharemos o parênteses com ) depois da interrogação:

````
\[([^[\]]*?)\]\(https?:\/\/[^\s?#.].[^\s]*\)
````

Com essa alteração, já conseguiremos capturar o primeiro grupo. Agora vamos alterar também o segundo grupo, para que peguemos somente os links, sem os parênteses. Para isso, vamos adicionar parênteses antes de http e do asterisco de fechamento:

````
\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
````

Agora o Regex já identificará o segundo grupo, excluindo os parênteses, o que significa que tivemos sucesso. Agora podemos pedir que o JavaScript acesse o link e nos devolva as informações que queremos.

Vamos copiar a expressão completa, apagar as separadas de "index.js" e colar essa sequência de caracteres especiais, no código, como comentário.

Agora vamos começar a testar a expressão. Vamos até o arquivo "texto.md" para copiar o mesmo parágrafo base, com as cinco ocorrências. De volta a "index.js", no começo do arquivo, após as exportações, vamos criar a constante textoTeste, abrir strings e colar o parágrafo:

````
import fs from 'fs';
import chalk from 'chalk';
````
````
const textoTeste = 'São geralmente recuperados a partir de um objeto 
[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) 
que é retornado como resultado da seleção, pelo usuário, de arquivos 
através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs
/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://
developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em 
operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` 
em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web
/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar 
objetos File representando qualquer arquivo local sem a intereção do 
usuário (veja [Implementation notes](https://developer.mozilla.org/pt-
BR/docs/Web/API/File#implementation_notes) para mais informações.'
````

Agora vamos usar os métodos do JavaScript para lidar com essas expressões. Em "index.js", abaixo da constante textoTeste que acabamos de criar, vamos construir a função extraiLinks, recebendo um texto.

Dentro das chaves, criaremos a constante regex. Dentro dela, copiaremos a nossa expressão regular, englobando-a entre barras invertidas. Depois da segunda barra, vamos inserir gm e fechar um ;. Essa é uma das maneiras de trabalhar com expressões regulares do JavaScript:

````js
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
}

````

Cada linguagem de programação trabalha de formas diferentes com expressões regulares. Na página do Regex, inclusive, podemos selecionar com qual linguagem vamos trabalhar, já há diferenças entre elas. Basta acessar o menu da sidebar à esquerda e, na seção "Flavor", escolhemos a linguagem.

Segundo a documentação sobre expressões regulares do MDN, podemos trabalhá-las com objeto RegExp, criando um new RegExp, passando para dentro dele a expressão regular, da mesma forma que criamos a nossa, entre strings. Nesse treinamento, vamos trabalhar com a outra possibilidade: métodos de string, como matchAll(), replace(), etc.

Abaixo de const regex, vamos criar a constante capturas, passando texto.match(), com a variável regex como parâmetro, na qual salvamos nossa expressão regular. Abaixo disso, vamos dar um console.log em capturas.

Depois do fechamento das chaves, vamos chamar a função extraiLinks(), com a variável textoTeste:

````js
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = texto.match(regex);
    console.log(capturas);

}

extraiLinks(textoTeste);
````

Vamos apagar a função pegaArquivo sem texto.md ao final do arquivo, mantendo apenas a que inclui essa informação. Também podemos apagar o comentário com a expressão regular, agora que ela está na variável regex. Vamos salvar e voltar ao terminal, para executar node index.js.

O match fez a combinação do padrão que escrevemos com o encontrado no texto, mas exibiu o arrray com a captura completa, do trecho inteiro, no console. Em outras palavras, ele incluiu os colchetes e parênteses que criamos grupos para excluir. Queremos pegar as ocorrências em separado.

Para isso, vamos usar um método do próprio Regex para que utilizemos melhor funções como a de separação em grupos, por exemplo. Usaremos o método exec(), que pode ser encontrado na documentação do MDN, junto com todas as outras funções e métodos do JavaScript que utilizamos, como métodos de array, de string e de objeto.

De volta a "index.js", em const capturas, como estamos usando um método de Regex, e não mais de string, vamos substituir texto.match(regex) por regex.exec(texto). Agora é um método de Regex que receberá o texto e fará a manipulação para nós:

````js 
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = regex.exec(texto);
    console.log(capturas);
````
De volta ao terminal, executando node index.js. O terminal nos apresentará um array. Seu primeiro elemento será a ocorrência completa, o segundo é o primeiro grupo e o terceiro traz o segundo grupo. Agora, conseguimos separar o título sem colchetes e a URL sem parênteses.

Também recebemos algumas outras informações, como o índice da cadeia de caracteres onde começa a ocorrência, com valor "49", e o input usado. Apesar disso, o terminal parou na primeira ocorrência.

No próximo vídeo, precisaremos iterar uma lista de caracteres, fazendo um loop, para resolver esse problema.

## Retornando Links

Agora vamos resolver a utilização da expressão regular para capturar os links do nosso texto exemplo.

Com isso, encerramos a funcionalidade principal da biblioteca, que é trazer uma lista de links a partir de um texto em Markdown. Quando rodamos o arquivo via console, com o comando node index.js, temos como retorno um array com a ocorrência que precisamos.

Porém, só tivemos como retorno a primeira ocorrência. Precisamos, ainda, das outras quatro. Se formos à documentação do MDN e procurarmos pelo método de Regex exec, o próprio MDN dará um exemplo de como trabalhar com esse método usando um loop do JavaScript chamado while.'

Esse forma de iterar a string para pegar todas as ocorrências funcionará, mas não a utilizaremos para resolver nosso problema. Usaremos um método mais moderno. A forma de escrevê-lo é mais enxuta e adequada à escrita atual do JavaScript.

Voltaremos, agora, ao nosso código. No nosso primeiro texto, com regex, utilizamos o método match. Depois, passamos para o método exec. Agora vamos voltar a um método de string: o matchAll. Ele recebe como parâmetro a variável regex, que guarda nossa expressão regular.

Tudo isso se posicionará dentro da variável capturas. De volta ao terminal, rodaremos node index.js. Teremos como retorno um objetivo iterável de strings, Object [RegExp String Iterator] {}. Vamos voltar à documentação, buscando, dessa vez, pelo método matchAll.

Lá, vamos descobrir que o match retorna exatamente o que nosso console informou, um iterável de todos os resultados que batem uma string com uma expressão regular. Quando usamos funções e métodos de bibliotecas, precisamos saber o que eles recebem por parâmetro e o que eles retornam.

Para que tornemos esse objeto iterável, vamos usar o operador de espalhamento do JavaScript, chamado de spread operator e representado por reticências (...).

Vamos adicionar isso antes de texto.matchAll, na constante capturas. Vamos englobar, também, esse trecho em um array:

````js
const capturas = [...texto.matchAll(regex)];
````

Isso permite que nosso objeto iterável seja expandido. O resultado disso será salvo dentro da variável capturas.

De volta ao terminal, rodaremos, novamente, node index.js. O resultado será diferente: agora teremos um array de arrays, no qual cada índice é uma das ocorrências que desejamos capturar. Agora temos todas as informações que precisamos.

Vamos utilizar as informações dos índices 1 e 2, que representam os dois grupos de Regex que montamos anteriormente. Agora vamos pensar em como gostaríamos de fazer esse retorno no terminal.

Queremos criar uma lista, um array, e, para cada link, termos um objeto cuja chave seja o título do link e o valor seja a URL. Então vamos abrir um array e objetos. Cada um dos objetos terá um conjunto, um par de chave valor, o título e a URL.

Abaixo de const capturas = [...texto.matchAll(regex)]; vamos usar o método map dentro de uma nova constante resultados, que serve para percorrer um array e retornar outro array com o resultado que queremos. Vamos informar o objeto que queremos montar após uma arrow function.

Quando temos uma estrutura em que precisamos acessar um array e seu índice, como a captura no índice 1, que passamos por colchetes, e quando queremos utilizar esse valor como chave de um objeto, precisamos envolvê-lo em colchetes.

Para que o JavaScript perceba que as chaves que abrimos não são chaves de função, mas de um objeto que estamos criando, englobamos todo o objeto criado por parênteses.

Depois de tudo isso, vamos dar um console.log em resultados, para conferir se está tudo certo:

````js
const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
console.log(resultados);
````

De volta ao terminal, vamos executar node index.js. Agora teremos a exibição do que precisamos e da forma que previmos, por um array com um objeto para cada ocorrência. Em cada um dos objetos, a chave é o título do link e a URL é uma string com o link em si.

Agora, podemos substituir console.log(resultados); por return resultados;.

Agora podemos executar testes com os links. Agora podemos remover a string que inserimos na constante textoTeste, na linha 4 do nosso código. Vamos fazer a função extraiLinks trabalhar diretamente com o texto que será trazido por fs.promises no método readFile.

Vale lembrar que por enquanto a função pegaArquivo não está sendo chamada, porque a transformamos em comentário. Por isso, vamos reverter isso e trazer a função de volta ao código.

Agora temos que pegar o resultado de readFile e, ao invés de passá-lo para o console, vamos enviá-lo para extraiLinks. Vamos apagar o console.log da async function e chamar a função extraiLinks, passando como parâmetro o texto retornado por readFile.

Precisamos lembrar de apagar a função extraiLinks(textoTeste); antiga, na linha 11 do nosso código:

````js
async function pegaArquivo(caminhoDoArquivo) {
    try { 
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    }
}
````

Vamos fazer o teste no terminal, com node index.js. Nada será exibido, porque a função extraiLinks só retorna. Nós retirmos todos os console.log, por isso nada é exibido no terminal.

Vamos colocar a função extraiLinks, na linha 22, dentro de um console.log, temporariamente, para que continuemos a exibir o resultado no console. Faremos isso porque vamos aprender, a seguir, como chamar a função e a biblioteca.

De volta ao terminal, executaremos o teste novamente. Veremos que nosso arquivo "texto.md" foi acessado e que a lista está sendo trazida a partir dele. Tudo deu certo.

A parte principal da nossa biblioteca está feita. Nossos próximos passos serão o processo de validação de links e preparar a biblioteca para que ela funcione no terminal sem que precisemos chamar o Node.js.

## Executando

Já conseguimos acessar um arquivo externo, no formato Markdown, e exibir suas informações.

Se retornarmos ao arquivo "index.js", porém, para conferir a execuçao da função que retorna a lista no terminal, podemos perceber que ela recebe por parâmetro o caminho /arquivos/texto.md hard coded, ou seja, de forma dura.

Da forma como está codado, o programa só consegue funcionar com esse caminho. Porém, precisamos fazê-lo funcionar com qualquer caminho de arquivo, nome de diretório ou nome de arquivo.

Precisamos fazer com que a função pegaArquivo não receba mais uma string com valor fixo. Ela precisa receber o valor a partir do mesmo terminal, onde executamos o arquivo.

Vamos executar node index.js no terminal. Seria interessante se pudéssemos passar o caminho do arquivo que faça o caminho funcionar da mesma forma.

Vamos voltar, então, ao nosso projeto para criar uma CLI, interface de linha de comando, criando um ponto de contato entre nossa biblioteca e o terminal de onde virão as informações.

Clicando no segundo ícone à esquerda, na sidebar, abaixo de "Explorer", vamos criar uma pasta chamada "src" na raiz do projeto. Vamos mover o arquivo index.js para dentro dela, para que ele fique melhor organizado e seu source se concentre na pasta.

Do lado de fora, deixaremos apenas os arquivos de configuração. Clicando no ícone mais à direita, criaremos outro arquivo, chamado "cli,js", dentro da mesma pasta. Nele, criaremos o código que fará a manipulação das informações que passaremos pela linha de comando e as levará para o restante da aplicação.

O Node.js tem um objeto próprio, chamado objeto process. Vamos "cli.js" e criar a constante caminho, passando o valor process.argv, que representa esse objeto e valores de argumento. É assim que chamamos informações passadas da linha de comando para o programa.

Na segunda linha, vamos inserir um console.log, para que vejamos o que a variável caminho nos trará quando executarmos o arquivo CLI:

````js
const caminho = process.argv;
console.log(caminho);
````

De volta ao terminal, vamos executar node src/cli.js:

````js
node src/cli.js
````

O retorno será um array com duas strings. A primeira é um caminho absoluto do diretório raiz até "/bin/node", a pasta de binários do Node.js. A segunda é o caminho absoluto entre a pasta raiz e "cli.js".

O process, então, retornou as informações referentes aos dois comandos que passamos para o terminal. O primeiro foi node, que acessa a pasta onde estão o executados do Node.js. Com esses executáveis, ele compreende o que está em "cli.js", executar o arquivo e retornar, na tela, o que precisamos.

O segundo item do array se refere ao segundo argumento passado para o terminal, que é um caminho de arquivo, que retorna "src/cli.js".

Vamos executar outro teste. Vamos executar, agora, node src/cli.js alura:

````js
node src/cli.js alura
````

Com isso, o retorno será os dois caminhos vistos anteriormente, além de um terceiro elemento: uma string na qual podemos ler "alura".

Claramente, podemos identificar um padrão. Vamos realizar um último teste para que tenhamos certeza.

Vamos executar o comando node src/cli.js ./arquivos/texto.md:

````js
node src/cli.js ./arquivos/texto.md
````

Com isso, o process.argv trará o array novamente, com os dois primeiros caminhos de arquivo, e, em seguida, uma outra string com a informação adicional que trouxemos, ./arquivos/texto.md. Dessa vez, trata-se de um caminho relativo, relacionado à pasta onde estamos.

Com a variável caminho que acabamos de criar, a partir do valor do objeto process, conseguimos acessar a posição dois, que é o terceiro item do array. Para testar isso, vamos voltar a "cli.js" e fazer a seguinte alteração no console.log:

````js
const caminho = process.argv;
console.log(caminho[2]);
````

De volta ao terminal, executaremos um último teste. Vamos limpar o terminal e executar novamente o comando node src/cli.js ./arquivos/texto.md:

````js
node src/cli.js ./arquivos/texto.md
````
Com isso, teremos como retorno apenas uma string, que informa o caminho que desejamos passar. Este é exatamente o parâmetro que passamos na função pegaArquivo, em "index.js".

Vamos remover, então, o caminho hard coded da função e passar esse caminho que vem do terminal.

Obs: Podemos, teoricamente, passar qualquer outro caminho, desde que ele acabe em um arquivo Markdown.

Já que agora concentramos o recebimento de informações e execução de funções correspondentes em "cli.js", ao invés de chamarmos a função pegaArquivo a partir de "index.js", vamos exportá-la, para que ela possa ser utilizada em "cli.js".

Por isso, no final do código de "index.js", vamos exportar a função com export default pegaArquivo;

````js
export default pegaArquivo;
````

Depois iremos até "cli.js" para importá-la, com import pegaArquivo from './index.js';:

```js
import pegaArquivo from './index.js'

const caminho = process.argv;
console.log(caminho[2]);
````

Obs: Sua IDE pode querer te ajudar a preencher a linha do import automaticamente. Porém, quando trabalhamos com módulos, como vimos anteriormente, precisamos escrever o caminho completo com a extensão ".js". Do contrário, o Node.js não conseguirá se encontrar.

Agora que importamos a função pegaArquivo e já temos caminho salvo em uma variável, vamos chamar a função, em "cli.js", passando caminho, no índice 2, como seu parâmetro:

````js
import pegaArquivo from './index.js';

const caminho = process.argv;

pegaArquivo(caminho[2]);
````


## Organizando Entradas e Saídas

Vamos continuar a organizar a parte de CLI.

Primeiro, vamos tirar da função pegaArquivo a responsabilidade de exibir os resultados na tela com um console.log. Ela precisa pegar o arquivo e retornar seu resultado.

Vamos voltar a "index.js" e substituir o console.log localizado abaixo da constante texto por return, mantendo extraiLinks(texto);

````js
return extraiLinks(texto);
````

Vamos importar a biblioteca chalk, para que identifiquemos melhor os resultados.

Depois disso, vamos passar a responsabilidade de exibir o resultado no console, recebendo e retornando as informações, para dentro das funções da CLI. Em "cli.js", vamos manter a constante caminho, remover pegaArquivo(caminho[2]); e criar uma função processaTexto, recebendo caminho.

Ela será responsável por mandar nossa lista de links para a tela do terminal. Por isso, criaremos a constante resultado, que chamará pegaArquivo, passando caminho, na posição 2 do array.

Com o resultado, pediremos que console.log exiba o resultado, englobando-o com chalk.yellow('lista de links')

No fim do arquivo, vamos executar a função processaTexto, recebendo caminho, que é a variável que guarda as chegadas do terminal:

````js
import chalk from 'chalk';
import pegaArquivo from './index.js';

const caminho = process.argv;

function processaTexto (caminho) {
    const resultado = pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);
````

No terminal, vamos inserir o comando node src/cli.js arquivos/texto.md:

````js
node src/cli.js arquivos/texto.md
````
Ao contrário do esperado, teremos como retorno o texto "lista de links" em amarelo. Ao invés do array com nossa lista, temos o retorno Promise { <pending> }. Anteriormente, já aprendemos como funcionam as promessas em JavaScript.

Vamos localizar em que parte do código está essa promessa não resolvida. Antes, em "index.js", o resultado aparecia na tela porque, antes do retorno da função pegaArquivo, que retorna o resultado de extraiLinks, havia um console.log que mandava as coisas para a tela.

Agora, pegaArquivo apenas retorna o resultado de extraiLinks. Apesar dessa função não guardar códigos assíncronos, a função pegaArquivo tem, porque trabalha com o método fs.promises.readFile.

Esse método garante que o JavaScript não tenha problemas de sincronicidade ao processar arquivos grandes. Ou seja, a função pegaArquivo precisa esperar antes de retornar, em alguns momentos.

Portanto, quem recebe o resultado da função também precisa saber disso. A função processaTexto, em "cli.js", também precisa ser uma função assíncrona. Para resolvermos isso, precisamos informar que a função agora é assíncrona, adicionando async antes da função processaTexto.

Na constante resultado, adicionamos await antes de pegaArquivo:

````js
import chalk from 'chalk';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto (caminho) {
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);
````

De volta ao terminal, vamos reprisar o comando anterior com a seta para cima do teclado. Agora tudo voltará ao normal. Veremos a exibição do array com a lista de links e com o texto em amarelo antes dela.

Como estamos refinando a saída do terminal, vamos voltar à função extraiLinks em "index.js". Vamos modificar o retorno dela, fazendo uma verificação ao invés de, no seu final, apenas retornar resultados.

Verificaremos o retorno para que ele não seja vazio, caso não haja tenha um link dentro de si, alterando-o para return resultados.length !== 0 ? resultados : 'não há links no arquivo';. Com isso, se resultados.length for diferente de 0, receberemos a mensagem 'não há links no arquivo'.

Vamos testar no terminal novamente. Reprisando o comando anterior, teremos a lista de links como retorno. Para testar nossa última alteração, vamos acessar o arquivo "texto.md" e apagar o segundo e o terceiro parágrafo, mantendo apenas o primeiro parágrafo, que não contém links.

Vamos salvar, mas, depois do teste, usaremos um "Ctrl + Z" para voltar com os parágrafos que apagamos. De volta ao terminal, reprisando o comando anterior, receberemos a mensagem 'não há links no arquivo' como resultado, exatamente como queríamos.

## Processando Diretórios

Para que biblioteca funcione, ela precisa receber o caminho de um arquivo Markdown pela linha de comando.

Vamos voltar ao gerenciamento de uma lista grande de arquivo nesse formato, que foi a solução proposta por nós para esse problema. Seria muito mais prático se pudéssemos passar para a biblioteca apenas o diretório, ao invés do caminho do arquivo.

Todos os arquivo de programação da instrutora estão na pasta arquivos. Se quisermos checar os links de todos eles, faz muito mais sentido fazer isso. O Node.js tem, entre suas bibliotecas, um método que possibilita isso.

É possível verificar se um caminho passado no terminal se refere a um diretório ou a um arquivo. Voltando ao arquivo "cli.js", à sua segunda linha, vamos importa o método da biblioteca fs, com uma string 'fs'. Agora a função processaTexto, que recebe esse caminho, precisará verificar se o que está chegando é o caminho de um diretório ou de um arquivo.

Na função processaTexto, vamos mudar o nome do parâmetro de caminho para argumentos. Faremos isso para que fique mais de acordo com o que é recebido pela função. Abaixo da função assíncrona, vamos criar a função caminho, igualando-a a argumentos no índice 2.

Vamos inserir um if para verificar se há uma ramificação. Sua condição terá o método fs.lstatSync. O parâmetro do método será a string com o caminho que queremos verificar. No caso, será caminho. Vamos encadear, ainda, o método isFile(), que retornará true apenas quando o caminho for de um arquivo.

Vamos passar tudo que estava sendo executado na função processaTexto para dentro desse if. Podemos usar o atalho "Alt + ↑" para movimentar as linhas para cima. Vamos abrir, também, um método else if, com isDirectory() como parâmetro. Ao contrário de isFile(), esse parâmetro retornará true se o caminho passado for um arquivo.

Precisamos pegar cada um dos arquivos desse diretório. Faremos isso inserindo outro método fs no else if, por meio da constante arquivos, chamando fs.promises.readdir, com caminho como parâmetro. O código só cairá dentro do else if se o caminho for um diretório. Portanto, o método readdir merece exatamente o que precisa.

Daremos um console.log em arquivos antes de salvarmos e irmos para o terminal:

````js
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links'), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = fs.promises.readdir(caminho)
        console.log(arquivos);
    }
}
````

De volta ao terminal, vamos executar o código node src/cli.js arquivos/:

````js
node src/cli.js arquivo/
````

O retorno será uma promessa pendente. Isso significa que há um código assíncrono ainda não tratado no nosso código. Para resolver isso, devemos inserir await antes de fs.promises:

````js
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links'), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        console.log(arquivos);
    }
}
````
De volta ao terminal, vamos executar node src/cli.js arquivos/ novamente. Dessa vez, o retorno será um array com a string 'texto.md' dentro. Isso significa que ele entrou na pasta "arquivos" e conseguiu trazer o único arquivo dentro dela. Vamos copiar e colar o arquivo "texto.md" na mesma pasta.

Assim, teremos o arquivo "texto copy.md". Vamos voltar ao terminal e executar o comando novamente, para descobrir que, realmente, deu tudo certo: os dois arquivos serão exibidos.

Se temos um array para trabalhar, podemos supor que precisaremos percorrê-lo para acessar os conteúdo que estão dentro dele. Queremos que a função pegaArquivo apenas retorna a lista no terminal. Portanto, não precisamos de retornos.

Nesse caso, quando não precisamos montar um array com outro array *de retorno, podemos usar o método forEach, que apenas percorre o *array e faz o que lhe é solicitado. Precisamos informar que ele uma função assíncrona, como um async. Faremos isso chamando arquivo.forEach((nomeDeArquivo)), logo abaixo da constante arquivos. Vamos abrir, também, uma arrow function e pedir que o JavaScript exercute a função pegaArquivo.

Faremos isso com a ajuda da constante lista, que será seguida por um await. Porém, precisaremos passar parâmetros para pegaArquivo. Acessando "index.js", vemos que essa função espera receber um caminho que termine em um arquivo Markdown.

Vamos usar crases para abrir um template string. No primeiro placeholder, passaremos ${caminho}. Depois, vamos inserir ${nomeDeArquivo}. Também vamos dar um console.log abaixo da nossa lista e do caminho montado:

````js
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links'), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (nomeDeArquivo) => {
                const lista = pegaArquivo(`${caminho}/${nomeDeArquivo}`)
                console.log(`${caminho}/${nomeDeArquivo}`);
                console.log(lista);
            })
        console.log(arquivos);
    }
}
````

No terminal, vamos executar node src/cli.js arquivo/ novamente. Dessa vez, tudo dará certo: o terminal retornará duasv vezes, exatamente o que havíamos solicitado, trazendo as duas listas de arquivos. Conseguimos, portanto, percorrer um diretório e fazer a função pegaArquivo funcionar para cada um dos arquivos.

No terminal, lemos arquivos//texto copy.md, com duas barras. Não há problema, porque podemos passar arquivos com ou sem barra. A linha de comando consegue resolver isso automaticamente, sem que precisemos intervir.

Vamos voltar a "cli.js" e refatorar nosso código, retirando a responsabilidade de console.log dentro da função processaTexto. Antes dela, criaremos a função imprimeLista, que recebrá o parâmetro resultado. Ela imprimirá o resultado de todo o processamento. Essa função chamará console.log, com os parâmetros chalk.yellow('lista de links') e resultado.

Depois disso, podemos substituir todos os console.log da função processaTexto por imprimeLista(resultado) no if e no else. Vamos chamar imprimeLista(lista) também, além de retirar console.log(arquivos):

````js
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

function imprimeLista(resultado) {
    console.log(chalk.yellow('lista de links'), resultado)
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (nomeDeArquivo) => {
                const lista = pegaArquivo(`${caminho}/${nomeDeArquivo}`)
                imprimeLista(lista);
            })
    }
}
````

Vamos voltar ao terminal e executar node src/cli.js arquivos/ novamente. As listas continuam sendo retornadas. Vamos executar, também, o já clássico teste com texto.md, para ver se tudo está, realmente, funcionando:

````js
node src/cli.js arquivos/texto.md
````

## tratando Novos Erros

Agora a biblioteca já consegue identificar se o que está sendo recebido pelo terminal é um diretório ou um arquivo. Ela também consegue rodar o código correspondente, porém, o que acontece se nos enganamos, por exemplo, na hora de passar o diretório?

No terminal, se ao invés de passarmos node src/cli.js ./arquivos/, passarmos o comando com /arquivo/, teremos um erro como devolutiva do Node.js. O erro, apesar de ter várias informações, como a stack em que o erro estourou, pode não ser muito compreensível para o nosso usuário.

Até que ele encontre o texto "no such file or directory", que explicita a ausência do arquivo ou do diretório, pode ser que ele leve algum tempo. Então vamos melhorar a experiência, adicionando, na função processaTexto, algum código que pegue este eventual erro e trate-o para facilitar a compreensão do usuário.

Como precisamos capturar um erro, após a definição da constante caminho, no início da função, criaremos um bloco try catch, recebendo erro como parâmetro, deixando o bloco de chaves aberto. O try não funciona sozinho, ele age em conjunto com o catch.

Em try, vamos usar novamente o método lstat do fs. O parâmetro será, novamente, caminho. Quando o erro for gerado nesse bloco, ele será tratado em catch

````js
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {

}
````

Se deixarmos o código assim e, no terminal, executarmos node src/cli.js ./arquivo/, continuaremos recebendo o erro como retorno. Erros, porém, como todo objeto, têm propriedades e métodos.

Elas aparecem no terminal, quando o erro é mandado ao terminal. Como o errno, o número do erro, o syscall, que representa a chamada onde o erro foi gerado, code, o código do erro, que nos interessa agora. O código é 'ENOENT', ou seja, ele não tem entidade. Em outras palavras, o que está sendo solicitado não existe.

Vamos pegar esse código e levá-lo para dentro do bloco catch, criando um if. Se o código for este, vamos usar um console.log para passar uma informação mais clara, ao usuário, do que está acontecendo: no caso, a string "arquivo ou diretório não existe":

````js
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe');
}
````
Vamos salvar e executar, no console, o último comando, usando a seta para cima. Agora o terminal exibirá a mensagem que acabamos de inserir. Porém, a stack do objeto erro continua a ser exibida. Como ela agora é desnecessária, vamos adicionar return abaixo do console.log para removê-la:

````js
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe');
            return
}
````
De volta ao terminal, quando executamos o comando, podemos ver que agora só recebemos a mensagem "arquivo ou diretório não existe" como retorno. Vamos fazer o teste, agora, com a versão correta do comando:

````js
node src/cli.js ./arquivos/
````

Nossa lista de links continua sendo exibida. Recebemos duas listas de links, mas as duas são identificadas com o mesmo nome: "lista de links". Como vamos trabalhar com um diretório que pode ter infinitos arquivos* Markdown* dentro dele, precisamos identificar, também, o nome do arquivo que está chegando.

Assim, o usuário saberá a que se referem cada uma das listas de links. Vamos dar uma pausa para observar o código e tentar pensar no que podemos fazer para resolver o problema. No parágrafo abaixo, encontraremos as soluções.

A primeira coisa a fazer, caso imprimeLista precise receber essa informação de algum lugar, é adicionar o parâmetro identificador. Ele receberá o nome do arquivo que está sendo percorrido para gerar a lista de links. Vamos quebrar uma linha dentro de console.log.

Na primeira linha, teremos o comando chalk.yellow, passando a string 'lista de links'. Em seguida, vamos quebrar linha novamente e adicionar a informação chalk.black.bgGreen, para gerar um texto em preto, grifado de verde. Passaremos também o parâmetro identificador, que é o nome do arquivo de chegará por parâmetro.

Na terceira linha, vamos manter resultado:

````js
function imprimeLista(resultado, identificador) {
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
}
````

Agora vamos até a função processaTexto, que executa a função imprimeLista. Ela é executada em dois lugares: em if, quando o caminho é só um arquivo, e em else if, quando o que esta sendo executado é um diretório inteiro. É nesse segundo local que faremos a alteração.

Vamos adicionar, em imprimeLista, o parâmetro nomeDeArquivo. Como se trata de uma string, ela já será exibida no console:

````js
cons lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
imprimeLista(lista, nomeDeArquivo)
````

Voltando a terminal, vamos testar com o comando de arquivos. Nossa alteração funcionou, o nome dos arquivos, no caso "texto copy.md" e "texto.md" aparecem após "lista de links", em fonte preta e grifada de verde.

Agora precisamos resolver a situação de passar um arquivo por vez. Quando fazemos isso, ele é passado como "undefined". Vamos voltar ao arquivo "cli.js", na função imprimeLista. O JavaScript permite que criemos um parâmetro e já o inicializemos com alguma informação.

No caso, vamos iniciar identificador com uma string vazia:

````js
function imprimeLista(resultado, identificador = '') {}
````
De volta ao terminal, vamos passar um arquivo específico com o comando abaixo:

````js
node src/cli.js ./arquivos/texto.md
````

Agora, a lista de links não exibe mais o "undefined". Nesse caso, ela não exibe mais nada.

Quando declaramos a função, com um valor inicial ao parâmetro, no caso identificador e a string vazia, respectivamente, se, na execução da função, que acontece dentro de processaTexto, não passarmos nenhum parâmetro, o JavaScript executa a função assumindo que esse parâmetro tem o valor passado na inicialização.

Ou seja, quando não passamos nenhum parâmetro identificador, como acontece em isFile, ele assume uma string vazia. Em else if, porém, como passamos nomeDoArquivo como parâmetro, o JavaScript substitui o valor de inicialização pelo valor desse string. No caso, cada um dos nomes de arquivo.

## Scripts

Como estamos, neste momento, trabalhando com a linha de comando, vamos usar o arquivo "package.json".

Esse arquivo tem várias configurações e informações sobre nosso projeto. Vamos usá-lo para adicionar scripts, que nada mais são do que uma lista de instruções que enviamos para interpretação.

Podemos criar scripts para automatizar alguns processos do programa e para cumprir algumas instruções. Vamos acessar o arquivo. Iremos até a linha 7, onde lemos "scripts". Por padrão, "package.json" vem com o script "test". Não vamos lidar com ele neste treinamento.

Vamos inserir uma vírgula após o script "test" e, na linha debaixo, vamos criar o script "cli" e passar, entre script, os dois primeiros argumentos do comando que passamos no terminal: node src/cli.js. Esse será o ponto de entrada da aplicação:

````js
"cli": "node .src/cli.js"
````

Agora, podemos voltar ao terminal e passar o comando npm run cli ./arquivos/. Teremos o mesmo resultado, porque passamos para dentro do script a responsabilidade de chamar os dois primeiros argumentos.

No futuro, poderemos modificar o arquivo de saída ou acrescentar outros comandos e funcionalidades, de acordo com o desenvolvimento da nossa biblioteca.

Vamos aumentar um pouco a praticidade, passando o caminho de forma hard coded apenas nesse momento, em que temos o arquivo de testes. Direto no script "cli", vamos passar também .arquivos/texto.md:

````js
"cli": "node .src/cli.js ./arquivos/texto.md"
````

## Adicionando Opções

Vamos trabalhar na última funcionalidade a ser implementada nesse curso: validação de links.

Quem for usar a biblioteca pode trazer sua lista. Porém, se quiser, pode passar um comando a mais na linha de comando para ter a lista validada.

Vamos ver, por partes, como implementar isso.

Primeiro passo é fornecer para a biblioteca uma forma de identificar se é para trazer a lista validada ou não.

O arquivo "cli.js" está responsável por pegar os argumentos que vêm da linha de comando e processar esses argumentos.

Por enquanto, podemos verificar no "package.json" que o script para CLI tem três argumentos: "cli": "node ./src/cli.js .arquivos/texto.md".

No arquivo "package.json", vamos criar logo abaixo da linha de "cli" que citei acima, um script para "cli:valida". No valor dessa propriedade, onde passamos o comando para a CLI, vou adicionar um quarto argumento: --valida.

````js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cli": "node ./src/cli.js ./arquivos/texto.md",
    "cli:valida": "node ./src/cli.js ./arquivos/texto.md --valida"
},
````
Agora temos dois scripts para CLI, um para trazer a lista sem validação e um para trazê-la com validação.

No arquivo "cli.js" podemos ir na função processaTexto(argumentos) e vamos criar uma const valida que receberá o resultado de argumentos no índice 3.

Vamos inserir um console.log(valida) para vermos o que tem nessa variável que acabamos de criar.

````js
async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3];
  console.log(valida);

// cód. omitido
}
````

Agora, no terminal, vamos limpar a interfac e executar o comando npm run cli. Antes da lista de links ele retornou um "undefined", não achou nenhum valor.

Mas se rodarmos o comando npm run cli:valida, antes da lista de links ele retorna uma string "--valida".

Ou seja, quando rodamos o script cli:valida o JavaScript pega, através do process.argv, essa string extra que é o quarto elemento do array que está sendo salvo e utilizado pela função processaTexto.

Agora que já sabemos que ele está trazendo essa string --valida, já conseguimos usá-lo dentro da função e fazer algumas verificações.

Se existir essa string --valida dentro da variável, vamos trabalhar na lógica da validação. Se não existir, tudo continua funcionando da forma que está.

Agora, dentro da pasta "src" vamos criar um arquivo chamado "http-validacao.js". Dentro desse arquivo é onde deixaremos toda a lógica relacionada a pegar lista de links, extrair URL, validar as URLS e retornar o resultado.

Primeiro, dentro de "http-validacao.js" vamos criar uma função listaValidada() e ela deve receber como parâmetro a lista de links, podemos usar a lista de links atual que já está pronta. E, dentro do bloco, vamos passar um return com o texto "entrou na função", um teste só para verificarmos.

Vamos também exportar a função listaValidada() porque essa função vai ser usada pelo "cli.js" porque é nele que está sendo feita essa verificação.

````js
export default function listaValidada (listaDeLinks) {
    return 'entrou na função';
}
````
E lá no arquivo "cli.js" vamos inserir no topo do código um import:

````js
import listaValidada from './http-validacao.js';
````

Ainda no "cli.js", como é a função imprimirLista que está fazendo essa parte de pegar os dados e enviar para o terminal, vamos adicionar na função imprimirLista um parâmetro extra chamado valida.

````js
function imprimeLista(valida, resultado, identificador = '') {
    console.log(
      chalk.yellow('lista de links'),
      chalk.black.bgGreen('identificador'),
      resultado);
  }
````

O console.log() que está sendo executado dentro de imprimeLista continua existindo, mas agora precisamos verificar se a string está sendo recebida. Vamos então criar uma condição if (valida). Também vamos trocar algumas informações, em vez de "lista de links" no primeiro parâmetro do console, vamos passar "lista validada".

O identificador continua existindo porque é nele que passamos os nomes dos arquivos da lista. Mas agora, em vez de resultado, teremos listaValidada recebendo como parâmetro o resultado.

O console.log() anterior vamos colocar dentro de um bloco else, se valida não for um dado válido, ele vai entrar direto no else e continuar exibindo os dados anteriores sem validação nenhuma.

````js
function imprimeLista(valida, resultado, identificador = '') {
   if (valida) {
     console.log(
      chalk.yellow('lista validada'),
      chalk.black.bgGreen('identificador'),
      listaValidada(resultado));

  } else {
    console.log(
      chalk.yellow('lista de links'),
      chalk.black.bgGreen(identificador),
      resultado);
  }
}
````

Já definimos o que acontece dentro da função imprimeLista, mas essa função está sendo chamada em dois lugares dentro de processaTexto. Já que adicionamos um parâmetro extra em imprimeLista, a chamada da função também deve ter esse parâmetro.

Eu vou dar uma refinada e dizer que valida vai guardar o valor de argumentos no índice 3 se for triplo igual (===) à nossa string --valida.

````js
async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === '--valida';
}
````

Dessa forma, valida vai ser sempre ou true ou false.

Agora, na linha 38 e na linha 43 do meu código, onde a função imprimeLista está sendo chamada, vou adicionar o parâmetro valida:

````js
 if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(argumentos[2]);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho)
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
      imprimeLista(valida, lista, nomeDeArquivo)
    })
  }
  ````

Vamos testar no terminal novamente. Executaremos o comando npm run cli. Exibiu a lista de links. E executando npm run cli:valida, ele traz o texto "entrou na função". Ou seja, está correto porque a única coisa que a função listaValidada faz, por enquanto, é retornar essa string.

Por enquanto, está tudo correto. Já podemos entra na função listaValidada e começar a trabalhar na lógica real da validação das URLs.


## Gerando lista de URLS
Para fazer a validação, não precisamos do nome de cada link da lista. Precisamos apenas das URLs. Precisamos acessar cada um dos objetos e extrair o valor das chaves, ignorando o título dos links, pois queremos apenas as URLs.

Vamos até o arquivo "http-validacao.js" e, nele, criaremos uma nova função, para que façamos essa extração, montando uma lista apenas com URL. Será a função extraiLinks, recebendo como parâmetro arrLinks, nosso array de links.

Vamos usar o método de .map do JavaScript, para que consigamos extrair o valor dos objetos, montando um array com nossa nova lista, somente com URLs. Seus parâmetros serão objetoLink, com o retorno Object.values, que serve para que consigamos extrair apenas valores para dentro de um array.

O parâmetro de Object.values será objetoLink. Cada elemento da iteração do .map é um objeto em si. Por isso, ele consegue receber o objeto, passá-lo pelo método Object.values e retornar, dentro de um array, apenas o valor de cada uma deles.

Vamos pedir que listaValidada retorne a função extraiLinks, recebendo como parâmetro listaDeLinks, ao invés de retornar a string 'entrou na função':

````js
function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink))
}

export default function listaValidada (listaDeLinks) {
    return extraiLinks(listaDeLinks);
}
````

De volta ao terminal, chamaremos npm run cli:valida. Agora receberemos lista validada e um* array* com os links. Cada um deles está dentro de um array.

Para que consigamos remover esse array intermediário e fazer com que a lista seja apenas um array com várias strings, vamos concatenar Object.values com o método join(). Ele é responsável por converter o conteúdo de arrays em strings:

````js
function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

export default function listaValidada (listaDeLinks) {
    return extraiLinks(listaDeLinks);
}
````

De volta ao terminal, vamos executar npm run cli:valida novamente. Receberemos, a partir de agora, apenas um array com todas as URLs como strings.

## Validando links

Vamos aprender a validar as URLs. Em outras palavras, verificaremos se os sites estão no ar.

Toda requisição que fazemos, que é o que acontece quando tentamos acessar um link, é feita via protocolo HTTP. Toda requisição tem uma resposta. Essas respostas trazem várias informações: uma delas é o código de status HTTP.

Nós já nos deparamos com um deles muitas vezes na internet: trata-se do código "404 Not Found", que é devolvido pela requisição quando algo não é encontrado.

Se formos no site de artigos da Alura, abrirmos qualquer um dos textos e remover alguma parte da URL, vamos nos deparar com uma página referente ao "404". Isso aconteceu porque tentamos acessar, dentro do domínio Alura, um caminho que não foi resolvido.

Vamos validar nossos links através desses códigos de status das requisições HTTP. O código "200" é o código exibido quando o site está no ar, recebendo a requisição e retornando as informações desejadas.

Para fazer isso, usaremos uma API do Node.js chamada Fetch. Essa lib só funciona, no caso do Node.js, a partir da versão 18.

Obs: Nesse curso, estamos trabalhando com a versão 18 do Node.js. Ela, a partir de Outubro de 2022, vai se tornar a versão de longo prazo. Portanto, confira se está trabalha com essa versão. Vá até o terminal e digite o comando node -v ou node --version. Como retorno, você terá a confirmação da versão instalada.

Vamos copiar o código encontrado na documentação do <a href="https://nodejs.org/en/blog/release/v18.0.0#fetch-experimental">Fetch</a>  e deixá-lo como um comentário no arquivo "http-validacao.js":

````js
const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
````
Precisamos criar uma nova função, para trabalhar com o Fetch, fazer a requisição nos links e, a partir disso, trazer o status code, seja ele 200, 404 ou qualquer que seja.

Criaremos a função checaStatus, que receberá o array *de *URLs construído em extraiLinks. Como estamos trabalhando com uma lista, estamos trabalhando com um array que precisa ser iterado. Por isso, retornaremos listaURLs.map, com o parâmetro (url).

Depois, abriremos uma arrow function e, dentro de map, criaremos a constante response. Nela, guardaremos as informações da resposta da requisição que faremos com o Fetch. Vamos igualar essa constante a await fetch(url).

Fetch é uma função assíncrona. Sempre que usamos um método, precisamos saber o parâmetros recebidos pela função. No exemplo, ele recebe uma string com um endereço.

Também precisamos saber qual o retorno da função. Na documentação do Fetch no MDN, descobrimos que ele tem como retorno um objeto promessa. Por esse motivo, nossa função checaStatus é assíncrona.

Vamos passar response.status como retorno, o que trará o número do nosso status code.

Na função listaValidada vamos juntar as funções extraiLinks e checaStatus para retornar o que precisamos. Vamos apagar o código comentado que trouxemos da documentação.

Em listaValidada, vamos salvar a lista em uma variável, criando a constante links, igualando-a a extraiLinks(listaDeLinks);. Vamos criar, também, a constante status, que será o resultado da função checaStatus, recebendo por parâmetro a lista links.

Vamos adicionar também um console.log(status) e pedir, por fim, o retorno status: 10:38

````js
function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    return listaURLs.map(async (url) => {
        const response = await fetch(url)
        return response.status;
    })
}

export default function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLins);
    const status = checaStatus(links);
    console.log(status);
    return status;
}
````
Agora voltaremos ao console e, lá, rodaremos o comando npm run cli:valida:

````js
npm run cli:valida
````

Teremos alguns retornos no terminal. Primeiro, veremos uma lista de promessas pendentes. Sempre que isso é exibido no lugar de uma lista de objetos que queríamos receber, isso significa que ainda há código assíncrono não identificado no que acabamos de escrever.

Em seguidas, vemos a mensagem de que o Fetch API é uma funcionalidade exerimental. E, depois, localizamos o erro fetch failed, que significa que o *Fetch *falhou em uma das requisições. O erro foi em um link colocado de propósito pela instrutora, no fim do arquivo "texto.md": "gatinho salsicha".

Isso é o que acontece quando há um link que não existe mais na nossa lista. Quando o Fetch não consegue acessar algo, ele devolve um erro, parando a execução do programa a partir do próprio Fetch. Não é um erro que nós definimos que deveria acontecer.

Por isso, vamos precisar tratar esse erro. Antes disso, porém, vamos executar um teste. Vamos dar uma "Ctrl + X" no último link do arquivo "texto.md", que provocou o erro. Vamos apagá-lo de "texto copy.md".

Vamos colar esse link no final do arquivo "http-validacao.js" e transformá-lo em comentário. Vamos voltar ao terminal e executar o último comando novamente.

Veremos que o erro desapareceu. Apesar disso, ainda encontraremos as promessas pendentes. Agora vamos localizar o código assíncrono não identificado em "http-validacao.js".

O problema está na função checaStatus, porque Fetch é uma função que existe para lidar com um recurso por vez. Como passamos para dentro dele, com a ajuda de map, uma lista de recursos, ele não consegue resolvê-la e retornar tudo ao mesmo tempo.

Para resolver isso, usaremos o método do objeto promise, criando, abaixo da função checaStatus, a constante arrStatus. Vamos igualá-la a await Promise.all(). Vamos retirar o return anterior a listaURLs.map e movê-lo por inteiro para dentro do Promise.all.

O método .all é capaz de receber uma lista de promessas pendentes, resolvê-las e retornar a lista para nós. É exatamente isso que queremos.

Vamos retornar o arrStatus antes de voltarmos ao terminal para testar se deu certo:

````js
async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        litaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status
        })
    )
    return arrStatus;
}
````

Vamos executar, novamente, o último comando no terminal. Como resultado, ainda encontraremos uma promessa pendente. Isso aconteceu porque a função listaValidada, que recebe checaStatus, também precisa ser uma função async.

Do contrário, não há nada que diga ao JavaScript que ela precisa aguardar a resolução do código em checaStatus. Vamos adicionar async antes da função listaValidada e await antes de checaStatus(links):

````js
export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLins);
    const status = await checaStatus(links);
    console.log(status);
    return status;
}
````

De volta ao terminal, vamos executar o último comando. Agora teremos como retorno uma lista com 5 repetições do código "200" e uma incidência de "404", sendo este último no links adicionado pela instrutora com o objetivo de provocar o erro propositalmente.

Isso significa que tivemos sucesso em identificar os status codes. Apesar disso, o retorno correto, encontrado após lista validada ainda é uma promessa pendente. Para resolver isso, precisaremos ir até "cli.js".

Lá, vamos adicionar async antes da função imprimeLista e await antes de listaValidada, dentro de console.log:

````js
async function imprimeLista(valida, resultado, identificador = '') {
    if (valida) {
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identificador),
            await listaValidada(resultado));
    }}
````

Agora, executando o teste no terminal novamente, teremos resolvido este problema. Temos uma lista validada com uma lista de links. Vamos apagar o console.log no arquivo "http-validacao.js", porque agora já sabemos que está tudo funcionando:

````js
export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLins);
    const status = await checaStatus(links);
    return status;
}
````

## Montando o Objeto

Agora vamos finalizar a primeira versão da nossa biblioteca juntando todas as informações.

Vamos trabalhar no arquivo "http-validacao.js", dentro da função listaValidada, porque ela é a que está sendo executada na CLI, dentro da função imprimeLista, para retornar a lista pronta com suas validações.

Apagaremos, por enquanto, o retorno. A função assíncrona listaValidada recebe listaDeLinks como parâmetro. Esse nada mais é que o array original, sem validação, com o qual trabalhamos anteriormente.

Vamos pegar, então, esse array de objetos e inserir, nele, os números de HTTP status que encontramos no terminal. Vamos chamar, no terminal, npm run cli. Assim, lembraremos como era o* array* de objetos original.

Queremos adicionar um novo conjunto de chave-valor a ele, com os status codes. Usaremos o método .map em listaDeLinks, com os parâmetros objeto e indice, que guardará os índices do array percorrido em cada iteração.

Abriremos uma arrow function e usaremos spread para espalhar as propriedades originais do objeto original no novo objeto. Vamos adicionar a nova propriedade, status, com o valor numérico referente ao HTTP status code de cada objeto.

Na constante status, usaremos indice:

````js
export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}
````

Agora vamos ao terminal para executar um teste, rodando o comando npm run cli:valida:

````js
npm run cli:valida
````

O resultado que esperávamos será perfeitamente exibido no console depois disso. Adicionamos a propriedade status, com o valor dos índices do array de status codes, a cada objeto do array original.

Obs: Um array é uma lista ordenada. A não ser que solicitemos explicitamente que o JavaScript modifique sua ordem, sempre teremos os dados na mesma ordem. O status code do índice zero do array original será sempre o primeiro elemento da lista de validações.

Agora vamos voltar ao endereço criado de propósito pela instrutora para ocasionar um erro do Fetch na aula anterior, "gatinho salsicha", que deixamos como comentário em "http-validacao.js".

Daremos um "Ctrl + X" nele e, na sequência, voltaremos ao arquivo "texto.md" e o colaremos lá novamente, no fim do arquivo. Vamos executar um novo teste, voltando a terminal e rodando o comando anterior.

Quando rodamos o valida, percebemos que o Fetch voltou a dar erro, porque o link não existe. Por isso, Fetch não consegue resolvê-lo. É hora da tratarmos esse erro.

De volta a "http-validacao.js", criaremos a função manejaErros, antes da função listaValidada. Seu parâmetro será o objeto erro, que já temos trabalhado. Por enquanto, vamos exibir um console.log com um texto em vermelho.

Faremos isso chamando chalk.red com a string 'algo deu errado'. Passaremos o objeto erro como parâmetro:

````js
function manejaErros (erro) {
    console.log(chalk.red('algo deu errado'), erro)
}
````

Vamos chamar a função manejaErro dentro de checaStatus, porque é dentro dessa função que o Fetch está sendo executado. Dentro do .map, vamos adicionar um bloco try catch. A constante response, seu valor e seu retorno serão levados para dentro do try.

Já catch receberá o return manejaErros, com erro como parâmetro:

````js
async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejaErros(erro);
            }
        })
    )
    return arrStatus;
}}
````
De volta ao terminal, vamos executar o último comando novamente. Agora a função está sendo chamada, porque o console exibiu a mensagem "algo deu errado", que acabamos de passar com chalk.

Não podemos, porém, jogar apenas essa mensagem e a falha do Fetch para o usuário, porque esse não é um erro do usuário. Ele não é responsável pelo link que está fora do ar.

Por isso, precisamos passar uma resposta, em manejaErros, que realmente ajude o usuário a entender o que está acontecendo.

Vamos refatorar, portanto, a função manejaErros. Dentro dela, aproveitaremos o código do erro, 'ENOTFOUND', para falar que, quando esse código aparecer, significa que houve erro no Fetch. A URL, portanto, não foi resolvida.

Se observarmos o objeto erro que está sendo retornado no Fetch, veremos que ele tem uma propriedade chamada cause. Dentro dela, há outro objeto com o syscall, o número do erro e o código.

Vamos passar um if na função manejaErros, com erro.cause.code. Passaremos também o código de erro que queremos confirmar, ENOTFOUND'. Vamos dar um return com a string 'link não encontrado'.

Em else, vamos inserir outro return, com a string 'ocorreu algum erro'. Retornaremos apenas uma string porque podemos passá-la para dentro do nosso objeto:

````js
function manejaErros (erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}
````

Vamos para o terminal e, lá, executaremos o último comando novamente. Como resultado, temos o retorno correto do nosso array de objetos e seus status, exceto no último link, "[gatinho salsicha]". Nele, encontramos o status 'link não encontrado'.

Diferente de 404, que é um erro que acontece o servidor existe, mas o link não, um endereço que não existe não tem status code. Esse é o caso do último link, que recebe a string como a propriedade status.

A string 'link nao encontrado' saiu de manejaErros e foi até o objeto porque foi justamente isso que passamos na função checaStatus. O bloco try catch está dentro de .map e manejaErros, que está dentro dele, retorna uma string.

É possível, ainda, pensarmos em outros casos de validação e extrair as funções de manejo de erro e validação para outros arquivos, se esta for a nossa vontade.

Podemos continuar desenvolvendo a biblioteca da maneira que preferirmos.