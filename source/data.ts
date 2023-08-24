import {
    PageFragment,
    Paragraph,
    Heading,
    Img,
    CodeBlock,
    InputToOutput,
    Question,
} from "./PageFragment.js";

interface Page {
    subtitle: string;
    contents: PageFragment[];
}
interface Topic {
    title: string;
    pages: Page[];
}

const inicio: Page[] = [
    {
        subtitle: "Javascript",
        contents: [
            new Paragraph(
                "JavaScript é uma linguagem de programação que foi criada inicialmente para utilização em websites, mas hoje em dia aparece em diversos outros lugares.\
                A linguagem foi criada em 1995, mas foi atualizada ao longo dos anos."
            ),
            new Paragraph(
                "Em comparação com outras linguagens de programação, JavaScript é uma das mais fáceis de aprender, tornando-a uma boa primeira escolha."
            ),
            new Paragraph("Essa é uma introdução ao utilizamento da forma moderna dela."),
        ],
    },
    {
        subtitle: "Estrutura básica",
        contents: [
            new Paragraph("Para começar, vou introduzir esse pedaço de código:"),
            new CodeBlock("console.log(1234)"),
            new Paragraph(
                "Essas palavras no começo, <code>console.log</code>, vão aparecer diversas vezes por aqui."
            ),
            new Paragraph(
                'Você usa isso quando quiser mostar algo na tela. Mais especificamente, mostrar num tal de "console".\
                Você escolhe o que quer que apareça entre os parênteses.'
            ),
            new Paragraph(
                "Aqui, essa vai ser a única função do console, e ele vai ser representado assim: com o código na esquerda e o resultado na direita:"
            ),
            new CodeBlock("console.log(1234)", "1234"),
            new Paragraph(
                "Números não são a única opção para escolher. Podemos usar texto também, por exemplo. Use a caixa de texto para escolher uma palavra, ou mais de uma:"
            ),
            new InputToOutput('console.log("@")', "text", v => v),
            new Paragraph("Lembrando que o código na esquerda gera o resultado na direita."),
            new Paragraph(
                'Você pode ter percebido que eu coloquei aspas no exemplo anterior, as aspas são usadas no começo e fim de pedaços de texto.\
                O console mostra as aspas também, diferente dos números que mostrou anteriormente.\
                Um valor de texto é chamado pelo nome inglês <i>"string"</i>. Nos códigos daqui eles vão aparecer em laranja.'
            ),
            new Paragraph("São usadas linhas diferentes para cada instrução."),
            new CodeBlock('console.log("girafa")\nconsole.log(-5)', '"girafa"\n-5'),
            new Heading("Comentários"),
            new Paragraph(
                "Duas barras <code>//</code> representam o começo de um comentário, que faz o resto da linha ser ignorada completamente na hora de execução.\
                Comentários vão ficar em cinza."
            ),
            new CodeBlock("//Este é um comentário, fino senhor 🗿🍷\n"),
        ],
    },
    {
        subtitle: "Variáveis",
        contents: [
            new Paragraph(
                "Variáveis são o conceito básico mais importante. Elas funcionam como caixas de informações, você armazena alguma coisa nela e pode retirar o que tem dentro depois."
            ),
            new Paragraph(
                "Para criar uma variável você usa a palavra especial <code>let</code> e precisa dar um nome para ela:"
            ),
            new CodeBlock("let nome"),
            new Paragraph(
                'Fazer isso recebe o nome de "declarar" uma variável.\
                É importante notar que esse nome não pode conter espaços. Se você quiser mais de uma palavra no nome, em vez de espaços é comum juntarAsPalavrasDesseJeito.'
            ),
            new CodeBlock("let nomeMaisComprido"),
            new Paragraph(
                "Para fazer a variável útil é preciso dar um valor para ela.\
                Esse valor pode ser por exemplo um número, uma letra, uma palvra, uma frase, o dicionário todo..."
            ),
            new CodeBlock("let numero = 15\nlet contaBancaria = -1.99"),
            new Paragraph("Usa-se um ponto em vez de uma vírgula para números quebrados."),
            new Paragraph(
                "Quando você quiser colocar uma <i>string</i> numa variável, novamente, precisa usar aspas."
            ),
            new CodeBlock('let professor = "Girafales"\nlet frase = "Você vem sempre aqui?"'),
            new Paragraph(
                "O símbolo de igual aqui pode parecer meio estranho, ele só representa a ação de colocar um valor numa variável, na esquerda do igual fica o nome dela e na direita o valor.\
                Depois de criar uma, pode mudar o valor dela de acordo com a segunda linha de código abaixo:"
            ),
            new CodeBlock(
                'let saudacao = "Bom dia, boa tarde, boa noite."\nsaudacao = "Saudações, terráqueos! Eu venho em paz."'
            ),
            new Paragraph(
                "Como a função do <code>let</code> é só declarar (criar) variáveis, não reapareceu na segunda linha."
            ),
            new Paragraph(
                "No lugar de <code>let</code>, você também pode usar <code>const</code>.\
                A diferença é que uma variável criada com <code>const</code> não pode ser alterada mais."
            ),
            new CodeBlock("const sentidoDaVida = 42"),
            new Paragraph(
                "E para ver o valor da variável, o <code>console.log()</code> de antes voltou."
            ),
            new InputToOutput("let importante = @\nconsole.log(importante)", "number", v =>
                Number(v)
            ),
            new Paragraph(
                "No lugar do número ou palavra de antes você coloca o nome da variável. \
                Não só nesse caso, mas <b>em qualquer lugar que você pode usar um número, você também pode usar uma variável de número</b>.\
                O mesmo vale para outros tipos de variável."
            ),
        ],
    },
    {
        subtitle: "Operações matemáticas",
        contents: [
            new Paragraph("Em código, existem as operações matemáticas básicas."),
            new CodeBlock("console.log(2 + 2)\nconsole.log(18 - 5)", "4\n13"),
            new Paragraph("O resultado das operações pode ser colcocado numa variável:"),
            new CodeBlock("let resultado = 6 * 4\nconsole.log(resultado)", "24"),
            new Paragraph("Ou pode ser obtido de uma variável:"),
            new CodeBlock("let valorInicial = 38\nconsole.log(valorInicial / 2)", "19"),
            new Paragraph("Ou os dois:"),
            new CodeBlock("let numero = 68\nnumero = numero + 1\nconsole.log(numero)", "69"),
            new Paragraph(
                "Esse <code>numero = numero + 1</code> no meio do código acima é uma ideia importante e vai voltar no futuro.\
                Ele aumenta a variável em 1, o processo é assim:"
            ),
            new Paragraph("numero = numero + 1"),
            new Paragraph("numero = 68 + 1"),
            new Paragraph("numero = 69"),
            new Paragraph(
                "Similarmente, algo como <code>numero = numero * 2</code> dobra o valor."
            ),
            new Paragraph(
                "Operações usam a mesma ordem do que a matemática: multiplicação e divisão acontecem primeiro, depois soma e subtração.\
                Usar parênteses também é possível."
            ),
            new CodeBlock("console.log(5 + 3 * 3)", "14"),
            new CodeBlock("console.log((5 + 3) * 3)", "24"),
            new Paragraph("Por último, o símbolo de mais também combina <i>strings</i>:"),
            new CodeBlock('console.log("o" + "i")', '"oi"'),
            new Paragraph("Dê uma olhada no código a seguir:"),
            new CodeBlock(
                'let frase = "Olá,"\nfrase = frase + "Mundo"\nfrase + "!"\nconsole.log(frase)'
            ),
            new Question(
                "O que vai aparecer no console quando for executado?",
                [
                    '<code>"Olá, Mundo!"</code>',
                    '<code>"Olá,Mundo!"</code>',
                    '<code>"Olá, Mundo"</code>',
                    '<code>"Olá,Mundo"</code>',
                ],
                3,
                "Espaços <b>não</b> são inseridos automaticamente entre palavras.\
                A terceira linha de código não faz nada pois é preciso um sinal de igual para alterar a variável."
            ),
        ],
    },
];

