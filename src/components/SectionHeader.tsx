interface SectionHeaderProps {
  prefix: string
  sectionTitle: string
  subtitle?: string
  subtitleHtml?: string
}

function SectionHeader({ prefix, sectionTitle, subtitle, subtitleHtml }: SectionHeaderProps) {
  return (
    <div className={`${prefix}__profile`}>
      <div className={`${prefix}__profile--section`}>
        <img src="/images/info-icons/icon.svg" alt="" />
        <p>{sectionTitle}</p>
      </div>
      <div className={`${prefix}__profile--title`}>
        {subtitleHtml ? (
          <h2 dangerouslySetInnerHTML={{ __html: subtitleHtml }} />
        ) : (
          <h2>{subtitle}</h2>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;