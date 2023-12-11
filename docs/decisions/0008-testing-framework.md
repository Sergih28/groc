# Decision: Test Framework Selection - Jest vs. Vitest

## Context and Problem Statement

- **What's the aim regarding the test framework?**

To identify a test framework that aligns with the new package manager, ensuring
compatibility, speed, and future community support for our project.

## Considered Options

- Jest
- Vitest

## Decision Outcome

Given the transition from bun to pnpm as our package manager, the decision is to
adopt Vitest as the preferred test framework over Jest for its better
performance and future support.
