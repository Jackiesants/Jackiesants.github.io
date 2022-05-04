const dracView =  //perguntas e respostas pré definidas para a rota do drácula
[       //FASE 0
    {
        "pergunta":
        {
            "numero": "0", 
            "texto": "E agora? O que Drácula deve fazer? \n A) Drácula viaja até Forks para encontrar os Cullen \n B) Drácula bebe o sangue dos adolescentes \n C) Drácula dá um discurso para os adolescentes"
        },
        "certa": 
        {
            "letra": "B",
            "texto": "Resposta B)\n Drácula se alimenta do sangue das adolescentes e fica surpreso que não precisa se esforçar tanto para uma caçada. Aparentemente todos queriam que ele os mordessem. Estaria a humanidade louca? Um pouco mais forte que outrora, ele segue em direção ao crepúsculo"
        },
        "primeiroCenarioErro":
        {
            "letra": "A",
            "texto": "Resposta A)\n Drácula se sente fraco e cansado. Ao chegar em Forks, sua primeira ação é tentar se alimentar. Infelizmente, é pego pelos lobisomens. Drácula resiste bravamente, mas não consegue ganhar essa luta. Ele até tenta usar seus poderes, mas a falta de alimentação limita suas habilidades. Antes de morrer, o grasnar furioso das feras ensurdeceram seus ouvidos"
        },
        "segundoCenarioErro":
        {
            "letra": "C",
            "texto": "Resposta C)\n Drácula, indo contra toda sua natureza, tenta aconselhar aqueles jovens. Mas o grito estridente e incessante dos adolescentes ao vê-lo o irrita. Ele volta para seu castelo, tentando inutilmente abafar os ruídos. Desanimados com seu sumiço, os adolescentes invadem o local ao amanhacer e expõe o muito fraco vampiro ao sol para vê-lo brilhar. Drácula entra em combustão, porque alguns vampiros não brilham!"
        }
    },
    
    //FASE 1: DUAS PERGUNTAS
    {
        "pergunta":
        {
            "numero": "1",  
            "texto": "O cheiro é praticamente irresistível. O que Drácula deve fazer? \n A) Drácula segue o cheiro \n B) Drácula não segue o cheiro"
        }, 
        "certa":
        {
            "letra": "B",
            "texto": "Resposta B)\n Drácula resiste fortemente contra seus instintos primitivos. Estava ali com uma missão, encontrar os vampiros. Prefere se embrenhar na floresta, afinal, se fosse ele, provavelmente se instalaria sob as copas das árvores."
        },
        "primeiroCenarioErro": 
        {
            "letra": "A",
            "texto": "Resposta A)\n Drácula não consegue se conter, e segue em direção ao cheiro doce"

        }
    },

    //FASE 2 (3 opções) - Se na fase 1 escolher seguir o cheiro
    {
      "pergunta":
        {
            "numero": "2",  
            "texto": "Drácula sente o cheiro adocicado, e o veneno automaticamente escorrega de sua boca. E agora? Como deve agir? \n  A) Tentar acordá-la gentilmente \n  B) Apenas continuar admirando Bela da sacada \n C) Tentar se alimentar do sangue de Bela  "
        }, 
        "certa":  
        {
            "letra": "C",
            "texto": "Resposta C)\n Drácula pula para dentro do quarto da garota pronto para atacar...! Mas é bruscamente impedido por Edward e Alice Cullen que estavam observando todos os seus passos. Droga! Estava tão perto! Ainda assim, tentou ficar firme: o propósito de sua viagem estava bem a sua frente"
        },
        "primeiroCenarioErro":
        {
            "letra": "B",
            "texto": "Resposta B)\n Drácula fica tão admirado pela lembrança de Elisabeta, que passa toda a noite observando Bela dormir. O sol nasce sem o vampiro sequer perceber e, mesmo escondido pelas grossas nuvens de Forks, é o suficiente para incinerá-lo sem possibilidade de resistência"
        },
        "segundoCenarioErro":
        {
            "letra": "A",
            "texto": "Resposta A)\n Drácula percebe que aquela cidade está o deixando molenga. Quando em sua vida pós-morte havia sequer cogitado ser gentil com alguém? Resolveu ignorar toda aquela bagunça e voltar para Romênia. Os adolescentes, apesar de irritantes, eram alvo fácil de comida. E sobre Elisabeta...? Aquela garota nem era tão parecida assim  "
        }, 
        
    },
    
    //FASE 3 -- TRÊS PERGUNTAS
    {
      "pergunta": {
                    "numero": "3",  
                    "texto": "Os Cullen falam demais! Qual ação Drácula deve tomar diante disso?  \n  A) Ouvir a hitória com curiosidade  \n B)Atacar \n C) Ignorar o discurso"
        },    
        "certa": {
                "letra": "A",
                "texto": "Drácula acha curioso o modo de vida daqueles vampiros e, dando uma ultima olhada para a casa da humana que lembrava sua ex esposa, ele seguiu-os floresta adentro"
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta: B)\n Os rosnados acordaram o pai de Bela, que, armado, saiu de casa desferindo três tiros no Conde Drácula. Ele quis rir por um momento: quão vergonhosa seria a morte por mãos humanas? Mas as balas de Forks tem resquícios de prata, e seu corpo gélido foi ao chão antes mesmo que pudesse terminar de ouvir Bela gritar em desespero"
        },
         "segundoCenarioErro": {
            "letra": "C",
            "texto": "Resposta: C) \n Drácula deveria ter prestado mais atenção! Sem muita paciência para aqueles vampiros esquisitos, decidiu que era a hora perfeita para mostrar como se comportavam vampiros de verdade. Sua estratégia de montar um exército, entretando, chamou a atenção dos Volturi e ele foi dilacerado"

        }
 },
    //FASE 4 -- 2 PERGUNTAS -- SE ESCOLHEU NÃO SEGUIR O CHEIRO NA FASE 1
    {
        "pergunta": {
                    "numero": "4",  
                    "texto": "O patriarca dos Cullen propôs uma conversa \n A)Aceitar a Conversa \n B) Reagir violentamente"
        }, 
        "certa": {
                "letra": "A",
                "texto": "Resposta A)\n Drácula decide ouvir o que ele tem a dizer! "
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B)\n Sem paciência, Drácula decide partir para o ataque!"

        }
        
    }, 
    //FASE 5 - 3 RESPOSTAS - SE ESCOLHEU REAGIR violentamente (FINALIZAÇÃO DO JOGO) - 3GAMEOVER!
    {
        "pergunta": {
                    "numero": "5",  
                    "texto": "Drácula decide que vai guerrear, mesmo em desvantagem! Qual golpe ele deve usar? A) Utilizar presas mortais / B) Utilizar blindagem de mente C)Utilizar vôo do morcego"
        }, 
        "certa": {
                "letra": "B",
                "texto": "Alice e Edward não conseguirtam prever o futuro, muito menos ler a mente do rei dos vampiros. Demorou um curto período de tempo para que ele conseguisse finalizar todos os seus adversários. Drácula voltou para o lugar do cheiro doce e transformou a garota do cabelo castanho em vampira... estava certo, era a reencarnação de Elisabeta. Quanto àquela cidade? Parecia que Forks não veria mais rastros de olhos douraods..."
                },
        "primeiroCenarioErro": {
            "letra": "A",
            "texto": "Resposta: A) Draco tentou atacar com presas mortais, mas Alice previu seu golpe. Ele foi imobilizado, e exposto ao sol. Antes de arder, viu o corpo brilhante dos outros vampiros... como era possível?"

        },
        "segundoCenarioErro": {
            "letra": "C",
            "texto": "Resposta: C) Eduard leu sua mente, e, antes que pudesse dar o seu golpe, já estava imobilizado."

        }
        
    }, 
    //FASE 6 - 2 RESPOSTAS --> SE ESCOLHEU CONVERSAR COM CARLISLE
    { 
       "pergunta": {
                    "numero": "6",  
                    "texto": "O estilo de vida deles é bem curioso! Era natural questionar se valia a pena ter ido até ali! \n A)Tentar beber sangue animal \n C) Eles são uma ameaça! Planejar a guerra"
        }, 
        "certa": {
                "letra": "A",
                "texto": "Resposta A) \n Drácula decide que vale a pena experimentar algo diferente!"
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B) \n Drácula não engoliu aquelas explicações. Vampiros com poderes? Estava claro que eram uma ameaça! Se esforçou para nublar seus pensamentos... era hora de mostrar quem mandava!"
        }      
        
    }, 
    //FASE 7 = 5: SE ESCOLHEU ATACAR, QUAL GOLPE VAI USAR?
        
     //FASE 8 -> 3 RESPOSTAS - DECIDIU PROVAR SANGUE ANIMAL
        
    
      { 
       "pergunta": {
                    "numero": "8",  
                    "texto": "Sangue animal? Como deve se sentir sobre isso? A) Não gostou B)Eca! C)Gostou"
        }, 
        "certa": {
                "letra": "C",
                "texto": "Resposta C) \n Não era igual, mas também era apetitoso... e a caçada? Emocionante. Com o tempo, Drácula ganhou poderosos olhos dourados. E, ainda que não pudesse sair de dia como os outros, via o olhar de curioso por poder dormir enquanto eles estavam fadados a uma eternidade acordados. Aquela família era gente boa, estava até pensanodo em adotar o nome Cullen."
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B) \n Eca! No primeiro gole, já perceu que aquilo não servia para si. Cansado daquele vai e vem e muito mais fraco do que gostaria, Drácula decidiu que voltaria para casa. Era melhor viver a eternidade com a janta gritando seu nome do que lutar com vmapiros e lobos esquisitos"

        },
          "segundoCenarioErro": {
            "letra": "A",
            "texto": "Resposta C) \n Era impossível gostar daquilo! Tentando não demonstrar muita repulsa, Draco deu adeus. Mas sua soberba não o deixou acreditar nas palavras dos Cullens e - já com fome, decidiu se alimentar por Forks mesmo. Mal havia cravado seus dentes no pescoço de uma vítima qualquer quando lobos uivaram, saindo da escuridão... ele simplesmente não podia mais ver nada"

        },
          
        
      
    }   
    
];


