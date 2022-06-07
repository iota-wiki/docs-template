/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: "doc",
      id: "overview",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          id: "getting_started/README",
        },
      ],
    },
    {
      type: "category",
      label: "Key Concepts",
      items: [
        {
          type: "doc",
          id: "key_concepts/README",
        },
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "doc",
          id: "examples/README",
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        {
          type: "doc",
          id: "reference/README",
        },
      ],
    },
    {
      type: "doc",
      id: "troubleshooting",
      label: "Troubleshooting",
    },
    {
      type: "doc",
      id: "contribute",
      label: "Contribute",
    },
  ],
};