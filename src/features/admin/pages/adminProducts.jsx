import React, { useState, useMemo } from "react";
import { Button, Modal, Form, Table, Row, Col, InputGroup } from "react-bootstrap";

/**
 * Static categories & subcategories
 */
const cats = [
  { id: 1, title: "بيع" },
  { id: 2, title: "إيجار" },
  { id: 3, title: "بدل" },
  { id: 4, title: "قسائم صناعية" },
  { id: 5, title: "مزارع" },
];

const subs = [
  { id: 10, parent: 1, title: "شقق" },
  { id: 11, parent: 1, title: "فلل" },
  { id: 12, parent: 2, title: "شقق مفروشة" },
  { id: 13, parent: 4, title: "مصانع" },
  { id: 14, parent: 5, title: "مزارع صغيرة" },
];

/**
 * Helper: upload file to Cloudinary (unsigned). 
 * Put your cloud name & upload preset in env or replace strings.
 * If not configured, fallback to returning local dataURL (handled by caller).
 */
async function uploadToCloudinary() {
  // const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "<your-cloud-name>";
  // const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "<your-upload-preset>";

  // if (CLOUD_NAME.includes("<") || UPLOAD_PRESET.includes("<")) {
  //   // Cloudinary not configured — caller should fallback to local preview
  //   throw new Error("CLOUDINARY_NOT_CONFIGURED");
  // }

  // const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
  // const fd = new FormData();
  // fd.append("file", file);
  // fd.append("upload_preset", UPLOAD_PRESET);

  // const res = await fetch(url, {
  //   method: "POST",
  //   body: fd,
  // });
  // if (!res.ok) throw new Error("Cloudinary upload failed");
  // const data = await res.json();
  // return data.secure_url; // return hosted image url
}

