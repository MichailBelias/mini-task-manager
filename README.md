# 📝 Mini Task Manager

A minimalistic full-stack web app to manage personal tasks.  
Built with plain HTML/CSS/JavaScript on the front-end, and lightweight serverless functions on the backend — fully deployable via **Azure Static Web Apps** with GitHub integration.

---

## 🚀 Features

- ✅ Add new tasks
- ✅ View your current to-do list
- ✅ Delete tasks
- ✅ Backend logic using **Azure Functions (JavaScript)**
- ✅ 100% free to host via [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)

> This is an ideal starting point for learning full-stack development on Azure, especially for students, hobbyists, and internal tools.

---

## 📁 Project Structure

mini-task-manager/
├── index.html # UI
├── style.css # Styling
├── script.js # Logic (calls backend API)
└── api/ # Azure Functions backend
├── getTasks/
│ └── index.js
├── addTask/
│ └── index.js
└── deleteTask/
└── index.js


---

## 🧪 How It Works

The front-end loads tasks from `GET /api/getTasks`, adds new ones via `POST /api/addTask`, and deletes them using `POST /api/deleteTask`.  
Tasks are stored in-memory inside the Azure Function runtime (so they're reset on restart — which is intentional for v1 simplicity).

---

## 📦 Deployment

### 🔗 GitHub + Azure Static Web Apps

1. Push this project to a GitHub repository
2. In the [Azure Portal](https://portal.azure.com), search **Static Web Apps**
3. Click **+ Create** and select:
   - **App location**: `/`
   - **API location**: `/api`
   - **Output location**: *(leave blank)*
4. Link your GitHub repo and branch

Azure will:
- Set up CI/CD via GitHub Actions
- Build & deploy your app
- Host it at: `https://<your-app-name>.azurestaticapps.net`

---

## 🔧 Local Development (Optional)

If you want to run locally:

1. Install [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
2. Serve the frontend using any static server:
   ```bash
   npx serve .   # or use Live Server extension in VS Code
func start --script-root ./api

