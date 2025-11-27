# AI-Driven Cloud Security Automation Platform
Real-Time CSPM with Auto-Remediation, Quantum Attack Simulation and Genetic Algorithm Optimization

This system is a cloud security platform capable of monitoring resources, detecting threats using machine learning, simulating future attack paths using a quantum digital twin, and automatically fixing security issues through a genetic algorithm-based remediation engine.

It supports AWS, Azure and GCP, and can be deployed as a web application or packaged as a Windows executable.

---

## Key Capabilities

• Real-time monitoring of VM, Storage, IAM and Databases  
• AI-based threat detection using multiple ML models  
• Genetic algorithm-driven auto-remediation  
• Quantum digital twin for breach prediction and attack path forecasting  
• Live WebSocket alerts without page reload  
• Independent dashboards for VM, Storage, IAM and DB security  
• Desktop executable distribution using Electron  

---

## Project Structure

ai-cloud-security-platform
┣ backend (FastAPI)
┃ ┣ app/api → API routes
┃ ┣ app/services → ML, GA engine, quantum simulator
┃ ┣ app/models → Detection and resource schema
┃ ┗ main.py → Application entrypoint
┣ frontend (Next.js)
┃ ┣ src/app → Pages for security modules
┃ ┣ components → Charts, radar, alert feed
┃ ┗ lib/api.ts → API communication
┣ main.js → Electron desktop runner
┗ dist/ → Final exe installer/build output



---

## Novelty and Technical Contribution

| Novel Feature | Description |
|---|---|
| Genetic Algorithm Auto-Remediation | Finds the optimal fix plan with risk-cost-performance optimization |
| Quantum Digital Twin | Predicts attack propagation paths before breach occurs |
| Fully Autonomous Security Lifecycle | Detects, predicts, fixes, validates continuously without manual need |
| Unified Multi-Cloud Security Engine | One framework handles VM, Storage, IAM and DB collectively |

This architecture does not exist as a single combined solution in current CSPM tools.

---

## Machine Learning Algorithms Used

| Resource Layer | Algorithms Used |
|---|---|
| VM / Compute | Isolation Forest, One-Class SVM, LSTM Autoencoder |
| Storage | BERT NER, Regex, BFS/DFS exposure mapping |
| IAM | K-Means, Apriori Permission Mining, Graph Dijkstra |
| Database | RandomForest, SVM, LSTM query sequence detection |

---

## Auto-Remediation Algorithms

| Algorithm | Purpose |
|---|---|
| Genetic Algorithm | Selects best remediation combination based on risk reduction |
| Risk-Based Fitness Model | Balances impact, cost and service reliability |
| Rule-Based Engine | Direct remediation for known patterns (public bucket, weak IAM etc.) |
| Drift Monitoring | Fixes re-occurring misconfigurations dynamically |
| Graph Validation | Ensures fix does not break accessibility or production workloads |

---

## Installation and Run Instructions

### Backend

cd backend
uvicorn app.main:app --reload



### Frontend

cd frontend
npm install
npm run dev



Access interface at:

http://localhost:3000


---

## Windows Executable Build (Electron)

cd ai-cloud-security-platform
npm install
npm run build


Installer and exe will be generated inside:

/dist/


## License

MIT License. Free for modification and development use.

---

## Contribution

Pull requests, module enhancements, ML improvements and UI upgrades are welcome.

---

## Additional Notes

• Full system can operate in real-time  
• Designed for research, industry demonstration and deployment use cases  
• Extendable for SOC automation, SIEM integration or CI/CD policy enforcement  

---

### Maintained by Aswin