export default function AdminProductsPage() {
  // PRODUCTS state (static initially)
  const [list, setList] = useState([
    // demo initial product with local base64 image optional
    {
      id: 1,
      title: "فيلا فاخرة صباح الأحمد",
      catId: 1,
      subId: 11,
      unitType: "فيلا مستقلة",
      price: "350000",
      images: [], // empty demo
      desc: "فيلا فاخرة بموقع مميز ومساحة واسعة.",
    },
  ]);

  // modal states
  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);

  // form states
  const [title, setTitle] = useState("");
  const [catId, setCatId] = useState("");
  const [subId, setSubId] = useState("");
  const [unitType, setUnitType] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imagesFiles, setImagesFiles] = useState([]); // File objects
  const [imagesPreview, setImagesPreview] = useState([]); // dataURLs while offline
  const [uploading, setUploading] = useState(false);

  // search / filter / pagination
  const [query, setQuery] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // handle multiple image selection (create previews)
  const handleImages = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setImagesFiles((prev) => [...prev, ...files]);

    // create previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImagesPreview((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // remove specific preview/image before upload
  const removePreview = (idx) => {
    setImagesPreview((prev) => prev.filter((_, i) => i !== idx));
    setImagesFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // Add product (supports optional Cloudinary upload)
  const handleAdd = async () => {
    if (!title || !catId) return alert("اكتب العنوان واختر التصنيف");

    setUploading(true);
    let finalImages = [];

    if (imagesFiles.length > 0) {
      // try cloud upload first; if not configured fallback to previews
      try {
        // attempt upload each file (sequential to keep simple)
        for (const file of imagesFiles) {
          try {
            // try upload; if CLOUDINARY not configured, function throws
            // so this block will go to catch and we fallback
             
            const url = await uploadToCloudinary(file);
            finalImages.push(url);
          } catch (err) {
            if (err.message === "CLOUDINARY_NOT_CONFIGURED") {
              // fallback: use local preview dataURL (imagesPreview order matches imagesFiles)
              finalImages = [...imagesPreview];
              break;
            } else {
              console.warn("cloud upload error:", err);
              finalImages = [...imagesPreview];
              break;
            }
          }
        }
      } catch (err) {
        finalImages = [...imagesPreview];
        console.warn("cloud upload error:", err);
      }
    }

    const newP = {
      id: Date.now(),
      title,
      catId,
      subId,
      unitType,
      price,
      desc,
      images: finalImages,
    };

    setList((prev) => [newP, ...prev]);

    // reset form
    setTitle("");
    setCatId("");
    setSubId("");
    setUnitType("");
    setPrice("");
    setDesc("");
    setImagesFiles([]);
    setImagesPreview([]);
    setUploading(false);
    setShowAdd(false);
    setPage(1);
  };

  const removeProduct = (id) => {
    if (!window.confirm("متأكد؟")) return;
    setList((prev) => prev.filter((p) => p.id !== id));
  };

  // search + filter memoized
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = [...list];
    if (filterCat) arr = arr.filter((p) => String(p.catId) === String(filterCat));
    if (q) arr = arr.filter((p) => p.title.toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q));
    return arr;
  }, [list, query, filterCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // open detail modal
  const openDetail = (p) => {
    setDetailProduct(p);
    setShowDetail(true);
  };

  return (
    <>
      {/* Controls: Search + Filter + Add button */}
      <Row className="align-items-center mb-3 g-2">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              placeholder="ابحث باسم المنتج أو الوصف..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            />
            <Button variant="outline-secondary" onClick={() => setQuery("")}>مسح</Button>
          </InputGroup>
        </Col>

        <Col md={3}>
          <Form.Select value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setPage(1); }}>
            <option value="">كل التصنيفات</option>
            {cats.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </Form.Select>
        </Col>

        <Col md={5} className="text-md-end">
          <Button onClick={() => setShowAdd(true)}>إضافة منتج جديد</Button>
        </Col>
      </Row>

      {/* Table */}
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: 200 }}>الصور</th>
            <th>العنوان</th>
            <th>التصنيف</th>
            <th>الفرعي</th>
            <th>نوع الوحدة</th>
            <th>السعر</th>
            <th style={{ width: 140 }}>إجراءات</th>
          </tr>
        </thead>

        <tbody>
          {paged.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center">لا توجد منتجات</td>
            </tr>
          ) : paged.map((p) => {
            const cat = cats.find((c) => c.id === Number(p.catId))?.title || "-";
            const sub = subs.find((s) => s.id === Number(p.subId))?.title || "-";
            return (
              <tr key={p.id}>
                <td>
                  {p.images && p.images.length > 0 ? (
                    <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
                      {p.images.map((img, i) => (
                        <img key={i} src={img} alt="" style={{ width: 90, height: 60, objectFit: "cover", borderRadius: 6 }} />
                      ))}
                    </div>
                  ) : "—"}
                </td>
                <td style={{ cursor: "pointer" }} onClick={() => openDetail(p)}>{p.title}</td>
                <td>{cat}</td>
                <td>{sub}</td>
                <td>{p.unitType || "—"}</td>
                <td>{p.price || "—"}</td>
                <td>
                  <Button size="sm" className="me-1" onClick={() => openDetail(p)}>عرض</Button>
                  <Button size="sm" variant="danger" onClick={() => removeProduct(p.id)}>حذف</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Pagination controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>الصفحة {currentPage} من {totalPages} — ({filtered.length} نتائج)</div>
        <div>
          <Button size="sm" disabled={currentPage <= 1} onClick={() => setPage((s) => Math.max(1, s - 1))}>السابق</Button>{" "}
          <Button size="sm" disabled={currentPage >= totalPages} onClick={() => setPage((s) => Math.min(totalPages, s + 1))}>التالي</Button>
        </div>
      </div>

      {/* Add Modal */}
      <Modal show={showAdd} onHide={() => setShowAdd(false)} size="lg">
        <Modal.Header closeButton><Modal.Title>إضافة منتج</Modal.Title></Modal.Header>
        <Modal.Body>
          <Row className="g-2">
            <Col md={8}>
              <Form.Group className="mb-2">
                <Form.Label>العنوان</Form.Label>
                <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>الوصف (اختياري)</Form.Label>
                <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-2">
                <Form.Label>التصنيف</Form.Label>
                <Form.Select value={catId} onChange={(e) => setCatId(e.target.value)}>
                  <option value="">اختر</option>
                  {cats.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>التصنيف الفرعي</Form.Label>
                <Form.Select value={subId} onChange={(e) => setSubId(e.target.value)}>
                  <option value="">اختياري</option>
                  {subs.filter(s => String(s.parent) === String(catId)).map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>نوع الوحدة (unit type)</Form.Label>
                <Form.Control value={unitType} onChange={(e) => setUnitType(e.target.value)} placeholder="مثال: شقة مفروشة" />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>السعر</Form.Label>
                <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-2">
            <Form.Label>الصور (يمكن رفع أكثر من صورة)</Form.Label>
            <Form.Control type="file" multiple accept="image/*" onChange={handleImages} />
          </Form.Group>

          {imagesPreview.length > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              {imagesPreview.map((img, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <img src={img} alt="" style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8, border: "1px solid #ddd" }} />
                  <button type="button" onClick={() => removePreview(idx)} style={{
                    position: "absolute",
                    top: 6, right: 6,
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff", border: "none",
                    borderRadius: "50%", width: 26, height: 26, cursor: "pointer"
                  }}>×</button>
                </div>
              ))}
            </div>
          )}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAdd(false)}>إلغاء</Button>
          <Button onClick={handleAdd} disabled={uploading}>{uploading ? "جاري الرفع..." : "إضافة"}</Button>
        </Modal.Footer>
      </Modal>

      {/* Detail Modal */}
      <Modal show={showDetail} onHide={() => setShowDetail(false)} size="lg">
        <Modal.Header closeButton><Modal.Title>تفاصيل المنتج</Modal.Title></Modal.Header>
        <Modal.Body>
          {detailProduct ? (
            <>
              <h5>{detailProduct.title}</h5>
              <p className="text-muted">{detailProduct.desc}</p>

              {/* simple carousel: show first image large and thumbnails */}
              <Row>
                <Col md={8}>
                  {detailProduct.images && detailProduct.images.length > 0 ? (
                    <img src={detailProduct.images[0]} alt="" style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 8 }} />
                  ) : (
                    <div style={{ width: "100%", height: 320, display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5", borderRadius: 8 }}>لا صور</div>
                  )}
                </Col>

                <Col md={4}>
                  <p><strong>التصنيف:</strong> {cats.find(c => c.id === Number(detailProduct.catId))?.title || "-"}</p>
                  <p><strong>الفرعي:</strong> {subs.find(s => s.id === Number(detailProduct.subId))?.title || "-"}</p>
                  <p><strong>نوع الوحدة:</strong> {detailProduct.unitType || "—"}</p>
                  <p><strong>السعر:</strong> {detailProduct.price || "—"}</p>
                </Col>
              </Row>

              {/* thumbnails */}
              {detailProduct.images && detailProduct.images.length > 1 && (
                <div style={{ display: "flex", gap: 8, marginTop: 12, overflowX: "auto" }}>
                  {detailProduct.images.map((img, i) => (
                    <img key={i} src={img} alt="" style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 6 }} />
                  ))}
                </div>
              )}
            </>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
}
