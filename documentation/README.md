# Documentation

The documentation is built using [Docusaurus 2](https://docusaurus.io/). The deployment is done through a centralized build from [IOTA WIKI](https://github.com/iota-community/iota-wiki). To run a local instance the [IOTA WIKI CLI](https://github.com/iota-community/iota-wiki-cli) is used.

## Prerequisites

- [Node.js v14.14+](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started/install)

## Installation

```console
yarn
```

This command installs all needed dependencies.

## Local Development

```console
yarn start
```

This command starts a local, wiki themed, development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Including .md file

```console
{@import <file path>}
```

Example:

```console
{@import ../../../../bindings/wasm/docs/api-reference.md}
```

## Default Structure

IOTA projects usually house their Wiki documentation within the documentation folder of any project. This
template provides a set structure to separate concerns based on the [Diataxis framework](https://diataxis.fr/), with
some minor modifications.

You do not need to use all of these sections, so please feel free to delete any which do not suit your needs.

### Getting Started

The [Getting Started folder](documentation/getting_started/README.md) should be the first section in your documentation. It should give the user a high level overview of the project, required prior knowledge, prerequisites, and ideally a quick set up guide, or "hello world".

### Key Concepts

The [Key concepts folder](documentation/key_concepts/README.md) revolves around [explanations](https://diataxis.fr/explanation/), and are therefore **understanding oriented**.

### Examples

The [Examples folder](documentation/examples/README.md) should only address concrete examples, or [how-to guides](https://diataxis.fr/how-to-guides/), which are **goal oriented**.

### Reference

The [Reference folder](documentation/reference/README.md) should describe the [technical information](https://diataxis.fr/reference/) of your project. It is **information-oriented**.

### Tutorials

The [Tutorials folder](documentation/tutorials/README.md) should contain articles which guide the user step by step through a series of how-tos with the relevant explanations to achieve a project or real world use case. [Tutorials](https://diataxis.fr/tutorials/) are **learning-oriented**.

### Troubleshooting

The [Troubleshooting file](documentation/troubleshooting.md) should contain instructions or links to where users can post questions, or create issues if necessary.

## Contribute

The [Contribute file](documentation/contribute.md) should give the users directions and 