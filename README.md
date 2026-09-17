# Slot

Sistema de agendamento e gestão de agenda para serviços pessoais, com foco em uma experiência moderna de agendamento e visualização de calendário.

O projeto foi pensado como uma solução para clientes e prestadores de serviços que precisam organizar horários de forma simples, visual e intuitiva. A interface combina autenticação, fluxo de cadastro e um calendário de agenda com suporte a criação de eventos.

## Sobre o projeto

O Slot é uma aplicação web construída com Next.js que simula um painel de agendamento para um negócio de serviços como barbearia, estética ou consultórios. O principal objetivo é permitir que o usuário:

- acesse sua conta ou crie uma nova;
- visualize uma agenda em diferentes perspectivas;
- cadastre novos agendamentos;
- tenha uma interface moderna e responsiva para gestão de horários.

Apesar de ainda estar em evolução, a estrutura já evidencia o pensamento de produto e arquitetura de uma aplicação real: rotas públicas e privadas, componentes reutilizáveis, formulários validados e integração com um calendário dinâmico.

## Stack principal

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Schedule X
- date-fns
- Lucide React

## Conceitos de Next.js aplicados

### App Router

O projeto usa a estrutura do App Router do Next.js, com organização por pastas em `app/` e roteamento baseado em convenções de arquivos e diretórios.

Exemplos no projeto:

- `app/(unprotected)/login` para páginas públicas de autenticação
- `app/(protected)/(calendar)` para a área autenticada do calendário
- `app/layout.tsx` como layout raiz da aplicação
- `app/(protected)/layout.tsx` para a área interna com componentes compartilhados

Esse padrão demonstra familiaridade com a modelagem moderna de aplicações em Next.js, em vez de depender apenas de páginas estáticas simples.

### Layouts e agrupamento de rotas

O uso de `layout.tsx` e de grupos de rotas como `(protected)` e `(unprotected)` mostra uma organização que separa fluxos de autenticação da experiência logada. Isso é um conceito importante em apps reais, pois ajuda a controlar autenticação, layout compartilhado e fluxo de navegação.

### Metadata

A aplicação também utiliza `export const metadata` em páginas e layouts para definir títulos e descrições, aproveitando as capacidades nativas do Next.js para SEO e UX de navegação.

### Componentes do lado cliente e servidor

A aplicação combina:

- componentes do lado do servidor, como páginas e layouts;
- componentes do lado do cliente com `"use client"`, usados para formulários, interações e calendário.

Isso é uma prática muito comum em Next.js, principalmente quando se precisa de interatividade dinâmica com React sem perder a força do render do servidor.

### Server Actions

O arquivo `app/actions.ts` usa a convenção de Server Actions do Next.js, com a diretiva `"use server"`. Esse é um conceito estratégico da plataforma e mostra a intenção de centralizar ações do backend, como login e registro, em um ponto único e com acesso ao ambiente do servidor.

Embora a lógica de autenticação ainda esteja em desenvolvimento, a estrutura já está preparada para evoluir para integração com banco de dados, sessão, JWT, API REST ou NextAuth.

## Tecnologias e decisões de implementação

### Interface e design system

- Tailwind CSS para estilização eficiente e consistente
- shadcn/ui para componentes padronizados e reutilizáveis
- Lucide React para ícones
- estrutura modular de UI em `components/ui` e `components/feature`

A organização dos componentes facilita manutenção, reutilização e escala do projeto.

### Validação de formulários

A aplicação usa `react-hook-form` com `zod` para validar login e cadastro, reduzindo erros de dados no cliente e deixando o código mais seguro e previsível.

### Calendário e agendamento

O calendário foi implementado com `@schedule-x/react` e `@schedule-x/calendar`, com suporte a vários tipos de visualização, como:

- dia
- semana
- agenda
- mês

A integração com `Temporal` e a configuração de timezone e horários no Brasil demonstram atenção à experiência real do usuário e à lógica de agendamento.

### UX e responsividade

A interface foi pensada para ser simples e moderna, com:

- layout de páginas limpo;
- formulários com validação visual;
- modal de criação de eventos;
- comportamento responsivo em telas menores;
- navegação clara entre fluxo público e fluxo protegido.

## Como executar localmente

### Pré-requisitos

- Node.js 20+
- pnpm

### Instalação

```bash
pnpm install
```

### Iniciar ambiente de desenvolvimento

```bash
pnpm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Roadmap e próximos passos

O projeto já possui base sólida para evoluir em direção a uma solução completa de agendamento. Algumas melhorias naturais incluem:

- autenticação real com banco de dados e sessão;
- persistência de usuários e agendamentos;
- integração com back-end/API REST ou server actions com Prisma;
- painel administrativo com gestão de serviços e profissionais;
- disponibilidade por horários e regras de bloqueio;
- notificações, confirmação por e-mail ou WhatsApp;
- deploy em Vercel ou infraestrutura cloud.

## Conclusão

O Slot representa uma aplicação prática de gestão de agenda com foco em usabilidade, arquitetura moderna e uso consciente de recursos do Next.js. O projeto destaca tanto a capacidade de criar interfaces bonitas e funcionais quanto a compreensão de conceitos importantes da plataforma, como App Router, layouts, metadata, componentização, server actions e integração com bibliotecas especializadas.

É uma base sólida para evoluir em direção a um produto mais completo, com boas práticas de desenvolvimento e apelo para recrutadores e times técnicos que buscam profissionais com visão de produto e arquitetura frontend moderna.
