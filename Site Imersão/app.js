function pesquisar () {
    let section = document.getElementById
    ("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado escontrado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for(let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()

        if(dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
                <a herf ="#" target=" _blank">${dado.titulo}</a>
            </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href='${dado.link}' target="_blank">Mais informações</a>
        </div>    
        `;
    }
}

if (!resultados){
    resultados = "<p>Nenhum resultado escontrado.</p>"
}

section.innerHTML = resultados
}



















/*
            <h2> Google Gemini</h2>
                <p class="descricao-meta">O Google Gemini, um modelo de inteligência artificial super inteligente criado pela Google.
                     Imagine-o como um computador muito esperto, capaz de conversar sobre qualquer assunto, responder suas perguntas e 
                     até mesmo te ajudar a criar histórias! Ele pode te explicar como funciona a natureza, te ajudar com as lições de 
                     casa ou simplesmente conversar sobre seus hobbies. É como ter um amigo virtual sempre pronto para uma conversa 
                     divertida!</p>
                <a href="https://gemini.google.com/app/9dbd4eb4c0ceb996?hl=pt-BR" target="_blank" >Use o Gemini </a>
            </div>

            <div class="item-resultado">
                <h2> Google Assistente </h2>
                <p class="descricao-meta">O assistente do Google, presente em diversos dispositivos, que pode te ajudar a encontrar 
                    informações, controlar dispositivos inteligentes e muito mais.</p>
                <a href="https://support.google.com/assistant/" target="_blank">Saiba mais sobre o Google Assistente</a>
            </div>

            <div class="item-resultado">
                <h2> Siri </h2>
                <p class="descricao-meta">A Siri é a assistente virtual da Apple, disponível nos iPhones e outros dispositivos da marca. Ela pode te ajudar com diversas tarefas, como enviar mensagens, fazer ligações, configurar lembretes e muito mais.</p>
                <a href="https://www.apple.com/br/siri/" target="_blank" >Saiba mais sobre a Siri </a>
            </div>
            
            <div class="item-resultado">
                <h2> Alexa </h2>
                <p class="descricao-meta">A Alexa é a assistente virtual da Amazon, presente em diversos dispositivos Echo. Ela pode tocar música, responder perguntas, controlar dispositivos inteligentes e muito mais.</p>
                <a href="https://www.amazon.com.br/echo-e-alexa" target="_blank" >Conheça a Alexa </a>
            </div>
            
            <div class="item-resultado">
                <h2> ChatGPT </h2>
                <p class="descricao-meta">O ChatGPT é um modelo de linguagem desenvolvido pela OpenAI. Ele é capaz de gerar textos, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa.</p>
                <a href="https://openai.com/chatgpt" target="_blank" >Experimente o ChatGPT </a>
            </div>
            <div class="item-resultado">
                <h2> Bard </h2>
                <p class="descricao-meta">O Bard é um modelo de linguagem desenvolvido pelo Google, similar ao ChatGPT, capaz de gerar textos criativos e responder a suas perguntas de forma informativa.</p>
                <a href="https://bard.google.com/" target="_blank" >Experimente o Bard </a>
            </div>
            
            <div class="item-resultado">
                <h2> Replika </h2>
                <p class="descricao-meta">A Replika é um chatbot companheiro, projetado para conversar e oferecer apoio emocional. Você pode criar sua própria Replika e desenvolver uma amizade única.</p>
                <a href="https://replika.ai/" target="_blank" >Crie sua Replika </a>
            </div>
            
            <div class="item-resultado">
                <h2> DALL-E 2 </h2>
                <p class="descricao-meta">O DALL-E 2 é uma ferramenta de inteligência artificial que gera imagens realistas e artísticas a partir de descrições textuais.</p>
                <a href="https://openai.com/dall-e-2" target="_blank" >Crie suas próprias imagens </a>
            </div>
            
            <div class="item-resultado">
                <h2> Midjourney </h2>
                <p class="descricao-meta">O Midjourney é uma ferramenta de inteligência artificial que cria imagens de alta qualidade e estilo artístico a partir de descrições textuais.</p>
                <a href="https://midjourney.com/home/" target="_blank" >Explore o Midjourney </a>
            </div>
            
            <div class="item-resultado">
                <h2> Stable Diffusion </h2>
                <p class="descricao-meta">O Stable Diffusion é uma ferramenta de inteligência artificial open-source que gera imagens a partir de texto, permitindo uma grande flexibilidade e personalização.</p>
                <a href="https://stability.ai/stable-diffusion" target="_blank" >Experimente o Stable Diffusion </a>
            </div>
            
            <div class="item-resultado">
                <h2> MuseNet </h2>
                <p class="descricao-meta">O MuseNet é um modelo de inteligência artificial capaz de compor música em diferentes estilos, como jazz, country e clássico.</p>
                <a href="https://openai.com/blog/musenet/" target="_blank" >Ouça as composições do MuseNet </a>
            </div>
            
            <div class="item-resultado">
                <h2> Jukebox </h2>
                <p class="descricao-meta">O Jukebox é um modelo de inteligência artificial que gera samples de música em diversos gêneros, permitindo a criação de novas músicas a partir de um estilo específico.</p>
                <a href="https://openai.com/blog/jukebox" target="_blank" >Explore o Jukebox </a>
            </div>

            <div class="item-resultado">
                <h2> TensorFlow </h2>
                <p class="descricao-meta">O TensorFlow é uma biblioteca de software de código aberto usada para construir e treinar modelos de aprendizado de máquina. É como uma ferramenta de construção para criar modelos de inteligência artificial que podem realizar tarefas como reconhecimento de imagens, tradução de idiomas e muito mais.</p>
                <a href="https://www.tensorflow.org/" target="_blank" >Saiba mais sobre o TensorFlow </a>
            </div>
            
            <div class="item-resultado">
                <h2> PyTorch </h2>
                <p class="descricao-meta">O PyTorch é outra biblioteca popular para aprendizado de máquina, conhecida por sua flexibilidade e facilidade de uso. É uma ótima opção para pesquisadores e desenvolvedores que querem criar modelos de IA personalizados.</p>
                <a href="https://pytorch.org/" target="_blank" >Explore o PyTorch </a>
            </div>
            
            <div class="item-resultado">
                <h2> Scikit-learn </h2>
                <p class="descricao-meta">O Scikit-learn é uma biblioteca de aprendizado de máquina em Python que oferece uma variedade de algoritmos para classificação, regressão, clustering e muito mais. É uma ferramenta essencial para quem está começando a trabalhar com aprendizado de máquina.</p>
                <a href="https://scikit-learn.org/stable/" target="_blank" >Descubra o Scikit-learn </a>
            </div>
            
            <div class="item-resultado">
                <h2> Tableau </h2>
                <p class="descricao-meta">O Tableau é uma ferramenta de visualização de dados que permite criar gráficos e dashboards interativos para explorar e analisar grandes conjuntos de dados. É ideal para transformar dados complexos em insights visuais.</p>
                <a href="https://www.tableau.com/" target="_blank" >Visualize seus dados com o Tableau </a>
            </div>
            
            <div class="item-resultado">
                <h2> Power BI </h2>
                <p class="descricao-meta">O Power BI é outra ferramenta de visualização de dados, oferecida pela Microsoft. Ele permite conectar a diferentes fontes de dados, criar relatórios e dashboards personalizados, e compartilhar insights com outros usuários.</p>
                <a href="https://powerbi.microsoft.com/" target="_blank" >Explore o Power BI </a>
            </div>                  */