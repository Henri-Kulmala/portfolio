import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash({
  getOffset,
}: {
  getOffset: () => number;
}) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - getOffset();
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash, getOffset]);

  return null;
}