const bladeView =  //perguntas e respostas pré definidas para a rota do drácula
[       //FASE 0
    {
        "pergunta":
        {
            "numero": "0", 
            "texto": "E agora? O que Blade deve levar? \n A) Blade leva seus punhais de madeira em formato de cruz \n B) Blade leva facas para combate corpo a corpo e bombas de luz"

        },
        "certa": 
        {
            "letra": "B",
            "texto": "Resposta B)\n Blade decide que é melhor levar suas facas para combate corpo a corpo e bombas de luz"
        },
        "primeiroCenarioErro":
        {
            "letra": "A",
            "texto": "Resposta A)\n 'A melhor opção é levar meus punhais de madeira em formato de cruz', pensou, guadando-os na cintura "
        }
       
    },
    
    //FASE 1: punhais
    {
        "pergunta":
        {
            "numero": "1",  
            "texto": "Encontrar um lobisomem não estava nos seus planos? E agora, o que Blade deve fazer? \n A) Usar punhais de madeira para abater o lobisomem \n B) Deixar o lobisomem viver "
        }, 
        "certa":
        {
            "letra": "B",
            "texto": "Resposta B)\n Ele não estava ali para caçar lobisomens, não ia perder seu tempo"
        },
        "primeiroCenarioErro": 
        {
            "letra": "A",
            "texto": "Resposta A)\n Já estava ali mesmo, se pudesse abater duas feras, então era melhor para ele "

        }
    },

    //FASE 2 -MATOU O LOBO
    {
      "pergunta":
        {
            "numero": "2",  
            "texto": "Há uma alcateia bem na sua frente. Qual ação Blade deve tomar? \n  A) Tentar conversar \n B)Tentar lutar \n C) Fugir" 
        }, 
        "certa":  
        {
            "letra": "C",
            "texto": "Resposta C) Ele tinha experiência, sabia quais as lutas tinha que lutar e quais tinha que deixar de lado. Aquela era um clássico 'deixar de lado'. Entrou na floresta, tentando correr desviando das árvores. Dava para ouvir os lobos atrás de si e ele tinha quase certeza que seria pego, ainda que tivesse supervelocidade. Contudo, após passar por um espaço específico, eles simplesmente pararam o observando avançar... estranho."
        },
        "primeiroCenarioErro":
        {
            "letra": "B",
            "texto": "Resposta B)\n Blade decidiu lutar! Estava naquela estrada há muitos anos e sabia lidar com uma alcateia dequelas. E, de fato, ele conseguiu abater um ou dois com sua super força e agilidade, mas eles eram muitos. Antes de ter seu tronco estilhaçado pelas presas ferozes, encarou o corpo do jovem adolescente com suas estacas de madeira cravadas."
        },
        "segundoCenarioErro":
        {
            "letra": "A",
            "texto": "Resposta A)\n - Você matou um dos nossos! - Disse Sam, o líder da alcateia. - E esse cheiro... você não é humano. \n  Blade conseguia sentir o nervosismo dos outros lobos. Se continuasse daquele jeito, seria um homem morto em poucos minutos. Decidiu que tentaria negociar: \n -Não vim em busca de vocês, vim atrás dos vamp... \n Mas antes que pudesse terminar de falar, todos eles vieram em sua direção. Ele não teve a minima chance." 
        }, 
        
    },
    
    //FASE 3 -- SE ESCOLHEU LÂMINAS OU ESCOLHEU FUGIR DA ALCATEIA 
    {
      "pergunta": {
                    "numero": "3",  
                    "texto": "Carlisle quer conversar, mas o que Blade quer?  \n A)Ouvir o outro \n B) Começar uma luta "
        },    
        "certa": {
                "letra": "A",
                "texto": "Resposta A) \n Drácula deciciu ouvir o que o vampiro tinha a dizer, mas já estava cansado daquela falta de ação."
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B) \n Não queria ladainhas, queria resolver seu problema! Iria com tudo de uma vez!"
        }
    },
    //FASE 4 -- SE DECIDIU LUTAR NA FASE 3
    {
        "pergunta": {
                    "numero": "4",  
                    "texto": "Os ataques de Blade não estavam sendo eficazes. Rápido, o que ele deve fazer? A) Render B)Continuar a lutar"
        }, 
        "certa": {
                "letra": "A",
                "texto": "Resposta A)\n Decidiu se render. Tinha que saber das suas lutas! Mas qual não foi sua surpresa quando os vampiros começaram a falar... sangue animal não era a unica surpresa. A prata não funcionava, também. O estilo de vida daqueles vampiros era diferenciado! No fim, terminaram em uma grande amizade. Aparentemente a raça deles tinham figuras malignas também... seu trabalho estava longe de terminar.! "
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B)\n Péssima ideia! Acabou perdendo a cabeça... literalmente."

        }
        
    }, 
    //FASE 5 - SE DECIDIU CONVERSAR COM CARLISLE
    {
        "pergunta": {
                    "numero": "5",  
                    "texto": "Blade se sentiu convencido com a história de Carlisle? A) A história convenceu B)A história não convenceu, partir para luta!"
        }, 
        "certa": {
                "letra": "A",
                "texto": "Resposta A) \n Carlisle disse o suficiente! Bebem sangue de animal? Idiotice! Mas fazia sentido, podia ver naqueles olhos dourados. Aquela família nao aparentava ser um perigo em potencial. Ele tinha vampiros piores para destruir... drácula ainda estava a solta.."
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta: \n B) Hahaha! Vampiros bonzinhos? Ele conhecia o mundo melhor do que aquilo... era hora de dar fim naquela história. Iria para luta!"
                //Em caso de B, voltar para fase 3
        }
        
    }, 
    //FASE 6 - 2 RESPOSTAS --> SE ESCOLHEU CONVERSAR COM CARLISLE
    { 
       "pergunta": {
                    "numero": "6",  
                    "texto": "Blade segue ou vai para casa? A) Seguir B) Ir para casa treinar mais"
        }, 
        "certa": {
                "letra": "A",
                "texto": "Resposta A)\n Ele havia chegado muito longe para desistir agora!"
                },
        "primeiroCenarioErro": {
            "letra": "B",
            "texto": "Resposta B) \n Cidade estranha com gente esquisita, se os lobisomens já eram assim, melhor nem ver os vampiros. Iria caçar alvos mais fáceis e treinar mais antes de voltar para Forks"
        }      
        
    }
        
];


