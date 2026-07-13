"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Container from "@/app/components/ui/Container";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { contact } from "@/app/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-800/70 bg-slate-950 py-24"
    >
      <Container>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle
            eyebrow="Let's Connect"
            title={contact.heading}
            description={contact.description}
          />
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <p className="text-sm font-medium text-slate-400">
                Get in touch
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-flex items-center gap-3 text-xl font-semibold text-white transition-colors hover:text-cyan-400 sm:text-2xl"
              >
                <Mail
                  className="h-5 w-5 text-cyan-400"
                  aria-hidden="true"
                />

                {contact.email}
              </a>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 text-cyan-400"
                    aria-hidden="true"
                  />

                  {contact.location}
                </span>

                <span
                  className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block"
                  aria-hidden="true"
                />

                <span>{contact.availability}</span>
              </div>
            </motion.div>

            {/* Contact actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send an Email
              </motion.a>

              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-5 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>

              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-5 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}