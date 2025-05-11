# Stage 1: Build ứng dụng React với Vite
FROM node:23 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build && echo "✅ Build success" && ls -l /app/dist

# Stage 2: Dùng Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Copy thư mục dist (Vite) từ stage build vào thư mục Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
