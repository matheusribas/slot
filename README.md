# Slot

Sistema de agendamento e gestão de agenda para serviços pessoais, com foco em uma experiência moderna, responsiva e orientada ao fluxo de operação do negócio.

O projeto foi pensado para representar um painel administrativo de agendamento para negócios como barbearia, estética, consultório ou salão, combinando calendário, gestão de clientes, pessoas e serviços em uma interface clara e comercialmente amigável.

## Visão geral

O Slot já conta com a base de um sistema funcional de agenda, com estrutura de rotas públicas e privadas, área administrativa, componentes reutilizáveis e fluxo de interação em destaque. A aplicação busca unir:

- autenticação simples de acesso;
- visualização de agenda em diferentes perspectivas;
- criação de agendamentos;
- gestão de clientes, equipe e serviços;
- interface moderna com design system consistente.

## Funcionalidades implementadas

### 1. Fluxo de autenticação

A aplicação já inclui páginas dedicadas para:

- login;
- cadastro de nova conta;
- formulários com validação por `react-hook-form` + `zod`;
- separação entre áreas públicas e privadas por grupos de rotas no App Router.

Essas telas servem como base para evolução para autenticação real, sessão e backend.

### 2. Área protegida com layout administrativo

A parte logada já possui:

- sidebar de navegação;
- header e footer compartilhados;
- estrutura modular por módulos (`Calendar`, `Clients`, `Team`, `Services`, `Accounts`);
- renderização de modais globais em um ponto central do app.

Isso deixa a aplicação preparada para crescer em múltiplos módulos sem perder organização.

### 3. Calendário de agendamentos

O calendário foi implementado com `@schedule-x/react` e `@schedule-x/calendar`, com:

- visão diária;
- visão semanal;
- visão de agenda;
- visão mensal;
- timezone configurada para `America/Sao_Paulo`;
- personalização visual com tema shadcn;
- suporte a diferentes tipos de serviço com cores específicas.

Também foi integrada a biblioteca `temporal-polyfill` para manipulação de datas com melhor suporte de timezone e consistência no fluxo do calendário.

### 4. Modal de criação de eventos

A criação de agendamento foi estruturada em um modal com campos para:

- título do agendamento;
- data;
- horário;
- duração;
- descrição;
- seleção de data via calendário popover.

A UX foi pensada para facilitar a operação de cadastros rápidos e com melhor organização do expediente.

### 5. Gestão de equipe

A página de equipe foi implementada com:

- listagem de integrantes;
- modal para criação de integrante;
- campos de nome, telefone e serviços;
- configuração de horário de expediente por dia da semana;
- modelagem inicial para organização de equipe e disponibilidade.

### 6. Gestão de clientes

A área de clientes já apresenta estrutura de tabela com dados e componentes reutilizáveis para listagem, paginação e filtros, com uso de:

- `@tanstack/react-table`;
- componentes padronizados em `components/ui`;
- layout de listagem para dados de clientes e gestão de registros.

### 7. Estrutura de serviços e contas

As páginas de serviços e contas já existem como módulos da aplicação, servindo como base para:

- cadastro, listagem e organização de serviços oferecidos;
- gestão de contas / usuários / perfis vinculados ao negócio.

### 8. Design system e estado global

O projeto usa:

- `Tailwind CSS` para estilização;
- `shadcn/ui` como base visual da interface;
- `zustand` para estado global de modais e fluxos de UI;
- `next-themes` para alternância de tema claro/escuro;
- `lucide-react` para ícones.

## Stack atual

### Frontend e app

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- App Router do Next.js

### Bibliotecas principais

- `@schedule-x/react`
- `@schedule-x/calendar`
- `@schedule-x/events-service`
- `@schedule-x/theme-shadcn`
- `temporal-polyfill`
- `date-fns`
- `react-hook-form`
- `@hookform/resolvers`
- `zod`
- `@tanstack/react-table`
- `zustand`
- `next-themes`
- `react-day-picker`
- `lucide-react`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `@base-ui/react`

## Estrutura do projeto

A organização atual do projeto está orientada para escalabilidade, com separação de responsabilidades em:

- `app/`: rotas, layouts e páginas da aplicação
- `components/ui/`: componentes base do design system
- `components/feature/`: módulos e blocos específicos do produto
- `services/`: dados e controladores de módulo
- `stores/`: estado global da aplicação
- `types/`: tipos do domínio
- `lib/`: utilitários gerais

## Como executar localmente

### Pré-requisitos

- Node.js 20+
- pnpm

### Instalação

```bash
pnpm install
```

### Iniciar o ambiente de desenvolvimento

```bash
pnpm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

## Observações de implementação

O projeto já está em uma fase de protótipo funcional com boa base visual e estrutural, porém ainda há partes em desenvolvimento, especialmente no fluxo real de autenticação e persistência de dados. Os `Server Actions` já foram estruturados em `app/actions.ts`, mas ainda precisam de integração com banco de dados, sessão e regras de negócio reais.

## Roadmap

Próximos passos naturais para evoluir este projeto:

- autenticação real com banco de dados e sessão;
- persistência de clientes, agendamentos e profissionais;
- integração com API REST ou backend com Prisma;
- regras de disponibilidade e bloqueios de horários;
- gestão completa de serviços com preços, duração e categorias;
- confirmações por WhatsApp, e-mail e notificações;
- deploy em ambiente de produção com Vercel ou infraestrutura cloud.

## Conclusão

O Slot já consolidou uma base sólida de produto, com arquitetura moderna em Next.js, organização por módulos, componentes reutilizáveis e experiência de agenda funcional. O projeto demonstra maturidade na combinação entre UX, design system e ferramentas de frontend atuais, mantendo a aplicação pronta para evoluir para um produto de agendamento mais completo e real.
