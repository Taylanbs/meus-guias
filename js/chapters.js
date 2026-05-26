const CHAPTERS = [
  {
    id: 0,
    title: "Nota da Nutri",
    label: "Introdução",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Introdução</div>
        <h1 class="chapter-cover-title">Nota da Nutri</h1>
        <p class="chapter-cover-subtitle">"O pão é talvez o alimento mais ancestral que existe. Em cada migalha, há química, paciência e história."</p>
      </div>

      <p>Há algo de profundamente humano no ato de fazer pão. As mãos que sovam a massa tocam séculos de tradição. A fermentação que transforma farinha e água em algo vivo e perfumado é, ao mesmo tempo, o processo mais simples e mais sofisticado da gastronomia.</p>

      <p>Como nutricionista especializada em Bioquímica da Nutrição e Nutrigenômica, costumo olhar para o pão de forma diferente. Não apenas como alimento, mas como um <strong>sistema bioquímico vivo</strong>, em que cada ingrediente tem um papel, cada etapa influencia a digestibilidade, o índice glicêmico, o perfil de aminoácidos, a biodisponibilidade de minerais.</p>

      <p>Este manual foi criado para você que deseja ir além das receitas. Aqui você encontrará o <em>porquê</em> por trás de cada passo. A ciência que explica o comportamento do glúten. A microbiologia da fermentação natural. A bioquímica da crosta dourada. E a arte de equilibrar tudo isso em um pão que nutre o corpo e encanta os sentidos.</p>

      <div class="callout-quote">
        <p>Prepare seu espaço. Respire fundo. E permita-se viver cada etapa com presença e intenção.</p>
      </div>

      <p style="text-align:right; font-family:'Lora',serif; font-style:italic; color:var(--text-muted);">Com carinho e ciência,<br><strong>Taylan Santos</strong><br><span style="font-size:13px;">Nutricionista &amp; Cientista de Dados</span></p>
    `
  },
  {
    id: 1,
    title: "Os Ingredientes e Sua Ciência",
    label: "Capítulo I",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo I</div>
        <h1 class="chapter-cover-title">Os Ingredientes e Sua Ciência</h1>
        <p class="chapter-cover-subtitle">Todo pão extraordinário começa com ingredientes compreendidos em profundidade.</p>
      </div>

      <p>Não basta reunir farinha, água, fermento e sal: é preciso saber o que cada um faz dentro da massa, como interagem entre si e como influenciam não apenas o sabor, mas também a nutrição e a digestibilidade do produto final.</p>

      <h2>1. A Farinha: A Base de Tudo</h2>

      <p>A farinha de trigo é composta principalmente por <strong>amido (70–75%)</strong>, <strong>proteínas (10–14%)</strong> e pequenas frações de lipídios, minerais e vitaminas do complexo B. As proteínas de maior interesse são a <em>gliadina</em> e a <em>glutenina</em>, que, quando hidratadas e trabalhadas mecanicamente, formam o glúten — a rede proteica que confere estrutura, elasticidade e capacidade de reter os gases produzidos pela fermentação.</p>

      <div class="callout">
        <div class="callout-label">Nota Científica</div>
        <p>A fermentação longa com massa madre reduz os antinutrientes (fitatos) presentes na farinha integral em até 90%, aumentando significativamente a biodisponibilidade de zinco, ferro e magnésio.</p>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tipo de Farinha</th>
              <th>% Proteína</th>
              <th>Ideal para</th>
              <th>Observação Nutricional</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Farinha Branca T45</td><td>9–10%</td><td>Brioches, croissants</td><td>Baixo teor de fibras; alta digestão</td></tr>
            <tr><td>Farinha T55</td><td>10–11%</td><td>Pão francês, baguete</td><td>Boa para fermentação longa</td></tr>
            <tr><td>Farinha de Trigo Tipo 1</td><td>10–11,5%</td><td>Pães caseiros, pão de forma</td><td>Versátil; boa opção de entrada para panificação artesanal</td></tr>
            <tr><td>Farinha de Força</td><td>12–14%</td><td>Sourdough, brioche</td><td>Glúten robusto, estrutura superior</td></tr>
            <tr><td>Farinha Integral</td><td>12–14%</td><td>Pães rústicos</td><td>Rico em fibras, vitaminas B e minerais</td></tr>
            <tr><td>Farinha de Centeio</td><td>8–10%</td><td>Pães escandinavos</td><td>Baixo IG; rico em lignanas</td></tr>
          </tbody>
        </table>
      </div>

      <h2>2. A Água: O Solvente Vital</h2>

      <p>A água é o agente de hidratação que ativa o glúten e os fermentos. A <strong>hidratação da massa</strong>, medida em percentual Baker's (gramas de água por 100g de farinha), define diretamente a textura do miolo:</p>

      <ul>
        <li>Massas com <strong>65–70%</strong> produzem pães mais firmes</li>
        <li>Massas com <strong>75–85%</strong> produzem miolos abertos, aerados e alveolados — característicos dos pães artesanais de alta qualidade</li>
      </ul>

      <div class="callout">
        <div class="callout-label">Temperatura Ideal</div>
        <p>Entre 24°C e 28°C para fermentação em temperatura ambiente. Água quente acima de 40°C pode inativar as leveduras. Prefira água filtrada — o cloro pode interferir negativamente no sourdough.</p>
      </div>

      <h2>3. O Fermento: A Alma do Pão</h2>

      <p>O fermento é o agente biológico ou químico responsável pela produção de CO₂ (dióxido de carbono), que infla a rede de glúten e cria a estrutura porosa do pão. Existem três categorias principais:</p>

      <ul>
        <li><strong>Fermento Biológico Fresco:</strong> Saccharomyces cerevisiae viva, com alta atividade. Usado em proporção de 2–3% sobre o peso da farinha. Produz sabor mais neutro e ação mais rápida.</li>
        <li><strong>Fermento Biológico Seco (instant/ativo):</strong> versão desidratada e estabilizada. Usar 0,5–1% para fermentação longa ou 1–2% para fermentação rápida.</li>
        <li><strong>Massa Madre (Sourdough):</strong> cultura mista de leveduras selvagens e bactérias ácido-láticas. Produz pães de sabor complexo, maior digestibilidade e índice glicêmico reduzido.</li>
      </ul>

      <div class="callout-quote">
        <p>A fermentação não é apenas uma etapa: é onde o pão adquire alma. O tempo dado à fermentação é o tempo dado ao sabor, à textura e à digestibilidade.</p>
      </div>

      <h2>4. O Sal: O Regulador Invisível</h2>

      <p>O sal (NaCl) <strong>fortalece a rede de glúten</strong>, regula a velocidade de fermentação (inibindo ligeiramente as leveduras), realça sabores e controla a atividade de água na massa. A proporção clássica é de <strong>1,8–2,2%</strong> sobre o peso total da farinha.</p>

      <div class="callout callout-warning">
        <div class="callout-label">⚠️ Atenção</div>
        <p>NUNCA coloque sal em contato direto com o fermento biológico; o sal desidrata as células vivas e pode reduzir drasticamente sua eficácia.</p>
      </div>

      <h2>5. As Gorduras: Maciez e Complexidade</h2>

      <p>Manteiga, azeite, óleo de coco ou banha interferem na textura do miolo, na maciez do pão e no sabor. Do ponto de vista bioquímico, as gorduras recobrem parcialmente as proteínas do glúten, tornando a rede menos rígida e conferindo maior maciez e longevidade ao produto.</p>

      <ul>
        <li><strong>Manteiga:</strong> confere sabor rico e maciez. Usar temperatura ambiente (pomada) para incorporação uniforme.</li>
        <li><strong>Azeite de Oliva Extra Virgem:</strong> ideal para ciabattas e focaccias. Rico em polifenóis com propriedades antioxidantes.</li>
        <li><strong>Óleo de Coco:</strong> boa opção para intolerantes à lactose. Confere aroma levemente adocicado.</li>
      </ul>

      <h3>5.1 Margarina na Panificação</h3>

      <p>A margarina é um substituto popular da manteiga, especialmente por seu custo inferior e praticidade. Pontos importantes:</p>

      <ul>
        <li>Margarinas com teor de gordura <strong>acima de 70–80%</strong> apresentam comportamento mais próximo da manteiga.</li>
        <li>Margarinas <strong>"light"</strong> (com alto teor de água e ar) NÃO são recomendadas — podem comprometer a estrutura do glúten.</li>
        <li>Atualmente a maioria das marcas no Brasil usa interesterificação — elimina ou reduz gorduras trans. Verifique sempre o rótulo.</li>
      </ul>

      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Marca</th><th>Tipo</th><th>% Gordura</th><th>Indicação</th></tr>
          </thead>
          <tbody>
            <tr><td>Qualy Culinária (BRF)</td><td>Culinária sem sal</td><td>80%</td><td>Ótima — estrutura consistente</td></tr>
            <tr><td>Becel Culinária (Unilever)</td><td>Culinária</td><td>80%</td><td>Boa para pão de forma</td></tr>
            <tr><td>Doriana Culinária (Cargill)</td><td>Culinária</td><td>75–80%</td><td>Funcional para pães simples</td></tr>
            <tr><td>Prato Fino Culinária</td><td>Culinária sem sal</td><td>80%</td><td>Boa opção custo-benefício</td></tr>
            <tr><td>Margarinas "light"</td><td>Light / Fit</td><td>&lt;60%</td><td>NÃO recomendada</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 2,
    title: "Equipamentos do Padeiro de Elite",
    label: "Capítulo II",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo II</div>
        <h1 class="chapter-cover-title">Equipamentos do Padeiro de Elite</h1>
        <p class="chapter-cover-subtitle">Não é necessário um arsenal profissional, mas cada equipamento deve ser de qualidade e cumprir sua função com precisão.</p>
      </div>

      <h2>1. A Balança de Precisão</h2>
      <p>Na panificação profissional, não existe "uma xícara de farinha". Medidas volumétricas são imprecisas e não reproduzíveis. Utilize sempre uma <strong>balança digital com precisão mínima de 1g</strong>. Para sal e fermento seco, prefira balanças com 0,1g de precisão.</p>
      <div class="callout">
        <div class="callout-label">Recomendação</div>
        <p>Balanças com função tara são essenciais para pesagem sequencial de ingredientes sem trocar de recipiente.</p>
      </div>

      <h2>2. O Termômetro: Seu Melhor Aliado</h2>
      <p>A temperatura é uma das variáveis mais críticas na panificação. Um termômetro de sonda digital permite controlar com precisão cada etapa do processo.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Ponto de Controle</th><th>Temperatura Alvo</th></tr>
          </thead>
          <tbody>
            <tr><td>Água de hidratação</td><td>24–28°C (normal) | 8–14°C (prova fria)</td></tr>
            <tr><td>Massa após sova (DDT)</td><td>24–26°C — ideal para fermentação controlada</td></tr>
            <tr><td>Interior do pão assado</td><td>93–98°C — sinal de cocção completa</td></tr>
            <tr><td>Temperatura do forno</td><td>220–260°C — crosta crocante exige calor intenso</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. A Pedra ou Aço Refratário</h2>
      <p>A pedra refratária (ou aço refratário/baking steel) absorve e irradia calor de forma uniforme e intensa, simulando fornos profissionais a lenha ou a vapor. O resultado é uma crosta mais desenvolvida, crocante e com sabor caramelizado superior.</p>
      <div class="callout">
        <div class="callout-label">Alternativa Acessível</div>
        <p>Uma assadeira pesada de ferro fundido, pré-aquecida, produz resultados próximos aos de uma pedra profissional.</p>
      </div>

      <h2>4. O Banneton — A Cama do Pão</h2>
      <p>O banneton (ou brotform) é a cesta de fermentação feita de vime ou polipropileno que dá forma ao pão durante a fermentação final (prova fria). Além de moldar, o banneton absorve umidade superficial, favorecendo a formação da crosta.</p>

      <h2>5. A Lâmina de Corte (Lame)</h2>
      <p>A lâmina é o instrumento usado para fazer os cortes (grigne/scoring) na superfície do pão antes de entrar no forno. Os cortes controlam como o pão vai expandir durante o forno, permitindo que o gás escape de forma dirigida e criando a assinatura visual característica de cada pão artesanal.</p>

      <div class="callout-quote">
        <p>O corte do pão não é apenas técnica — é a assinatura do padeiro. A forma como você marca o pão diz muito sobre quem você é.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "A Ciência da Massa",
    label: "Capítulo III",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo III</div>
        <h1 class="chapter-cover-title">A Ciência da Massa</h1>
        <p class="chapter-cover-subtitle">Desenvolvimento e Fermentação — Compreender o que acontece dentro da massa é o que separa o padeiro amador do artesão.</p>
      </div>

      <p>Cada etapa tem uma razão bioquímica precisa e dominar essa lógica é o que permite adaptar, criar e corrigir com maestria.</p>

      <h2>1. A Autólise: O Repouso que Trabalha por Você</h2>
      <p>A autólise é a técnica de misturar apenas a farinha e a água (sem sal e sem fermento) e deixar repousar por <strong>20 a 60 minutos</strong> antes de adicionar os demais ingredientes.</p>
      <p>Durante esse período, as enzimas naturalmente presentes na farinha (proteases e amilases) começam a degradar levemente as proteínas, resultando em:</p>
      <ul>
        <li>Desenvolvimento mais rápido e eficiente do glúten na sova subsequente</li>
        <li>Massa mais extensível e fácil de moldar</li>
        <li>Miolo com alvéolos mais abertos e irregulares — característica premium dos pães artesanais</li>
        <li>Redução do tempo de sova em até 30%</li>
      </ul>

      <h2>2. A Sova: Construindo a Rede de Glúten</h2>
      <p>A sova tem como objetivo desenvolver e organizar a rede de glúten — a malha proteica tridimensional que retém o CO₂ produzido pela fermentação e confere estrutura ao pão.</p>

      <h3>Técnicas de Sova</h3>
      <ul>
        <li><strong>Sova Tradicional (método francês):</strong> ideal para massas com até 70% de hidratação. 10–15 minutos de bater, esticar e dobrar.</li>
        <li><strong>Slap and Fold:</strong> para massas entre 70% e 80%. A massa é levantada, batida na bancada e dobrada sobre si mesma. Desenvolve glúten rapidamente sem superaquecer.</li>
        <li><strong>Coil Fold:</strong> técnica delicada para massas de alta hidratação (80%+). Preserva a estrutura gasosa já formada.</li>
        <li><strong>Stretch and Fold:</strong> executado durante a bulk fermentation. A cada 30–45 minutos, esticada e dobrada em quatro direções.</li>
      </ul>

      <div class="callout-quote">
        <p>O pão bem sovado tem uma textura sedosa, elástica e não cola nas mãos. Se você chegar nesse ponto, a rede de glúten está desenvolvida. Confie nas mãos.</p>
      </div>

      <h2>3. A Fermentação em Massa (Bulk Fermentation)</h2>
      <p>A fermentação bulk é a primeira fermentação após a sova. As leveduras consomem açúcares e produzem CO₂ e etanol, enquanto as bactérias ácido-láticas produzem ácidos lático e acético, que contribuem para o sabor e a conservação do pão.</p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Condição</th><th>Tempo</th><th>Resultado</th></tr>
          </thead>
          <tbody>
            <tr><td>Temperatura ambiente 24°C</td><td>3–4 horas</td><td>Sabor mais suave, menos ácido</td></tr>
            <tr><td>Temperatura ambiente 26–28°C</td><td>2–3 horas</td><td>Fermentação ativa: atenção ao timing</td></tr>
            <tr><td>Geladeira (4–8°C)</td><td>12–18 horas</td><td>Sabor complexo, crosta superior, praticidade</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout">
        <div class="callout-label">Como saber que a bulk terminou</div>
        <p>A massa deve crescer 50–75% do volume inicial, ter bolhas visíveis na superfície e nas laterais, apresentar textura aerada ao toque e se soltar facilmente das paredes do recipiente.</p>
      </div>

      <h2>4. A Pré-Forma e a Forma Final</h2>
      <p>Após a bulk, a massa é dividida (se necessário), pré-formada em bolas tensionadas e descansada por <strong>15–30 minutos</strong> (bench rest). A seguir, é moldada na forma final: bâtard (oblonga), boule (redonda), baguete, etc.</p>
      <p>A tensão superficial criada na modelagem cria uma "pele" que segura a estrutura durante o forno e favorece a expansão controlada nos cortes.</p>

      <h2>5. A Prova Final (Segunda Fermentação)</h2>
      <p>Após a modelagem, o pão passa pela prova final: período de fermentação secundária que irá definir o volume e a leveza do miolo.</p>

      <div class="callout">
        <div class="callout-label">Teste do Dedo</div>
        <p>Pressione levemente a massa. Se ela voltar lentamente e parcialmente, está no ponto. Se voltar imediatamente, precisa de mais tempo. Se não voltar, fermentou demais.</p>
      </div>

      <h3>Vantagens da Prova Fria</h3>
      <ul>
        <li>Sabor mais complexo e desenvolvido</li>
        <li>Crosta mais espessa e resistente</li>
        <li>Melhor estrutura para corte na lâmina</li>
        <li>Praticidade: o padeiro trabalha no próprio ritmo</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "A Alquimia do Forno",
    label: "Capítulo IV",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo IV</div>
        <h1 class="chapter-cover-title">A Alquimia do Forno</h1>
        <p class="chapter-cover-subtitle">O forno é onde a magia acontece. É no calor intenso que a massa viva se transforma em pão.</p>
      </div>

      <h2>1. O Vapor — O Segredo da Crosta Profissional</h2>
      <p>O vapor nos primeiros minutos de forno mantém a superfície do pão úmida e extensível, permitindo que ele expanda ao máximo (<em>oven spring</em>) antes de a crosta se firmar. Sem vapor, a crosta endurece prematuramente e o pão não atinge seu volume potencial.</p>

      <ul>
        <li><strong>Método 1 — Dutch Oven:</strong> Assar os primeiros 20 minutos com a tampa cria um ambiente de vapor natural. É o método mais acessível e eficaz para fornos domésticos.</li>
        <li><strong>Método 2 — Assadeira com Pedras:</strong> Pedras de basalto no fundo do forno + água fervente no momento de entrar com o pão. O vapor se forma instantaneamente.</li>
        <li><strong>Método 3 — Spray de Água:</strong> Borrifar água nas paredes do forno nos primeiros 5 minutos. Menos eficaz, mas válido.</li>
      </ul>

      <h2>2. As Reações de Maillard e a Caramelização</h2>
      <p>A cor dourada e o aroma irresistível do pão são produto de duas reações químicas distintas:</p>
      <ul>
        <li><strong>Reação de Maillard:</strong> ocorre entre aminoácidos e açúcares redutores a partir de 140°C. Produz centenas de compostos aromáticos — notas de caramelo, nozes, biscoito e malte.</li>
        <li><strong>Caramelização:</strong> degradação térmica dos açúcares a temperaturas acima de 160°C. Contribui para a coloração marrom-dourada e sabores adocicados na crosta.</li>
      </ul>

      <div class="callout-quote">
        <p>A crosta escura não é um erro — é desenvolvimento de sabor. Padeiros experientes sabem que uma crosta bem desenvolvida é onde 80% do sabor de um pão artesanal está concentrado.</p>
      </div>

      <h2>3. Protocolo de Temperatura</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Tipo de Pão</th><th>Temp. Inicial</th><th>Temp. Final</th><th>Tempo Total</th></tr>
          </thead>
          <tbody>
            <tr><td>Sourdough artesanal</td><td>250°C</td><td>220°C</td><td>45–55 min (20c/tampa + 25–35 sem)</td></tr>
            <tr><td>Pão de forma</td><td>200°C</td><td>200°C</td><td>35–45 min</td></tr>
            <tr><td>Baguete</td><td>240°C</td><td>220°C</td><td>25–30 min</td></tr>
            <tr><td>Focaccia</td><td>220°C</td><td>220°C</td><td>25–30 min</td></tr>
            <tr><td>Brioche</td><td>180°C</td><td>175°C</td><td>30–35 min</td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. O Resfriamento — A Etapa Esquecida</h2>
      <p>O pão não termina de cozinhar quando sai do forno. A estrutura do miolo ainda está em formação: a gelatinização do amido está se completando e o vapor interno precisa escapar gradualmente. <strong>Cortar o pão quente é um dos maiores erros da panificação.</strong></p>

      <div class="callout callout-warning">
        <div class="callout-label">Regra de Ouro</div>
        <p>Pães artesanais de alta hidratação: mínimo 1 hora antes de cortar. Sourdough de 1kg: mínimo 2 horas. Pães enriquecidos (brioche, pão de leite): 30–45 minutos.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Receitas de Alta Performance",
    label: "Capítulo V",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo V</div>
        <h1 class="chapter-cover-title">Receitas Exclusivas de Alta Performance</h1>
        <p class="chapter-cover-subtitle">Desenvolvidas com foco em qualidade nutricional, sabor excepcional e técnica apurada. Apresentadas em Baker's Percentage.</p>
      </div>

      <div class="recipe-block">
        <div class="recipe-block-header">
          <div class="recipe-block-label">✦ Destaque</div>
          <div class="recipe-block-title">Sourdough Clássico de Alta Hidratação</div>
          <div class="recipe-block-sub">O símbolo máximo da panificação artesanal de elite</div>
        </div>
        <div class="recipe-ingredients">
          <h4>Ingredientes</h4>
          <div class="ingredient-row"><span class="ing-name">Farinha de trigo forte</span><span><span class="ing-amount">450g</span><span class="ing-pct">90%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Farinha integral</span><span><span class="ing-amount">50g</span><span class="ing-pct">10%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Água filtrada (26°C)</span><span><span class="ing-amount">375g</span><span class="ing-pct">75%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Massa madre ativa</span><span><span class="ing-amount">100g</span><span class="ing-pct">20%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Sal marinho fino</span><span><span class="ing-amount">10g</span><span class="ing-pct">2%</span></span></div>
        </div>
        <div class="recipe-steps">
          <h4>Passo a Passo</h4>
          <div class="step"><span class="step-num">1</span><span class="step-text"><strong>Autólise:</strong> Misture a farinha e 350g de água (reserve 25g). Cubra e descanse por 40 minutos.</span></div>
          <div class="step"><span class="step-num">2</span><span class="step-text"><strong>Levain:</strong> Adicione a massa madre e os 25g de água restantes. Incorpore completamente.</span></div>
          <div class="step"><span class="step-num">3</span><span class="step-text"><strong>Sal:</strong> Adicione o sal 20 minutos após o levain, dissolvendo-o na massa.</span></div>
          <div class="step"><span class="step-num">4</span><span class="step-text"><strong>Bulk Fermentation:</strong> Mantenha a 24–26°C por 4–5 horas, realizando 4 séries de stretch and fold nas primeiras 2 horas (a cada 30 minutos).</span></div>
          <div class="step"><span class="step-num">5</span><span class="step-text"><strong>Pré-forma:</strong> Pré-forme em bola tensionada. Descanse 30 minutos descoberta.</span></div>
          <div class="step"><span class="step-num">6</span><span class="step-text"><strong>Modelagem:</strong> Modele na forma escolhida (boule ou bâtard) com tensão firme.</span></div>
          <div class="step"><span class="step-num">7</span><span class="step-text"><strong>Prova Fria:</strong> Coloque no banneton enfarinhado. Cubra com plástico e leve à geladeira por 12–16 horas.</span></div>
          <div class="step"><span class="step-num">8</span><span class="step-text"><strong>Forno:</strong> Pré-aqueça a 250°C com Dutch oven por 1 hora. Vire o pão, corte com lâmina, tampe e asse 20 min. Retire a tampa e asse por mais 25–30 min até a crosta ficar profundamente dourada.</span></div>
          <div class="step"><span class="step-num">9</span><span class="step-text"><strong>Resfriamento:</strong> Mínimo 2 horas antes de cortar.</span></div>
        </div>
      </div>

      <div class="recipe-block">
        <div class="recipe-block-header">
          <div class="recipe-block-label">✦ Italiana</div>
          <div class="recipe-block-title">Focaccia com Ervas e Flor de Sal</div>
          <div class="recipe-block-sub">Maciez esponjosa, crosta dourada e uma generosidade italiana</div>
        </div>
        <div class="recipe-ingredients">
          <h4>Ingredientes</h4>
          <div class="ingredient-row"><span class="ing-name">Farinha branca T55</span><span><span class="ing-amount">500g</span><span class="ing-pct">100%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Água filtrada (26°C)</span><span><span class="ing-amount">400g</span><span class="ing-pct">80%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Azeite extra virgem</span><span><span class="ing-amount">50g</span><span class="ing-pct">10%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Fermento seco instantâneo</span><span><span class="ing-amount">5g</span><span class="ing-pct">1%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Sal fino</span><span><span class="ing-amount">10g</span><span class="ing-pct">2%</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Flor de sal + ervas</span><span><span class="ing-amount">a gosto</span></span></div>
        </div>
        <div class="recipe-steps">
          <h4>Passo a Passo</h4>
          <div class="step"><span class="step-num">1</span><span class="step-text">Misture farinha, água, fermento e sal. Incorpore o azeite gradualmente. Deixe repousar por 30 minutos.</span></div>
          <div class="step"><span class="step-num">2</span><span class="step-text">Realize 3 séries de stretch and fold a cada 30 minutos.</span></div>
          <div class="step"><span class="step-num">3</span><span class="step-text">Transfira para assadeira untada com azeite. Cubra e fermente por 2 horas (ou 12–16h na geladeira).</span></div>
          <div class="step"><span class="step-num">4</span><span class="step-text">Com os dedos bem untados em azeite, pressione toda a superfície, criando os famosos alvéolos. Regue generosamente com azeite.</span></div>
          <div class="step"><span class="step-num">5</span><span class="step-text">Distribua alecrim fresco, tomilho e a flor de sal.</span></div>
          <div class="step"><span class="step-num">6</span><span class="step-text">Asse a 220°C por 25–30 minutos até dourar profundamente nas bordas e superfície.</span></div>
          <div class="step"><span class="step-num">7</span><span class="step-text">Finalize com mais um fio de azeite ao sair do forno. Sirva morna.</span></div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Diagnóstico e Resolução de Problemas",
    label: "Capítulo VI",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo VI</div>
        <h1 class="chapter-cover-title">Diagnóstico e Resolução de Problemas</h1>
        <p class="chapter-cover-subtitle">O que define o excelente padeiro não é a ausência de erros, mas a capacidade de diagnóstico preciso.</p>
      </div>

      <p>Use este guia como seu protocolo de investigação. Observe, questione, isole variáveis e ajuste uma coisa de cada vez.</p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Problema</th><th>Causas Prováveis</th><th>Solução</th></tr>
          </thead>
          <tbody>
            <tr><td>Pão não cresceu</td><td>Fermento inativo; água muito quente; sal em contato com fermento</td><td>Teste o fermento em água morna com açúcar; controle temperatura; adicione sal após o fermento estar incorporado</td></tr>
            <tr><td>Miolo muito denso</td><td>Glúten subdesenvolvido; fermentação insuficiente; excesso de farinha</td><td>Sove mais tempo; estenda a bulk fermentation; pese os ingredientes com precisão</td></tr>
            <tr><td>Crosta pálida e mole</td><td>Temperatura de forno baixa; falta de vapor inicial; pão retirado cedo</td><td>Aumente para 240–250°C; use Dutch oven; verifique temp interna do pão (93–98°C)</td></tr>
            <tr><td>Pão muito ácido</td><td>Fermentação excessiva; massa madre muito ácida; temperatura alta</td><td>Reduza o tempo de bulk; use prova fria para controlar acidez; alimente a madre com mais frequência</td></tr>
            <tr><td>Crosta rachando no resfriamento</td><td>Contraste térmico excessivo; crosta muito grossa</td><td>Não exponha o pão ao frio diretamente; entreabre a porta do forno nos últimos minutos</td></tr>
            <tr><td>Massa gruda demais nas mãos</td><td>Alta hidratação sem técnica adequada; autólise insuficiente</td><td>Use técnica slap & fold; molhe as mãos em vez de enfarinhar; respeite o tempo de autólise</td></tr>
            <tr><td>Alvéolos muito irregulares</td><td>Desgaseificação na modelagem; fermentação excessiva</td><td>Modele com delicadeza, preservando bolhas; controle o tempo de prova</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout-quote">
        <p>O diagnóstico correto de um problema de panificação requer a mesma lógica científica que usamos na clínica. Observe, questione, isole variáveis e ajuste uma coisa de cada vez. Não mude tudo ao mesmo tempo.</p>
      </div>
    `
  },
  {
    id: 7,
    title: "A Nutrição por Dentro do Pão",
    label: "Capítulo VII",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo VII</div>
        <h1 class="chapter-cover-title">A Nutrição por Dentro do Pão</h1>
        <p class="chapter-cover-subtitle">O olhar científico sobre o valor nutricional do pão artesanal e como as técnicas influenciam diretamente sua qualidade para o corpo humano.</p>
      </div>

      <h2>1. Sourdough e o Índice Glicêmico</h2>
      <p>Pães de fermentação natural com massa madre têm <strong>índice glicêmico significativamente menor</strong> do que pães de fermentação rápida com fermento comercial. Os ácidos orgânicos produzidos (lático e acético) reduzem a velocidade de digestão do amido, resultando em resposta glicêmica mais controlada — fundamental para pacientes com resistência insulínica, diabetes tipo 2 e PCOS.</p>

      <h2>2. Redução de Antinutrientes pela Fermentação</h2>
      <p>Os fitatos, presentes em grãos integrais, quelam minerais como ferro, zinco e magnésio, reduzindo sua absorção. A fermentação longa, especialmente com massa madre, ativa a fitase endógena da farinha e degrada a maior parte dos fitatos — tornando o pão integral feito com fermentação natural <strong>nutricionalmente superior</strong> ao pão integral convencional.</p>

      <h2>3. Glúten e Digestibilidade</h2>
      <p>A fermentação longa com massa-madre pré-digere parcialmente as proteínas do glúten, incluindo as gliadinas responsáveis pela sensibilidade em indivíduos não celíacos. Estudos mostram que pães de sourdough fermentados por mais de 8 horas podem ser melhor tolerados por sensíveis ao glúten (não celíacos) do que pães convencionais.</p>

      <div class="callout callout-warning">
        <div class="callout-label">⚠️ Importante</div>
        <p>Pães de sourdough NÃO são adequados para celíacos! A proteína que causa a reação imunológica permanece presente, mesmo que reduzida.</p>
      </div>

      <h2>4. Perfil Nutricional Comparativo</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Parâmetro (por 100g)</th><th>Pão Branco Industrial</th><th>Pão Integral Convencional</th><th>Sourdough Artesanal Integral</th></tr>
          </thead>
          <tbody>
            <tr><td>Índice Glicêmico</td><td>~70–75</td><td>~55–65</td><td>~40–54</td></tr>
            <tr><td>Fibra Alimentar</td><td>~2,7g</td><td>~6,5g</td><td>~6,5–7,5g</td></tr>
            <tr><td>Biodisponibilidade de Fe e Zn</td><td>Baixa</td><td>Baixa–Moderada</td><td>Moderada–Alta</td></tr>
            <tr><td>Probióticos (após forno)</td><td>Não</td><td>Não</td><td>Não (mas pré-bióticos sim)</td></tr>
            <tr><td>Digestibilidade proteica</td><td>Moderada</td><td>Moderada</td><td>Superior</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout-quote">
        <p>Um pão bem feito, fermentado lentamente com ingredientes de qualidade, não é indulgência. É nutrição de verdade — ciência e prazer no mesmo alimento.</p>
      </div>
    `
  },
  {
    id: 8,
    title: "Receitas Simples e Rápidas",
    label: "Capítulo VIII",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Capítulo VIII</div>
        <h1 class="chapter-cover-title">Receitas Simples e Rápidas</h1>
        <p class="chapter-cover-subtitle">Versões acessíveis com Farinha de Trigo Tipo 1 — para começar hoje.</p>
      </div>

      <p>Nem sempre temos acesso à farinha de força ou à massa madre ativa. As receitas a seguir foram desenvolvidas com farinha de trigo tipo 1 — a farinha padrão encontrada em qualquer mercado —, fermento biológico seco ou fresco e técnicas simplificadas.</p>

      <div class="recipe-block">
        <div class="recipe-block-header">
          <div class="recipe-block-label">✦ Clássico</div>
          <div class="recipe-block-title">Pão de Forma Caseiro Simples</div>
          <div class="recipe-block-sub">Macio, versátil e feito com o que você já tem em casa</div>
        </div>
        <div class="recipe-ingredients">
          <h4>Ingredientes</h4>
          <div class="ingredient-row"><span class="ing-name">Farinha de trigo tipo 1</span><span><span class="ing-amount">500g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Água filtrada morna (35–38°C)</span><span><span class="ing-amount">300ml</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Fermento biológico seco</span><span><span class="ing-amount">7g (1 sachê)</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Açúcar</span><span><span class="ing-amount">12g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Sal</span><span><span class="ing-amount">10g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Óleo vegetal ou margarina culinária</span><span><span class="ing-amount">30g</span></span></div>
        </div>
        <div class="recipe-steps">
          <h4>Passo a Passo</h4>
          <div class="step"><span class="step-num">1</span><span class="step-text">Dissolva o fermento e o açúcar na água morna. Aguarde 5–10 minutos até espumar (sinal de que o fermento está ativo).</span></div>
          <div class="step"><span class="step-num">2</span><span class="step-text">Em uma tigela grande, misture a farinha e o sal. Abra um espaço no centro.</span></div>
          <div class="step"><span class="step-num">3</span><span class="step-text">Adicione a mistura de fermento e o óleo/margarina. Misture até formar uma massa.</span></div>
          <div class="step"><span class="step-num">4</span><span class="step-text">Sove em superfície enfarinhada por 10 minutos, até ficar lisa e elástica.</span></div>
          <div class="step"><span class="step-num">5</span><span class="step-text">Cubra com pano úmido e deixe descansar em local morno por 1 hora (deve dobrar de volume).</span></div>
          <div class="step"><span class="step-num">6</span><span class="step-text">Desgaseifique levemente, modele e coloque em forma untada.</span></div>
          <div class="step"><span class="step-num">7</span><span class="step-text">Deixe descansar por mais 30–40 minutos (segunda fermentação).</span></div>
          <div class="step"><span class="step-num">8</span><span class="step-text">Asse a 180°C por 35–40 minutos. Pronto quando a base soar oco ao bater.</span></div>
          <div class="step"><span class="step-num">9</span><span class="step-text">Resfrie sobre grade por pelo menos 30 minutos antes de fatiar.</span></div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-label">Dica Nutricional</div>
        <p>Substitua 100g de farinha Tipo 1 por farinha integral para aumentar o teor de fibras e reduzir o IG sem comprometer muito a textura. Adicione 1–2 colheres extras de água nesse caso.</p>
      </div>

      <div class="recipe-block">
        <div class="recipe-block-header">
          <div class="recipe-block-label">✦ No-Knead</div>
          <div class="recipe-block-title">Pão Rústico Rápido (Sem Sovar)</div>
          <div class="recipe-block-sub">Alta hidratação, sem técnica — só mistura e espera</div>
        </div>
        <div class="recipe-ingredients">
          <h4>Ingredientes</h4>
          <div class="ingredient-row"><span class="ing-name">Farinha de trigo tipo 1</span><span><span class="ing-amount">400g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Água filtrada (temperatura ambiente)</span><span><span class="ing-amount">320ml</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Fermento biológico seco</span><span><span class="ing-amount">3g (½ sachê)</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Sal</span><span><span class="ing-amount">9g</span></span></div>
        </div>
        <div class="recipe-steps">
          <h4>Passo a Passo</h4>
          <div class="step"><span class="step-num">1</span><span class="step-text">Misture todos os ingredientes com uma colher até incorporar. A massa ficará grudenta e irregular — é assim mesmo.</span></div>
          <div class="step"><span class="step-num">2</span><span class="step-text">Cubra a tigela com plástico e deixe em temperatura ambiente por 8–12 horas (ou geladeira por 12–18 horas).</span></div>
          <div class="step"><span class="step-num">3</span><span class="step-text">A massa estará cheia de bolhas e com volume aumentado.</span></div>
          <div class="step"><span class="step-num">4</span><span class="step-text">Transfira para superfície bem enfarinhada e dobre sobre si mesma 4 vezes. Modele em bola.</span></div>
          <div class="step"><span class="step-num">5</span><span class="step-text">Descanse 30–45 minutos sobre papel manteiga enfarinhado enquanto o forno aquece.</span></div>
          <div class="step"><span class="step-num">6</span><span class="step-text">Pré-aqueça o forno a 240°C com panela de ferro ou cerâmica com tampa dentro.</span></div>
          <div class="step"><span class="step-num">7</span><span class="step-text">Coloque o pão (com o papel) dentro da panela quente. Tampe e asse 20 minutos.</span></div>
          <div class="step"><span class="step-num">8</span><span class="step-text">Retire a tampa e asse por mais 20–25 minutos até dourar bem.</span></div>
          <div class="step"><span class="step-num">9</span><span class="step-text">Resfrie 1 hora antes de cortar.</span></div>
        </div>
      </div>

      <div class="recipe-block">
        <div class="recipe-block-header">
          <div class="recipe-block-label">✦ Aromático</div>
          <div class="recipe-block-title">Pão de Alho e Ervas</div>
          <div class="recipe-block-sub">Aromático, rápido e impressionante</div>
        </div>
        <div class="recipe-ingredients">
          <h4>Ingredientes</h4>
          <div class="ingredient-row"><span class="ing-name">Farinha de trigo tipo 1</span><span><span class="ing-amount">500g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Água morna</span><span><span class="ing-amount">310ml</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Fermento biológico seco</span><span><span class="ing-amount">7g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Azeite de oliva</span><span><span class="ing-amount">40ml</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Alho picado ou em pasta</span><span><span class="ing-amount">3–4 dentes</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Sal</span><span><span class="ing-amount">10g</span></span></div>
          <div class="ingredient-row"><span class="ing-name">Ervas secas (orégano, tomilho, alecrim)</span><span><span class="ing-amount">2 col. chá</span></span></div>
        </div>
        <div class="recipe-steps">
          <h4>Passo a Passo</h4>
          <div class="step"><span class="step-num">1</span><span class="step-text">Dissolva o fermento na água morna com uma pitada de açúcar. Aguarde 5 minutos.</span></div>
          <div class="step"><span class="step-num">2</span><span class="step-text">Misture a farinha, sal e ervas. Incorpore o fermento dissolvido e o azeite.</span></div>
          <div class="step"><span class="step-num">3</span><span class="step-text">Acrescente o alho e sove por 8–10 minutos.</span></div>
          <div class="step"><span class="step-num">4</span><span class="step-text">Fermente 1 hora coberto, em local morno.</span></div>
          <div class="step"><span class="step-num">5</span><span class="step-text">Modele em bola ou formato oval. Segunda fermentação: 30 minutos.</span></div>
          <div class="step"><span class="step-num">6</span><span class="step-text">Asse a 200°C por 35–40 minutos. Finalize com mais azeite ao sair do forno.</span></div>
        </div>
      </div>
    `
  },
  {
    id: 9,
    title: "Guia de Marcas e Produtos",
    label: "Guia Final",
    content: `
      <div class="chapter-cover">
        <div class="chapter-cover-ornament">✦ ✦ ✦</div>
        <div class="chapter-cover-num">Guia Final</div>
        <h1 class="chapter-cover-title">Guia de Marcas e Produtos</h1>
        <p class="chapter-cover-subtitle">Tudo o que você precisa — do básico ao profissional. Seleção criteriosa do mercado brasileiro.</p>
      </div>

      <h2>1. Farinhas</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Marca / Produto</th><th>Tipo</th><th>Indicação</th><th>Obs.</th></tr></thead>
          <tbody>
            <tr><td>Renata Tipo 1 Especial</td><td>Tipo 1</td><td>Pão de forma, dia a dia</td><td>Ampla disponibilidade; boa consistência</td></tr>
            <tr><td>Anaconda Tipo 1</td><td>Tipo 1</td><td>Pão caseiro, focaccia simples</td><td>Custo-benefício excelente</td></tr>
            <tr><td>Renata Extra Forte</td><td>Farinha de força</td><td>Sourdough, brioche, baguete</td><td>Proteína ~13%; estrutura superior</td></tr>
            <tr><td>Mirella</td><td>Farinha de força</td><td>Sourdough artesanal</td><td>Excelente para alta hidratação</td></tr>
            <tr><td>Caputo Manitoba (importada)</td><td>Farinha de força</td><td>Sourdough, pizza napolitana</td><td>Premium; proteína ~14%</td></tr>
            <tr><td>Natural Life / Jasmine Integral</td><td>Integral</td><td>Pães rústicos</td><td>Orgânica; rico em fibras</td></tr>
            <tr><td>Renata Integral</td><td>Integral</td><td>Pão integral</td><td>Ampla disponibilidade nacional</td></tr>
          </tbody>
        </table>
      </div>

      <h2>2. Fermentos</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Marca / Produto</th><th>Tipo</th><th>Indicação</th></tr></thead>
          <tbody>
            <tr><td>Fleischmann Seco Instant</td><td>Biológico seco instantâneo</td><td>Receitas rápidas e do dia a dia; sachê de 10g</td></tr>
            <tr><td>Mauri Levix Seco</td><td>Biológico seco instantâneo</td><td>Excelente custo-benefício; pacotes de 500g</td></tr>
            <tr><td>Fleischmann Fresco</td><td>Biológico fresco</td><td>Fermentações curtas; usar logo após abrir</td></tr>
            <tr><td>Safinstant / Mauripan</td><td>Seco de alto desempenho</td><td>Uso profissional e panificação artesanal avançada</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. Balanças de Precisão</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Modelo</th><th>Precisão</th><th>Por que indicar</th></tr></thead>
          <tbody>
            <tr><td>G-Tech Food / Cozinha Digital</td><td>1g</td><td>Custo baixo; função tara; ideal para iniciantes</td></tr>
            <tr><td>Balança de bolso MH-200</td><td>0,1g</td><td>Para pesar fermento seco e sal com precisão</td></tr>
            <tr><td>Tramontina Digital de Cozinha</td><td>1g</td><td>Marca nacional confiável; disponível em grandes redes</td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. Dutch Oven / Panela de Ferro</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Produto</th><th>Material</th><th>Obs.</th></tr></thead>
          <tbody>
            <tr><td>Le Creuset (premium)</td><td>Ferro fundido esmaltado</td><td>Referência mundial; excelente distribuição de calor</td></tr>
            <tr><td>Lodge Cast Iron (importada)</td><td>Ferro fundido</td><td>Custo-benefício superior; amplamente usada por artesanais</td></tr>
            <tr><td>Tramontina Ferro Fundido</td><td>Ferro fundido</td><td>Nacional; boa qualidade; mais acessível que Le Creuset</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Kit por Nível</h2>
      <h3>Kit Iniciante</h3>
      <ul>
        <li>Farinha Tipo 1 (Renata ou Anaconda) — R$ 15–25</li>
        <li>Fermento biológico seco (Fleischmann sachê) — R$ 2–4</li>
        <li>Balança digital de cozinha 1g — R$ 30–60</li>
        <li>Forma de pão (24 x 11 cm) alumínio — R$ 20–35</li>
        <li>Assadeira comum alumínio 35 x 25 cm — R$ 15–25</li>
      </ul>
      <h3>Kit Intermediário</h3>
      <ul>
        <li>Farinha de força (Renata Extra Forte ou Mirella) — R$ 12–20/kg</li>
        <li>Termômetro de sonda digital Incoterm — R$ 40–80</li>
        <li>Panela de ferro com tampa Dutch oven (Tramontina ou Lodge) — R$ 120–350</li>
        <li>Cesta de fermentação banneton vime 21–23cm — R$ 30–80</li>
        <li>Lâmina de corte lame bambu ou aço — R$ 25–60</li>
      </ul>
      <h3>Kit Avançado</h3>
      <ul>
        <li>Farinha importada Caputo Manitoba — R$ 30–50/kg</li>
        <li>Pedra refratária ou baking steel — R$ 80–250</li>
        <li>Termômetro infravermelho — R$ 50–100</li>
        <li>Banneton com liner de linho — R$ 80–150</li>
        <li>KitchenAid ou batedeira planetária — R$ 700–2.500</li>
      </ul>

      <div class="callout">
        <div class="callout-label">Onde Comprar</div>
        <p>Mercado Livre, Amazon Brasil, AliExpress (importados), Empório do Pão, Planeta Pão e lojas especializadas em panificação artesanal. Para farinhas premium, pesquise também em moinhos regionais e lojas de produtos naturais.</p>
      </div>

      <div class="callout-quote">
        <p>O pão que você faz com as próprias mãos carrega sua energia, sua intenção e sua ciência. Não existe nada mais premium do que isso.</p>
      </div>

      <p style="text-align:center; margin-top:48px; font-family:'Lora',serif; font-style:italic; color:var(--text-muted);">
        Taylan Santos<br>
        <span style="font-size:13px;">Nutricionista · Bioquímica da Nutrição · Nutrigenômica · Ciência de Dados<br>São Paulo, SP, Brasil</span>
      </p>
    `
  }
];
