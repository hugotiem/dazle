import React, { HTMLAttributes, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface AccordionItemProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  isOpen: boolean;
}

const AccordionItem = ({
  title,
  description,
  isOpen,
  onClick
}: AccordionItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-hidden">
      <button className="py-7" onClick={onClick}>
        <p className="text-xl lg:text-[2vw] font-medium transition-all">
          {title.toUpperCase()}
        </p>
      </button>
      
      <div
        ref={ref}
        className="transition-all"
        style={
          isOpen ? { height: ref.current?.scrollHeight } : { height: '0px' }
        }
      >
        <p className="text-xl lg:text-[1.7vw] font-light pb-5 pt-[1vw]">
          {description}
        </p>
      </div>
    </div>
  );
};

interface AccordionProps extends HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    description: string;
    ref: React.RefObject<HTMLDivElement>;
  }[];
  currentIndex: number;
}

const Accordion = ({
  items,
  currentIndex,
  className,
  ...props
}: AccordionProps) => {
  const handleItemClick = (index: number) => {
    if (!items[index].ref.current) return;
    const rect = items[index].ref.current!.getBoundingClientRect();
    window.scrollTo({
      left: 0,
      top: items[index].ref.current!.offsetTop + rect.height,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn('divide-y divide-neutral-400', className)} {...props}>
      {items.map((item: any, index: number) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={currentIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
