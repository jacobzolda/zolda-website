export function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);

    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }

    if (u.hostname.endsWith("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (u.pathname.startsWith("/embed/")) return url;
    }

    if (u.hostname.endsWith("vimeo.com")) {
      if (u.hostname === "player.vimeo.com") return url;
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }

    return url;
  } catch {
    return url;
  }
}
