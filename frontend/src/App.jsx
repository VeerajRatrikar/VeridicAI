import { useState } from "react";

const performanceData = [65, 72, 78, 85, 91];

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/evaluate/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  const evaluateGithub = async () => {
    if (!githubUrl) return;
    setLoading(true);

    const response = await fetch(
      "http://127.0.0.1:8000/evaluate-github/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github_url: githubUrl }),
      }
    );

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between px-12 py-6 border-b border-slate-800 backdrop-blur-xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          VeridicAI
        </h1>
        <span className="text-slate-400 hidden md:block">
          AI Code Intelligence Platform
        </span>
      </nav>

      {/* HERO */}
      <section className="relative z-10 text-center py-32 px-6">
        <h2 className="text-6xl font-extrabold mb-6">
          Intelligent Code Evaluation
        </h2>

        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          AI-powered analysis for correctness, efficiency and readability.
        </p>

        <div className="mt-16 max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 shadow-2xl hover:scale-[1.02] transition-all duration-500">
          Real-time AI Dashboard Preview
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-20 grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto px-6">
        <Stat value="10K+" label="Evaluations Processed" />
        <Stat value="98%" label="Accuracy Rate" />
        <Stat value="1.2s" label="Avg Response Time" />
      </section>

      {/* EVALUATION PANEL */}
      <section className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-slate-900/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 shadow-2xl">

          <input
            type="file"
            onChange={uploadFile}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 mb-6"
          />

          <input
            type="text"
            placeholder="Paste RAW GitHub URL"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 mb-6"
          />

          <button
            onClick={evaluateGithub}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-bold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Evaluate Code
          </button>
        </div>
      </section>

      {/* CUSTOM PERFORMANCE GRAPH */}
      <section className="relative z-10 mt-24 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Performance Trends
        </h3>

        <div className="bg-slate-900/60 p-10 rounded-3xl border border-slate-800 shadow-xl flex items-end justify-between h-64">
          {performanceData.map((value, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div
                className="w-8 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-700 hover:scale-110"
                style={{ height: `${value * 2}px` }}
              ></div>
              <span className="mt-2 text-slate-400 text-sm">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-32 border-t border-slate-800 py-16 px-12 grid md:grid-cols-3 gap-12 text-slate-400">
        <div>
          <h4 className="text-white font-bold mb-4">VeridicAI</h4>
          <p>Elite AI-powered code evaluation platform.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <p>Features</p>
          <p>Dashboard</p>
          <p>Analytics</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </footer>

    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:scale-105 hover:border-blue-500 transition-all duration-300 shadow-lg">
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-slate-400">{label}</p>
    </div>
  );
}
