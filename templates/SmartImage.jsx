import { useState } from "react";

export default function SmartImage({ src, alt, fallback = "Kasa", className, ...rest }) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <span
        className={`img-fallback ${className ?? ""}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span className="img-fallback__marca">{fallback}</span>
        <span className="img-fallback__texto">{alt}</span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErro(true)}
      {...rest}
    />
  );
}
