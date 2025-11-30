import React from "react";

export const UserData = () => {
  return (
    <div className="card p-4 border-0 shadow-sm bg-white">
      <h4 className="mb-3 text-secondary fw-bold">البيانات الشخصية </h4>
      <form className="text-end">
        <div className="mb-3">
          <label className="form-label">الاسم الكامل</label>
          <input type="text" className="form-control" placeholder="أدخل الاسم" />
        </div>
        <div className="mb-3">
          <label className="form-label">رقم الهاتف</label>
          <input type="tel" className="form-control" placeholder="01xxxxxxxxx" />
        </div>
        <div className="mb-3">
          <label className="form-label">البريد الإلكتروني</label>
          <input type="email" className="form-control" placeholder="example@mail.com" />
        </div>
      </form>
    </div>
  );
};
