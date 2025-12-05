# 🧠 AI Editor

O **AI Editor** é uma plataforma inteligente de escrita que auxilia
usuários a melhorar seus textos com sugestões automáticas geradas em
tempo real.\
A cada frase ou parágrafo finalizado, o sistema oferece versões
alternativas/corrigidas, mais formais, mais informais, mais
criativas e muito mais.

O objetivo é tornar o processo de escrita mais rápido, intuitivo e
profissional, combinando uma interface moderna com processamento de
linguagem natural.

------------------------------------------------------------------------

## 🚀 Funcionalidades principais

-   ✍️ **Editor de texto moderno** com UX similar ao Google Docs.
-   🤖 **Sugestões automáticas** sempre que o usuário termina um período
    ou parágrafo.
-   📝 **Várias versões de reescrita**, como:
    -   Correção ortográfica e gramatical
    -   Estilo formal
    -   Estilo informal
    -   Estilo criativo
    -   Texto mais simples ou direto
-   🔄 **Substituição automática**: com um clique, o usuário aplica a
    sugestão ao texto.
-   💾 **Histórico de documentos**, permitindo acessar arquivos antigos
    - igual ao Word/Docs.
-   🔐 **Autenticação**.
-   🗄️ **Armazenamento dos textos e versões** no MongoDB.


## 🧱 Tecnologias Utilizadas

### Backend

-   NestJS\
-   TypeScript\
-   MongoDB / Mongoose


------------------------------------------------------------------------

## 📊 Diagrama inicial

``` mermaid
classDiagram
    class Usuario {
        -id : String
        -nome : String
        -email : String
        -senha : String
    }

    class Arquivo {
        -id : String
        -nome : String
        -conteudo : String
        -usuarioId : String
        -dataCriacao : Date
        -dataModificacao : Date
    }

    class Sugestao {
        -id : String
        -tipo : TipoSugestao
        -textoOriginal : String
        -textoSugestao : String
        -arquivoId : String
        -dataCriacao : Date
    }

    class TipoSugestao {
        <<enum>>
        -CORRECAO
        -FORMAL
        -INFORMAL
        -HUMORISTICO
        -TECNICO
        -CRIATIVO
        -ACADEMICO
        -SIMPLIFICADO
    }

    %% Relacionamentos
    Usuario "1" --> "0..*" Arquivo : cria
    Arquivo "1" --> "0..*" Sugestao : recebe
```


