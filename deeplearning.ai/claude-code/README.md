# Claude Code: A Highly Agentic Coding Assistant

## What is Claude Code?

Claude Code is an agentic, terminal-based AI coding assistant powered by Anthropic's models
that reads, edits, and executes code directly in your local environment. Designed for
developers, it acts as an autonomous collaborator to debug, refactor, and build features,
handling tasks across multiple files, Git commits, and terminal commands.

It runs directly in the terminal (or inside VS Code / JetBrains via extensions) and has
full access to your file system, shell, and Git — no sandbox, no browser required.

---

## Core concepts

### Agentic behavior
Unlike a simple chat assistant, Claude Code can take *sequences of actions* to complete a goal:
- Read multiple files to understand context
- Edit or create files
- Run shell commands (tests, build steps, linters)
- Commit changes via Git

This loop of observe → plan → act is what makes it "agentic". The model decides which
tools to use and in what order, without needing step-by-step instructions from the user.

### How it processes a request
1. User gives a high-level task (e.g., "add input validation to the login form")
2. Claude Code reads relevant files to build context
3. It plans the changes needed
4. It uses tools (Read, Edit, Bash, Grep…) to carry out those changes
5. It reports back what it did

### Permission model
Claude Code asks for user approval before taking risky or irreversible actions:
- Editing files → usually auto-approved
- Running shell commands → depends on user-configured permission mode
- Destructive git operations (reset --hard, force push) → always confirmed

The user sets a permission level: auto-approve safe actions, approve-per-action, or
approve-per-category.

---

## Key capabilities

### File and code operations
- Read, create, and edit files across the entire repo
- Search code with grep-like tools
- Navigate large codebases efficiently

### Shell execution
- Run tests, builds, linters, and scripts
- Chain commands and act on their output
- Background processes supported

### Git integration
- Stage, commit, and view diffs
- Read git history and blame
- Can help resolve merge conflicts

### Memory and context
- Project instructions live in `CLAUDE.md` files (checked into the repo)
- Private local preferences live in `CLAUDE.local.md` (git-ignored)
- Persistent user memory stored in `~/.claude/projects/` — survives across sessions

### Subagents
Claude Code can spawn specialized sub-agents for focused tasks:
- Explore: fast codebase search and navigation
- Plan: software architecture and design decisions
- General-purpose: multi-step research and execution

---

## Interaction modes

### Interactive (default)
You type a task, Claude Code responds and takes actions. You approve tool calls as they appear.

### Headless / non-interactive
Run with a `--print` flag or pipe input. Useful for scripting or CI pipelines.

### IDE extensions
VS Code and JetBrains extensions embed Claude Code inside the editor, providing inline
diffs and a chat panel without leaving the IDE.

---

## CLAUDE.md — project-level instructions

`CLAUDE.md` is a Markdown file placed at the root (or in subdirectories) of a project.
Claude Code reads it automatically at the start of each session. Use it to encode:
- Project structure and conventions
- How to run tests and builds
- Naming conventions and coding standards
- Known pitfalls or constraints

Example:
```markdown
# CLAUDE.md

## Running tests
npm test

## Conventions
- Use kebab-case for file names
- All API errors must be logged before re-throwing
```

Rules cascade: a `CLAUDE.md` in a subdirectory adds to (not replaces) the root one.

---

## Hooks — automated behaviors

Hooks are shell commands that execute automatically in response to Claude Code events.
They are configured in `settings.json` (not by telling Claude Code to "remember" something).

Common hook events:
- `PreToolCall` — run before a tool is called
- `PostToolCall` — run after a tool completes
- `Stop` — run when Claude Code finishes a response

Example use cases:
- Auto-format code after edits
- Run a test suite after every file change
- Log all shell commands Claude Code executes

---

## Slash commands (skills)

Slash commands are shortcuts that expand into full prompts. Built-in examples:
- `/commit` — stage and commit changes with a good message
- `/review-pr` — review a pull request
- `/help` — get usage help

Custom skills can be defined and invoked the same way.

---

## Agentic coding best practices

### Good task framing
- Give Claude Code a clear *goal*, not a step-by-step recipe
- Provide context about constraints (e.g., "don't change the public API")
- Let it read the code first before prescribing a solution

### Iteration
- Review diffs after each step before approving the next
- Ask Claude Code to explain its reasoning if a change looks unexpected
- Use `CLAUDE.md` to encode lessons learned so they persist across sessions

### When to intervene
- If it's about to take an irreversible action (force-push, drop table), read carefully
- If the plan looks wrong, correct it early rather than after many edits
- Prefer focused tasks ("fix this bug") over vague large tasks ("improve the codebase")

---

## Comparison with other AI coding tools

| Feature | Claude Code | GitHub Copilot | Cursor |
|---|---|---|---|
| Terminal-native | Yes | No | No (IDE only) |
| Full shell access | Yes | No | Limited |
| Multi-file edits | Yes | Limited | Yes |
| Git integration | Yes | Limited | Limited |
| Agentic (sequences of actions) | Yes | No | Partial |
| CLAUDE.md project context | Yes | No | `.cursorrules` |

---

## Models

Claude Code uses Anthropic's Claude model family. As of early 2026:
- **Claude Opus 4.6** — most capable, used for complex reasoning tasks
- **Claude Sonnet 4.6** — balanced performance and speed (default for most tasks)
- **Claude Haiku 4.5** — fastest, used for lightweight operations

The model can be changed per-session or configured in settings.

---

## Key takeaways

- Claude Code is not just autocomplete — it is a full agent that acts on your behalf
- Safety comes from the permission model and user review of diffs, not a sandbox
- `CLAUDE.md` is the primary mechanism for teaching Claude Code about your project
- Hooks enable automated workflows triggered by Claude Code's actions
- Best results come from clear goals, iterative review, and well-maintained `CLAUDE.md` files
