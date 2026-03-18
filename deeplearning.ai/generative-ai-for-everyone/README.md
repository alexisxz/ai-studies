# Generative AI for everyone
https://learn.deeplearning.ai/courses/generative-ai-for-everyone

## Introduction to Generative AI

### Welcome
Generative AI refers to artificial intelligence systems that can produce new content,
especially text, images, audio, video, and code.

Unlike traditional AI systems that mainly classify or predict, generative AI creates
new outputs based on patterns learned from large amounts of data.

### How Generative AI works
AI is a broad field with several techniques:
- Supervised learning: learn from labeled examples (`A -> B`)
- Unsupervised learning: find patterns in unlabeled data
- Reinforcement learning: learn through rewards and penalties
- Generative AI: generate new content such as text, images, audio, or code

Generative AI models learn patterns, structure, and relationships from training data.
When given a prompt, they generate a likely continuation or output based on those
learned patterns.

For example:
- Input: "Write a short email apologizing for a delayed reply"
- Output: a newly generated email draft

Important idea:
- Generative AI does not "understand" in the same way humans do.
- It predicts useful outputs by learning statistical patterns from data.

### Web-based vs. software application use of LLMs
LLMs can be used in two common ways:

Web-based tools:
- Used through a chat interface in the browser
- Examples: ChatGPT, Gemini, Claude, Microsoft Copilot
- Best for brainstorming, drafting, summarizing, and individual productivity

Application-based use:
- Integrated directly into software products or internal tools through APIs
- Examples: document search, customer support copilots, email assistance, workflow automation
- Best when AI needs to be part of a repeatable business process

Main difference:
- Web tools are usually human-in-the-loop and interactive.
- Application integrations are usually designed for scale, consistency, and automation.

### Common use cases of Generative AI
- Writing and rewriting text
- Summarization of long documents
- Chatbots and virtual assistants
- Code generation and coding assistance
- Image generation and editing
- Audio generation and transcription support
- Knowledge retrieval over internal documents

### Benefits of Generative AI
- Faster content creation
- Improved productivity
- Better user support experiences
- Easier access to knowledge inside organizations
- Rapid prototyping of ideas and software

### Limitations and risks
- Hallucinations: the model may generate incorrect information confidently
- Bias: outputs can reflect biases present in training data
- Privacy and security concerns when handling sensitive data
- Inconsistent outputs across prompts or contexts
- Copyright and compliance concerns depending on usage

Rule of thumb:
- Use generative AI as a powerful assistant, not as a fully reliable source of truth
  without review.

### Image generation (diffusion model)
Diffusion models are a common approach for generating images.
They work by starting with random noise and gradually transforming that noise into
an image that matches the prompt.

High-level idea:
- During training, the model learns how images look by studying many examples
- It also learns how to reverse a process that adds noise to images
- During generation, it starts from noise and removes that noise step by step
- The final result is a new image guided by the text prompt

Example:
- Prompt: "A small red boat on a calm lake at sunrise, realistic style"
- Output: a newly generated image matching that description

Why this is useful:
- It can create original visual content quickly
- It allows style control through prompts
- It can also be used for editing tasks such as inpainting, outpainting, and variation generation

Limitations:
- Prompt wording strongly affects quality
- The model may generate visual mistakes or unrealistic details
- Results can be biased by the training data

## Generative AI Projects

### Lifecycle of a generative AI project
1. Scope project
2. Build System
3. Internal evaluation
4. Improve System
5. Deploy and monitor

### Retrieval Augmented Generation (RAG)
It is a technic to give your AI more information based on 3 steps:
1. Given question, search relevant documents for answer
2. Incorporate retrieved text into an updated prompt
3. Generate answer from the new prompt with additional context

### Reinforcement learning from human feedback (RLHF)
Helpful, Honest, Harmless

Steps:
1. Train an answer quality (reward) model
2. Have LLM generate a lot of answers. Further train it to generate more responses that get high scores.

## Generative AI in Business and Society

### Augmentation vs. Automation
Augmentation:
- Help humans with a task
- E.g., recommend a response for a customer service agent to edit/approva.

Automation:
- Automatically perform a task
- E.g., automatically transcribe and summarize records of costumers interactions

## Generative AI and society

### Artificial General Intelligence (AGI)
Definition: AI that can do any intellectual task that a human can

Examples:
- Learn to drive a car through +/-20 hours of practice
- Complete a PhD thesis after +/-5 years of work
- Do all the tasks of a computer programmer (or any other knowledge worker)

### Responsible AI
Dimensions of responsible AI
- Fariness: Ensuring AI does not perpetuate or amplify biases
- Transparency: Making AI systems and their decisions understandable to stakeholders impacted
- Privacy: Protecting user data and ensure confidentiality
- Security: Safeguard AI systems from malicious attacks
- Ethical Use: Ensuring AI is used for beneficial purposes
