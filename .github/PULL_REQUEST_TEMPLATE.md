# 🐛 Fix / ✨ Feature: < Short, descriptive title >

## 📝 Description

A clear and concise description of what this pull request does and **why** it is needed.

## 🎯 Type of Change

Check **all** that apply.

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ Feature (new, non-breaking functionality)
- [ ] ♻️ Refactor (code changes that neither fix a bug nor add a feature)
- [ ] 📚 Documentation (documentation-only changes)
- [ ] 🧹 Chore (tooling, deps, config — no production code)
- [ ] ⚡ Performance (code changes that improve performance)
- [ ] ♿ Accessibility (a11y improvements)
- [ ] 🌐 i18n / Content (translation or copy changes)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to **not** work as expected)

## 🔗 Related Issue

> Link the issue this PR resolves. Use `Closes #`, `Fixes #`, or `Resolves #`.

Closes #

## 📋 Changes

Describe the main changes, ideally with before/after context.

### Change 1: < Title >

```tsx
// BEFORE
const example = 'old'

// AFTER
const example = 'new'
```

### Change 2: < Title >

-

## ✅ Verification Checklist

Go through every item before requesting review. A checked box means you actually verified it — not that you intend to.

### 🧹 Code Quality

- [ ] `tsc` — type-checks pass with no errors
- [ ] `biome` — lint + format pass (`pnpm lint:check`)
- [ ] `build` — production build succeeds (`pnpm build`)
- [ ] No `any` types introduced
- [ ] No `console.log` / `debugger` left behind
- [ ] Self-review of the diff completed

### ♿ Accessibility

- [ ] All interactive elements have a visible `:focus-visible` style
- [ ] All meaningful images have descriptive `alt` text (decorative images use `alt=""`)
- [ ] `aria-*` attributes used correctly where needed
- [ ] Color contrast meets WCAG AA (≥ 4.5:1 for body text)
- [ ] Layout works in RTL (right-to-left) languages

### ⚡ Performance

- [ ] Routes / heavy components are lazy-loaded where appropriate
- [ ] Bundle size impact considered (no new large dependencies without justification)
- [ ] Images are optimized and served with appropriate format/size

### 🌐 i18n

- [ ] All **20 languages** updated when user-facing copy changed
- [ ] New strings added to the `TranslationContent` interface
- [ ] No hard-coded user-facing text in components

### 🔒 Security

- [ ] Secrets are read via `src/config/env.ts` — never inlined or committed
- [ ] No secrets, tokens, or credentials in the diff
- [ ] External links use `rel="noopener noreferrer"` (and `target="_blank"`)

### 🌿 Git

- [ ] Commit messages follow the **gitmoji** convention (e.g. `:sparkles: feat(scope): …`)
- [ ] Branch follows naming convention (`feat/<id>_<slug>`, `fix/<id>_<slug>`, etc.)
- [ ] This PR targets the **`develop`** branch (not `main`)

## 📁 Files Changed

```
path/to/file.tsx
path/to/another.tsx
```

## 💬 Notes

Any additional context for reviewers: performance implications, known follow-ups, areas of concern, or testing instructions.

---
_Keep this PR focused. If you find yourself adding unrelated changes, split them into a separate PR._
