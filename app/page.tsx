"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-09-05T19:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-background p-4 bg-opacity-90 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]">
      <div className="relative max-w-3xl w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-xl opacity-20 transform rotate-2 scale-105"></div>
        <div className="relative z-10 bg-card p-8 rounded-lg shadow-2xl border border-primary/10">
          <div className="relative p-4 rounded-md shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-sheen"></div>
            <Image
              src="/2.png"
              alt="Featured Image"
              width={640}
              height={640}
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-4xl font-bold font-serif text-primary text-yellow-600">
              Me, You & Thai ?
            </h2>

            <p className="mt-4 text-center text-muted-foreground font-serif text-yellow-100">
              <span className="text-lg">SIAMAIS</span>
              <br />
              <span className="text-sm">
                6-7 Brindley Pl, Birmingham B1 2HS
              </span>
              <br />
              <span className="text-base">September 5th, 7:00 PM</span>
            </p>

            <div className="text-yellow-100">
              <p className="mt-6 text-sm text-muted-foreground font-light font-sans text-yellow-100">
                Roses are red, Violets are blue,
                <br />
                Let's count down the moments 'til our rendezvous
              </p>

              <div className="mt-2 flex justify-center items-center space-x-4 text-yellow-800">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary font-serif">
                      {value}
                    </span>
                    <span className="text-xs uppercase text-muted-foreground font-sans">
                      {value === 1 ? unit.slice(0, -1) : unit}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-light font-sans text-yellow-100">
                We'll talk about horseys, puppies, sunsets <br /> and the
                possibility of forever more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
