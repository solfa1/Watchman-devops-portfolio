"use client";

import { Download, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const pods = [
  "api-service",
  "worker-service",
  "postgres",
  "redis",
  "prometheus",
  "grafana",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_45%)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              DevOps & Reliability Engineer
            </p>

            <h1 className="text-5xl font-black leading-tight text-white lg:text-7xl">
              Watchman
              <br />
              Okoro
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              I build resilient cloud infrastructure, automate reliable
              software delivery, and design production-ready platforms using
              AWS, Terraform, Docker, Kubernetes, and CI/CD.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-400">
              <span>AWS</span>
              <span>•</span>

              <span>Terraform</span>
              <span>•</span>

              <span>Docker</span>
              <span>•</span>

              <span>Kubernetes</span>
              <span>•</span>

              <span>GitHub Actions</span>
              <span>•</span>

              <span>Prometheus</span>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>

              <Button variant="secondary">
               GitHub
             </Button>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              {/* Terminal Header */}

              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-slate-500">
                  production-cluster
                </span>
              </div>

              {/* Terminal Body */}

              <div className="space-y-4 p-6 font-mono text-sm">
                <p className="text-cyan-400">
                  $ kubectl get pods
                </p>

                {pods.map((pod) => (
                  <div
                    key={pod}
                    className="flex items-center justify-between border-b border-slate-800 pb-2"
                  >
                    <span className="text-slate-300">
                      {pod}
                    </span>

                    <span className="font-semibold text-green-400">
                      Running
                    </span>
                  </div>
                ))}

                <div className="pt-4">
                  <span className="text-green-400">
                    ✓ Cluster Status: Healthy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}