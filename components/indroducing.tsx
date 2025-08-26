"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function Introducing() {
  return (
    <>
      <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
        <div className="relative flex flex-col items-center border border-red-500">
          <DotPattern width={5} height={5} />

          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20 text-white">
            <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-2xl">
              We believe
            </p>
            <h2 className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
              <blockquote>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <span className="font-semibold">&quot;Fitness should be</span>
                  <span className="font-thin">accessible to</span>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <span className="font-thin">everyone</span>
                  <span className="font-semibold">because</span>
                  <span className="font-thin">healthier</span>
                </div>
                <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <span className="font-thin">communities</span>
                  <span className="font-semibold">start with</span>
                </div>
                <span className="font-semibold">movement...&quot;</span>
              </blockquote>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
