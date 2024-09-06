import type { NextRequest } from "next/server";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: any;
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
        image: "/images/blog1.jpeg",
      },
      {
        id: 2,
        title: "",
        content:
          "Both Bard and ChatGPT are artificial intelligence (AI) text generators that enable users to input requests, or prompts, using natural language and will return answers in a way that mimics human conversation. As far as generative AI (GenAI) tools go, the two options have similar capabilities, but as they are produced by different companies, you’ll notice slight differences when comparing them side-by-side.",
        image: false,
      },
      {
        id: 3,
        title: "",
        content:
          "The biggest difference between Bard and ChatGPT is the company that created them: Bard is Google’s GenAI creation, while OpenAI created ChatGPT. All other differences between the tools descend from there, in alignment with each company’s priorities, preferences, or goals.",
        image: false,
      },
      {
        id: 4,
        title: "",
        content: "Here’s a broad overview comparing the two products:",
        image: false,
      },
      {
        id: 5,
        title: "Differences between Bard and ChatGPT",
        content:
          "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
        image: false,
      },
      {
        id: 6,
        title: "Data sources",
        content:
          "Both Bard and ChatGPT are large language models (LLMs), which is a branch of AI that uses massive amounts of data to receive inputs and produce outputs. With LLMs, the way the machine interprets the input and the output it produces depends on the data that it’s trained on.",
        image: false,
      },
      {
        id: 7,
        title: "",
        content:
          "Bard and ChatGPT are trained on slightly different data sources.",
        image: false,
      },
      {
        id: 8,
        title: "",
        content:
          "Bard is trained on Infiniset, Google’s proprietary dataset. Some aspects of this dataset are secret, but we do know that it includes the Common Crawl dataset (a free, open repository of web crawled data collected across the internet), Wikipedia, scientific papers, mathematical equations, and human and programming languages.",
        image: false,
      },
      {
        id: 9,
        title: "",
        content:
          "ChatGPT is trained on information publicly available on the internet (including the Common Crawl dataset and sites like Wikipedia), licensed information from third-parties, human-provided information. The free version of ChatGPT is trained on internet information dating 2021 and earlier, while the paid version has more recent data. OpenAI is similarly somewhat secretive about the licensed and human-provided information they used to train ChatGPT.",
        image: false,
      },
      {
        id: 10,
        title: "User experience",
        content:
          "Perhaps the most immediately noticeable difference between Bard and ChatGPT is the user experience. Both interfaces are straightforward with their chatbot formatting—with clear spaces for entering text and a large space for the conversation. They also both offer a chat history, so you can refer back to previous “conversations.”",
        image: false,
      },
      {
        id: 11,
        title: "Which is better: Bard or ChatGPT?",
        content:
          "In general, Bard is said to be better for research, while ChatGPT is said to be better for text generation. Although Bard has more user features available for free, choosing which is better depends on your needs. Users like that Bard can form responses based on real-time information and can cite sources, while they tend to prefer ChatGPT for text generation, like articles and emails. However, it’s important to remember that both Bard and ChatGPT are powered by rapidly developing technologies, and both Google and OpenAI release updates to their AI tools with some regularity. It may be easiest to try both tools in order to decide which one you prefer for your typical use cases.",
        image: false,
      },
    ],
  },
  {
    id: 2,
    title: "Blog Collection",
    content: [
      {
        id: 1,
        title: "Why Can’t Robots Click The “I’m Not a Robot” Box On Websites?",
        content:
          "If you've ever browsed the internet, you've likely encountered the 'Im Not a Robot' checkbox while filling out a form or logging into a website. This little CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) is designed to filter out automated bots from accessing certain services. But have you ever wondered why robots can’t simply check that box and proceed? After all, bots are designed to automate tasks, so why is this little box such a tricky hurdle?",
        image: "/images/blog2.jpeg",
      },
      {
        id: 2,
        title: "",
        content:
          "In this article, we’ll dive into the mechanics behind the 'Im Not a Robot' checkbox, how it works, and why even advanced bots have a hard time fooling it.",
        image: false,
      },
      {
        id: 3,
        title: "What Is CAPTCHA?",
        content:
          "Before we answer why robots can’t click the checkbox, it's helpful to understand what a CAPTCHA is. CAPTCHA is a security mechanism used by websites to distinguish human users from automated programs. CAPTCHAs come in many forms: distorted text, image recognition puzzles, and the simple “I’m Not a Robot” checkbox.",
        image: false,
      },
      {
        id: 4,
        title: "",
        content:
          "The goal is to block bots, which are computer programs that perform repetitive tasks like scraping data, spamming, or attempting to hack systems. Since bots can be a threat to websites, CAPTCHA adds an extra layer of protection.",
        image: false,
      },
      // {
      //   id: 5,
      //   title: "Differences between Bard and ChatGPT",
      //   content:
      //     "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
      //   image: "https://example.com/images/cloud-computing-benefits.jpg",
      // },
      {
        id: 6,
        title: "How Does the “I’m Not a Robot” Checkbox Work?",
        content:
          "The “I’m Not a Robot” checkbox is a specific type of CAPTCHA that’s part of Google’s reCAPTCHA system. On the surface, it seems straightforward: click the checkbox, and you're in. But there’s a lot more happening in the background.",
        image: false,
      },
      {
        id: 7,
        title: "",
        content:
          "When you check the box, the system doesn’t just register a simple click. It analyzes your entire interaction with the webpage, including:",
        image: false,
      },
      {
        id: 8,
        title: "",
        content:
          "1. Mouse Movement: Humans naturally move the mouse in unpredictable patterns. Bots, however, may move the cursor in perfectly straight or overly consistent lines. The system tracks how your mouse approaches the checkbox, its speed, and the path it takes.",
        image: false,
      },
      {
        id: 9,
        title: "",
        content:
          "2. Click Behavior: Even the exact way you click matters. Humans have slight variations in the pressure and timing of their clicks, which bots may struggle to mimic. These differences help distinguish between genuine users and automated scripts.",
        image: false,
      },
      {
        id: 10,
        title: "",
        content:
          "3. Browser Activity: CAPTCHA systems can monitor your recent browsing behavior. They look at cookies, your IP address, and even how long you've been on the page. A bot trying to interact with the CAPTCHA in isolation might raise red flags because it lacks the broader context of human-like browsing activity.",
        image: false,
      },
      {
        id: 11,
        title: "",
        content:
          "4. Time Spent on Page: Humans usually take a bit of time to navigate a page, read through it, and click on elements. Bots are often faster and more efficient, sometimes acting instantaneously. CAPTCHA systems use these timing patterns to differentiate between humans and bots.",
        image: false,
      },
      {
        id: 12,
        title: "The Future of CAPTCHA",
        content:
          "While the checkbox CAPTCHA is effective, it’s not foolproof, and eventually, bots may catch up. Future CAPTCHA systems may rely more on passive detection methods, analyzing even more data points without requiring user interaction. For instance, some systems are already moving toward invisible CAPTCHAs that monitor user behavior in the background.",
        image: false,
      },
      {
        id: 13,
        title: "",
        content:
          "In the meantime, we can expect CAPTCHA systems to keep getting smarter and harder for bots to bypass, ensuring that your web experience remains human-friendly.",
        image: false,
      },
      {
        id: 14,
        title: "Conclusion",
        content:
          "The “I’m Not a Robot” checkbox may seem like a trivial task, but it’s powered by sophisticated technology that analyzes your behavior in more ways than you might imagine. By examining everything from mouse movements to browsing patterns, CAPTCHA systems create a barrier that most bots can’t cross—at least, not yet. So, the next time you click that checkbox, take a moment to appreciate the intricate security measures working behind the scenes to keep the internet a little safer.",
        image: false,
      },
    ],
  },
  {
    id: 3,
    title: "Blog Collection",
    content: [
      {
        id: 1,
        title:
          "Elevate Your Digital Presence with Expert Web Design and Development",
        content:
          "In today’s fast-paced digital landscape, a business’s online presence is more critical than ever. Your website is often the first interaction potential customers have with your brand. But having just any website isn't enough—you need a dynamic, user-friendly, and visually stunning digital experience to capture attention and convert visitors into customers. That’s where a professional web design and development agency, like ours, comes in.",
        image: "/images/blog31.jpeg",
      },
      {
        id: 2,
        title: "",
        content:
          "At Talzie, we specialize in creating custom websites that not only look great but also deliver results. Whether you’re a small business looking to establish your online presence or a large enterprise in need of a complex e-commerce solution, we have the tools, expertise, and creativity to bring your vision to life..",
        image: false,
      },
      {
        id: 3,
        title: "Why Invest in Professional Web Design and Development?",
        content:
          "In an era where users expect websites to load quickly, be mobile-friendly, and provide intuitive navigation, a DIY approach often falls short. Partnering with a professional agency offers a range of benefits, including:",
        image: false,
      },
      {
        id: 4,
        title: "1. Customized Designs that Reflect Your Brand",
        content:
          "Your website is your digital storefront. It should tell your story, reflect your brand's values, and offer a seamless user experience. Our designers work closely with you to understand your brand identity and create a website that resonates with your target audience. No generic templates—just a unique design tailored specifically to your needs.",
        image: false,
      },
      // {
      //   id: 5,
      //   title: "Differences between Bard and ChatGPT",
      //   content:
      //     "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
      //   image: "https://example.com/images/cloud-computing-benefits.jpg",
      // },
      {
        id: 6,
        title: "2. Optimized for Mobile and SEO",
        content:
          "With mobile users surpassing desktop users globally, it's essential for your site to be responsive and optimized for all devices. Beyond aesthetics, we ensure your site is fast, mobile-friendly, and built with SEO best practices in mind. This means higher search engine rankings, more organic traffic, and better user engagement.",
        image: false,
      },
      {
        id: 7,
        title: "",
        content:
          "When you check the box, the system doesn’t just register a simple click. It analyzes your entire interaction with the webpage, including:",
        image: false,
      },
      {
        id: 8,
        title: "3. User-Centric Experiences",
        content:
          "A visually appealing website is important, but so is usability. We create intuitive navigation structures, clear calls-to-action, and a smooth browsing experience that leads users effortlessly through your site. Our goal is to convert clicks into customers.",
        image: false,
      },
      {
        id: 9,
        title: "4. Advanced Functionality",
        content:
          "Whether you need an e-commerce platform, a content management system (CMS), or an interactive web application, we provide development solutions tailored to your business objectives. Our developers have extensive experience in building secure, scalable, and feature-rich websites that grow with your business.",
        image: false,
      },
      {
        id: 10,
        title: "5. Ongoing Support and Maintenance",
        content:
          "Launching your site is just the beginning. We offer ongoing support and maintenance to ensure your website continues to perform optimally. From security updates to content changes and performance monitoring, we’ve got you covered.",
        image: false,
      },
      {
        id: 11,
        title: "Why Choose Talzie?",
        content:
          "With so many web design and development agencies out there, you may wonder why you should choose us. Here’s what sets us apart:",
        image: false,
      },
      {
        id: 12,
        title: "The Future of CAPTCHA",
        content:
          "Experienced Team: Our designers and developers bring years of expertise in creating websites that are both visually appealing and highly functional.",
        image: false,
      },
      {
        id: 13,
        title: "",
        content:
          "Client-Centric Approach: We listen to your needs and collaborate closely with you to ensure your vision is brought to life",
        image: false,
      },
      {
        id: 14,
        title: "",
        content:
          "Cutting-Edge Technologies: We use the latest tools and technologies to build future-proof websites that perform well on all devices.",
        image: false,
      },
      {
        id: 15,
        title: "",
        content:
          "Affordable Packages: We offer flexible pricing packages to suit businesses of all sizes, ensuring you get the best value for your investment.",
        image: false,
      },
      {
        id: 16,
        title: "",
        content:
          "Proven Results: Our portfolio of successful projects speaks for itself. We have helped businesses across industries grow their online presence and achieve their goals.",
        image: false,
      },
      {
        id: 17,
        title: "Get in Touch",
        content:
          "Ready to transform your online presence? Contact [Your Agency Name] today to schedule a consultation and see how we can help you take your business to the next level. Whether you need a complete website redesign or ongoing development support, we’re here to deliver exceptional results tailored to your unique needs.",
        image: false,
      },
      {
        id: 18,
        title: "",
        content:
          "Together, let's build a digital experience that leaves a lasting impression.",
        image: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blog Collection",
    content: [
      {
        id: 1,
        title:
          "Why MVP is No Longer Enough: It's Time to Focus on MVE (Minimum Viable Experience)",
        content:
          "For years, the startup and product development worlds have been dominated by the concept of the Minimum Viable Product (MVP)—a pared-down version of a product designed to test the market quickly, gather feedback, and iterate based on real-world use. While the MVP approach has served countless startups well, it's no longer the gold standard it once was. In today’s hyper-competitive market, the focus is shifting to MVE: Minimum Viable Experience.",
        image: "/images/blog4.jpeg",
      },
      {
        id: 2,
        title: "",
        content:
          "Why the change? Because in an age where user experience (UX) is paramount, launching an MVP without considering the overall customer journey can spell disaster. Here’s why MVE is the new MVP and how it can reshape your approach to product development.",
        image: false,
      },
      {
        id: 3,
        title: "What is an MVP?",
        content:
          "Before we dive into MVE, let’s quickly recap the MVP philosophy. An MVP is a version of your product with just enough features to satisfy early adopters and gather feedback. It allows startups to test assumptions, validate ideas, and pivot quickly if needed—all with minimal investment.",
        image: false,
      },
      {
        id: 4,
        title: "",
        content:
          "The beauty of the MVP is in its simplicity: build, test, learn, and iterate. But in today’s landscape, this approach has started to fall short. Users no longer just want a product that works; they want an experience that resonates.",
        image: false,
      },
      // {
      //   id: 5,
      //   title: "Differences between Bard and ChatGPT",
      //   content:
      //     "Google and OpenAI’s approaches to their GenAI tools led to some subtle differences between their two similar products. Let’s take a closer look at some of those differences.",
      //   image: "https://example.com/images/cloud-computing-benefits.jpg",
      // },
      {
        id: 6,
        title: "Enter MVE: The Minimum Viable Experience",
        content:
          "The shift from MVP to MVE is about delivering a holistic, user-centered experience from day one. It’s not just about building the minimum product to test functionality—it's about ensuring that users enjoy the minimum viable experience that reflects your brand, solves their problem, and encourages continued use.",
        image: false,
      },
      {
        id: 7,
        title: "1. Focus on User Experience, Not Just Functionality",
        content:
          "An MVE prioritizes usability and design just as much as functionality. It’s about creating a product that users can interact with seamlessly, making sure that even the initial version provides value in terms of engagement and satisfaction. With MVE, you’re not just testing an idea; you’re testing an experience.",
        image: false,
      },
      {
        id: 8,
        title: "2. Deliver Meaningful Value",
        content:
          "A Minimum Viable Experience is about more than just a working prototype. It needs to provide real, tangible value that satisfies users’ needs. This means focusing on the core features that make your product stand out while ensuring they are presented in a polished and user-friendly way. MVE shows the best of what you offer, even if it's still evolving.",
        image: false,
      },
      {
        id: 9,
        title: "3. Retain Users from Day One",
        content:
          "Where MVPs often aim for feedback with the goal of improving, MVEs focus on user retention. Delivering a great experience early on can foster long-term loyalty. If users enjoy the product—even in its early form—they are more likely to stick around, offer valuable feedback, and become advocates for your brand.",
        image: false,
      },
      {
        id: 10,
        title: "4. Build Brand Trust",
        content:
          "With an MVE, you’re not just introducing a product—you’re making a statement about your brand. By delivering a positive experience from the start, you establish trust and credibility. Customers see that you value their time and satisfaction, and that you’ve considered their needs, even in the early stages.",
        image: false,
      },
      {
        id: 11,
        title: "How to Build an MVE",
        content:
          "Shifting your mindset from MVP to MVE means paying more attention to details that affect user perception and experience. Here are some key factors to focus on:",
        image: false,
      },
      {
        id: 12,
        title: "1. Design with Empathy",
        content:
          "Understand your users deeply before building. What are their pain points? What features would genuinely solve their problems? And how can you deliver those solutions in a way that feels intuitive and seamless? Invest in UX/UI design from the beginning.",
        image: false,
      },
      {
        id: 13,
        title: "2. Prioritize the Essentials",
        content:
          "While MVE suggests offering more than an MVP, it doesn’t mean overloading your product with features. Focus on the core value proposition and make sure that part of the product is flawless. What’s the one thing your users absolutely need, and how can you make that experience delightful?",
        image: false,
      },
      {
        id: 14,
        title: "3. Polish the First Touchpoint",
        content:
          "From the moment a user interacts with your product—whether it’s your landing page, onboarding process, or the first screen of your app—it should feel intentional and high-quality. Even if your feature set is minimal, your first impression needs to be memorable and engaging.",
        image: false,
      },
      {
        id: 15,
        title: "4. Test and Iterate on the Experience",
        content:
          "MVE doesn’t mean you won’t evolve your product over time. Just like MVP, it requires feedback and iteration. But instead of just focusing on functionality, gather data on how users interact with your product. Where do they experience friction? What do they enjoy? This information will help you fine-tune the overall experience as you scale.",
        image: false,
      },
      {
        id: 16,
        title: "Conclusion: Experience Matters More Than Ever",
        content:
          "In a market where customers have countless options at their fingertips, the experience you provide is your biggest differentiator. While MVPs served their purpose in testing ideas, today’s users demand more. They expect value, seamless interaction, and a product they can enjoy using from the start.",
        image: false,
      },
      {
        id: 17,
        title: "",
        content:
          "Shifting from an MVP to an MVE mindset allows you to deliver something people will love, trust, and continue using—not just something they’ll tolerate for the sake of iteration. By focusing on the complete user journey, you position your product for long-term success in a competitive digital landscape.",
        image: false,
      },
      {
        id: 18,
        title: "",
        content:
          "It’s time to think beyond the product, and start thinking about the experience.",
        image: false,
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
