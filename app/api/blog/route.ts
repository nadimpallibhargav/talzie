import type { NextRequest } from "next/server";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: string;
};

type Blog = {
  id: number;
  title: string;
  content: BlogPost[];
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog Collection",
    content: [
      {
        id: 1,
        title:
          "The ChatGPT Hype Is Over — Now Watch How Google Will Kill ChatGPT.",
        content:
          "In this article, we’ll explore those differences and similarities, and offer some guidance for choosing whether Bard or ChatGPT will better suit your needs.",
        image: "https://example.com/images/web-development-future.jpg",
      },
      {
        id: 2,
        title: "",
        content:
          "Both Bard and ChatGPT are artificial intelligence (AI) text generators that enable users to input requests, or prompts, using natural language and will return answers in a way that mimics human conversation. As far as generative AI (GenAI) tools go, the two options have similar capabilities, but as they are produced by different companies, you’ll notice slight differences when comparing them side-by-side.",
        image: "https://example.com/images/typescript-guide.jpg",
      },
      {
        id: 3,
        title: "",
        content:
          "The biggest difference between Bard and ChatGPT is the company that created them: Bard is Google’s GenAI creation, while OpenAI created ChatGPT. All other differences between the tools descend from there, in alignment with each company’s priorities, preferences, or goals.",
        image: "https://example.com/images/css-skills.jpg",
      },
      {
        id: 4,
        title: "",
        content: "Here’s a broad overview comparing the two products:",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 5,
        title: "Differences between Bard and ChatGPT",
        content:
          "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 6,
        title: "Data sources",
        content:
          "Both Bard and ChatGPT are large language models (LLMs), which is a branch of AI that uses massive amounts of data to receive inputs and produce outputs. With LLMs, the way the machine interprets the input and the output it produces depends on the data that it’s trained on.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 7,
        title: "",
        content:
          "Bard and ChatGPT are trained on slightly different data sources.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 8,
        title: "",
        content:
          "Bard is trained on Infiniset, Google’s proprietary dataset. Some aspects of this dataset are secret, but we do know that it includes the Common Crawl dataset (a free, open repository of web crawled data collected across the internet), Wikipedia, scientific papers, mathematical equations, and human and programming languages.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 9,
        title: "",
        content:
          "ChatGPT is trained on information publicly available on the internet (including the Common Crawl dataset and sites like Wikipedia), licensed information from third-parties, human-provided information. The free version of ChatGPT is trained on internet information dating 2021 and earlier, while the paid version has more recent data. OpenAI is similarly somewhat secretive about the licensed and human-provided information they used to train ChatGPT.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 10,
        title: "User experience",
        content:
          "Perhaps the most immediately noticeable difference between Bard and ChatGPT is the user experience. Both interfaces are straightforward with their chatbot formatting—with clear spaces for entering text and a large space for the conversation. They also both offer a chat history, so you can refer back to previous “conversations.”",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 11,
        title: "Which is better: Bard or ChatGPT?",
        content:
          "In general, Bard is said to be better for research, while ChatGPT is said to be better for text generation. Although Bard has more user features available for free, choosing which is better depends on your needs. Users like that Bard can form responses based on real-time information and can cite sources, while they tend to prefer ChatGPT for text generation, like articles and emails. However, it’s important to remember that both Bard and ChatGPT are powered by rapidly developing technologies, and both Google and OpenAI release updates to their AI tools with some regularity. It may be easiest to try both tools in order to decide which one you prefer for your typical use cases.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Blog Collection",
    content: [
      {
        id: 1,
        title:
          "The2 ChatGPT Hype Is Over — Now Watch How Google Will Kill ChatGPT.",
        content:
          "In this article, we’ll explore those differences and similarities, and offer some guidance for choosing whether Bard or ChatGPT will better suit your needs.",
        image: "https://example.com/images/web-development-future.jpg",
      },
      {
        id: 2,
        title: "",
        content:
          "Both Bard and ChatGPT are artificial intelligence (AI) text generators that enable users to input requests, or prompts, using natural language and will return answers in a way that mimics human conversation. As far as generative AI (GenAI) tools go, the two options have similar capabilities, but as they are produced by different companies, you’ll notice slight differences when comparing them side-by-side.",
        image: "https://example.com/images/typescript-guide.jpg",
      },
      {
        id: 3,
        title: "",
        content:
          "The biggest difference between Bard and ChatGPT is the company that created them: Bard is Google’s GenAI creation, while OpenAI created ChatGPT. All other differences between the tools descend from there, in alignment with each company’s priorities, preferences, or goals.",
        image: "https://example.com/images/css-skills.jpg",
      },
      {
        id: 4,
        title: "",
        content: "Here’s a broad overview comparing the two products:",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 5,
        title: "Differences between Bard and ChatGPT",
        content:
          "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 6,
        title: "Data sources",
        content:
          "Both Bard and ChatGPT are large language models (LLMs), which is a branch of AI that uses massive amounts of data to receive inputs and produce outputs. With LLMs, the way the machine interprets the input and the output it produces depends on the data that it’s trained on.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 7,
        title: "",
        content:
          "Bard and ChatGPT are trained on slightly different data sources.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 8,
        title: "",
        content:
          "Bard is trained on Infiniset, Google’s proprietary dataset. Some aspects of this dataset are secret, but we do know that it includes the Common Crawl dataset (a free, open repository of web crawled data collected across the internet), Wikipedia, scientific papers, mathematical equations, and human and programming languages.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 9,
        title: "",
        content:
          "ChatGPT is trained on information publicly available on the internet (including the Common Crawl dataset and sites like Wikipedia), licensed information from third-parties, human-provided information. The free version of ChatGPT is trained on internet information dating 2021 and earlier, while the paid version has more recent data. OpenAI is similarly somewhat secretive about the licensed and human-provided information they used to train ChatGPT.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 10,
        title: "User experience",
        content:
          "Perhaps the most immediately noticeable difference between Bard and ChatGPT is the user experience. Both interfaces are straightforward with their chatbot formatting—with clear spaces for entering text and a large space for the conversation. They also both offer a chat history, so you can refer back to previous “conversations.”",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
      {
        id: 11,
        title: "Which is better: Bard or ChatGPT?",
        content:
          "In general, Bard is said to be better for research, while ChatGPT is said to be better for text generation. Although Bard has more user features available for free, choosing which is better depends on your needs. Users like that Bard can form responses based on real-time information and can cite sources, while they tend to prefer ChatGPT for text generation, like articles and emails. However, it’s important to remember that both Bard and ChatGPT are powered by rapidly developing technologies, and both Google and OpenAI release updates to their AI tools with some regularity. It may be easiest to try both tools in order to decide which one you prefer for your typical use cases.",
        image: "https://example.com/images/cloud-computing-benefits.jpg",
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get("id") || "0", 10);

  if (id) {
    const blog = blogs.find((blog) => blog.id === id);
    if (blog) {
      return new Response(JSON.stringify(blog), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Blog not found", { status: 404 });
    }
  }

  return new Response(JSON.stringify(blogs), {
    headers: { "Content-Type": "application/json" },
  });
}
