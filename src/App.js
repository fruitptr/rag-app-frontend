import React from 'react';
import { Layout, theme } from 'antd';
import AppHeader from './components/Header';
import AppSidebar from './components/Sidebar';
import AppBreadcrumbs from './components/Breadcrumbs';
import ContentArea from './components/Content';

const { Content, Footer } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const bookData = {
    "book": {
      "title": "Understanding React",
      "author": "John Doe",
      "coverUrl": "https://example.com/cover.jpg",
      "publicationYear": 2023,
      "isbn": "978-3-16-148410-0",
      "summary": "This book provides a comprehensive guide to React, covering everything from the basics to advanced concepts.",
      "chapters": [
        {
          "chapterNumber": 1,
          "title": "Introduction to React",
          "content": "This chapter introduces React, its core concepts, and the benefits of using React in web development.",
          "pageCount": 10,
          "subChapters": [
            {
              "subChapterNumber": 1.1,
              "title": "What is React?",
              "content": "An overview of React, its purpose, and its role in modern web development."
            },
            {
              "subChapterNumber": 1.2,
              "title": "History of React",
              "content": "A brief history of React, from its creation at Facebook to its current status."
            },
            {
              "subChapterNumber": 1.3,
              "title": "Key Features of React",
              "content": "A discussion of the key features that make React a powerful tool for building web applications."
            }
          ]
        },
        {
          "chapterNumber": 2,
          "title": "React Components",
          "content": "In this chapter, we delve into the details of React components, their lifecycle, and how to effectively use them.",
          "pageCount": 20,
          "subChapters": [
            {
              "subChapterNumber": 2.1,
              "title": "Component Basics",
              "content": "An introduction to React components, including functional and class components."
            },
            {
              "subChapterNumber": 2.2,
              "title": "Component Lifecycle",
              "content": "A deep dive into the lifecycle methods of React components and their use cases."
            },
            {
              "subChapterNumber": 2.3,
              "title": "Stateless vs Stateful Components",
              "content": "Understanding the difference between stateless and stateful components and when to use each."
            },
            {
              "subChapterNumber": 2.4,
              "title": "Component Composition",
              "content": "How to compose components effectively to build complex user interfaces."
            }
          ]
        },
        {
          "chapterNumber": 3,
          "title": "State and Props",
          "content": "This chapter explains the concepts of state and props in React, and how they are used to manage data within components.",
          "pageCount": 15,
          "subChapters": [
            {
              "subChapterNumber": 3.1,
              "title": "Understanding Props",
              "content": "An explanation of props, how they are passed between components, and their role in React."
            },
            {
              "subChapterNumber": 3.2,
              "title": "Understanding State",
              "content": "A detailed look at state, how it is managed within components, and its importance in React."
            },
            {
              "subChapterNumber": 3.3,
              "title": "Props vs State",
              "content": "Comparing props and state, including examples of when to use each."
            },
            {
              "subChapterNumber": 3.4,
              "title": "Lifting State Up",
              "content": "Techniques for lifting state up in the component hierarchy to ensure proper data flow."
            }
          ]
        },
        {
          "chapterNumber": 4,
          "title": "React Hooks",
          "content": "Here, you'll learn about React Hooks, including useState, useEffect, and custom hooks, and how they enhance functional components.",
          "pageCount": 18,
          "subChapters": [
            {
              "subChapterNumber": 4.1,
              "title": "Introduction to Hooks",
              "content": "An introduction to React Hooks and why they were introduced."
            },
            {
              "subChapterNumber": 4.2,
              "title": "useState Hook",
              "content": "A detailed explanation of the useState hook and its usage."
            },
            {
              "subChapterNumber": 4.3,
              "title": "useEffect Hook",
              "content": "An in-depth look at the useEffect hook and how to manage side effects in React components."
            },
            {
              "subChapterNumber": 4.4,
              "title": "Creating Custom Hooks",
              "content": "How to create and use custom hooks to encapsulate logic and reuse it across components."
            }
          ]
        },
        {
          "chapterNumber": 5,
          "title": "Advanced React Patterns",
          "content": "This chapter covers advanced patterns in React, such as higher-order components, render props, and context API.",
          "pageCount": 22,
          "subChapters": [
            {
              "subChapterNumber": 5.1,
              "title": "Higher-Order Components (HOC)",
              "content": "An explanation of higher-order components, including examples of how to use them."
            },
            {
              "subChapterNumber": 5.2,
              "title": "Render Props",
              "content": "Understanding the render props pattern and how it can be used to share code between components."
            },
            {
              "subChapterNumber": 5.3,
              "title": "Context API",
              "content": "A deep dive into the Context API and how it can be used to manage global state in a React application."
            },
            {
              "subChapterNumber": 5.4,
              "title": "Error Boundaries",
              "content": "How to use error boundaries to catch and handle errors in React components."
            }
          ]
        },
        {
          "chapterNumber": 6,
          "title": "Testing React Applications",
          "content": "Learn how to test React applications using various testing frameworks like Jest and React Testing Library.",
          "pageCount": 16,
          "subChapters": [
            {
              "subChapterNumber": 6.1,
              "title": "Introduction to Testing",
              "content": "An overview of why testing is important and the different types of tests you can write for React applications."
            },
            {
              "subChapterNumber": 6.2,
              "title": "Unit Testing with Jest",
              "content": "How to write unit tests for React components using Jest."
            },
            {
              "subChapterNumber": 6.3,
              "title": "Testing Components with React Testing Library",
              "content": "A guide to using React Testing Library to test components and ensure they behave as expected."
            },
            {
              "subChapterNumber": 6.4,
              "title": "End-to-End Testing with Cypress",
              "content": "An introduction to end-to-end testing with Cypress and how to test complete user workflows."
            }
          ]
        },
        {
          "chapterNumber": 7,
          "title": "Optimizing React Performance",
          "content": "This chapter focuses on optimizing the performance of React applications by avoiding common pitfalls and using best practices.",
          "pageCount": 14,
          "subChapters": [
            {
              "subChapterNumber": 7.1,
              "title": "Performance Pitfalls",
              "content": "Common performance issues in React applications and how to avoid them."
            },
            {
              "subChapterNumber": 7.2,
              "title": "Code Splitting",
              "content": "How to use code splitting to improve the load time of your React application."
            },
            {
              "subChapterNumber": 7.3,
              "title": "Memoization Techniques",
              "content": "Using memoization techniques like React.memo and useMemo to optimize rendering."
            },
            {
              "subChapterNumber": 7.4,
              "title": "Lazy Loading",
              "content": "How to implement lazy loading for components to reduce initial load time."
            }
          ]
        },
        {
          "chapterNumber": 8,
          "title": "Deploying React Applications",
          "content": "In the final chapter, we discuss how to deploy React applications to different hosting platforms, including best practices for production.",
          "pageCount": 12,
          "subChapters": [
            {
              "subChapterNumber": 8.1,
              "title": "Preparing for Deployment",
              "content": "Steps to prepare your React application for deployment, including build optimization and environment configuration."
            },
            {
              "subChapterNumber": 8.2,
              "title": "Deploying to Netlify",
              "content": "A guide to deploying React applications to Netlify, including setting up continuous deployment."
            },
            {
              "subChapterNumber": 8.3,
              "title": "Deploying to Vercel",
              "content": "How to deploy React applications to Vercel, with a focus on performance optimization."
            },
            {
              "subChapterNumber": 8.4,
              "title": "Deploying to AWS",
              "content": "Steps to deploy React applications to AWS, including using S3 and CloudFront for a scalable solution."
            }
          ]
        }
      ],
      "totalPages": 127
    }
  };

  return (
    <Layout>
      <AppHeader />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <AppBreadcrumbs />
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppSidebar bookData/>
          <ContentArea />
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ashish Sample Page ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout;
