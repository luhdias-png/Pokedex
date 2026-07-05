
# Pokédex com IA

<img width="854" height="480" alt="Image" src="https://github.com/user-attachments/assets/12a54613-2b9f-4df6-b14e-8ebf9cffa357" />

#

Uma Pokédex desenvolvida em **React + TypeScript**, consumindo a **PokéAPI**, criada como solução para o desafio técnico de Estágio em Engenharia de Software.

A aplicação permite consultar informações detalhadas sobre qualquer Pokémon, incluindo suas formas, evoluções, tipos, estatísticas e conta com uma IA integrada para responder perguntas relacionadas ao universo Pokémon.

---

#  Funcionalidades

-  Busca de Pokémon por nome com sugestões em tempo real (autocomplete)
-  Navegação entre Pokémon
-  Alternância entre sprite padrão e shiny
-  Suporte às diferentes formas do Pokémon (Mega, Alola, Hisui, Galar, etc.)
-  Exibição dos Status Base
-  Tipos do Pokémon
-  Vantagens ofensivas
-  Fraquezas
-  Linha evolutiva
-  Descrição oficial da Pokédex em ingles
-  Pokédex AI utilizando Google Gemini (20 perguntas por dia)
-  Layout totalmente responsivo

---

#  Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- PokéAPI
- Google Gemini API

---

# Estrutura do Projeto

```
src/
│
├── assets/
├── components/
├── constants/
├── hooks/
├── services/
├── types/
└── App.tsx
```

### Organização

O projeto foi organizado separando responsabilidades:

- **components** → Interface da aplicação
- **hooks** → Lógica de estado (`usePokemon`)
- **services** → Comunicação com APIs
- **types** → Interfaces TypeScript
- **constants** → Dados estáticos

Essa divisão facilita manutenção, reutilização de código e escalabilidade.

---

# Decisões Técnicas

## Hook customizado (`usePokemon`)

Toda a lógica principal foi centralizada em um Hook customizado.

Ele é responsável por:

- Buscar Pokémon
- Navegação
- Troca de formas
- Troca de sprite
- Busca por nome
- Evoluções
- Fraquezas
- Vantagens
- Descrição

Isso mantém os componentes focados apenas na renderização.

---

## Services

Cada recurso da PokéAPI possui um service próprio.

Exemplo:

```
pokemon.ts
pokemonSpecies.ts
pokemonEvolution.ts
pokemonForms.ts
pokemonType.ts
pokemonAI.ts
```

Essa abordagem evita arquivos grandes e facilita futuras alterações.

---

## Tipagem

O projeto utiliza TypeScript com interfaces para representar:

- Pokémon
- Stats
- Tipos
- Evoluções
- Métodos de evolução

Reduzindo erros durante o desenvolvimento.

---

## IA

A Pokédex AI utiliza a API do Google Gemini.

A IA recebe como contexto:

- Pokémon atual
- Tipos
- Descrição
- Fraquezas
- Vantagens
- Evoluções

Assim consegue responder perguntas contextualizadas como:

> "Qual é a fraqueza dele?"

sem que o usuário precise repetir o nome do Pokémon.

Além disso, a IA foi instruída a responder apenas perguntas relacionadas ao universo Pokémon.

---

# Instalação

Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta

```bash
cd pokedex
```

Instale as dependências

```bash
npm install
```
ou...
```bash
npm i
```

---

# Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

```
VITE_GEMINI_API_KEY=SUA_CHAVE_AQUI
```

A chave pode ser obtida gratuitamente através do Google AI Studio.

---

# Executando

Inicie o projeto

```bash
npm run dev
```

Abra no navegador

```
http://localhost:5173 ou segure "o" + enter no terminal
```

---

# Build

Para gerar a versão de produção

```bash
npm run build
```

Para visualizar a build

```bash
npm run preview
```

---

# Funcionalidades Demonstradas

- Pesquisa por nome
- Sugestões automáticas
- Mudanca de pkmn com as seta esquerda e direita
- Mudança de formas com a setas para e baixo
- Evoluções
- Fraquezas
- Vantagens
- Pokédex AI

---

# Melhorias Futuras
- Subir para o vercel
- Favoritar Pokémon
- Comparação entre Pokémon
- Filtros por geração
- Filtros por tipo
- Pesquisa por habilidade
- Tema Light/Dark
- Cache local para reduzir chamadas da API
- Testes unitários
- Internacionalização (i18n)

---

# Desenvolvedor

**André Lucas**
