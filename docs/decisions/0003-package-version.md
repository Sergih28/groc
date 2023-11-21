# Use exact or range package version

## Context and Problem Statement

- **What's the aim regarding package versioning?**

Aiming for clarity and consistency in managing dependencies by explicitly specifying package versions.

## Considered Options

* Specifying exact package versions in package.json.
* Not specifying exact package versions, relying on version ranges.

## Decision Outcome

The chosen approach is to specify the exact version of each package in the package.json file. This decision ensures precise version control and dependency management. By explicitly stating the exact version, we avoid potential discrepancies or unexpected changes caused by using version ranges.
