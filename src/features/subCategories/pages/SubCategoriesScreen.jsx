import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories, subCategories } from "../../../data/Dumm-Data";
import SubCategoryCard from "../components/SubCategoryCard";
import { FaChevronLeft, FaHome } from "react-icons/fa";
import "../subCategories.css";

export default function SubCategoriesScreen() {
  const { id } = useParams();
  const nav = useNavigate();
  const catId = Number(id);

  const parentCategory = categories.find((c) => c.id === catId);
  const filteredSubs = subCategories.filter((s) => s.catId === catId);

  return (
    <section className="sub-cat-section">
      <div className="container">

        {/* ── Breadcrumb ─────────────────────────────────────── */}
        <nav className="sub-cat-breadcrumb">
          <span className="crumb-link" onClick={() => nav("/home")}>
            <FaHome size={13} style={{ marginLeft: 4 }} />
            الرئيسية
          </span>
          <FaChevronLeft className="crumb-sep" size={12} />
          <span className="crumb-link" onClick={() => nav("/categories")}>
            الأقسام
          </span>
          <FaChevronLeft className="crumb-sep" size={12} />
          <span className="crumb-current">
            {parentCategory ? parentCategory.title : "القسم"}
          </span>
        </nav>

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="sub-cat-header">
          <span className="category-label">
            {parentCategory?.title || "القسم"}
          </span>
          <h2>
            اختر <span>نوع العقار</span>
          </h2>
          <p>تصفح الأنواع المتاحة واختر ما يناسبك</p>
        </div>

        {/* ── Sub-Category Cards Grid ─────────────────────────── */}
        <div className="sub-cat-grid">
          {filteredSubs.length === 0 ? (
            <div className="sub-cat-empty">
              <p>لا توجد أقسام فرعية لهذا القسم حتى الآن</p>
            </div>
          ) : (
            filteredSubs.map((sub, index) => (
              <SubCategoryCard
                key={sub.id}
                {...sub}
                delay={index * 0.08}
                onClick={() => nav(`/sub-categories/${sub.id}/products`)}
              />
            ))
          )}
        </div>

      </div>
    </section>
  );
}
