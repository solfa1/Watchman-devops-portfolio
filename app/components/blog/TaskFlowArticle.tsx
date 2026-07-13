import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import type { BlogPost } from "@/app/data/blogPosts";

type TaskFlowArticleProps = {
  post: BlogPost;
};

type ArticleSectionProps = {
  title: string;
  children: React.ReactNode;
};

type CodeBlockProps = {
  children: string;
};

type CalloutProps = {
  children: React.ReactNode;
};

function ArticleSection({
  title,
  children,
}: ArticleSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>

      <div className="mt-6 space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm leading-7 text-slate-300 shadow-inner">
      <code>{children}</code>
    </pre>
  );
}

function Callout({ children }: CalloutProps) {
  return (
    <blockquote className="rounded-r-2xl border-l-4 border-cyan-400 bg-cyan-400/5 px-6 py-5 text-lg font-medium leading-8 text-slate-200">
      {children}
    </blockquote>
  );
}

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3"
        >
          <span
            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
            aria-hidden="true"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TaskFlowArticle({
  post,
}: TaskFlowArticleProps) {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <Container>
        <article className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft
              className="h-4 w-4"
              aria-hidden="true"
            />

            Back to Blog
          </Link>

          <header className="mt-14 border-b border-slate-800 pb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                {post.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="pt-12">
            <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                Over the past month, I have been working on a
                project called TaskFlow, a cloud-native task
                processing system that I built to deepen my
                practical understanding of DevOps engineering.
              </p>

              <p>
                The idea behind the project was simple: I did not
                want to build another application, place it inside
                a Docker container, deploy it once, and call it a
                DevOps project.
              </p>

              <p>
                I wanted to build something that would force me to
                work through the different layers involved in
                running a distributed application: containers,
                databases, caching, Kubernetes, monitoring,
                autoscaling, security, CI/CD, deployment
                automation, and, perhaps most importantly,
                troubleshooting when things went wrong.
              </p>

              <Callout>
                And things definitely went wrong. That became one
                of the most valuable parts of the project.
              </Callout>
            </div>

            <ArticleSection title="What Is TaskFlow?">
              <p>
                TaskFlow is a distributed task processing system
                built around two main application services.
              </p>

              <p>
                The API service handles incoming requests,
                authentication, task creation, task retrieval,
                caching, and application metrics.
              </p>

              <p>
                The Worker service runs independently in the
                background, continuously checking for pending tasks
                and processing them asynchronously.
              </p>

              <p>
                PostgreSQL is the system&apos;s primary database,
                while Redis provides a caching layer to reduce
                unnecessary database reads.
              </p>

              <CodeBlock>{`User
  |
  v
API Service
  | \\
  |  \\
  v   v
PostgreSQL   Redis
  ^
  |
Worker Service`}</CodeBlock>

              <p>
                A user authenticates with the API and submits a
                task. The API stores the task in PostgreSQL with a
                pending status.
              </p>

              <p>
                The Worker service finds the pending task,
                processes it, and updates its status to done.
              </p>

              <p>The final system includes:</p>

              <BulletList
                items={[
                  "Node.js and Express",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "Docker Compose",
                  "Kubernetes",
                  "Minikube",
                  "Calico",
                  "Prometheus",
                  "Grafana",
                  "Horizontal Pod Autoscaling",
                  "Kubernetes NetworkPolicies",
                  "JWT authentication",
                  "bcrypt password hashing",
                  "Terraform",
                  "GitHub Actions",
                  "Bash deployment automation",
                ]}
              />

              <Callout>
                The important part was not simply putting these
                technologies into a list. It was understanding why
                each one existed and what problem it solved.
              </Callout>
            </ArticleSection>

            <ArticleSection title="Starting With the Application">
              <p>
                The project began with a relatively simple backend.
                I built an API service that could create and
                retrieve tasks and a separate Worker service that
                could process those tasks asynchronously.
              </p>

              <p>
                This immediately introduced an important
                architectural idea: the service receiving a request
                does not necessarily have to perform all of the
                work itself.
              </p>

              <p>
                Instead of making the API responsible for both
                receiving and processing tasks, the responsibilities
                were separated.
              </p>

              <BulletList
                items={[
                  "The API handles requests.",
                  "The Worker handles processing.",
                  "PostgreSQL acts as the shared source of truth between them.",
                ]}
              />

              <p>
                This gave me a simple microservice-style
                architecture that I could gradually build DevOps
                infrastructure around.
              </p>
            </ArticleSection>

            <ArticleSection title="Containerizing the System">
              <p>
                The next step was Docker. Both the API and Worker
                were given their own Dockerfiles, and the supporting
                services were brought together using Docker Compose.
              </p>

              <p>
                This produced a local environment where the API,
                Worker, PostgreSQL, and Redis could run as separate
                services.
              </p>

              <Callout>
                Containerization solved an important problem:
                consistency.
              </Callout>

              <p>
                Instead of relying on the configuration of the host
                machine, each service could run inside a predictable
                environment with its own dependencies and startup
                process.
              </p>

              <p>
                This also created the foundation for moving the
                application into Kubernetes later.
              </p>
            </ArticleSection>

            <ArticleSection title="Adding PostgreSQL and Redis">
              <p>
                PostgreSQL became the primary persistence layer for
                the application. Tasks were stored with information
                such as their type, payload, status, and creation
                time.
              </p>

              <p>
                The Worker continuously checked the database for
                tasks with a pending status and updated them after
                processing.
              </p>

              <p>
                I also explored database performance and
                bottlenecks. Indexes were added to improve queries
                against frequently searched fields such as task
                status.
              </p>

              <p>
                Redis was then introduced as a caching layer.
                Instead of retrieving the same task data from
                PostgreSQL every time, the API could first check
                Redis.
              </p>

              <CodeBlock>{`Request
  |
  v
Check Redis
  |
  | Cache hit
  +-----------------> Return cached data
  |
  | Cache miss
  v
Query PostgreSQL
  |
  v
Store result in Redis
  |
  v
Return response`}</CodeBlock>

              <Callout>
                Application performance is not always improved by
                simply giving a server more CPU or memory. Sometimes
                the better solution is to reduce unnecessary work.
              </Callout>
            </ArticleSection>

            <ArticleSection title="Moving Into Kubernetes">
              <p>
                After containerizing the services, I moved the
                system into Kubernetes using Minikube as the local
                cluster environment.
              </p>

              <p>The Kubernetes environment included:</p>

              <BulletList
                items={[
                  "API Deployment",
                  "Worker Deployment",
                  "PostgreSQL Deployment",
                  "Redis Deployment",
                  "Kubernetes Services",
                  "Health checks",
                  "Readiness probes",
                  "Liveness probes",
                  "Horizontal Pod Autoscaling",
                ]}
              />

              <p>
                The API ran with multiple replicas, while the Worker
                could scale based on CPU utilization.
              </p>

              <p>
                This was where the project became significantly more
                interesting. Running a container is one thing.
                Managing multiple services inside Kubernetes is
                another.
              </p>

              <p>
                I had to think about service discovery, pod
                communication, image availability, rollouts,
                scaling, health checks, and what happens when a new
                version of a service fails to start.
              </p>
            </ArticleSection>

            <ArticleSection title="Learning From Broken Deployments">
              <p>
                One of the most useful moments in the project came
                when a Worker deployment failed with:
              </p>

              <CodeBlock>{`ErrImageNeverPull`}</CodeBlock>

              <p>The deployment manifest referenced:</p>

              <CodeBlock>{`taskflow-worker:v1`}</CodeBlock>

              <p>while the deployment script had built:</p>

              <CodeBlock>{`taskflow-worker:v2`}</CodeBlock>

              <p>
                Because the image pull policy was configured for
                local images, Kubernetes could not find the expected
                image. That small mismatch caused the rollout to
                exceed its progress deadline.
              </p>

              <p>
                The fix itself was straightforward once the problem
                was identified, but the troubleshooting process was
                the valuable part.
              </p>

              <CodeBlock>{`kubectl get pods
kubectl describe deployment taskflow-worker
kubectl logs deployment/taskflow-worker
kubectl rollout status deployment/taskflow-worker`}</CodeBlock>

              <Callout>
                The error message you see is often only the symptom.
                The real job is tracing the system until you find
                the actual cause.
              </Callout>
            </ArticleSection>

            <ArticleSection title="Adding Authentication">
              <p>
                The API was later secured using JWT authentication.
                Users can register and log in, and protected routes
                require a valid token.
              </p>

              <p>
                Passwords are hashed using bcrypt before being
                stored.
              </p>

              <CodeBlock>{`User Login
  |
  v
Credentials Verified
  |
  v
JWT Issued
  |
  v
Protected API Request
  |
  v
Token Verified
  |
  v
Request Allowed`}</CodeBlock>

              <p>
                This introduced another set of debugging challenges.
                I encountered invalid and expired tokens, missing
                authentication headers, and issues caused by shell
                variables containing incorrect token values.
              </p>

              <p>By the end of the implementation, I could:</p>

              <BulletList
                items={[
                  "Register a user",
                  "Log in",
                  "Receive a JWT",
                  "Access protected endpoints",
                  "Create protected tasks",
                  "Confirm that unauthorized requests were rejected",
                ]}
              />
            </ArticleSection>

            <ArticleSection title="Implementing Zero Trust Networking">
              <p>
                One of my favourite parts of the project was
                introducing Kubernetes NetworkPolicies.
              </p>

              <p>
                I started with a default deny-all policy. This meant
                that services could no longer communicate simply
                because they existed inside the same Kubernetes
                cluster.
              </p>

              <p>Communication had to be explicitly allowed.</p>

              <p>The permitted paths included:</p>

              <BulletList
                items={[
                  "API to PostgreSQL",
                  "API to Redis",
                  "Worker to PostgreSQL",
                  "Pods to DNS",
                ]}
              />

              <p>
                This immediately created real problems. At one
                point, the API could not resolve the PostgreSQL
                service name:
              </p>

              <CodeBlock>{`getaddrinfo EAI_AGAIN postgres`}</CodeBlock>

              <p>Later, I encountered:</p>

              <CodeBlock>{`connect ETIMEDOUT`}</CodeBlock>

              <p>
                The application was running. PostgreSQL was running.
                But the network policy prevented the communication
                required for the system to work.
              </p>

              <p>
                DNS also had to be explicitly allowed so that
                Kubernetes service discovery could function.
              </p>

              <Callout>
                A healthy pod does not automatically mean that the
                application can communicate with everything it
                depends on.
              </Callout>
            </ArticleSection>

            <ArticleSection title="Monitoring and Observability">
              <p>
                Prometheus and Grafana were introduced to improve
                visibility into the system.
              </p>

              <p>
                The API exposed metrics that could be collected by
                Prometheus, including information related to request
                activity and application performance.
              </p>

              <p>
                The system also used Kubernetes resource metrics,
                which allowed the Horizontal Pod Autoscaler to make
                scaling decisions.
              </p>

              <p>
                Monitoring changed the way I thought about the
                application. Without observability, you often know
                only that something has failed.
              </p>

              <p>
                With metrics and logs, you can start answering more
                useful questions:
              </p>

              <BulletList
                items={[
                  "When did it fail?",
                  "What changed?",
                  "Which service was affected?",
                  "Was CPU usage increasing?",
                  "Did latency increase?",
                  "Were requests failing?",
                  "Was the database the bottleneck?",
                  "Was the problem actually networking?",
                ]}
              />

              <p>
                The project also used structured logs, which made
                troubleshooting individual application events
                easier.
              </p>
            </ArticleSection>

            <ArticleSection title="Autoscaling the Worker">
              <p>
                The Worker service was configured with a Kubernetes
                Horizontal Pod Autoscaler.
              </p>

              <BulletList
                items={[
                  "Minimum replicas: 1",
                  "Maximum replicas: 5",
                  "Target CPU utilization: 50%",
                ]}
              />

              <p>
                This introduced the idea that infrastructure should
                be able to react to changing workloads.
              </p>

              <p>
                Instead of permanently running the maximum number of
                Worker instances, Kubernetes can increase or
                decrease replicas based on resource demand.
              </p>
            </ArticleSection>

            <ArticleSection title="Building CI With GitHub Actions">
              <p>
                The project was pushed to GitHub and a GitHub
                Actions CI pipeline was added.
              </p>

              <p>The pipeline validates changes by:</p>

              <BulletList
                items={[
                  "Checking out the repository",
                  "Setting up Node.js",
                  "Installing dependencies",
                  "Verifying the project",
                  "Building Docker images",
                ]}
              />

              <p>
                This means changes pushed to the repository can be
                automatically validated rather than relying entirely
                on manual checks.
              </p>

              <Callout>
                CI became another layer of confidence in the
                development process.
              </Callout>
            </ArticleSection>

            <ArticleSection title="Adapting When the Cloud Environment Changed">
              <p>
                The original project architecture was designed with
                AWS infrastructure in mind, including EKS and RDS.
                Terraform configurations were created as part of
                that infrastructure work.
              </p>

              <p>
                However, during the project, the AWS environment
                became unavailable.
              </p>

              <p>
                Rather than stopping the project, I adapted the
                deployment strategy. Kubernetes orchestration
                continued locally using Minikube, and I created a
                Bash deployment script to automate the local
                deployment process.
              </p>

              <p>The script:</p>

              <BulletList
                items={[
                  "Configures Docker to use Minikube's environment",
                  "Builds the API image",
                  "Builds the Worker image",
                  "Applies Kubernetes manifests",
                  "Applies NetworkPolicies",
                  "Waits for deployment rollouts",
                  "Verifies cluster resources",
                ]}
              />

              <p>The deployment process can now be triggered with:</p>

              <CodeBlock>{`./scripts/deploy-local.sh`}</CodeBlock>

              <Callout>
                Engineering plans change. Infrastructure disappears.
                Requirements evolve. The important skill is
                understanding the goal well enough to adapt without
                losing the engineering value of the project.
              </Callout>
            </ArticleSection>

            <ArticleSection title="The Final End-to-End Test">
              <p>
                The final validation involved testing the entire
                system from deployment to task completion.
              </p>

              <p>
                First, the deployment automation successfully built
                the images and deployed the application.
              </p>

              <p>All major components were healthy:</p>

              <BulletList
                items={[
                  "PostgreSQL running",
                  "Redis running",
                  "API replicas running",
                  "Worker running",
                  "HPA active",
                  "NetworkPolicy applied",
                ]}
              />

              <p>
                I then logged in and received a JWT. Using that
                token, I created a new task:
              </p>

              <CodeBlock>{`{
  "type": "email",
  "payload": {
    "message": "final day 30 test"
  }
}`}</CodeBlock>

              <p>The task was initially created with:</p>

              <CodeBlock>{`status: pending`}</CodeBlock>

              <p>
                The Worker picked it up asynchronously. When I
                retrieved the tasks again, the final result showed:
              </p>

              <CodeBlock>{`status: done`}</CodeBlock>

              <p>That final test connected everything together:</p>

              <CodeBlock>{`Authentication
  |
  v
API Request
  |
  v
PostgreSQL
  |
  v
Worker Processing
  |
  v
Task Completed
  |
  v
API Retrieval`}</CodeBlock>

              <Callout>The system worked end to end.</Callout>
            </ArticleSection>

            <ArticleSection title="What I Learned">
              <p>
                TaskFlow taught me more than how to use individual
                DevOps tools. It taught me how those tools interact.
              </p>

              <p>Docker alone is not the system.</p>
              <p>Kubernetes alone is not the system.</p>
              <p>Prometheus alone is not the system.</p>
              <p>Terraform alone is not the system.</p>

              <Callout>
                The real challenge is what happens between them.
              </Callout>

              <BulletList
                items={[
                  "A deployment can succeed while an application is broken.",
                  "A pod can be healthy while networking is blocked.",
                  "A database can be running while the required tables do not exist.",
                  "A JWT implementation can work while a malformed shell variable makes every request fail.",
                  "A Worker can be healthy while Kubernetes is deploying the wrong image tag.",
                ]}
              />

              <p>
                Those connections are where much of real DevOps
                engineering happens.
              </p>
            </ArticleSection>

            <ArticleSection title="Final Thoughts">
              <p>
                TaskFlow started as a 30-day DevOps project. By the
                end, it had become a working distributed system
                with:
              </p>

              <BulletList
                items={[
                  "Containerized services",
                  "Asynchronous task processing",
                  "PostgreSQL persistence",
                  "Redis caching",
                  "JWT authentication",
                  "Kubernetes orchestration",
                  "Horizontal autoscaling",
                  "Monitoring and observability",
                  "Zero Trust-style network policies",
                  "CI automation",
                  "Infrastructure as Code",
                  "Automated local deployment",
                ]}
              />

              <p>
                More importantly, the project gave me repeated
                opportunities to diagnose problems rather than
                simply follow a happy-path tutorial.
              </p>

              <p>
                There were broken deployments, database issues,
                networking failures, authentication problems, and
                configuration mistakes.
              </p>

              <p>
                Each one forced me to understand the system a little
                better.
              </p>

              <Callout>
                DevOps is not just about deploying software. It is
                about building systems you can understand, observe,
                secure, automate, and recover when something
                inevitably goes wrong.
              </Callout>

              <p>
                TaskFlow is now a project I can continue extending,
                but the first major phase is complete.
              </p>

              <p>
                And this time, when I say the system works, I have
                the logs, metrics, deployments, tests, and debugging
                history to prove it.
              </p>
            </ArticleSection>
          </div>

          <footer className="mt-20 border-t border-slate-800 pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <ArrowLeft
                className="h-4 w-4"
                aria-hidden="true"
              />

              Back to all articles
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}