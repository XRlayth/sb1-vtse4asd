import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Check } from 'lucide-react';

interface TimelineEntry {
  title: string;
  imagePosition: "left" | "right";
  image: string;
  features: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-[#1E1E1E] font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">MOJE USŁUGI</h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
            {item.imagePosition === "left" && (
              <div className="w-full md:w-1/2 p-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
              <div className="h-10 w-10 rounded-full bg-[#2C2C2C] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-red-600 border border-red-700" />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-3xl font-bold text-red-600 mb-6">{item.title}</h3>
              <div className="space-y-4">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#2C2C2C] p-4 rounded-lg">
                    <Check className="text-red-600 w-6 h-6" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {item.imagePosition === "right" && (
              <div className="w-full md:w-1/2 p-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-red-600/20 to-transparent rounded-lg" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-[1px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-600 via-red-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};