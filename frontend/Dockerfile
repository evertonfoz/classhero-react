# frontend/Dockerfile
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do projeto
COPY . .

# Expor a porta padrão do Vite
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev", "--", "--host"]
