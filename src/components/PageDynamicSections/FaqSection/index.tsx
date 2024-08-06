import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQ = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FAQ[];
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl md:text-[38px] leading-snug font-nunito font-semibold text-gray-900">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className={cn(
                `data-[state=open]:bg-[#F8F8F8] md:p-6 data-[state=open]:rounded-lg data-[state=open]:border-b-0`
              )}
            >
              <AccordionTrigger className="font-bold text-lg md:text-xl hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqSection;
