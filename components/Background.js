export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-blue-950/40" />

      <div className="absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-blue-600/25 blur-[130px] animate-[drift_20s_ease-in-out_infinite]" />
      <div className="absolute -right-28 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[130px] animate-[drift_26s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-15%] left-1/3 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[130px] animate-[drift_32s_ease-in-out_infinite]" />

      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]"
        style={{
          maskImage:
            "radial-gradient(ellipse at 50% 45%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 45%, black 35%, transparent 75%)",
        }}
      />
    </div>
  );
}
