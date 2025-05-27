"use client"
import { Diamond, AppWindow } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Add keyframes for glow and corner border animations
const glowKeyframes = `@keyframes boxGlow { 0%, 100% { box-shadow: 0 0 32px 8px #a190ff66; } 50% { box-shadow: 0 0 64px 24px #a190ffcc; } }`;
const cornerKeyframes = `@keyframes cornerMove { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-20px,-20px); } }`;
const cornerKeyframesTR = `@keyframes cornerMoveTR { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(20px,-20px); } }`;
const cornerKeyframesBL = `@keyframes cornerMoveBL { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-20px,20px); } }`;
const cornerKeyframesBR = `@keyframes cornerMoveBR { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(20px,20px); } }`;

export default function AgentUserProtocol() {
  const [lightPositions, setLightPositions] = useState([0, 0, 0])
  const [lightProgress, setLightProgress] = useState(0) // 0 (left) to 1 (right)
  const [direction, setDirection] = useState(1) // 1 = right, -1 = left
  const requestRef = useRef<number | null>(null)

  const [bottomLightProgress, setBottomLightProgress] = useState(0)
  const [bottomDirection, setBottomDirection] = useState(1)
  const bottomRequestRef = useRef<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setLightPositions((prev) => prev.map((pos) => (pos >= 300 ? 0 : pos + 1)))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let lastTimestamp: number | null = null
    let pauseTimeout: NodeJS.Timeout | null = null
    const speed = 0.008 // Adjust for animation speed
    function animate(timestamp: number) {
      if (lastTimestamp === null) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp
      setLightProgress((prev) => {
        let next = prev + direction * speed * (delta / 16)
        if (next > 1) {
          next = 1
          setDirection(-1)
          if (!pauseTimeout) pauseTimeout = setTimeout(() => { requestRef.current = requestAnimationFrame(animate) }, 400)
          return next
        }
        if (next < 0) {
          next = 0
          setDirection(1)
          if (!pauseTimeout) pauseTimeout = setTimeout(() => { requestRef.current = requestAnimationFrame(animate) }, 400)
          return next
        }
        return next
      })
      if (!pauseTimeout) requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      if (pauseTimeout) clearTimeout(pauseTimeout)
    }
  }, [direction])

  useEffect(() => {
    let lastTimestamp: number | null = null
    let pauseTimeout: NodeJS.Timeout | null = null
    const speed = 0.008
    function animate(timestamp: number) {
      if (lastTimestamp === null) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp
      setBottomLightProgress((prev) => {
        let next = prev + bottomDirection * speed * (delta / 16)
        if (next > 1) {
          next = 1
          setBottomDirection(-1)
          if (!pauseTimeout) pauseTimeout = setTimeout(() => { bottomRequestRef.current = requestAnimationFrame(animate) }, 400)
          return next
        }
        if (next < 0) {
          next = 0
          setBottomDirection(1)
          if (!pauseTimeout) pauseTimeout = setTimeout(() => { bottomRequestRef.current = requestAnimationFrame(animate) }, 400)
          return next
        }
        return next
      })
      if (!pauseTimeout) bottomRequestRef.current = requestAnimationFrame(animate)
    }
    bottomRequestRef.current = requestAnimationFrame(animate)
    return () => {
      if (bottomRequestRef.current) cancelAnimationFrame(bottomRequestRef.current)
      if (pauseTimeout) clearTimeout(pauseTimeout)
    }
  }, [bottomDirection])

  // Calculate light position coordinates for a single card
  const getLightPosition = (position: number) => {
    const totalLength = 300 // Total animation length

    // Top horizontal line
    if (position < 75) {
      return {
        left: `${(position / 75) * 100}%`,
        top: "0%",
      }
    }
    // Right vertical line
    else if (position < 150) {
      return {
        left: "100%",
        top: `${((position - 75) / 75) * 100}%`,
      }
    }
    // Bottom horizontal line
    else if (position < 225) {
      return {
        left: `${(1 - (position - 150) / 75) * 100}%`,
        top: "100%",
      }
    }
    // Left vertical line
    else {
      return {
        left: "0%",
        top: `${(1 - (position - 225) / 75) * 100}%`,
      }
    }
  }

  return (
    <>
      <style>{glowKeyframes + cornerKeyframes + cornerKeyframesTR + cornerKeyframesBL + cornerKeyframesBR}</style>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-4">
        <div className="max-w-5xl w-full">
          <h1 className="text-white text-4xl md:text-5xl font-light text-center mb-12">
            The Agent-User Interaction Protocol
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-[33%] w-[5%] h-0.5 bg-indigo-300/50 -translate-y-1/2 z-10"></div>
            <div className="hidden md:block absolute top-1/2 right-[33%] w-[5%] h-0.5 bg-indigo-300/50 -translate-y-1/2 z-10"></div>
            {/* Connecting dots */}
            <div className="hidden md:block absolute top-1/2 left-[32.5%] w-3 h-3 bg-white rounded-full border-2 border-indigo-400 shadow z-20 -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 left-[49.5%] w-3 h-3 bg-white rounded-full border-2 border-indigo-400 shadow z-20 -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 left-[66.5%] w-3 h-3 bg-white rounded-full border-2 border-indigo-400 shadow z-20 -translate-y-1/2"></div>
            {/* Animated light on the line */}
            <div className="hidden md:block absolute top-1/2 z-30" style={{ left: `calc(${32.5 + (66.5-32.5)*lightProgress}% )`, transform: 'translate(-50%, -50%)' }}>
              <div className="w-7 h-7 rounded-full bg-indigo-200/80 shadow-lg" style={{ boxShadow: '0 0 24px 8px #a190ff88, 0 0 0 2px #a190ff' }}></div>
            </div>

            {/* Left Box - Your Application */}
            <div className="relative rounded-2xl p-8 flex flex-col items-center justify-center h-[360px] overflow-hidden"
              style={{ animation: 'boxGlow 2.2s ease-in-out infinite' }}>
              {/* Card background with glow */}
              <div className="absolute inset-0 bg-indigo-800/30 backdrop-blur-sm border border-indigo-300/30 rounded-2xl shadow-[0_0_15px_rgba(122,122,255,0.15)]"></div>

              {/* Moving light for first card */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className="absolute w-1 h-1 rounded-full pointer-events-none z-20"
                  style={{
                    ...getLightPosition(lightPositions[0]),
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(161,144,255,0.4) 40%, rgba(161,144,255,0) 70%)",
                    filter: "blur(5px)",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </div>

              <div className="w-10 h-10 bg-indigo-700/50 rounded-lg flex items-center justify-center mb-4 z-10">
                <AppWindow className="w-6 h-6 text-white" />
              </div>
              <div className="text-white/80 text-center z-10">
                <div className="uppercase text-sm tracking-wider">YOUR</div>
                <div className="uppercase text-sm tracking-wider">APPLICATION</div>
              </div>
            </div>

            {/* Middle Box - AG-UI Protocol */}
            <div className="relative rounded-2xl p-8 flex flex-col items-center justify-center h-[360px] overflow-visible">
              {/* Card background with glow */}
              <div className="absolute inset-0 bg-indigo-500/70 backdrop-blur-sm rounded-2xl shadow-[0_0_15px_rgba(122,122,255,0.2)]"></div>

              {/* Animated corner borders */}
              <div className="absolute top-0 left-0 w-[30%] h-[2px] bg-indigo-200/70 z-30" style={{ animation: 'cornerMove 2.2s ease-in-out infinite' }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-[30%] bg-indigo-200/70 z-30" style={{ animation: 'cornerMove 2.2s ease-in-out infinite' }}></div>

              <div className="absolute top-0 right-0 w-[30%] h-[2px] bg-indigo-200/70 z-30" style={{ animation: 'cornerMoveTR 2.2s ease-in-out infinite' }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-[30%] bg-indigo-200/70 z-30" style={{ animation: 'cornerMoveTR 2.2s ease-in-out infinite' }}></div>

              <div className="absolute bottom-0 left-0 w-[30%] h-[2px] bg-indigo-200/70 z-30" style={{ animation: 'cornerMoveBL 2.2s ease-in-out infinite' }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-[30%] bg-indigo-200/70 z-30" style={{ animation: 'cornerMoveBL 2.2s ease-in-out infinite' }}></div>

              <div className="absolute bottom-0  w-[30%] h-[2px] bg-indigo-200/70 right-0 z-30" style={{ animation: 'cornerMoveBR 2.2s ease-in-out infinite' }}></div>
              <div className="absolute bottom-0  w-[2px] h-[30%] bg-indigo-200/70 right-0 z-30" style={{ animation: 'cornerMoveBR 2.2s ease-in-out infinite' }}></div>

              {/* Moving light for second card */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className="absolute w-0.5 h-0.5 rounded-full pointer-events-none"
                  style={{
                    ...getLightPosition(lightPositions[1]),
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(161,144,255,0.4) 40%, rgba(161,144,255,0) 70%)",
                    filter: "blur(3px)",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </div>

              <div className="w-2 h-2 bg-indigo-400/50 rounded-lg flex items-center justify-center mb-4 z-10">
                <Diamond className="w-4 h-4 text-white" />
              </div>
              <div className="text-white text-center z-10">
                <div className="uppercase text-sm tracking-wider">AG-UI</div>
                <div className="uppercase text-sm tracking-wider">PROTOCOL</div>
              </div>
            </div>

            {/* Right Box - Integrations + Flowchart (wrapped) */}
            <div className="flex flex-col h-[360px] justify-between">
              {/* Top part - Integrations */}
              <div className="relative rounded-2xl flex flex-col h-[260px] overflow-hidden">
                {/* Card background with glow */}
                <div className="absolute inset-0 bg-indigo-800/30 backdrop-blur-sm border border-indigo-300/30 rounded-2xl shadow-[0_0_15px_rgba(122,122,255,0.15)]"></div>

                {/* Moving light for third card */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div
                    className="absolute w-6 h-6 rounded-full pointer-events-none z-20"
                    style={{
                      ...getLightPosition(lightPositions[2]),
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(161,144,255,0.4) 40%, rgba(161,144,255,0) 70%)",
                      filter: "blur(5px)",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                </div>

                {/* <div className="absolute top-2 right-2 bg-gray-800/70 text-xs text-white px-2 py-1 rounded z-10">image</div> */}

                {/* Top section - Integrations (with boxed layout) */}
                <div className="flex-1 p-4 pb-2 z-10 flex flex-col justify-between h-[220px]">
                  <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    {/* LangGraph */}
                    <div className="flex items-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 min-h-[48px] min-w-[120px]">
                      <span className="inline-flex items-center gap-2 text-white font-medium text-lg">
                        <span className=" w-6 h-6 bg-white rounded-md flex items-center justify-center text-black text-base font-bold mr-2">λ</span>
                        LangGraph
                      </span>
                    </div>
                    {/* AGZ */}
                    <div className="flex items-center justify-end rounded-lg border border-white/20 bg-white/5 px-3 py-2 min-h-[48px] min-w-[120px]">
                      <span className="inline-flex items-center gap-2 text-white font-medium text-lg">
                        <span className=" w-6 h-6 flex items-center justify-center text-2xl mr-2">🤖</span>
                        <span className="tracking-widest font-bold text-base">AGZ</span>
                      </span>
                    </div>
                    {/* crewai */}
                    <div className="flex items-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 min-h-[48px] min-w-[120px]">
                      <span className="text-white font-logo text-2xl lowercase tracking-wide">crewai</span>
                    </div>
                    {/* mastra */}
                    <div className="flex items-center justify-end rounded-lg border border-white/20 bg-white/5 px-3 py-2 min-h-[48px] min-w-[120px]">
                      <span className="inline-flex items-center gap-2 text-white font-medium text-lg">
                        <span className=" w-6 h-6 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" className="text-white/80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="12" cy="12" rx="8" ry="6" stroke="white" strokeWidth="1.5" />
                            <ellipse cx="12" cy="12" rx="3" ry="2" stroke="white" strokeWidth="1.5" />
                          </svg>
                        </span>
                        <span className="font-medium text-lg">mastra</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 text-left mt-3 mb-1 pl-1">COMING SOON</div>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Agno */}
                    <div className="flex items-center rounded-lg border border-white/20 bg-white/5 px-2.5 py-2 min-h-[40px] min-w-[80px]">
                      <span className="text-white font-semibold text-base tracking-wide">Agno</span>
                    </div>
                    {/* OpenAI Agents SDK */}
                    <div className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-2.5 py-2 min-h-[40px] min-w-[80px]">
                      <span className="inline-flex items-center gap-2 text-white font-medium text-base">
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="mr-1" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2"/>
                          <path d="M16 8v8l6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        OpenAI Agents SDK
                      </span>
                    </div>
                    {/* AND MORE */}
                    <div className="flex items-center justify-end rounded-lg border border-white/20 bg-white/5 px-2.5 py-2 min-h-[40px] min-w-[80px]">
                      <span className="text-white/70 font-medium text-base">AND MORE</span>
                    </div>
                  </div>
                </div>
                {/* Bottom line */}
                <div className="absolute -bottom-6 left-1/2 w-0.5 h-6 bg-indigo-400/60 -translate-x-1/2 z-20"></div>
              </div>
              {/* Bottom part - Flowchart with animated light */}
              <div className="relative flex items-center justify-center mt-2 mb-2 z-10 h-[60px]">
                {/* Connecting line */}
                <div className="absolute left-8 right-8 top-1/2 h-1 bg-indigo-300/50 -translate-y-1/2 z-10"></div>
                {/* Connecting dots */}
                <div className="absolute left-8 top-1/2 w-3 h-3 bg-white rounded-full border-2 border-indigo-400 shadow z-20 -translate-y-1/2"></div>
                <div className="absolute right-8 top-1/2 w-3 h-3 bg-white rounded-full border-2 border-indigo-400 shadow z-20 -translate-y-1/2"></div>
                {/* Three nodes in the center, spaced evenly */}
                <div className="relative flex flex-row justify-between items-center w-[calc(100%-4rem)] mx-auto z-20" style={{ position: 'absolute', left: '2rem', right: '2rem', top: '50%', transform: 'translateY(-50%)' }}>
                  {/* Left vertical connecting line */}
                  <div className="absolute left-0 top-[-48px] w-1 h-12 bg-indigo-300/60 z-10"></div>
                  {/* Right vertical connecting line */}
                  <div className="absolute right-0 top-[-48px] w-1 h-12 bg-indigo-300/60 z-10"></div>
                  <div className="w-14 h-12 rounded-2xl bg-white/10 border border-white/20 shadow"></div>
                  <div className="w-14 h-12 rounded-2xl bg-white/10 border border-white/20 shadow"></div>
                  <div className="w-14 h-12 rounded-2xl bg-white/10 border border-white/20 shadow"></div>
                </div>
                {/* Animated light */}
                <div className="absolute top-1/2 z-30" style={{ left: `calc(2rem + (100% - 4rem) * ${bottomLightProgress})`, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-1 h-1 rounded-full bg-indigo-200/80 shadow-lg" style={{ boxShadow: '0 0 24px 8px #a190ff88, 0 0 0 2px #a190ff' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
