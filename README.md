#  API Médicos e dentistas solidários 

Este projeto é uma API de cadastro para profissionais da saúde (médicos e dentistas) que desejam atuar como voluntários em ações sociais. Desenvolvida como parte do módulo de **Back-End** do curso/escola **VaiNaWeb**, a aplicação simula um sistema de registro funcional utilizando Node.js e Express.

##  Objetivo do projeto

Consolidar conceitos fundamentais de desenvolvimento web back-end, incluindo:
- Criação de servidores com **Node.js**.
- Gerenciamento de rotas e verbos HTTP (**GET** e **POST**).
- Implementação de **Middlewares** e **CORS**.
- Validação rigorosa de dados enviados pelo cliente.
- Armazenamento de dados em memória.

---

##  Tecnologias Utilizadas 

- **Node.js**: Ambiente de execução.
- **Express**: Framework para gerenciamento de rotas.
- **CORS**: Para permitir a comunicação com o frontend.
- **Nodemon**: Ferramenta de auxílio ao desenvolvimento (auto-restart).
- **Postman**: Para testes de endpoints.

---

##  Como executar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SimoesAnd/backend-voluntarios
   
2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Inicie o servidor:**
    ```bash
    npm run dev
    ```
  
O servidor iniciará em: http://localhost:3000/voluntarios

---

## Endpoints e Validações

1. Listar Profissionais
Rota: GET /voluntarios

Descrição: Retorna a lista de todos os profissionais cadastrados.

2. Cadastrar Profissional
Rota: POST /voluntarios

Corpo da Requisição (JSON):

JSON
{
  "nome": "Seu Nome",
  "email": "exemplo@email.com",
  "telefone": "21999999999",
  "mensagem": "Sua motivação aqui..."
}

---

## Regras de validação pedida no desafio:

Para garantir a integridade dos dados, a API aplica as seguintes regras:
| Campo | Regra |
| :--- | :--- |
| Nome | Mínimo de 3 caracteres. |
| Email | Deve conter  @  e . gmail.com/outlook.com.br). |
| Telefone | Deve conter exatamente 10 ou 11 números. |
| Mensagem | Máximo de 500 caracteres. |

---

## Testes realizados

As rotas foram testadas utilizando o Postman, garantindo que as mensagens de erro (Status 400) sejam exibidas corretamente quando os dados não cumprem os requisitos, e o sucesso (Status 201) ocorra em cadastros válidos.



## Projeto por

**Andrews Simões**, para fins educativos do Curso/Escola Vai Na Web 2026. 
