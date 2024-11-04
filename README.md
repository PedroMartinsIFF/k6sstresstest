# Teste de Carga com k6

Este projeto utiliza o k6 para realizar testes de carga em um endpoint específico. O objetivo é verificar a performance e a resiliência do serviço sob diferentes condições de carga.

# Pré-requisitos
Node.js instalado
k6 instalado globalmente (npm install -g k6)

# Configuração
Atualize o arquivo test.js com o endpoint e a chave de autenticação apropriados:

JavaScript
```
let url = 'Seu endpoint'; // Substitua pelo endpoint da sua aplicação
let params = {
    headers: {
        'Authorization': 'Bearer CHAVE', // Substitua pela sua chave de autenticação, se necessário
    },
};
```
# Execução dos Testes
Para executar os testes de carga, utilize o seguinte comando:
```
k6 run k6s_test.js
```
# Estrutura do Código

options: Define as etapas do teste de carga, incluindo a duração e o número de usuários virtuais.

default function: Função principal que realiza as requisições HTTP e verifica as respostas.

# Etapas do Teste

- Ramp-up: Aumenta o número de usuários virtuais para 300 ao longo de 10 minutos.

- Sustentação: Mantém 300 usuários virtuais por 20 minutos.

- Ramp-down: Reduz o número de usuários virtuais para 0 em 5 segundos.

# Verificações

- Verifica se a resposta do endpoint principal tem status 200.

- Verifica se a resposta de um endpoint de erro tem status 404.

Nesta etapa é possível alterar a resposta para o que fizer sentido para o seu teste
