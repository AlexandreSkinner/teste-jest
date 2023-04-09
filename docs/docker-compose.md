O docker compose serve para orquestrar os varios containers de
uma aplicação. Por exemplo você pode construir um container p/
a aplicação (node) e outro para o banco de dados.

# Create and start containers
- Cria e inicializa os containers especificado no arquivo .yml
  em caso de alguma alteração no arquivo .yml só será recriado
  o containers que foi alterado

» docker-compose up -d

- Cria o container com o nome do projeto "compras"
» docker-compose -p, --project-name compras up -d

# Build or rebuild services
- Realiza apenas a parte de builder das images que serão utilizadas.
» docker-compose build

# Listar containers
- Somente os ativos
» docker container ls ou docker ps

- Somente os todos
» docker container ls -a ou docker ps -a

# Para todos os containers
» docker-compose stop

# Cria o containers com postgres na mão
» docker run --name db_postgresql -e "POSTGRES_USER=postgres" -e "POSTGRES_PASSWORD=Skydocker" -v pg_data:/var/lib/postgresql/data -p 5433:5432 -d postgres:15.2-alpine