const carmillaView = [    
    {    //FASE 0
        "pergunta":
        {
            "numero": "0", 
            "texto": "Camille descobriu que bella namorava edward. O que fazer? A) Brigar com Edward B) Tentar fazer amizade com edward. "

        },
        "certa": 
        {
            "letra": "B",
            "texto": "Resposta B)\n Edward desconfia da sua amizade, mas ela é tão encantadora que conquista a todos.      "
        },
        "primeiroCenarioErro":
        {
            "letra": "A",
            "texto": "Resposta A)\n Alice previu Camille tentando assassinar Edward. Bella acreditou nela, se afastando da vampira. A família Cullen sabia como destruí-la, e não demorou muito para uma alma milenar sumir da face da terra."
        }
       
    },
    
    //FASE 1
    {
        "pergunta":
        {
            "numero": "1",  
            "texto": "Pergunta: Carmilla deve aceitar o convite? A) Não / B) Sim"
        }, 
        "certa":
        {
            "letra": "B",
            "texto": "Resposta B)\n Carmilla inventa uma desculpa para ficar em casa"
        },
        "primeiroCenarioErro": 
        {
            "letra": "A",
            "texto": "Resposta A)\n Carlisle a reconhece e conta do seu passado. A familia Cullen decide que o melhor era exterminá-la... GO "

        }
    },

    //FASE 2
    {
      "pergunta":
        {
            "numero": "2",  
            "texto": "pergunta: Carmilla notou que Edward está desconfiado. O que ela deve fazer: A)Fugir com Bella B)Enfrentar os Cullen" 
        }, 
        "certa":  
        {
            "letra": "A",
            "texto": "Resposta A)\n Bella estava tão fraca que não pôde resistir. Carmilla a levou, e Edward estaria fadado a passa a eternidade solitário. "
        },
        "primeiroCenarioErro":
        {
            "letra": "B",
            "texto": "Resposta B)\n Carlisle conhecia suas fraquezas, e, enquanto ela tentava derrotar Alice, outros deles estavam exumando e destruindo seu corpo. Ela não teve muitas chances... "
        }
        
    }
];
      
      
      

