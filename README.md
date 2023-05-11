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