const listas: Page[] = [
    {
        subtitle: "Criando uma lista",
        contents: [
            new Paragraph(
                'Listas são uma maneira de agregar informações. Uma lista também pode ser chamada de "vetor",\
                ou por seu nome em inglês, <i>"Array"</i> Uma lista é criada com [colchetes] e vírgulas:'
            ),
            new CodeBlock(
                'let minhaListaDeCompras = ["pão", "leite", "arroz", "queijo", "5 litros de ácido sulfúrico"]'
            ),
            new Paragraph("Uma lista pode conter qualquer coisa que uma variável pode."),
            new CodeBlock(
                'let numeros = [0, 1, 2, 3, 4, 5]\n//e pode misturar coisas, mas isso não é tão comum\nlet listaMisturada = [6.5, "alface", -10]'
            ),
            new Paragraph("Pode conter a mesma coisa mais de uma vez:"),
            new CodeBlock(
                'let listaDeComprasMelhor = ["pão", "leite", "arroz", "leite", "queijo", "leite", "leite"]'
            ),
            new Paragraph("Pode ainda não conter nada:"),
            new CodeBlock("let politicosHonestos = []"),
            new Paragraph("Para saber quantas coisas estão numa lista usamos <code>.length</code>"),
            new CodeBlock(
                "console.log(listaDeComprasMelhor.length)\nconsole.log(listaDeComprasMelhor)",
                '7\n["pão", "leite", "arroz", "leite", "queijo", "leite", "leite"]'
            ),
            new Paragraph("Isso também funciona para descobrir o tamanho de uma <i>string</i>."),
            new CodeBlock('console.log("abcdefghijklmnopqrstuvwxyz".length)', "26"),
        ],
    },
    {
        subtitle: "Acesso",
        contents: [
            new Paragraph(
                "Para acessar itens individuais de uma lista você usa os colchetes de novo, e coloca dentro a posição.\
                Cada posição é um número diferente, <b>começando do 0!</b>. Essa posição é chamada de índice."
            ),
            new CodeBlock("let numeros = [2, 4, 8, 16]"),
            new CodeBlock(
                "console.log(numeros[0])\nconsole.log(numeros[2])",
                "[2, 4, 8, 16]\n2\n8"
            ),
            new Paragraph(
                "O mesmo truque funciona para extrair caracterers individuais de uma string.\
                Espaços são caracteres também. Novamente a primeira letra fica na posição 0."
            ),
            new InputToOutput(
                'let frase = "Calma, tudo passa. Nem que seja por cima de você."\nconsole.log(frase[@])',
                "number",
                input => "Calma, tudo passa. Nem que seja por cima de você."[Number(input)]
            ),
            new Paragraph(
                "Enquanto escolhia um núemro, você pode ter se deparado com o resultado <code>undefined</code>.\
                Ele singnifica indefinido, e aparece se escolher um número muito grande, ou um número negativo, ou um número não inteiro,\
                pois esses números não são posições válidas."
            ),
            new Paragraph("Onde encaixa um número encaixa uma variável de número:"),
            new CodeBlock(
                "let lista = [55, 44, 33, 22, 11]\nlet indice = 1\nconsole.log(frase[indice])\nconsole.log(frase[2 + 2]) //e uma operação também",
                "44\n11"
            ),
            new Paragraph("Qual o resultado do código abaixo?"),
            new CodeBlock('let string = "98765-4321"\nconsole.log(string[string.length - 1])'),
            new Question(
                "",
                [
                    "<code>undefined</code>",
                    '<code>"1"</code>',
                    '<code>"2"</code>',
                    '<code>"9"</code>',
                ],
                1,
                "O tamanho da string é 10, então o resultado é o mesmo que <code>string[10 - 1]</code>.\
                Começando do 0, o caractere na posição 9 é o último.\
                As aspas ainda aparecem porque o 1 é parte de uma string, então tem a função de caractere."
            ),
        ],
    },
    {
        subtitle: ".at()",
        contents: [
            new Paragraph(
                "O código anterior sempre resulta no último caractere de uma string, ou no último item de uma lista."
            ),
            new InputToOutput(
                'let string = "@"\nconsole.log(string[string.length - 1])',
                "text",
                v => v.at(-1)
            ),
            new Paragraph("É comum fazer este tipo de coisa, mas existe um jeito mais simples:"),
            new CodeBlock("let ultimo = [4, 0, 0, 2, 8, 9, 2, 2].at(-1)\nconsole.log(ultimo)", "2"),
            new Paragraph(
                "<code>.at()</code> funciona igual ao <code>[]</code> com números positivos,\
                mas além disso, números negativos podem ser usados para buscar itens no final."
            ),
            new InputToOutput(
                'let frase = "Calma, tudo passa. Nem que seja por cima de você."\nconsole.log(frase.at(@))',
                "number",
                v => "Calma, tudo passa. Nem que seja por cima de você.".at(Number(v))
            ),
        ],
    },
    {
        subtitle: "Modificação",
        contents: [
            new Paragraph(
                "Para alterar listas depois que elas forem criadas, temos uma variedade de opções."
            ),
            new Paragraph("Primeiramente, colchetes também são usados substituir itens em listas."),
            new CodeBlock(
                'let lista = ["a", "b", "c", "d"]\nlista[0] = "e"\nconsole.log(lista)',
                '["e", "b", "c", "d"]'
            ),
            new Paragraph(
                "Listas podem ser aumentadas com as operações <code>.push()</code> e <code>.unshift()</code>:"
            ),
            new CodeBlock(
                "let lista = [2, 4, 8, 16, 32]\nlista.push(16 * 2) //adiciona ao final\nlista.unshift(1) //adiciona ao começo\nconsole.log(lista)",
                "[1, 2, 4, 8, 16, 32]"
            ),
            new Paragraph("Dessa vez o símbolo de igual não é usado."),
            new Paragraph(
                "Também é possível adicionar mais de um item por vez com essas operações:"
            ),
            new CodeBlock(
                'let animais = ["girafa", "bicho-preguiça"]\nanimais.push("diabo da tasmânia", "axolote")\n' +
                    'animais.unshift("ornitorrinco", "peixe-bolha", "capivara")\nconsole.log(animais)',
                '["ornitorrinco", "peixe-bolha", "capivara", "girafa", "bicho-preguiça", "diabo da tasmânia", "axolote"]'
            ),
            new Paragraph(
                "Para remover itens de uma listam, existem <code>.pop()</code> e <code>.shift()</code>.\
                O item removido acaba sendo o resultado, isso quer dizer que a operação pode ser usada no lugar de outros valores:"
            ),
            new CodeBlock(
                "let lista = [1, 1, 2, 3, 5, 8, 13]\nlet ultimo = lista.pop() //remove do final\nlet primeiro = lista.shift() //remove do começo\n" +
                    "console.log(lista)\nconsole.log(ultimo)\nconsole.log(primeiro)",
                "[1, 2, 3, 5, 8]\n13\n1"
            ),
        ],
    },
];

