

function HeroSection() {
    return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT: big arrow/circles (placeholder for now) */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-[360px] md:h-[360px] rounded-full bg-primary/10 flex items-center justify-center">
              {/* later we can put SVG arrow or image */}
              <div className="w-40 h-40 bg-primary -skew-x-6 rounded-xl" />
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="text-right lg:text-left space-y-6">
            {/* small badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              AI platform for bureaucratic processes
            </div>

            {/* main heading */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-textMain">
              Less bureaucracy,
              <br />
              <span className="text-accent">more money</span>{' '}
              <span className="text-primary">in your pocket.</span>
            </h1>

            {/* paragraph */}
            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              Biroklik unifies all the tools that help you get what you deserve
              — simply, intelligently, and with minimum effort.
            </p>

            {/* CTA button */}
            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-primary/90 transition">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection