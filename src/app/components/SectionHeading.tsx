export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`max-w-2xl mx-auto ${alignCls}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-bgSoft px-3 py-1 text-xs font-medium text-textBody">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-h2 text-textMain">{title}</h2>
      {subtitle && <p className="mt-3 text-textBody">{subtitle}</p>}
    </div>
  );
}
