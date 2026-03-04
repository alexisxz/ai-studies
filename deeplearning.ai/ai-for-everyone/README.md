# AI for everyone

## Introduction

### AI types
- ANI (Artificial Narrow Intelligence): systems designed for specific tasks.
  Examples: smart speakers, web search, fraud detection, and factory automation.
- Generative AI: systems that generate content such as text, images, audio, or code.
  Examples: ChatGPT, Gemini, Claude, and DALL-E.
- AGI (Artificial General Intelligence): a hypothetical level of AI that could perform
  any intellectual task a human can do. AGI does not exist yet.

## Machine Learning

### How it works
Machine learning learns a mapping from input (`A`) to output (`B`) using data.
You can think of it as learning patterns from examples.

Example:
- Input (`A`): house size, number of bedrooms, number of bathrooms
- Output (`B`): house price

After training on many examples, the model can estimate `B` for new inputs `A`.

Important distinction:
- Data science focuses on extracting insights, communicating results, and decision support.
- Machine learning focuses on training models to make predictions or decisions automatically.

### Large language models (LLMs)
LLMs are trained on large text datasets to predict the next token (word or word piece)
in a sequence. This next-token prediction objective is a core part of their training.
Modern LLM training also includes fine-tuning and alignment steps to improve quality
and safety.

### The terminology of AI
- Machine learning: "Field of study that gives computers the ability to learn without
  being explicitly programmed." (Arthur Samuel, 1959). In practice, ML systems learn
  patterns from data to make predictions.
- Data science: discipline focused on extracting knowledge and insights from data for
  business or product decisions.
- Deep learning: a subset of machine learning based on neural networks with many layers.
  It is especially strong for unstructured data such as images, audio, and text.
  
### What makes an AI company?
A strong AI company typically has:
- Strategic data acquisition and governance
- A unified, reliable data platform (data warehouse/lakehouse)
- Pervasive automation in products and internal operations
- Clear roles and collaboration (e.g., PM, DS, MLE, data engineer, software engineer)
- Responsible AI practices (privacy, fairness, security, monitoring)

### AI Transformation for a company to be good in AI
1. Execute pilot projects to gain momentum
2. Build an in-house AI team
3. Provide broad AI training across teams
4. Develop an AI strategy
5. Develop internal and external communication plans

### What machine learning can and cannot do
Machine learning works best when:
- You have a clear input (`A`) and expected output (`B`)
- You have enough high-quality historical data
- The pattern you want to learn is stable over time
- Success can be measured with a clear metric (accuracy, error, precision, recall, etc.)

Machine learning is great for:
- Classification (spam vs. not spam, fraud vs. not fraud)
- Prediction (house prices, demand forecasting)
- Ranking and recommendation (products, videos, search results)
- Pattern recognition in text, images, and audio

Machine learning is not good for:
- Perfectly predicting rare or completely new events
- Tasks with no useful data or inconsistent labels
- Problems that require deep common sense, ethics, or human judgment alone
- Situations where the environment changes too quickly and past data becomes irrelevant

Rule of thumb: ML does not "see the future" by magic. It learns patterns from the past and applies them to similar new cases.

### An explanation of deep learning
Deep learning is a method in machine learning that uses neural networks with many
layers to learn complex patterns automatically.

Image example:
- A `1000 x 1000` grayscale image has `1,000,000` pixel values.
- A `1000 x 1000` RGB image has `3,000,000` values (red, green, and blue channels).

During training, the model receives:
- Input (`A`): the image
- Output (`B`): the correct label (for example, "cat" or "dog")

How learning happens across layers:
- Early layers learn simple features (edges, lines, curves)
- Middle layers combine them into parts (eyes, nose, ears)
- Deeper layers combine parts into higher-level shapes and full objects

After training, the network can take a new image and predict the most likely output label.

## Building AI Project

### Starting an AI project
- Workflow of projects
- Selecting AI projects
- Organizing data and team for the projects

### Workflow of a machine learning project
Example: speech recognition

Key steps of a machine learning project:
- Collect data
- Train model - Iterate many times until good enough
- Deploy model

### Workflow of a data science project
Example: Optimizing a sales funnel

Key steps of a data science project:
- Collect data
- Analyze data - Iterate many times to get good insights
- Suggest hypotheses/actions - Deploy changes and re-analyze new data periodically

### Is the AI project durable?
Technical diligence:
- Can AI system meet desired performance or the tecnology is not there yet?
- How much data is needed?
- Engineering timeline

Business diligence
- Lower cost
- Increate revenue
- Launch new product or business

### Build vs. buy?
You need to see if it worths to build a AI project or buy an existing one
- ML projects can be in-house or outsourced
- DS project are more commonly in-house
- Some things will be industry standard - avoid building those.

### Training set vs. test set
- Training set: the data used to train the model (learn patterns and parameters).
- Test set: unseen data used only at the end to estimate real-world performance.

Recommended practice:
- Keep a validation set too, used during development for model selection and tuning.
- Do not use the test set for tuning; otherwise, performance estimates become biased.
- A common split is `70/15/15` or `80/10/10` (train/validation/test), depending on dataset size.

### Technical tools for AI team
Open-source frameworks:

Machine learning frameworks:
- PyTorch
- TensorFlow
- Hugging Face
- PaddlePaddle
- Scikit-learn
- R

Research publications
- Arxiv

Open source repositories:
- GitHub

### CPU vs. GPU
`CPU` (Central Processing Unit):
- General-purpose processor for many different tasks
- Strong for control logic, data preprocessing, and low-latency sequential operations
- Usually cheaper and easier to run for small models or low-traffic inference

`GPU` (Graphics Processing Unit):
- Highly parallel processor designed for large matrix/tensor operations
- Much faster for deep learning training and high-throughput inference
- Usually higher cost, power usage, and infrastructure complexity

Rule of thumb:
- Use CPU for lightweight models and general backend tasks.
- Use GPU when training large models or serving many predictions per second.

### Cloud vs. On-premises vs. Edge
Cloud:
- Workloads run on remote infrastructure (for example, AWS, Azure, or Google Cloud)
- Best for fast scaling, managed services, and global availability
- Tradeoffs: ongoing usage cost, internet dependency, and data-governance constraints

On-premises:
- Workloads run on your organization's own infrastructure
- Best for strict data control, compliance, and predictable long-term workloads
- Tradeoffs: higher upfront investment and more maintenance/operations work

Edge:
- Inference runs directly on the device (car, phone, camera, factory sensor, etc.)
- Best for low latency, offline operation, and privacy-sensitive local processing
- Tradeoffs: limited compute, memory, and power on device

How to choose:
- Choose cloud when speed of deployment and scalability matter most.
- Choose on-premises when regulation/security requires tight infrastructure control.
- Choose edge when real-time response or offline reliability is critical.
