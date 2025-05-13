# 🛠️ Microservices DevOps Project with Kong, PostgreSQL, Prometheus, and CI/CD

## 🔧 Kiến trúc hệ thống

```bash
┌────────────┐ ┌────────────────┐
│ Frontend │◄───────►│ Kong API │
│ (React) │ │ Gateway │
└────┬───────┘ └─────┬────────────┘
│ │
▼ ▼
┌────────────┐ ┌──────────────┐
│User Service│ │ Prometheus │
│ (Spring) │◄────────┤ Monitoring │
└────┬───────┘ └────┬─────────┘
│ ▲
▼ │
┌────────────┐ ┌──────────────┐
│Postgres DB │ │ Kong DB │
│(user, msg) │ │ (PostgreSQL) │
└────────────┘ └──────────────┘
```

---

## 🧩 Dịch vụ chính

| Service            | Port      | Description                  |
| ------------------ | --------- | ---------------------------- |
| `frontend`         | 5173      | Giao diện người dùng (React) |
| `user-service`     | 8081      | Backend người dùng (Spring)  |
| `postgres_user`    | 5435      | CSDL người dùng              |
| `postgres_message` | 5436      | CSDL tin nhắn                |
| `kong`             | 8000/8001 | API Gateway (proxy/admin)    |
| `kong-database`    | 5432      | CSDL cho Kong                |
| `prometheus`       | 9090      | Giám sát hệ thống            |

---

## ⚙️ Cách chạy hệ thống

```bash
docker-compose up -d --build
```
