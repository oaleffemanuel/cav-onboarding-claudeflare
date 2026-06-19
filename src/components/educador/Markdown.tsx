import { Fragment, type ReactNode } from "react";

// Minimal, dependency-free markdown renderer for knowledge-base content.
// Supports: ## / ### headings, paragraphs, - bullet lists, 1. ordered lists,
// > blockquotes, **bold**, [text](href) links. Good enough for staff content.

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on **bold** and [link](href) while keeping delimiters.
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);
  parts.forEach((part, i) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-b-${i}`}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("[")) {
      const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (m) {
        const external = m[2].startsWith("http");
        nodes.push(
          <a
            key={`${keyPrefix}-l-${i}`}
            href={m[2]}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>,
        );
      } else {
        nodes.push(<Fragment key={`${keyPrefix}-t-${i}`}>{part}</Fragment>);
      }
    } else {
      nodes.push(<Fragment key={`${keyPrefix}-t-${i}`}>{part}</Fragment>);
    }
  });
  return nodes;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  let ordered: string[] = [];

  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {list.map((li, i) => (
            <li key={i}>{renderInline(li, `ul-${blocks.length}-${i}`)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  const flushOrdered = () => {
    if (ordered.length) {
      blocks.push(
        <ol key={`ol-${blocks.length}`}>
          {ordered.map((li, i) => (
            <li key={i}>{renderInline(li, `ol-${blocks.length}-${i}`)}</li>
          ))}
        </ol>,
      );
      ordered = [];
    }
  };
  const flushAll = () => {
    flushList();
    flushOrdered();
  };

  lines.forEach((raw, idx) => {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushAll();
      return;
    }
    if (line.startsWith("### ")) {
      flushAll();
      const text = line.slice(4);
      blocks.push(<h3 key={`h3-${idx}`} id={slugify(text)}>{renderInline(text, `h3-${idx}`)}</h3>);
    } else if (line.startsWith("## ")) {
      flushAll();
      const text = line.slice(3);
      blocks.push(<h2 key={`h2-${idx}`} id={slugify(text)}>{renderInline(text, `h2-${idx}`)}</h2>);
    } else if (line.startsWith("> ")) {
      flushAll();
      blocks.push(
        <blockquote
          key={`q-${idx}`}
          className="my-5 rounded-r-xl border-l-4 border-brand-yellow bg-brand-yellow-50 px-5 py-3 text-cav-gray-700"
        >
          {renderInline(line.slice(2), `q-${idx}`)}
        </blockquote>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      ordered.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.startsWith("- ")) {
      flushOrdered();
      list.push(line.slice(2));
    } else {
      flushAll();
      blocks.push(<p key={`p-${idx}`}>{renderInline(line, `p-${idx}`)}</p>);
    }
  });
  flushAll();

  return <div className="prose-cav">{blocks}</div>;
}
