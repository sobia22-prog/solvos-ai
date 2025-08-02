import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}


  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black" >Frequently Asked Questions</h2>

<div>
  <Accordion.Root
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <Accordion.Item
              key={index}
              value={item.question}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={cn(
                    "w-full flex justify-between items-center p-4 text-left text-black font-medium transition-all hover:bg-gray-100",
                    "data-[state=open]:bg-gray-100"
                  )}
                >
                  {item.question}
                  <ChevronDown
                    className={cn("transition-transform duration-200", "data-[state=open]:rotate-180")}
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="px-4 pb-4 text-gray-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
              >
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
</div>
        
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "What is Solvos AI?",
    answer: "Solvos AI is an AI-powered automation platform to streamline business tasks.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 7-day free trial with full features to test the platform.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription anytime from your dashboard.",
  },
];

export default FAQ;
