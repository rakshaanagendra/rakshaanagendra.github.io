// A fixed, full-viewport layer of blurred, animated gradient blobs.
// This sits behind every section (-z-10) so glass-panel cards throughout
// the page always have colorful, moving light to refract.
export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#131829_0%,_#080b14_60%,_#05060a_100%)]" />

      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-violet-600/30 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-[120px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/20 blur-[130px] animate-blob" />

      {/* Subtle grid texture for depth without adding weight */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