function verifica(personagem, fase, classeAntiga, classeAtual, ClasseModificadora) 
{    //vai verificar o personagem, a fase e as telas 
    let conferencia; 
    
    //Personagem DRACULA
    switch (personagem) 
    {
        case 'dracula': //Verifica o personagem
            conferencia = conferePergunta(dracView, fase); //confere se a resposta digitada bate com a pergunta e retorna 
            if (conferencia == true )
            { //recebe verdadeiro se a resposta estiver certa
                mudaPag(classeAntiga, classeAtual); //muda a pagina para uma nova questão 
            }
            else if (conferencia == false )
            {
                    mudaPag(classeAntiga, "gameOver");//muda a pagina para o endgame
            }
        
            
            else if (conferencia == "rota b") 
                { //Se a resposta que o usuario der estiver errada dentro do padrão do jogo, ele retorna uma rota alternativa, a rota B, que leva para uma fase alternativa, passada através da classe modificadora. 
                    mudaPag(classeAntiga, ClasseModificadora); //muda a pagina para uma nova questão do cenário B
                }
        
            
            break;
            
            
        //Personagem BLADE    
            
        case 'blade':
            conferencia = conferePergunta(bladeView, fase); //confere se a resposta digitada bate com a pergunta e retorna 
            if (conferencia == true ){ //recebe verdadeiro se a resposta estiver certa
                mudaPag(classeAntiga, classeAtual); //muda a pagina para uma nova questão 
            }
            else if (conferencia == false ) {
                    mudaPag(classeAntiga, "gameOver");//muda a pagina para o endgame
            }
            
          else if (conferencia == "rota b") 
                { //Se a resposta que o usuario der estiver errada dentro do padrão do jogo, ele retorna uma rota alternativa, a rota B, que leva para uma fase alternativa, passada através da classe modificadora. 
                    mudaPag(classeAntiga, ClasseModificadora); //muda a pagina para uma nova questão do cenário B
               }
                    break;
    
    
    //Personagem Carmilla    
            
        case 'carmilla':
 conferencia = conferePergunta(carmillaView, fase); //confere se a resposta digitada bate com a pergunta e retorna 
            if (conferencia == true ){ //recebe verdadeiro se a resposta estiver certa
                mudaPag(classeAntiga, classeAtual); //muda a pagina para uma nova questão 
            }
            else if (conferencia == false ) {
                    mudaPag(classeAntiga, "gameOver");//muda a pagina para o endgame
            }
            
          else if (conferencia == "rota b") 
                { //Se a resposta que o usuario der estiver errada dentro do padrão do jogo, ele retorna uma rota alternativa, a rota B, que leva para uma fase alternativa, passada através da classe modificadora. 
                    mudaPag(classeAntiga, ClasseModificadora); //muda a pagina para uma nova questão do cenário B
               }
                    break;
    } 
} 

