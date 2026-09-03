import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { applySeo } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/contact`;

const projectTypes = [
  "Commercial / brand film",
  "Fashion film / editorial",
  "Documentary",
  "Music video",
  "Sport / performance",
  "Interview / testimonial",
  "Event / live",
  "Other",
];

const roleTypes = [
  "Director of Photography",
  "Cinematographer",
  "Camera Operator",
  "Director / DoP",
  "Hybrid director-operator",
  "Not sure yet",
];

const budgetRanges = [
  "Under £5,000",
  "£5,000 – £10,000",
  "£10,000 – £25,000",
  "£25,000 – £50,000",
  "£50,000+",
  "Prefer to discuss",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    requiredRole: "",
    shootDates: "",
    location: "",
    deliverables: "",
    references: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    return applySeo({
      title: "Discuss a Project | Bohdan Rohulskyi — London Cinematographer",
      description:
        "Get in touch with Bohdan Rohulskyi, London-based cinematographer and filmmaker. Send dates, location and treatment to discuss the right approach for your project.",
      canonical: PAGE_URL,
      meta: [
        {
          property: "og:title",
          content: "Discuss a Project | Bohdan Rohulskyi — London Cinematographer",
        },
        {
          property: "og:description",
          content:
            "Get in touch with Bohdan Rohulskyi, London-based cinematographer and filmmaker. Send dates, location and treatment to discuss the right approach for your project.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: PAGE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Discuss a Project | Bohdan Rohulskyi — London Cinematographer",
        },
        {
          name: "twitter:description",
          content:
            "Get in touch with Bohdan Rohulskyi, London-based cinematographer and filmmaker. Send dates, location and treatment to discuss the right approach for your project.",
        },
      ],
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project type: ${formData.projectType}\n` +
        `Required role: ${formData.requiredRole}\n` +
        `Shoot dates: ${formData.shootDates}\n` +
        `Location: ${formData.location}\n` +
        `Deliverables: ${formData.deliverables}\n` +
        `References / treatment: ${formData.references}\n` +
        `Budget range: ${formData.budget || "Not specified"}\n\n` +
        `Message:\n${formData.message}`
    );
    window.location.href = `mailto:rogulskiproject@gmail.com?subject=${subject}&body=${body}`;
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-28 md:pt-36 pb-16 md:pb-24">
        <section className="px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-foreground/50 mb-6">
                Contact
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Discuss a project
              </h1>
              <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
                Send the dates, location and treatment or brief to discuss the
                right cinematography approach.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-12 space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => updateField("projectType", value)}
                    >
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requiredRole">Required role</Label>
                    <Select
                      value={formData.requiredRole}
                      onValueChange={(value) => updateField("requiredRole", value)}
                    >
                      <SelectTrigger id="requiredRole">
                        <SelectValue placeholder="Select required role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleTypes.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shootDates">Shoot dates</Label>
                    <Input
                      id="shootDates"
                      type="text"
                      value={formData.shootDates}
                      onChange={(e) => updateField("shootDates", e.target.value)}
                      placeholder="e.g. 15–18 September 2026"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="City / country"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliverables">Deliverables</Label>
                  <Input
                    id="deliverables"
                    type="text"
                    value={formData.deliverables}
                    onChange={(e) => updateField("deliverables", e.target.value)}
                    placeholder="e.g. 2 x hero films, social cutdowns, stills"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="references">
                    Link to treatment or references
                  </Label>
                  <Input
                    id="references"
                    type="url"
                    value={formData.references}
                    onChange={(e) => updateField("references", e.target.value)}
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">
                    Indicative budget range <span className="text-foreground/50">(optional)</span>
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => updateField("budget", value)}
                  >
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell me about the project, references, timeline or anything else I should know."
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-9 py-[18px] bg-foreground text-background font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                  >
                    Send enquiry
                  </button>
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center px-9 py-[18px] border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
                  >
                    View selected work
                  </Link>
                </div>

                <p className="pt-6 font-body text-sm text-foreground/55">
                  Or email directly:{" "}
                  <a
                    href="mailto:rogulskiproject@gmail.com"
                    className="text-foreground/80 hover:text-foreground underline underline-offset-4"
                  >
                    rogulskiproject@gmail.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Contact;
