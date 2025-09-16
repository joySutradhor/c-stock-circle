import {
  RiBarChartBoxLine,
  RiBriefcase4Line,
  RiMoneyDollarCircleLine,
  RiPlayCircleLine,
  RiRefreshLine,
  RiNotification3Line,
  RiBook2Line,
  RiChat1Line,
  RiStackLine,
  RiShieldCheckLine,
  RiStarLine,
  RiCheckboxCircleLine,
  RiMedalLine,
  RiSmartphoneLine
} from 'react-icons/ri'
import { MdOutlineJoinFull } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa6'
import { RiBankFill } from 'react-icons/ri'
import { AiOutlineIssuesClose } from 'react-icons/ai'
import { BsFillTrophyFill, BsStack } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { GoFileSubmodule } from 'react-icons/go'
import { FaUsers } from "react-icons/fa6";


const coursePagesData = {
  financialModeling: {
    slug: 'financial-modeling',

    // Hero Section
    heroBanner: {
      btnText: 'Upskill Yourself',
      title: 'Financial Modeling Course',
      subtitle: 'Financial Modeling Course with 100% Placement Support',
      highlights: [
        '180+ Hours of HD Video Content with Detailed Notes',
        'Lectures by seasoned investment bankers and industry experts.',
        'Hands-on Financial Modeling simulations for practical application.',
        'Real-world case studies and examples from notable deals.'
      ],
      bannerImg:
        'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/07.jpg',
      ctas: [
      
        {
          label: 'Download Brochure',
          href: '#',
          type: 'secondary',
          icon: FaDownload
        }
      ]
    },

    curriculamData: {
      mainTitle: 'Financial Modeling ',
      mainDescription:
        'Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns',
      textColor: 'Course Curriculum',
      text: 'Course',
      icon: BsStack,
      ytLink: 'https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ',
      faqs: [
        {
          title: 'What is the difference between saving and investing?',
          answer: [
            'Saving keeps money safe for short-term needs',
            'Investing grows wealth over the long term',
            'Savings are usually low-risk (bank deposits)',
            'Investments carry higher risk but higher potential returns'
          ]
        },
        {
          title: 'What is compound interest?',
          answer: [
            'Interest calculated on the initial principal plus accumulated interest',
            'Helps money grow faster over time',
            'Common in savings accounts and reinvested dividends'
          ]
        },
        {
          title: 'What are stocks and bonds?',
          answer: [
            'Stocks represent ownership in a company',
            'Bonds are loans you give to governments or corporations',
            'Stocks are generally higher risk, higher reward',
            'Bonds are lower risk, with fixed interest payments'
          ]
        },
        {
          title: 'What is diversification in investing?',
          answer: [
            'Spreading investments across assets to reduce risk',
            'Prevents losses from being concentrated in one area',
            'Commonly done with stocks, bonds, real estate, and mutual funds'
          ]
        },
        {
          title: 'What is a mutual fund?',
          answer: [
            'A pool of money from multiple investors',
            'Managed by professionals who buy a diversified portfolio',
            'Good option for beginners seeking diversification'
          ]
        },
        {
          title: 'What is the difference between IRA and 401(k)?',
          answer: [
            'IRA is an individual retirement account, opened by anyone',
            '401(k) is offered by employers with contribution matching',
            'Both provide tax advantages for retirement savings'
          ]
        },
        {
          title: 'What is risk tolerance in investing?',
          answer: [
            'An investor’s ability to handle losses',
            'Higher risk tolerance allows investing in stocks',
            'Lower risk tolerance leans towards bonds or savings'
          ]
        },
        {
          title: 'What is an emergency fund?',
          answer: [
            'Cash set aside for unexpected expenses',
            'Covers 3–6 months of living costs',
            'Protects against job loss or medical emergencies'
          ]
        },
        {
          title: 'What is inflation and why does it matter?',
          answer: [
            'Inflation is the rise in the cost of goods and services',
            'Reduces purchasing power over time',
            'Investments can help beat inflation'
          ]
        },
        {
          title: 'What is the difference between gross income and net income?',
          answer: [
            'Gross income is total earnings before deductions',
            'Net income is what remains after taxes and expenses',
            'Net income reflects actual take-home pay'
          ]
        }
      ]
    },

    // Career Scope Section
    modelingCourse: {
      mainTitle: 'Financial Modeling Career ',
      mainDescription:
        'Let’s get to know how this qualification can shape your future and career.',
      textColor: 'Scope & Salary',
      text: 'Banking Career',
      icon: BsFillTrophyFill,
      cta: { label: 'Learn More', href: '#' },
      courseData: [
        {
          key: 'growth',
          title: 'Growth & Recognition',
          description:
            'Financial Modeling is the most recognized and growth-oriented core finance job due to the dynamic nature of the work.',
          icon: RiBarChartBoxLine
        },
        {
          key: 'profiles',
          title: 'Job Profiles',
          description:
            'After completing our course, you can get a core finance job in Investment Banking, Equity Research, Valuations, etc.',
          icon: RiBriefcase4Line
        },
        {
          key: 'salary',
          title: 'Median Salary',
          description:
            'Although compensation depends on experience and education, the median CTC of an Investment Banker amounts to INR 12 LPA.',
          icon: RiMoneyDollarCircleLine
        }
      ]
    },

    faq: {
      mainTitle: 'Frequently Asked ',
      mainDescription:
        'Find answers to some of the most common questions about our Financial Modeling course, career opportunities, and salary prospects.',
      textColor: 'Questions ',
      text: 'Questions',
      icon: FaQuestionCircle,
      items: [
        {
          title: 'What is Financial Modeling?',
          description:
            'Financial modeling is the process of creating a representation of a company’s financial performance to aid in decision-making and valuation.'
        },
        {
          title: 'Who should take this course?',
          description:
            'This course is ideal for finance students, MBA graduates, and professionals aiming for roles in investment banking, equity research, or corporate finance.'
        },
        {
          title: 'What salary can I expect?',
          description:
            'While salaries vary depending on experience and education, an entry-level financial analyst can expect competitive packages, with growth potential up to INR 12 LPA and beyond.'
        }
      ]
    },

    exclusiveContent: {
      mainTitle: 'Exclusive ',
      mainDescription:
        'Unlock Premium Resources: Your Comprehensive Investment Banking Toolkit',
      textColor: 'Content Access',
      text: 'Content',
      icon: GoFileSubmodule,
      items: [
        {
          title: 'Investment Banking Handbook',
          description:
            'A comprehensive guide covering the A-Z of investment banking, from fundamental concepts to advanced strategies.',
          icon: RiBook2Line,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif'
        },
        {
          title: 'Financial Model Templates',
          description:
            'Ready-to-use Excel templates for various financial modeling scenarios, designed by industry veterans for real-world applications.',
          icon: RiStackLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg'
        },
        {
          title: 'Mobile App With Up-to-Date Resources',
          description:
            'Our Mobile Application provides instant access to all our study materials, updated regularly to reflect the latest industry trends.',
          icon: RiSmartphoneLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg'
        }
      ]
    },

    whyUs: {
      mainTitle: 'What Makes Us  ',
      mainDescription:
        'Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.',
      textColor: 'The Best ?',
      text: 'Why Us',
      icon: FaUsers,
      cta: { label: 'Learn More', href: '#' },
      items: [
        {
          title: 'Fully Practical Approach',
          description:
            'Learn Financial Modeling and valuation from the real-world perspective, not books.',
          icon: RiCheckboxCircleLine
        },
        {
          title: 'Highly Credible Trainers',
          description:
            'Our trainers are Investment Bankers themselves and have extensive experience in core finance.',
          icon: RiShieldCheckLine
        },
        {
          title: 'Most Detailed Curriculum',
          description:
            'Our curriculum is THE MOST detailed across the Investment Banking training industry.',
          icon: RiStarLine
        },
        {
          title: '100% Placement Assistance',
          description:
            'After the course completion, students get access to our placement network of 200+ recruiters.',
          icon: RiMedalLine
        }
      ]
    },

    programHighlights: {
      mainTitle: 'Program Highlights of Our ',
      textColor: 'Financial Modeling Course data',
      text: 'Financial',
      icon: RiPlayCircleLine,
      mainDescription:
        'Here are a few features of our coaching which will help you breeze through Financial Modeling.',

      items: [
        {
          title: '180+ Hours Videos',
          description:
            'Comprehensive video content covering all aspects of Financial Modeling.',
          icon: RiPlayCircleLine
        },
        {
          title: 'Revision & Backup Classes',
          description:
            'Extra classes to revise concepts and make up for missed sessions.',
          icon: RiRefreshLine
        },
        {
          title: 'Relevant Industry Updates',
          description:
            'Stay aligned with the latest market practices and industry insights.',
          icon: RiNotification3Line
        },
        {
          title: 'Exhaustive Question Banks',
          description:
            'Extensive practice questions for concept clarity and exam prep.',
          icon: RiBook2Line
        },
        {
          title: 'Unlimited Doubt Sessions',
          description: 'Get your doubts resolved with unlimited Q&A support.',
          icon: RiChat1Line
        },
        {
          title: 'Case Studies Approach',
          description: 'Real-life case studies to bridge theory and practice.',
          icon: RiStackLine
        }
      ],
      otherFeatures: '10+ Other Features'
    }
  },

  riskManagement: {
    slug: 'risk-management',

    heroBanner: {
      btnText: 'Advance Your Skills',
      title: 'Risk Management Course',
      subtitle: 'Master Risk Management with Expert Insights',
      highlights: [
        '120+ Hours of Practical Risk Management Training',
        'Learn from senior risk analysts and finance leaders',
        'Scenario-based training with simulations',
        'Case studies on financial crises and corporate failures'
      ],
      bannerImg:
        'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/risk.jpg',
      ctas: [
    
        {
          label: 'Download Brochure',
          href: '#',
          type: 'secondary',
          icon: FaDownload
        }
      ]
    },

    modelingCourse: {
      mainTitle: 'Risk Management Career ',
      mainDescription:
        'Explore career opportunities and growth potential in risk management.',
      textColor: 'Scope & Salary',
      text: ' Scope & Salary',
      icon: BsFillTrophyFill,
      cta: { label: 'Learn More', href: '#' },
      courseData: [
        {
          key: 'growth',
          title: 'Growth & Recognition',
          description:
            'Risk management professionals are increasingly sought after due to global financial volatility.',
          icon: RiBarChartBoxLine
        },
        {
          key: 'profiles',
          title: 'Job Profiles',
          description:
            'Careers include Risk Analyst, Compliance Manager, and Credit Risk Specialist.',
          icon: RiBriefcase4Line
        },
        {
          key: 'salary',
          title: 'Median Salary',
          description:
            'The average salary for a Risk Manager in India ranges from INR 10-15 LPA depending on experience.',
          icon: RiMoneyDollarCircleLine
        }
      ]
    },

    faq: {
      mainTitle: 'Risk Management ',
      mainDescription:
        'Answers to common questions about our Risk Management training.',
      textColor: 'FAQs ',
      text: 'FAQs',
      icon: FaQuestionCircle,
      items: [
        {
          title: 'Who should take this course?',
          description:
            'Finance professionals, MBA grads, or anyone interested in careers in risk analysis, credit, compliance, or consulting.'
        },
        {
          title: 'What tools will I learn?',
          description:
            'You will learn VaR (Value at Risk), Stress Testing, Risk Modeling in Excel, and regulatory frameworks like Basel III.'
        }
      ]
    },
    curriculamData: {
      mainTitle: 'Financial Modeling ',
      mainDescription:
        'Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns',
      textColor: 'Course Curriculum',
      text: 'Course',
      icon: BsStack,
      ytLink: 'https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ',
      faqs: [
        {
          title: 'What is the difference between saving and investing?',
          answer: [
            'Saving keeps money safe for short-term needs',
            'Investing grows wealth over the long term',
            'Savings are usually low-risk (bank deposits)',
            'Investments carry higher risk but higher potential returns'
          ]
        },
        {
          title: 'What is compound interest?',
          answer: [
            'Interest calculated on the initial principal plus accumulated interest',
            'Helps money grow faster over time',
            'Common in savings accounts and reinvested dividends'
          ]
        },
        {
          title: 'What are stocks and bonds?',
          answer: [
            'Stocks represent ownership in a company',
            'Bonds are loans you give to governments or corporations',
            'Stocks are generally higher risk, higher reward',
            'Bonds are lower risk, with fixed interest payments'
          ]
        },
        {
          title: 'What is diversification in investing?',
          answer: [
            'Spreading investments across assets to reduce risk',
            'Prevents losses from being concentrated in one area',
            'Commonly done with stocks, bonds, real estate, and mutual funds'
          ]
        },
        {
          title: 'What is a mutual fund?',
          answer: [
            'A pool of money from multiple investors',
            'Managed by professionals who buy a diversified portfolio',
            'Good option for beginners seeking diversification'
          ]
        },
        {
          title: 'What is the difference between IRA and 401(k)?',
          answer: [
            'IRA is an individual retirement account, opened by anyone',
            '401(k) is offered by employers with contribution matching',
            'Both provide tax advantages for retirement savings'
          ]
        },
        {
          title: 'What is risk tolerance in investing?',
          answer: [
            'An investor’s ability to handle losses',
            'Higher risk tolerance allows investing in stocks',
            'Lower risk tolerance leans towards bonds or savings'
          ]
        },
        {
          title: 'What is an emergency fund?',
          answer: [
            'Cash set aside for unexpected expenses',
            'Covers 3–6 months of living costs',
            'Protects against job loss or medical emergencies'
          ]
        },
        {
          title: 'What is inflation and why does it matter?',
          answer: [
            'Inflation is the rise in the cost of goods and services',
            'Reduces purchasing power over time',
            'Investments can help beat inflation'
          ]
        },
        {
          title: 'What is the difference between gross income and net income?',
          answer: [
            'Gross income is total earnings before deductions',
            'Net income is what remains after taxes and expenses',
            'Net income reflects actual take-home pay'
          ]
        }
      ]
    },

    exclusiveContent: {
      mainTitle: 'Exclusive Content access ',
      mainDescription:
        'Unlock specialized risk management tools and case studies.',
      textColor: 'Management',
      text: 'content',
      icon: GoFileSubmodule,

      items: [
        {
          title: 'Risk Analysis Handbook',
          description:
            'Guides covering quantitative and qualitative risk assessment methods.',
          icon: RiBook2Line,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif'
        },
        {
          title: 'Stress Test Templates',
          description:
            'Ready-to-use models for stress testing and scenario analysis.',
          icon: RiStackLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg'
        },
        {
          title: 'Mobile App With  Resources',
          description: 'Our Mobile Application provides trends.',
          icon: RiSmartphoneLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg'
        }
      ]
    },

    whyUs: {
      mainTitle: 'Why Choose Our Risk ?',
      mainDescription:
        'Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.',
      textColor: 'Management Program',
      text: 'Why Us',
      icon: FaUsers,
      cta: { label: 'Learn More', href: '#' },
      items: [
        {
          title: 'Regulatory Compliance Focus',
          description:
            'Learn Basel III, IFRS, and global compliance practices.',
          icon: RiShieldCheckLine
        },
        {
          title: 'Live Simulations',
          description: 'Hands-on scenario analysis and stress testing.',
          icon: RiPlayCircleLine
        },
        {
          title: 'Live Simulations',
          description: 'Hands-on scenario analysis and stress testing.',
          icon: RiPlayCircleLine
        },
        {
          title: 'Live Simulations',
          description: 'Hands-on scenario analysis and stress testing.',
          icon: RiPlayCircleLine
        }
      ]
    },

    programHighlights: {
      mainTitle: 'Program Highlights of Our ',
      textColor: '  Risk Management Course',
      mainDescription:
        'benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling',

      text: 'Risk Management',
      icon: AiOutlineIssuesClose,

      items: [
        {
          title: '120+ Hours of Classes',
          description: 'Extensive practical learning.',
          icon: RiPlayCircleLine
        },
        {
          title: 'Industry Expert Mentors',
          description: 'Learn from experienced professionals.',
          icon: RiStarLine
        }
      ],
      otherFeatures: '5+ Other Features'
    }
  },

  investmentBanking: {
    slug: 'investment-banking',

    heroBanner: {
      btnText: 'Step into IB',
      title: 'Investment Banking Course',
      subtitle: 'The gateway to a high-paying Investment Banking career',
      highlights: [
        '150+ Hours Training',
        'Expert mentors from Goldman Sachs, JP Morgan, and more',
        'Real-world pitch books and deal modeling',
        'Placement assistance with top recruiters'
      ],
      bannerImg:
        'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144558.jpg',
      ctas: [
     
        {
          label: 'Download Brochure',
          href: '#',
          type: 'secondary',
          icon: FaDownload
        }
      ]
    },

    curriculamData: {
      mainTitle: 'Financial Modeling ',
      mainDescription:
        'Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns',
      textColor: 'Course Curriculum',
      text: 'Course',
      icon: BsStack,
      ytLink: 'https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ',
      faqs: [
        {
          title: 'What is the difference between saving and investing?',
          answer: [
            'Saving keeps money safe for short-term needs',
            'Investing grows wealth over the long term',
            'Savings are usually low-risk (bank deposits)',
            'Investments carry higher risk but higher potential returns'
          ]
        },
        {
          title: 'What is compound interest?',
          answer: [
            'Interest calculated on the initial principal plus accumulated interest',
            'Helps money grow faster over time',
            'Common in savings accounts and reinvested dividends'
          ]
        },
        {
          title: 'What are stocks and bonds?',
          answer: [
            'Stocks represent ownership in a company',
            'Bonds are loans you give to governments or corporations',
            'Stocks are generally higher risk, higher reward',
            'Bonds are lower risk, with fixed interest payments'
          ]
        },
        {
          title: 'What is diversification in investing?',
          answer: [
            'Spreading investments across assets to reduce risk',
            'Prevents losses from being concentrated in one area',
            'Commonly done with stocks, bonds, real estate, and mutual funds'
          ]
        },
        {
          title: 'What is a mutual fund?',
          answer: [
            'A pool of money from multiple investors',
            'Managed by professionals who buy a diversified portfolio',
            'Good option for beginners seeking diversification'
          ]
        },
        {
          title: 'What is the difference between IRA and 401(k)?',
          answer: [
            'IRA is an individual retirement account, opened by anyone',
            '401(k) is offered by employers with contribution matching',
            'Both provide tax advantages for retirement savings'
          ]
        },
        {
          title: 'What is risk tolerance in investing?',
          answer: [
            'An investor’s ability to handle losses',
            'Higher risk tolerance allows investing in stocks',
            'Lower risk tolerance leans towards bonds or savings'
          ]
        },
        {
          title: 'What is an emergency fund?',
          answer: [
            'Cash set aside for unexpected expenses',
            'Covers 3–6 months of living costs',
            'Protects against job loss or medical emergencies'
          ]
        },
        {
          title: 'What is inflation and why does it matter?',
          answer: [
            'Inflation is the rise in the cost of goods and services',
            'Reduces purchasing power over time',
            'Investments can help beat inflation'
          ]
        },
        {
          title: 'What is the difference between gross income and net income?',
          answer: [
            'Gross income is total earnings before deductions',
            'Net income is what remains after taxes and expenses',
            'Net income reflects actual take-home pay'
          ]
        }
      ]
    },

    exclusiveContent: {
      mainTitle: 'Exclusive content access',
      mainDescription:
        'Unlock specialized risk management tools and case studies.',
      textColor: 'Management',
      text: 'content',
      icon: GoFileSubmodule,

      items: [
        {
          title: 'Risk Analysis Handbook',
          description:
            'Guides covering quantitative and qualitative risk assessment methods.',
          icon: RiBook2Line,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif'
        },
        {
          title: 'Stress Test Templates',
          description:
            'Ready-to-use models for stress testing and scenario analysis.',
          icon: RiStackLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg'
        },
        {
          title: 'Mobile App With  Resources',
          description: 'Our Mobile Application provides trends.',
          icon: RiSmartphoneLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg'
        }
      ]
    },

    modelingCourse: {
      mainTitle: 'Investment Banking Career, ',
      mainDescription:
        'Prepare for one of the most lucrative careers in finance.',
      textColor: 'Scope & Salary',
      text: 'Banking Career',
      icon: BsFillTrophyFill,
      cta: { label: 'Learn More', href: '#' },
      courseData: [
        {
          key: 'growth',
          title: 'Growth & Recognition',
          description:
            'Investment banking remains the top choice for ambitious finance professionals worldwide.',
          icon: RiBarChartBoxLine
        },
        {
          key: 'profiles',
          title: 'Job Profiles',
          description: 'Roles include Analyst, Associate, and M&A Specialist.',
          icon: RiBriefcase4Line
        },
        {
          key: 'salary',
          title: 'Median Salary',
          description:
            'Entry-level analysts can earn INR 15-20 LPA with global growth potential.',
          icon: RiMoneyDollarCircleLine
        }
      ]
    },

    faq: {
      mainTitle: 'Investment ',
      mainDescription:
        'Answers to common questions about our Investment Banking training.',
      textColor: 'Banking ',
      text: 'FAQs',
      icon: FaQuestionCircle,
      items: [
        {
          title: 'Do I need prior finance knowledge?',
          description:
            'Some background in finance or accounting is helpful but not mandatory are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for you .'
        },
        {
          title: 'Will you provide placement assistance?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title:
            'Section to be collapsible (accordion style), and the first one ?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title: 'Placement support with top recruiters in the IB industry?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title:
            'React projects easily with react-icons, which utilizes ES6 imports ?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title:
            'React projects easily with react-icons, which utilizes ES6 imports that allows ?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title:
            'Examples of how you could use the “react” icon in your projects ?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        },
        {
          title:
            'Completely tree-shakable. Each icon can be imported as a React?',
          description:
            'Yes, we provide placement support with top recruiters in the IB industry.'
        }
      ]
    },

    whyUs: {
      mainTitle: 'Why Choose Our Investment ?',
      mainDescription:
        'Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.',
      textColor: 'Banking Program',
      text: 'Why Us',
      icon: FaUsers,
      cta: { label: 'Learn More', href: '#' },
      items: [
        {
          title: 'Trainers from Bulge Bracket Banks',
          description: 'Mentors from Goldman Sachs, JP Morgan, etc.',
          icon: RiShieldCheckLine
        },
        {
          title: 'Placement Assistance',
          description: 'Strong connections with IB recruiters.',
          icon: RiMedalLine
        },
        {
          title: 'Placement Assistance',
          description: 'Strong connections with IB recruiters.',
          icon: RiMedalLine
        },
        {
          title: 'Placement Assistance',
          description: 'Strong connections with IB recruiters.',
          icon: RiMedalLine
        }
      ]
    },

    programHighlights: {
      mainTitle: 'Program of Investment ',
      textColor: '  Banking Course',
      mainDescription:
        'Key program benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling.',
      text: 'Investment Banking',
      icon: RiBankFill,
      items: [
        {
          title: '150+ Hours of Live Training',
          description: 'Interactive learning with mentors.',
          icon: RiPlayCircleLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif'
        },
        {
          title: 'Real Deal Case Studies',
          description: 'Analyze actual M&A deals.',
          icon: RiStackLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg'
        },
        {
          title: 'Mobile App  Resources',
          description: 'Our Mobile Application provid ',
          icon: RiSmartphoneLine,
          img: 'https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg'
        }
      ],
      otherFeatures: '8+ Other Features'
    }
  }
}

export { coursePagesData }
