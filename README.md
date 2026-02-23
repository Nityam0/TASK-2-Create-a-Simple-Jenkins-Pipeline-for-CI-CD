
                                                 🚀 **Task 2 – Create a Simple Jenkins Pipeline for CI/CD**


## 📌 Project Overview

This project demonstrates an automated **CI/CD pipeline using Jenkins and Docker**.

The pipeline automatically:

* Builds a Docker image
* Runs tests
* Deploys the application inside a Docker container
* Makes the application live on an AWS EC2 instance

The entire deployment process is automated using Jenkins Pipeline (Pipeline as Code).

---

## 🛠️ Tech Stack

* Node.js (Simple HTTP Application)
* Docker
* Jenkins
* GitHub
* AWS EC2 (Ubuntu Linux)

---

## 📂 Project Structure

simple-node-app/
│
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
└── README.md

---

## ⚙️ Steps to Create Project

---

### 🔹 Step 1 – Create EC2 Instance

* Launched Ubuntu EC2 instance in AWS
* Installed required tools:

  * Java (for Jenkins)
  * Jenkins
  * Docker
  * Git
* Opened required ports in Security Group:

  * 8080 (Jenkins)
  * 3000 (Application)

---

### 🔹 Step 2 – Create Node.js Application


---

### 🔹 Step 3 – Create Dockerfile


Verified in browser:

[http://EC2-IP:3000](http://EC2-IP:3000)

---

### 🔹 Step 4 – Push Code to GitHub

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main

---

### 🔹 Step 5 – Create Jenkins Pipeline

* Created new Pipeline job in Jenkins
* Selected “Pipeline script from SCM”
* Added GitHub repository URL
* Selected branch: main

---

### 🔹 Step 6 – Create Jenkinsfile

---

### 🔹 Step 7 – Pipeline Execution

Triggered pipeline using:

* Manual build (Build Now)
  OR
* GitHub webhook (Auto trigger on push)

Jenkins automatically:

1. Pulled latest code from GitHub
2. Built Docker image
3. Executed test stage
4. Stopped old container (if exists)
5. Deployed new container
6. Made application live

---

## 🔁 CI/CD Workflow

1️⃣ Developer pushes code to GitHub
2️⃣ Jenkins detects change
3️⃣ Jenkins builds Docker image
4️⃣ Jenkins runs tests
5️⃣ Jenkins deploys container
6️⃣ Application becomes live automatically

---

## 🧪 Commands Used in This Project

### 🟢 Node.js Commands

npm init -y
node app.js
curl localhost:3000

---

### 🟢 Git Commands

git init
git add .
git commit -m "message"
git branch -M main
git push
git pull origin main --allow-unrelated-histories

---

### 🟢 Docker Commands

docker build -t simple-node-app .
docker images
docker run -d -p 3000:3000 simple-node-app
docker run -d -p 3000:3000 --restart always simple-node-app
docker ps
docker ps -a
docker stop simple-container
docker rm simple-container
docker rmi simple-node-app

---

### 🟢 Linux / EC2 Commands

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins

---

## 🎯 Final Result

✅ CI/CD pipeline successfully implemented using Jenkins
✅ Docker image automatically built
✅ Application automatically deployed
✅ Zero manual deployment
✅ Container auto-restarts after EC2 reboot

---

## 💼 Key Learning Outcomes

* Understanding of CI/CD concepts
* Jenkins Declarative Pipeline
* Docker image build & container deployment
* GitHub integration
* Automated deployment on AWS EC2
* Handling Docker permissions for Jenkins
* High availability using --restart always

---

## 🚀 Conclusion

This project demonstrates a fully automated CI/CD pipeline using Jenkins and Docker on AWS EC2.

The application is automatically built, tested, and deployed whenever code changes are pushed, eliminating manual deployment and ensuring faster and reliable software delivery.