function conferePerguntaComplexa (resp, view)
{ //Direciona as rotas para perguntas com bifurcação
    if ( view.certa.letra.toLowerCase() == resp.toLowerCase())
    {       alert(view.certa.texto);
            return true; //Se a resposta estiver na posição da certa 
    }
    else 
    {   alert(view.primeiroCenarioErro.texto);
        return "rota b"; //cria uma rota diferente, uma bifurcação 
    }
   
    
} 

function conferePergunta(viewAtual, fase)
{ 
    for (let i=0; i<viewAtual.length ; i++ ) 
    {
        if (fase == viewAtual[i].pergunta.numero) 
        {
            let resposta = prompt (viewAtual[i].pergunta.texto);    //mostra as perguntas baseadas na fase atual 
                            
            if (typeof viewAtual[i].segundoCenarioErro == 'undefined') //verifica os padrões de entrada de perguntas complexas com 2 respostas que levam a dois cenários distintos (bifurcações). Esses não possuem um segundo cenário de erro 
            {   
                resposta = confereEntradaValida (resposta, viewAtual[i].pergunta.texto, "complexa"); //Confere se estão digitando A ou B
                return conferePerguntaComplexa (resposta, viewAtual[i]); //Diz se é rota A ou B, baseado na resposta do usuário para bifurcação
            }
            
                            
            else //Se é uma pergunta normal, com 3 possibilidades de resposta
            {
                resposta = confereEntradaValida (resposta, viewAtual[i].pergunta.texto, "simples"); //confere A, B ou C
                             
                if (resposta.toUpperCase() == viewAtual[i].certa.letra) //verifica se a resposta esta certa de acordo com a CONST
                {
                    alert(viewAtual[i].certa.texto);
                    return true; //retorna verdadeiro para a função Verifica
                                            
                } 

                else if (resposta.toUpperCase() == viewAtual[i].primeiroCenarioErro.letra) //Verifica se a pessoa errou no Cenário 1
                {
                    alert(viewAtual[i].primeiroCenarioErro.texto);
                    return false; //retorna falso para erro
                }
                                    
                else //testa o referente ao segundo cenario de erro
                {
                    alert(viewAtual[i].segundoCenarioErro.texto);
                    return false; //retorna falso para erro
                }
                              
            }
        } //IF
    } //for
}