const repeticoesCondicoes: Page[] = [
    {
        subtitle: "De novo!",
        contents: [
            new Paragraph(
                "Digamos que você tem uma lista de preços e quer descobrir o total dela. Como faria?"
            ),
            new CodeBlock("let precos = [24.99, 9.99, 11.99, 69.90]"),
            new Paragraph("Talvez assim:"),
            new CodeBlock("console.log(precos[0] + precos[1] + precos[2] + precos[3])", "116.87"),
            new Paragraph(
                "Funcionou. Mas o que acontece se vc decidir que quer comprar mais alguma coisa?"
            ),
            new CodeBlock(
                "precos.push(8.50)\nconsole.log(precos)\nconsole.log(precos[0] + precos[1] + precos[2] + precos[3])",
                "[24.99, 9.99, 11.99, 69.90, 8.50]\n116.87"
            ),
            new Paragraph("Agora tem uma coisa a mais na lista mas o resultado foi o mesmo. :("),
            new Paragraph("É claro que dá para adaptar o código:"),
            new CodeBlock(
                "console.log(precos[0] + precos[1] + precos[2] + precos[3] + precos[4])",
                "125.37"
            ),
            new Paragraph(
                "Porém seria mais conveniente se existisse um pedaço de código que funcionasse sempre."
            ),
            new Paragraph(
                "Olha só, tem mesmo! Até parece que eu sabia que ele existia esse tempo todo."
            ),
            new CodeBlock(
                "//continuando com a lista de preços anterior\nlet total = 0\nfor (const valor of precos) {\n\ttotal = total + valor\n}\nconsole.log(total)",
                "125.37"
            ),
            new Paragraph("Eu sei, tem muita coisa acontecendo aí. A parte essencial é essa:"),
            new CodeBlock("for (const valor of precos) {\n\n}"),
            new Paragraph(
                "<code>for</code> e <code>of</code> são mais 2 palavras especiais.\
                Usando esse código, qualquer instrução entre as {chaves} é repetida uma vez por item na lista."
            ),
            new CodeBlock(
                'let letras = ["a", "b", "c"]\nfor (const valor of letras) {\n\t//3 vezes\n\tconsole.log("De novo!")\n}',
                '"De novo!"\n"De novo!"\n"De novo!"'
            ),
            new Paragraph(
                "O espaço vazio no começo das linhas deixa mais fácil de ver o que está entre as chaves."
            ),
            new Paragraph(
                "Esse <code>const valor</code> é algo que você já viu: esse código cria uma variável chamada valor.\
                Cada vez que o código interior executa, a variável criada contém um item da lista, em ordem. Você pode escolher o nome dela."
            ),
            new CodeBlock(
                "let sequencia = [0, 1, 2, 3]\nfor (const numero of sequencia) {\n\tconsole.log(numero)\n}",
                "0\n1\n2\n3"
            ),
            new Paragraph(
                "Você também já viu que <code>total = total + valor</code> soma o valor à variável total.\
                Como esse pedaço do código está entre as chaves, ele executa com a lista toda, somando toda a lista no total.\
                Veja uma versão um pouco diferente:"
            ),
            new CodeBlock(
                "//lembrando que a lista é [24.99, 9.99, 11.99, 69.90, 8.50]\nlet total = 0\nfor (const valor of precos) {\n\ttotal = total + valor\n\tconsole.log(total)\n}",
                "24.99\n34.98\n46.97\n116.87\n125.37"
            ),

            new Paragraph("E então, qual valor esse código mostra na tela?"),
            new CodeBlock(
                "let resultado = 100\nfor (const v of [40, 10, 10]) {\n\tresultado = resultado - v\n}\nconsole.log(resultado)"
            ),
            new Question(
                "",
                ["20", "30", "40", "60"],
                2,
                "O resultado começa em 100 e é reduzido por cada item na lista, ou seja, 100 - 40 - 10 - 10."
            ),
        ],
    },
    {
        subtitle: "Condições",
        contents: [
            new Paragraph(
                "Por enquanto todo o código aqui foi executado 1 ou mais vezes.\
                Mas às vezes você precisa que um pedaço do código não seja sempre executado. Introzudindo, <code>if</code>:"
            ),
            new CodeBlock('if (10 > 5) {\n\tconsole.log("Executei!")\n}', '"Executei!"'),
            new CodeBlock('if (10 < 5) {\n\tconsole.log("Executei!")\n}', ""),
            new Paragraph(
                'O segundo bloco não faz nada mesmo. A palavra <i>"if"</i> significa "se", em inglês, e usando ela o código consegue ir por caminhos diferentes.\
                O primeiro bloco executa porque 10 > 5 é verdadeiro. O símbolo > é chamado de "maior do que".\
                O resultado dele é verdadeiro <b><i>se</i></b> o primeiro número é <b>maior do que</b> o segundo.'
            ),
            new CodeBlock(
                "console.log(10 > 5) //true significa verdadeiro\nconsole.log(0 > 1) //false significa falso",
                "true\nfalse"
            ),
            new Paragraph('O símbolo < é o oposto, ele se chama "menor do que".'),
            new CodeBlock(
                "console.log(10 < 5) //10 não é menor do que 5\nconsole.log(0 < 1) //0 é menor do que 1",
                "false\ntrue"
            ),
            new Paragraph("Se os números são iguais, o resultado dos dois é sempre falso."),
            new CodeBlock("console.log(3 > 3)\nconsole.log(-1 < -1)", "false\nfalse"),
            new Paragraph("Existem mais alguns símbolos importantes:"),
            new CodeBlock("console.log(3 === 3)\nconsole.log(3 !== 3)", "true\nfalse"),
            new Paragraph(
                "O símbolo <code>===</code> checa se os números são iguais. Cuide para não confundir com o <code>=</code> que define variáveis.\
                Já o símbolo <code>!==</code> é o oposto, checa se os números são diferentes.\
                Eles também funcionam em strings"
            ),
            new CodeBlock(
                'console.log("biscoito" === "bolacha")\nconsole.log("biscoito" === "biscoito")',
                "false\ntrue"
            ),
            new Paragraph(
                'O <code>if</code> usa {chaves} igual ao <code>for of</code>, para definir um "bloco de código".\
                O bloco de código é o que está entre as chaves.\
                Toda vez que são usadas, há um espaço em branco no começo da linha como mencionado antes.\
                A diferença pro <code>for of</code> é que esse código executa 0 ou 1 vez, dependendo da condição ser verdadeira.'
            ),
            new InputToOutput(
                'let numero = @\nif (numero > 0) {\n\tconsole.log("verdadeiro")\n} else {\n\tconsole.log("falso")\n}',
                "number",
                v => (Number(v) > 0 ? "verdadeiro" : "falso")
            ),
            new Paragraph(
                "Já esse <code>else</code> é uma adição opcional. O bloco de código dele executa quando o <code>if</code> falhar.\
                Volte aos primeiros exemplos da página pra garantir que entendeu o que aconteceu."
            ),
        ],
    },
    {
        subtitle: "De novo! (de novo)",
        contents: [
            new Paragraph(
                "Há uma versão um pouco diferente do <code>for of</code>, ela geralmente aparece assim:"
            ),
            new CodeBlock(
                "let repeticoes = 5\nfor (let i = 0; i < repeticoes; i++) {\n\tconsole.log(i)\n}",
                "0\n1\n2\n3\n4"
            ),
        ],
    },
];

//divisão em tópicos
const data: Topic[] = [
    { title: "Início", pages: inicio },
    { title: "Listas", pages: listas },
    { title: "Repetições e condições", pages: repeticoesCondicoes },
];

const appName = "Introduzindo JavaScript";

export { data as default, appName, Page, Topic };
