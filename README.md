# Pedro Martins — Portfolio

Base de um portfólio estático para um Senior Product Designer. O site é gerado com [Astro](https://astro.build), TypeScript e CSS. Não há banco de dados, analytics nem servidor próprio: o resultado é um conjunto de arquivos HTML, pronto para a hospedagem gratuita da Vercel.

Os estudos de caso ainda são estrutura e texto de marcação. Nomes, descrições curtas e o texto de apresentação já são o conteúdo real desta fase.

## O que você precisa

- [Node.js](https://nodejs.org) 22 ou mais recente
- npm (já vem com o Node)

No terminal, confira com `node -v`. Se o comando não for encontrado, instale o Node e abra o terminal de novo.

## Rodar no seu computador

Na pasta do projeto:

```bash
npm install
npm run dev
```

Abra [http://localhost:4321](http://localhost:4321).

O `npm run dev` fica observando os arquivos. Quando você salva, a página atualiza.

## Gerar o site

```bash
npm run build
npm run preview
```

`build` cria a pasta `dist/` com o site pronto. `preview` serve essa pasta localmente, do jeito que ela vai ficar publicada.

## Publicar na Vercel

1. Envie este repositório para o GitHub.
2. Na Vercel, escolha **Add New Project** e importe o repositório.
3. A Vercel reconhece o Astro. Confirme:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Faça o deploy. O plano gratuito serve site estático.

Opcional: em **Settings → Environment Variables**, crie `SITE_URL` com o endereço final, por exemplo `https://seu-dominio.com`. Esse valor entra nos links canônicos e nas tags de compartilhamento. Na Vercel, se `SITE_URL` não existir, o domínio de produção do projeto é usado no build.

## Onde editar o conteúdo

| Arquivo | O que mudar |
| --- | --- |
| `src/data/site.ts` | Disponibilidade, e-mail, LinkedIn e a frase de apoio da home |
| `src/data/projects.ts` | Projetos, textos do estudo de caso, metadados e imagens |
| `src/data/about.ts` | Introdução, experiência, formação e reconhecimento |
| `src/styles/tokens.css` | Cores, espaços, fontes e largura da página |
| `src/styles/global.css` | Visual dos componentes |

### Disponibilidade e contato

Em `src/data/site.ts`:

- `availability.visible` mostra ou esconde o indicador da home.
- `availability.label` é o texto curto desse indicador.
- `email` começa vazio de propósito. Enquanto estiver `""`, o site não mostra e-mail. Quando houver um endereço real, coloque-o entre aspas.
- `linkedin` já aponta para o perfil conhecido.

### Um projeto

Cada item de `projects` gera uma rota `/work/` + `slug`. Para escrever o estudo de caso de verdade:

1. Troque os textos de `introduction` e de `sections`.
2. Mude `placeholder` para `false` em cada bloco que já estiver pronto. Isso esconde a etiqueta "Placeholder".
3. Preencha só os metadados que existirem: `role`, `timeline`, `team`, `scope`. Campo vazio não aparece na página.
4. Coloque a imagem em `public/images/` e aponte assim:

```ts
image: {
  src: "/images/iungo.jpg",
  alt: "Descrição objetiva da imagem",
},
```

`gallery` é uma lista opcional de imagens para a seção final. O mesmo formato de `image`.

Um parágrafo em branco (`\n\n`) dentro de `text` vira um parágrafo novo na página.

O primeiro projeto, Iungo, usa `featured: true`. Na home ele ocupa a largura inteira. Os outros ficam em duas colunas no desktop.

### About

Em `src/data/about.ts`, cada seção tem `entries`. Um item pode ter só `text`. Quando houver conteúdo real, você pode acrescentar `title` e `meta`, por exemplo o cargo e o período, e mudar `placeholder` para `false`.

## Tema claro e escuro

O botão no cabeçalho alterna o tema. A escolha fica salva no navegador, na chave `theme`. Quem ainda não escolheu vê o tema do sistema operacional.

## Rotas

- `/`
- `/about`
- `/work/iungo`
- `/work/sila-pay`
- `/work/banking-app`
- `/work/onboarding`
- `/work/design-system`
- `/work/sustainability`
- `/work/mobility-app`

Cada endereço funciona sozinho, porque o build gera um HTML para cada um.

## O que ainda falta

- Escrever os estudos de caso
- Substituir os quadros tipográficos por imagens reais
- Completar experiência, formação e reconhecimento
- Incluir um e-mail, se quiser mostrá-lo