function confereEntradaValida (respDada, questao, tipo){ //Verifica se o usuário está digitando A ou B em perguntas bifurcadas
    if (tipo == "complexa") 
    {
        while (respDada.toLowerCase() != 'a' && respDada.toLowerCase() != 'b')
        {
            alert("Resposta Inválida! Digite A ou B");
            respDada = prompt (viewAtual[i].pergunta.texto);//Mostra a questão novamente para receber a nova entrada

        }
    }
    
    else if (tipo == "simples") //Verifica resposta A, B, C em perguntas normais 
    {        while (respDada.toLowerCase() != 'a' && respDada.toLowerCase() != 'b' && respDada.toLowerCase() != 'c') //verifica 
        {
            alert("Resposta Inválida! Digite A, B ou C");
            respDada = prompt (viewAtual[i].pergunta.texto);//Mostra a questão novamente para receber a nova entrada

        }
    }
    
    else
    {
        alert ("Erro de lógica na função ConfereEntradaValida, a questão não é simples nem complexa");
    }
    
    
return respDada; 
}

function mudaPag(anterior, nova){ //Muda as paginas de pergunta

    let faseAnterior = document.querySelector("."+anterior); //tira a classe ACTIVE e coloca INACTIVE para a div ficar escondida 
       faseAnterior.classList.remove('active');
       faseAnterior.classList.add('inactive');
 
    
        let faseAtual = document.querySelector("."+nova); //adiciona a classe ACTIVE na div da vez
        if (faseAtual.classList.contains("inactive") == true)
            {
                faseAtual.classList.replace("inactive", "active")
            }
        else {                faseAtual.classList.add('active');

            
       }
    

    
    
        
    }
    