import React from "react";

export const UnitData = () => {
  return (
    <div className="card p-4 border-0 shadow-sm bg-white">
      <h4 className="mb-3 text-secondary fw-bold">بيانات العقار</h4>
      <form className="text-end">
        <div className="mb-3">
          <label className="form-label">العنوان</label>
          <input
            type="text"
            className="form-control"
            placeholder="أدخل عنوان العقار"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">المدينة</label>
          <input
            type="text"
            className="form-control"
            placeholder="أدخل المدينة"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">المنطقة</label>
          <input
            type="text"
            className="form-control"
            placeholder="أدخل المنطقة"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">السعر</label>
          <input
            type="number"
            className="form-control"
            placeholder="أدخل السعر"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">نوع العقار</label>
          <select className="form-select">
            <option value="">اختر نوع العقار</option>
            <option>شقة</option>
            <option>فيلا</option>
            <option>محل تجاري</option>
            <option>مكتب</option>
            <option>أرض</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">نوع المعاملة</label>
          <select className="form-select">
            <option value="">اختر نوع المعاملة</option>
            <option>بيع</option>
            <option>إيجار</option>
          </select>
        </div>
      </form>
    </div>
  );
};
