---
title: "How to Manage Multiple Sessions in GitHub"
description: "A practical guide to managing multiple GitHub sessions effectively."
date: "2024-09-03"
tags:
  - vim
  - navigation
  - productivity
featured: false
draft: false
---

Ever needed to juggle between your personal and work GitHub accounts on the same machine? This guide will walk you through setting up SSH keys and configurations to seamlessly work with multiple GitHub accounts without the hassle of constantly switching credentials.

## Prerequisites

- Git installed on your system
- GitHub CLI (`gh`) installed (optional but recommended)
- Basic familiarity with terminal/command line

## Step-by-Step Setup

### 1. Create a New SSH Key for Work GitHub

First, let's generate a dedicated SSH key for your work account:

```bash
ssh-keygen -t ed25519 -C "you@work.com" -f ~/.ssh/id_ed25519_work
```

When prompted for a passphrase, you can either skip it (press Enter) or set one for added security.

### 2. Configure SSH for Multiple Accounts

Create or edit your SSH config file:

```bash
vim ~/.ssh/config
```

Add the following configuration:

```ssh
# Personal GitHub (default key you already have)
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes

# Work GitHub
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  IdentitiesOnly yes
```

This setup creates two distinct SSH hosts that point to GitHub but use different SSH keys.

### 3. Add Your Work SSH Key to GitHub

Display your work SSH public key:

```bash
cat ~/.ssh/id_ed25519_work.pub
```

Copy the output, then:
1. Go to [GitHub SSH Settings](https://github.com/settings/ssh/new) (make sure you're logged into your work account)
2. Paste the key and save

Your personal key should already be added to your personal GitHub account.

### 4. Test Both SSH Connections

Verify that both SSH identities work correctly:

```bash
# Test personal account
ssh -T git@github.com-personal

# Test work account
ssh -T git@github.com-work
```

Both commands should respond with: `Hi username! You've successfully authenticated...`

### 5. Clone Repositories with the Correct Identity

Now when cloning repositories, use the appropriate SSH host:

**For personal projects:**
```bash
git clone git@github.com-personal:your-personal-username/repo.git
```

**For work projects:**
```bash
git clone git@github.com-work:your-work-username/repo.git
```

### 6. Set Git Identity per Repository

Configure the correct name and email for each repository:

**For work repositories:**
```bash
cd work-repo
git config user.name "Your Work Name"
git config user.email "you@work.com"
```

**For personal repositories:**
```bash
cd personal-repo
git config user.name "Your Personal Name"
git config user.email "you@personal.com"
```

These local configurations override your global Git settings for each specific repository.

### 7. Configure GitHub CLI for Multiple Accounts

If you use GitHub CLI, you can set it up for both accounts:

**Authenticate your personal account first:**
```bash
gh auth login
# Choose: GitHub.com → SSH → login in browser → select personal account
```

**Check authentication status:**
```bash
gh auth status
```

**Add your work account:**
```bash
gh auth login
# Choose: GitHub.com → SSH → login in browser → select work account
```

**Switch between accounts:**
```bash
gh auth switch --user work-username
gh auth switch --user personal-username
```

## Daily Workflow Reference
![sweet-commit preview](blog/sweet-commit.png)
[![VIM](https://i.postimg.cc/YSb8WH9G/vim.png)](https://github.com/sbytex/nvim)




| Task | Account | Command |
|------|---------|---------|
| Clone repo | Personal | `git clone git@github.com-personal:...` |
| Clone repo | Work | `git clone git@github.com-work:...` |
| Push/Pull | Any | `git push` / `git pull` (uses repo's remote) |
| Create PR | Work | `gh auth switch --user work` → `gh pr create` |
| Create PR | Personal | `gh auth switch --user personal` → `gh pr create` |

## Troubleshooting Tips

- If you get permission denied errors, double-check that you've added the correct SSH key to the right GitHub account
- Use `ssh-add -l` to list loaded SSH keys
- Use `git remote -v` to verify which SSH host your repository is using
- Remember that the SSH host in your remote URL determines which key gets used

