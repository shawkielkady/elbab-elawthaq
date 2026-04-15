import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeaturedSlider from "../components/FeaturesSlides";
import ProductsGrid from "../components/ProductsCard";
import { products, subCategories, categories } from "../../../data/Dumm-Data";
import "../products.css";

export default function ProductsPage() {
  const { subId } = useParams();
  const nav = useNavigate();
  const subCatId = Number(subId);

  // Find sub & parent category for breadcrumb
  const currentSub = subCategories.find((s) => s.id === subCatId);
  const parentCat = currentSub
    ? categories.find((c) => c.id === currentSub.catId)
    : null;

  // Filter products belonging to this subcategory
  const filtered = subCatId
    ? products.filter((p) => p.subCatId === subCatId)
    : products;

  const featured = filtered.slice(0, 5);

  return (
    <div>
      <div className="container py-4">

        {/* ── Breadcrumb ─────────────────────────────── */}
        <nav
          className="d-flex align-items-center gap-2 mb-4"
          style={{ fontSize: 14, color: "#888", direction: "rtl" }}
        >
          <span
            style={{ color: "#c9a44c", cursor: "pointer" }}
            onClick={() => nav("/home")}
          >
            الرئيسية
          </span>
          <span style={{ color: "#555", fontSize: 12 }}>›</span>
          <span
            style={{ color: "#c9a44c", cursor: "pointer" }}
            onClick={() => nav("/categories")}
          >
            الأقسام
          </span>
          {parentCat && (
            <>
              <span style={{ color: "#555", fontSize: 12 }}>›</span>
              <span
                style={{ color: "#c9a44c", cursor: "pointer" }}
                onClick={() => nav(`/categories/${parentCat.id}`)}
              >
                {parentCat.title}
              </span>
            </>
          )}
          {currentSub && (
            <>
              <span style={{ color: "#555", fontSize: 12 }}>›</span>
              <span style={{ color: "#fff" }}>{currentSub.title}</span>
            </>
          )}
        </nav>

        {/* ── Featured Slider ─────────────────────────── */}
        {featured.length > 0 && <FeaturedSlider products={featured} />}

        {/* ── Products Grid ───────────────────────────── */}
        <ProductsGrid products={filtered} />
      </div>
    </div>
  );
}
