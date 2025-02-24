# Reserva Hotel

O proprietário de um conjunto de hotéis gostaria de ter um sistema de gestão hoteleira construído para os seus hotéis.
Os hotéis estão localizados nas principais cidades e áreas de atração turística do Brasil.
Em cada hotel são contratados funcionários para desempenharem diversas funções.
Em cada hotel, os hóspedes fazem reservas para os quartos de sua escolha e são cobrados de acordo com o tipo de quarto que reservou.
Dado o cenário de negócios acima, crie uma aplicação para fazer o gerenciamento de reserva.

## Stack

- Linguagem: [Typescript](https://www.typescriptlang.org/)
- Framework: [NestJS](https://nestjs.com/)
- Banco de Dados: Mysql, usando container [Docker](https://www.docker.com/)

## Funcionalidades

- CRUD funcionários. **OBS**: A exclusão será por meio de soft delete, ou seja, apenas preencher a coluna data_exclusao com a data atual.
- CRUD Cliente.
- CRUD Hotel. **OBS**: Não permitir desativar o cadastro na atualização. Criar um endpoint específico para desativar o hotel.
- CRUD Reserva. **OBS**: A reserva não pode ser deletada e sim mudar para o status de Cancelada. Verificar disponilidade de quarto antes de criar reserva.
- CRUD Quarto. **OBS**: Quartos não podem ser deletados
- CRUD Pagamento. **OBS**: O cliente pode usar mais de uma forma de pagamento

**OBS**: CRUD (Leitura das informações gerais e por ID, Adicionar, Atualizar e Deletar)

## Extra:

Faça um front-end, que consuma a API criada com NestJS. Se preferir, pode utilizar [VueJS](https://vuejs.org/) no projeto.
