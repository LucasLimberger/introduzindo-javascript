import { Paragraph, Heading, CodeBlock, InputToOutput, Question, } from "./PageFragment.js";
const inicio = [
    {
        subtitle: "Javascript",
        contents: [
            new Paragraph("JavaScript é uma linguagem de programação que foi criada inicialmente para utilização em websites, mas hoje em dia aparece em diversos outros lugares.\
                A linguagem foi criada em 1995, mas foi atualizada ao longo dos anos."),
            new Paragraph("Em comparação com outras linguagens de programação, JavaScript é uma das mais fáceis de aprender, tornando-a uma boa primeira escolha."),
            new Paragraph("Essa é uma introdução ao utilizamento da forma moderna dela."),
        ],
    },
    {
        subtitle: "Estrutura básica",
        contents: [
            new Paragraph("Para começar, vou introduzir esse pedaço de código:"),
            new CodeBlock("console.log(1234)"),
            new Paragraph("Essas palavras no começo, <code>console.log</code>, vão aparecer diversas vezes por aqui."),
            new Paragraph('Você usa isso quando quiser mostar algo na tela. Mais especificamente, mostrar num tal de "console".\
                Você escolhe o que quer que apareça entre os parênteses.'),
            new Paragraph("Aqui, essa vai ser a única função do console, e ele vai ser representado assim: com o código na esquerda e o resultado na direita:"),
            new CodeBlock("console.log(1234)", "1234"),
            new Paragraph("Números não são a única opção para escolher. Podemos usar texto também, por exemplo. Use a caixa de texto para escolher uma palavra, ou mais de uma:"),
            new InputToOutput('console.log("@")', "text", v => v),
            new Paragraph("Lembrando que o código na esquerda gera o resultado na direita."),
            new Paragraph('Você pode ter percebido que eu coloquei aspas no exemplo anterior, as aspas são usadas no começo e fim de pedaços de texto.\
                O console mostra as aspas também, diferente dos números que mostrou anteriormente.\
                Um valor de texto é chamado pelo nome inglês <b><i>"string"</i></b>. Nos códigos daqui eles vão aparecer em laranja.'),
            new Paragraph("São usadas linhas diferentes para cada instrução."),
            new CodeBlock('console.log("girafa")\nconsole.log(-5)', '"girafa"\n-5'),
            new Heading("Comentários"),
            new Paragraph("Duas barras <code>//</code> representam o começo de um comentário, que faz o resto da linha ser ignorada completamente na hora de execução.\
                Comentários vão ficar em cinza."),
            new CodeBlock("//Este é um comentário, fino senhor 🗿🍷\n"),
        ],
    },
    {
        subtitle: "Variáveis",
        contents: [
            new Paragraph("Variáveis são o conceito básico mais importante. Elas funcionam como caixas de informações, você armazena alguma coisa nela e pode retirar o que tem dentro depois."),
            new Paragraph("Para criar uma variável você usa a palavra especial <code>let</code> e precisa dar um nome para ela:"),
            new CodeBlock("let nome"),
            new Paragraph('Fazer isso recebe o nome de <b>"declarar"</b> uma variável.\
                É importante notar que esse nome não pode conter espaços. Se você quiser mais de uma palavra no nome, em vez de espaços é comum juntarAsPalavrasDesseJeito.'),
            new CodeBlock("let nomeMaisLongo"),
            new Paragraph("Para fazer a variável útil é preciso dar um valor para ela.\
                Esse valor pode ser por exemplo um número, uma letra, uma palavra, uma frase, o dicionário todo..."),
            new CodeBlock("let numero = 15\nlet fantasmasAtrasDeVoce = 1\nlet contaBancaria = -10.45\n//Também não é recomendado usar acentos no nome"),
            new Paragraph("Usa-se um ponto em vez de uma vírgula para números quebrados."),
            new Paragraph("Quando você quiser colocar uma <i>string</i> numa variável, novamente, precisa usar aspas."),
            new CodeBlock('let professor = "Girafales"\nlet frase = "Você vem sempre aqui?"'),
            new Paragraph("O símbolo de igual aqui pode parecer meio estranho, ele só representa a ação de colocar um valor numa variável, na esquerda do igual fica o nome dela e na direita o valor.\
                Depois de criar uma, pode mudar o valor dela de acordo com a segunda linha de código abaixo:"),
            new CodeBlock('let saudacao = "Bom dia, boa tarde, boa noite."\nsaudacao = "Saudações, terráqueos! Eu venho em paz."'),
            new Paragraph("Como a função do <code>let</code> é só declarar (criar) variáveis, não reapareceu na segunda linha."),
            new Paragraph("No lugar de <code>let</code>, você também pode usar <code>const</code>.\
                A diferença é que uma variável criada com <code>const</code> não pode ser alterada mais."),
            new CodeBlock("const sentidoDaVida = 42"),
            new Paragraph("Para ver o valor da variável, o <code>console.log()</code> de antes voltou."),
            new InputToOutput("let importante = @\nconsole.log(importante)", "number", v => Number(v)),
            new Paragraph("No lugar do número ou palavra de antes você coloca o nome da variável. \
                Não só nesse caso, mas <b>em qualquer lugar que você pode usar um número, você também pode usar uma variável de número</b>.\
                O mesmo vale para outros tipos de variável."),
        ],
    },
    {
        subtitle: "Operações matemáticas",
        contents: [
            new Paragraph("Em código, existem as operações matemáticas básicas."),
            new CodeBlock("console.log(2 + 2)\nconsole.log(18 - 5)", "4\n13"),
            new Paragraph("O resultado das operações pode ser colocado numa variável:"),
            new CodeBlock("let resultado = 6 * 4\nconsole.log(resultado)", "24"),
            new Paragraph("Ou pode ser obtido de uma variável:"),
            new CodeBlock("let valorInicial = 38\nconsole.log(valorInicial / 2)", "19"),
            new Paragraph("Ou os dois:"),
            new CodeBlock("let numero = 68\nnumero = numero + 1\nconsole.log(numero)", "69"),
            new Paragraph("Esse <code>numero = numero + 1</code> no meio do código acima é uma ideia importante e vai voltar no futuro.\
                Ele aumenta a variável em 1, o processo é assim:"),
            new Paragraph("<code>numero = numero + 1</code>"),
            new Paragraph("<code>numero = 68 + 1</code>"),
            new Paragraph("<code>numero = 69</code>"),
            new Paragraph("Similarmente, algo como <code>numero = numero * 2</code> dobra o valor."),
            new Paragraph("Qualquer lugar que aceita um número também aceita uma operação matemática.\
                Expressões com mais de uma operação também são possíveis.\
                Elas usam a mesma ordem do que a matemática: multiplicação e divisão acontecem primeiro, depois soma e subtração."),
            new CodeBlock("console.log(1 + 3 * 3)", "10"),
            new CodeBlock("console.log((1 + 3) * 3) //parênteses também afetam a ordem", "12"),
            new Paragraph("Por último, o símbolo de mais também combina <i>strings</i>:"),
            new CodeBlock('console.log("o" + "i")', '"oi"'),
            new Paragraph("Dê uma olhada no código a seguir:"),
            new CodeBlock('let frase = "Olá,"\nfrase = frase + "Mundo"\nfrase + "!"\nconsole.log(frase)'),
            new Paragraph("O que vai aparecer no console quando for executado?"),
            new Question([
                '<code>"Olá, Mundo!"</code>',
                '<code>"Olá,Mundo!"</code>',
                '<code>"Olá, Mundo"</code>',
                '<code>"Olá,Mundo"</code>',
            ], 3, "Espaços <b>não</b> são inseridos automaticamente entre palavras.\
                A terceira linha de código não faz nada pois é preciso um sinal de igual para alterar a variável."),
        ],
    },
];
const listas = [
    {
        subtitle: "Criando uma lista",
        contents: [
            new Paragraph('Listas são uma maneira de agregar informações. Uma lista também pode ser chamada de "vetor",\
                ou por seu nome em inglês, <i>"Array"</i>. Uma lista é criada com [colchetes] e vírgulas:'),
            new CodeBlock('let minhaListaDeCompras = ["pão", "leite", "arroz", "queijo", "5 litros de ácido sulfúrico"]'),
            new Paragraph("Uma lista pode conter qualquer coisa que uma variável pode."),
            new CodeBlock('let numeros = [0, 1, 2, 3, 4, 5]\n//e pode misturar coisas, mas isso não é tão comum\nlet listaMisturada = [6.5, "alface", -10]'),
            new Paragraph("Pode conter a mesma coisa mais de uma vez:"),
            new CodeBlock('let listaDeComprasMelhor = ["pão", "leite", "arroz", "leite", "queijo", "leite", "leite"]'),
            new Paragraph("Pode ainda não conter nada:"),
            new CodeBlock("let politicosHonestos = []"),
            new Paragraph("Para saber quantas coisas estão numa lista usamos <code>.length</code>:"),
            new CodeBlock("console.log(listaDeComprasMelhor.length)\nconsole.log(listaDeComprasMelhor)", '7\n["pão", "leite", "arroz", "leite", "queijo", "leite", "leite"]'),
            new Paragraph("A palavra <i><b>length</b></i> é inglês para comprimento. Ela também funciona para descobrir o tamanho de uma <i>string</i>."),
            new CodeBlock('console.log("abcdefghijklmnopqrstuvwxyz".length)', "26"),
            new CodeBlock('console.log("".length)', "0"),
            new Paragraph('Do mesmo jeito que listas podem ser vazias, <code>""</code> é uma string vazia.\
                Listas e strings vazias têm um comprimento/tamanho de 0.'),
        ],
    },
    {
        subtitle: "Acesso",
        contents: [
            new Paragraph("Para acessar itens individuais de uma lista você usa os colchetes de novo, e coloca dentro a posição.\
                Cada posição é um número diferente, <b>começando do 0</b>! O número da posição é chamado de <b>índice</b>."),
            new CodeBlock("let numeros = [2, 4, 8, 16]"),
            new CodeBlock("console.log(numeros[0])\nconsole.log(numeros[2])", "[2, 4, 8, 16]\n2\n8"),
            new Paragraph("O mesmo truque funciona para extrair caracterers individuais de uma string.\
                Espaços são caracteres também. Novamente a primeira letra fica na posição 0."),
            new InputToOutput('let frase = "Calma, tudo passa. Nem que seja por cima de você."\nconsole.log(frase[@])', "number", input => "Calma, tudo passa. Nem que seja por cima de você."[Number(input)]),
            new Paragraph('Enquanto escolhia um número, você pode ter se deparado com o resultado <code>undefined</code>.\
                Ele significa <b>"indefinido"</b>, e aparece se escolher um número muito grande, ou um número negativo, ou um número não inteiro,\
                pois esses números não são posições válidas.'),
            new Paragraph("Onde encaixa um número encaixa uma variável de número:"),
            new CodeBlock("let lista = [55, 44, 33, 22, 11]\nlet indice = 1\nconsole.log(frase[indice])\nconsole.log(frase[2 + 2]) //e uma operação também", "44\n11"),
            new Paragraph("Qual o resultado do código abaixo?"),
            new CodeBlock('let string = "98765-4321"\nconsole.log(string[string.length - 1])'),
            new Question([
                "<code>undefined</code>",
                '<code>"1"</code>',
                '<code>"2"</code>',
                '<code>"9"</code>',
            ], 1, "O tamanho da string é 10, então o resultado é o mesmo que <code>string[10 - 1]</code>.\
                Começando do 0, o caractere na posição 9 é o último.\
                As aspas ainda aparecem no console porque o 1 é parte de uma string, então tem a função de caractere."),
        ],
    },
    {
        subtitle: ".at()",
        contents: [
            new Paragraph("O código anterior sempre resulta no último caractere de uma string, ou no último item de uma lista."),
            new InputToOutput('let string = "@"\nconsole.log(string[string.length - 1])', "text", v => v.at(-1)),
            new Paragraph("É comum fazer este tipo de coisa, mas existe um jeito mais simples:"),
            new CodeBlock("let ultimo = [4, 0, 0, 2, 8, 9, 2, 2].at(-1)\nconsole.log(ultimo)", "2"),
            new Paragraph("<code>.at()</code> acessa elementos da lista assim como o <code>[]</code>.\
                Funcionam iguais com números positivos, mas além disso, <code>.at()</code> permite usar números negativos para buscar itens no final.\
                -1 é o último item, -2 é o penúltimo, -3 é o antepenúltimo..."),
            new InputToOutput('let frase = "Calma, tudo passa. Nem que seja por cima de você."\nconsole.log(frase.at(@))', "number", v => "Calma, tudo passa. Nem que seja por cima de você.".at(Number(v))),
        ],
    },
    {
        subtitle: "Modificação",
        contents: [
            new Paragraph("Para alterar listas depois que elas forem criadas, temos uma variedade de opções."),
            new Paragraph("Primeiramente, além de acessar, colchetes são usados para substituir itens em listas."),
            new CodeBlock('let lista = ["a", "b", "c", "d"]\nlista[0] = "e"\nconsole.log(lista)', '["e", "b", "c", "d"]'),
            new Paragraph("Listas podem ser aumentadas com as operações <code>.push()</code> e <code>.unshift()</code>:"),
            new CodeBlock("let lista = [2, 4, 8, 16, 32]\nlista.push(16 * 2) //adiciona ao final\nlista.unshift(1) //adiciona ao começo\nconsole.log(lista)", "[1, 2, 4, 8, 16, 32]"),
            new Paragraph("Dessa vez o símbolo de igual não é usado."),
            new Paragraph("Também é possível adicionar mais de um item por vez com essas operações:"),
            new CodeBlock('let animais = ["girafa", "bicho-preguiça"]\nanimais.push("diabo da tasmânia", "axolote")\n' +
                'animais.unshift("ornitorrinco", "peixe-bolha", "capivara")\nconsole.log(animais)', '["ornitorrinco", "peixe-bolha", "capivara", "girafa", "bicho-preguiça", "diabo da tasmânia", "axolote"]'),
            new Paragraph("Para remover itens de uma listam, existem <code>.pop()</code> e <code>.shift()</code>.\
                O item removido acaba sendo o resultado, isso quer dizer que a operação pode ser usada no lugar de outros valores:"),
            new CodeBlock("let lista = [1, 1, 2, 3, 5, 8, 13]\nlet ultimo = lista.pop() //remove do final\nlet primeiro = lista.shift() //remove do começo\n" +
                "console.log(lista)\nconsole.log(ultimo)\nconsole.log(primeiro)", "[1, 2, 3, 5, 8]\n13\n1"),
        ],
    },
];
const tiposConversoes = [
    {
        subtitle: "Condições",
        contents: [
            new Paragraph("Por enquanto todo o código aqui foi executado.\
                Mas às vezes você precisa que um pedaço do código só aconteça às vezes. Introduzindo, <code>if</code>:"),
            new CodeBlock('if (10 > 5) {\n\tconsole.log("Executei!")\n}', '"Executei!"'),
            new CodeBlock('if (10 < 5) {\n\tconsole.log("Executei!")\n}', ""),
            new Paragraph('O segundo não era para fazer nada mesmo. A palavra <code>if</code> significa "se", em inglês, e usando ela podemos definir código que só é executado às vezes.\
                O primeiro bloco executa porque <code>10 > 5</code> é verdadeiro. O símbolo <code>></code> é chamado de "maior do que".\
                O resultado dele é verdadeiro <b>se</b> o primeiro número é <b>maior do que</b> o segundo.'),
            new CodeBlock("console.log(10 > 5) //true significa verdadeiro\nconsole.log(0 > 1) //false significa falso", "true\nfalse"),
            new Paragraph('O símbolo <code><</code> é o oposto, ele se chama "menor do que".'),
            new CodeBlock("console.log(10 < 5) //10 não é menor do que 5\nconsole.log(0 < 1) //0 é menor do que 1", "false\ntrue"),
            new Paragraph("Para checar se os números são iguais, usa-se o símbolo <code>===</code>. Cuide para não confundir com o <code>=</code> que só define variáveis.\
                Já o símbolo <code>!==</code> é o oposto, checa se os números são diferentes."),
            new CodeBlock("console.log(3 === 3)\nconsole.log(3 !== 3)", "true\nfalse"),
            new Paragraph("Há variações dos símbolos <code>></code> e <code><</code> que também permitem que os números sejam iguais:"),
            new CodeBlock("console.log(5 >= 4) //maior ou igual\nconsole.log(4 >= 4)", "true\ntrue"),
            new CodeBlock("console.log(-3 <= -3) //menor ou igual\nconsole.log(5 <= -3)", "true\nfalse"),
            new Paragraph("<code>===</code> e <code>!==</code> também funcionam com strings:"),
            new CodeBlock('console.log("biscoito" === "bolacha")\nconsole.log("🍪" === "🍪")', "false\ntrue"),
            new Paragraph("O <code>if</code> usa {chaves} para definir um <b>bloco de código</b>.\
                O espaço em branco no começo das linhas deixa mais fácil de ver que parte do código está dentro do bloco."),
            new InputToOutput('let numero = @\nif (numero >= 0) {\n\tconsole.log("positivo ou zero")\n} else {\n\tconsole.log("negativo")\n}', "number", v => (Number(v) >= 0 ? "positivo ou zero" : "negativo")),
            new Paragraph("Já esse <code>else</code> é uma adição opcional. O bloco de código dele executa quando o <code>if</code> falhar.\
                Volte aos primeiros exemplos da página pra garantir que entendeu o que aconteceu."),
            new Paragraph("E finalmente, <code>true</code> e <code>false</code> podem ser usados como valores de variável:"),
            new CodeBlock('const verdadeiro = true\nif (verdadeiro) {\n\tconsole.log("sim")\n}', '"sim"'),
        ],
    },
    {
        subtitle: "Números e strings",
        contents: [
            new Paragraph("Todo valor possui um tipo associado a ele. Você já viu números, strings, listas."),
            new Paragraph("Há uma distinção importante entre números e strings."),
            new CodeBlock('const um = 1 //número\nconst uno = "1" //string'),
            new Paragraph('Anteriormente, houve um caso em que acessar um caractere de uma string resultou em um número armazenado como string.\
                Esse exemplo é parecido, o <code>"1"</code> é uma string por causa das aspas.\
                Os dois valores acima não são idênticos.'),
            new CodeBlock('console.log(1 === "1")', "false"),
            new Paragraph("Tentar fazer somas usando strings assim causa problemas:"),
            new CodeBlock('console.log("4" + 2 + 0)', '"420"'),
            new Paragraph('Em vez de somar os números, a funcionalidade de juntar strings do <code>+</code> que ocorreu.\
                Nesse processo, o <code>2</code> e o <code>0</code> foram convertidos em strings implicitamente.\
                Para consertar isso, convertemos o <code>"4"</code> para número assim:'),
            new CodeBlock('console.log(Number("4") + 2 + 0)', "6"),
            new Paragraph("De forma mais geral, <code>Number()</code> converte para número, <code>String()</code> para string."),
            new CodeBlock('console.log(String(13))\nconsole.log(String(true))\nconsole.log(String("Chinforinfola"))\nconsole.log(Number("-1.50"))', '"13"\n"true"\n"Chinforinfola"\n-1.5'),
            new InputToOutput('console.log(Number("@"))', "text", v => Number(v)),
            new Paragraph("Tentou colocar algo que não seja um número no campo de texto? <b>⬆</b>"),
            new Paragraph('O resultado acaba sendo um tal de <code>NaN</code>.\
                <code>NaN</code> é um acrônimo para <i>"Not a Number"</i>, que significa "não é um número", em inglês.\
                Até porque "abacaxi" não é um número.'),
            new CodeBlock('console.log(Number("1️⃣")) //1️⃣ também não é número\nconsole.log(Number("")) //Mas aparentemente nada é', "NaN\n0"),
        ],
    },
    {
        subtitle: "Mais tipos",
        contents: [
            new Paragraph("Para descobrir o tipo de um valor usa-se o <code>typeof</code>."),
            new CodeBlock('console.log(typeof "3.14")\nconsole.log(typeof Number("3.14"))', '"string"\n"number"'),
            new Paragraph("Além de números e strings, você viu também verdadeiro e falso, esses são do tipo <i>boolean</i>."),
            new CodeBlock("console.log(typeof true)\nconsole.log(typeof false)", '"boolean"\n"boolean"'),
            new Paragraph("Listas resultam no tipo de <i>objeto</i>."),
            new CodeBlock("console.log(typeof [])", '"object"'),
            new Paragraph("O tipo de objeto é algo mais abrangente do que só lista.\
                Apesar de aparecer aqui, falar que são listas ainda é mais específico e adequado.\
                O nome real é <i>Array</i>, como mencionado antes."),
            new Paragraph("Já <code>undefined</code> é o seu próprio tipo:"),
            new CodeBlock("console.log(typeof undefined)", '"undefined"'),
            new Paragraph("E apesar de <code>NaN</code> não ser um número, ele é um número."),
            new CodeBlock("console.log(typeof NaN)", '"number"'),
            new Paragraph("🙃"),
        ],
    },
];
const repeticoes = [
    {
        subtitle: "De novo!",
        contents: [
            new Paragraph("Digamos que você tem uma lista de preços e quer descobrir o total dela. Como faria?"),
            new CodeBlock("let precos = [24.99, 9.99, 11.99, 69.90]"),
            new Paragraph("Talvez assim:"),
            new CodeBlock("console.log(precos[0] + precos[1] + precos[2] + precos[3])", "116.87"),
            new Paragraph("Funcionou. Mas o que acontece se vc decidir que quer comprar mais alguma coisa?"),
            new CodeBlock("precos.push(8.50)\nconsole.log(precos)\nconsole.log(precos[0] + precos[1] + precos[2] + precos[3])", "[24.99, 9.99, 11.99, 69.90, 8.50]\n116.87"),
            new Paragraph("Agora tem uma coisa a mais na lista, mas o resultado foi o mesmo. :("),
            new Paragraph("É claro que dá para adaptar o código:"),
            new CodeBlock("console.log(precos[0] + precos[1] + precos[2] + precos[3] + precos[4])", "125.37"),
            new Paragraph("Porém seria mais conveniente se existisse um pedaço de código que funcionasse sempre."),
            new CodeBlock("//continuando com a lista de preços anterior\nlet total = 0\nfor (const valor of precos) {\n\ttotal = total + valor\n}\nconsole.log(total)", "125.37"),
            new Paragraph("Olha só, tem mesmo! Até parece que eu sabia que ele existia esse tempo todo."),
            new Paragraph("Eu sei, tem muita coisa acontecendo aí. A parte essencial é essa:"),
            new CodeBlock("for (const valor of precos) {\n\n}"),
            new Paragraph("<code>for</code> e <code>of</code> são mais 2 palavras especiais.\
                Usando esse código, qualquer instrução entre as {chaves} (ou seja, no bloco de código) é repetida uma vez por item na lista."),
            new CodeBlock('let letras = ["a", "b", "c"]\nfor (const valor of letras) {\n\t//3 vezes\n\tconsole.log("De novo!")\n}', '"De novo!"\n"De novo!"\n"De novo!"'),
            new Paragraph("Esse <code>const valor</code> é algo que você já viu: esse código cria uma variável chamada valor.\
                Cada vez que o código interior executa, a variável criada contém um item da lista, em ordem. Você pode escolher o nome dela."),
            new CodeBlock("let sequencia = [0, 1, 2, 3]\nfor (const numero of sequencia) {\n\tconsole.log(numero)\n}", "0\n1\n2\n3"),
            new Paragraph("Você também já viu que <code>total = total + valor</code> soma o valor à variável total.\
                Como esse pedaço do código está entre as chaves, ele executa com a lista toda, somando toda a lista no total.\
                Veja uma versão um pouco diferente que mostra o total sendo calculado:"),
            new CodeBlock("//lembrando que a lista de preços é [24.99, 9.99, 11.99, 69.90, 8.50]\nlet total = 0\nfor (const valor of precos) {\n\ttotal = total + valor\n\tconsole.log(total)\n}", "24.99\n34.98\n46.97\n116.87\n125.37"),
            new Paragraph("E então, qual valor esse código mostra na tela?"),
            new CodeBlock("let resultado = 100\nfor (const v of [40, 10, 10]) {\n\tresultado = resultado - v\n}\nconsole.log(resultado)"),
            new Question(["20", "30", "40", "60"], 2, "O resultado começa em 100 e é reduzido por cada item na lista, ou seja, <code>100 - 40 - 10 - 10</code>."),
        ],
    },
    {
        subtitle: "De novo! (de novo)",
        contents: [
            new Paragraph("Às vezes você quer fazer um pedaço do código eexecutar múltiplas vezes, mas sem nenhuma associação à uma lista.\
                Um jeito de fazer isso é usando a palavra-chave <code>while</code>."),
            new InputToOutput('let string = "@"\nwhile (string.length < 20) {\n\tstring = string + "-"\n}\nconsole.log(string)', "text", v => (v.length >= 20 ? v : v + "-".repeat(20 - v.length))),
            new Paragraph("É parecido com o <code>if</code> no sentido que o bloco de código é executado quando a condição for verdadeira.\
                Mas dessa vez, ele continua sendo executado até que a condição não seja mais verdadeira.\
                No caso anterior, hífens foram adicionados ao final da string até que ela chegasse à 20 caracteres."),
            new Paragraph("Cada execução do bloco de código interno é chamada de uma <b>iteração</b>.\
                A condição só é checada no começo de cada iteração, incluindo no começo:"),
            new CodeBlock('while (1 > 2) {\n\tconsole.log("Nunca executa")\n}', ""),
            new Paragraph("Só cuide para não criar um loop infinito, esse código vai fazer o que estiver executando ele travar:"),
            new CodeBlock('while (true) {\n\tconsole.log("Eu sou eterno. Quando eu começar, fuja, porque eu não paro mais.")\n}'),
            new Paragraph("Tanto o <code>for of</code> quanto o <code>while</code> são chamados de <b>estruturas de repetição</b>.\
                Existe mais uma delas..."),
        ],
    },
    {
        subtitle: "De novo! (de novo) (de novo)",
        contents: [
            new CodeBlock("let repeticoes = 5\nfor (let i = 0; i < repeticoes; i++) {\n\tconsole.log(i)\n}", "0\n1\n2\n3\n4"),
            new Paragraph("Essa estrutura de repetição é chamada só de <code>for</code>.\
                O nome de variável <code>i</code> é bem comum nesse cenário mas também pode ser alterado."),
            new Paragraph("<code>let i = 0</code> é executado uma vez antes de todo o resto, ciando a variável <code>i</code> que começa em 0."),
            new Paragraph("<code>i++</code> é a mesma coisa do que <code>i = i + 1</code>, acontece no final de cada iteração.\
                O resultado é que <code>i</code> vai subindo de 1 em 1."),
            new Paragraph("<code>i < repetições</code> funciona exatamente como no <code>while</code>:\
                a condição é checada no começo de cada iteração e quando for falsa, o código vai parar de reexecutar.\
                Nesse caso parou logo quando <code>i</code> chegou a 5, pois <code>5 < 5</code> é falso, de forma que <code>i</code> nunca teve o valor 5 dentro do bloco de código."),
            new Paragraph("O <code>while</code> consegue fazer as mesmas coisas do que o <code>for</code>, porém o código fica mais diseperso.\
                E como o <code>while</code> é mais genérico, usar <code>for</code> transmite melhor a ideia do código."),
            new Paragraph("Este aqui é equivalente ao do começo da página:"),
            new CodeBlock("let repeticoes = 5\nlet i = 0\nwhile(i < repeticoes) {\n\tconsole.log(i)\n\ti++\n}", "0\n1\n2\n3\n4"),
            new Paragraph("Em relação ao <code>for of</code>, o <code>for</code> é mais difícil de usar, mas oferece mais liberdade. Permite modificar o valor inicial:"),
            new CodeBlock("for (let i = 6; i < 9; i++) {\n\tconsole.log(i)\n}", "6\n7\n8"),
            new Paragraph("Ainda pode ser usada com uma lista:"),
            new CodeBlock('let emojis = ["😐", "🥶", "😡", "😱"]\nfor (let indice = 0; indice < emojis.length; indice++) {\n\tconsole.log(emojis[indice])\n}', '"😐"\n"🥶"\n"😡"\n"😱"'),
            new Paragraph("E diferente de um <code>for of</code>, pode alterar uma lista:"),
            new CodeBlock("let sequencia = [1, 2, 3, 4]\nfor (let i = 0; i < sequencia.length; i++) {\n\tsequencia[i] = false\n}\nconsole.log(sequencia)", "[false, false, false, false]"),
        ],
    },
];
//divisão em tópicos
const data = [
    { title: "Início", pages: inicio },
    { title: "Listas", pages: listas },
    { title: "Tipos e conversões", pages: tiposConversoes },
    { title: "Repetições e condições", pages: repeticoes },
];
const appName = "Introduzindo JavaScript";
export { data as default, appName };
