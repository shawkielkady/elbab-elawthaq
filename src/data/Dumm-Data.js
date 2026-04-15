import villImg from "../assets/images/villa.jpg";
import towerImg from "../assets/images/tower.jpg";
import apartmentImg from "../assets/images/apartment.jpg";
import groupsImg from "../assets/images/groups.PNG";
import {
  FaHome,
  FaKey,
  FaExchangeAlt,
  FaIndustry,
  FaSeedling,
  FaBuilding,
  FaMapMarkedAlt,
  FaWarehouse,
  FaBriefcase,
  FaTree,
  FaCity,
  FaStore,
} from "react-icons/fa";

export const counters = [
  { number: "+300", label: "بيع" },
  { number: "+500", label: "ايجار" },
  { number: "+250", label: "بدل" },
  { number: "+20", label: "سنة خبرة" },
];
export const specialProducts = [
  { id: 1, name: "فيلا فاخرة", img: villImg },
  { id: 2, name: "شقة مطلة على البحر", img: villImg },
  { id: 3, name: "منزل ريفي", img: villImg },
];
export const whoUsCategoriesData = [
  {
    id: 0,
    name: "ابراج",
    img: towerImg,
  },
  {
    id: 1,
    name: "فلل",
    img: villImg,
  },
  {
    id: 2,
    name: "شقق",
    img: apartmentImg,
  },
  {
    id: 3,
    name: "مجمعات",
    img: groupsImg,
  },
];

export const categories = [
  {
    id: 1,
    title: "بيع",
    desc: "وحدات للبيع بأسعار مميزة",
    count: 120,
    icon: FaHome,
  },
  {
    id: 2,
    title: "إيجار",
    desc: "شقق وبيوت للإيجار",
    count: 85,
    icon: FaKey,
  },
  {
    id: 3,
    title: "بدل",
    desc: "فرص بدل عقاري",
    count: 40,
    icon: FaExchangeAlt,
  },
  {
    id: 4,
    title: "قصائم صناعية",
    desc: "قصائم صناعية جاهزة",
    count: 22,
    icon: FaIndustry,
  },
  {
    id: 5,
    title: "مزارع",
    desc: "مزارع للبيع والإيجار",
    count: 18,
    icon: FaSeedling,
  },
];

// ─── Sub Categories ───────────────────────────────────────────────────────────
// catId = 1 → بيع
// catId = 2 → إيجار
// catId = 3 → بدل
// catId = 4 → قصائم صناعية
// catId = 5 → مزارع
export const subCategories = [
  // بيع
  { id: 101, catId: 1, title: "شقق",      desc: "شقق سكنية متنوعة للبيع",       count: 45, icon: FaBuilding },
  { id: 102, catId: 1, title: "فلل",      desc: "فيلات فاخرة ومستقلة للبيع",    count: 30, icon: FaHome },
  { id: 103, catId: 1, title: "أراضي",    desc: "أراضي سكنية وتجارية للبيع",    count: 25, icon: FaMapMarkedAlt },
  { id: 104, catId: 1, title: "مكاتب",    desc: "مكاتب تجارية للبيع",           count: 10, icon: FaBriefcase },
  { id: 105, catId: 1, title: "أبراج",    desc: "وحدات في أبراج سكنية للبيع",   count: 10, icon: FaCity },
  // إيجار
  { id: 201, catId: 2, title: "شقق",      desc: "شقق سكنية مفروشة وغير مفروشة", count: 40, icon: FaBuilding },
  { id: 202, catId: 2, title: "فلل",      desc: "فيلات للإيجار السنوي والشهري", count: 20, icon: FaHome },
  { id: 203, catId: 2, title: "مكاتب",    desc: "مكاتب تجارية للإيجار",         count: 15, icon: FaBriefcase },
  { id: 204, catId: 2, title: "محلات",    desc: "محلات تجارية للإيجار",         count: 10, icon: FaStore },
  // بدل
  { id: 301, catId: 3, title: "شقة بشقة", desc: "بدل شقة بشقة بمواصفات مختلفة", count: 18, icon: FaBuilding },
  { id: 302, catId: 3, title: "فيلا بفيلا",desc: "بدل فيلا بفيلا أو قصر",      count: 12, icon: FaHome },
  { id: 303, catId: 3, title: "أرض بأرض", desc: "بدل قطع أراضي",               count: 10, icon: FaMapMarkedAlt },
  // قصائم صناعية
  { id: 401, catId: 4, title: "قصائم صناعية", desc: "قصائم في المناطق الصناعية", count: 12, icon: FaIndustry },
  { id: 402, catId: 4, title: "مستودعات",     desc: "مستودعات للبيع والإيجار",   count: 10, icon: FaWarehouse },
  // مزارع
  { id: 501, catId: 5, title: "مزارع للبيع",  desc: "مزارع مجهزة للبيع",        count: 10, icon: FaTree },
  { id: 502, catId: 5, title: "مزارع للإيجار",desc: "مزارع للإيجار الموسمي",    count: 8,  icon: FaSeedling },
];

export const products = [
  // ─── بيع > فلل ──────────────────────────────────────────
  {
    id: 1,
    title: "فيلا فاخرة",
    price: "250,000 د.ك",
    catId: 1,
    subCatId: 102,
    description: "فيلا واسعة مع حديقة خاصة ومسبح",
    sold: false,
    img: villImg,
    imgs: [villImg, towerImg, apartmentImg],
  },
  {
    id: 4,
    title: "قصر فاخر",
    price: "500,000 د.ك",
    catId: 1,
    subCatId: 102,
    description: "قصر مع مسبح وحديقة كبيرة وملحق",
    sold: false,
    img: villImg,
    imgs: [villImg, towerImg, apartmentImg],
  },
  // ─── بيع > شقق ──────────────────────────────────────────
  {
    id: 2,
    title: "شقة حديثة",
    price: "120,000 د.ك",
    catId: 1,
    subCatId: 101,
    description: "شقة مطلة على البحر بإطلالة رائعة",
    sold: false,
    img: apartmentImg,
    imgs: [apartmentImg, villImg, towerImg],
  },
  {
    id: 8,
    title: "شقة دوبلكس",
    price: "175,000 د.ك",
    catId: 1,
    subCatId: 101,
    description: "شقة دوبلكس مساحة كبيرة في موقع مميز",
    sold: false,
    img: apartmentImg,
    imgs: [apartmentImg, towerImg],
  },
  // ─── بيع > أراضي ────────────────────────────────────────
  {
    id: 9,
    title: "أرض سكنية",
    price: "90,000 د.ك",
    catId: 1,
    subCatId: 103,
    description: "أرض سكنية في منطقة هادئة قريبة من الخدمات",
    sold: false,
    img: villImg,
    imgs: [villImg],
  },
  {
    id: 10,
    title: "أرض تجارية",
    price: "200,000 د.ك",
    catId: 1,
    subCatId: 103,
    description: "أرض تجارية على شارع رئيسي",
    sold: true,
    img: towerImg,
    imgs: [towerImg],
  },
  // ─── بيع > مكاتب ────────────────────────────────────────
  {
    id: 11,
    title: "مكتب تجاري",
    price: "80,000 د.ك",
    catId: 1,
    subCatId: 104,
    description: "مكتب تجاري مجهز بالكامل في برج أعمال",
    sold: false,
    img: towerImg,
    imgs: [towerImg, apartmentImg],
  },
  // ─── بيع > أبراج ────────────────────────────────────────
  {
    id: 12,
    title: "وحدة في برج سكني",
    price: "140,000 د.ك",
    catId: 1,
    subCatId: 105,
    description: "وحدة في برج سكني بإطلالة بانورامية",
    sold: false,
    img: towerImg,
    imgs: [towerImg, apartmentImg, villImg],
  },
  // ─── إيجار > شقق ────────────────────────────────────────
  {
    id: 3,
    title: "شقة للإيجار",
    price: "800 د.ك / شهر",
    catId: 2,
    subCatId: 201,
    description: "شقة مفروشة في موقع مميز قريبة من الخدمات",
    sold: false,
    img: apartmentImg,
    imgs: [apartmentImg, villImg, towerImg],
  },
  {
    id: 5,
    title: "شقة صغيرة للإيجار",
    price: "450 د.ك / شهر",
    catId: 2,
    subCatId: 201,
    description: "شقة مناسبة للعائلات الصغيرة أو الأفراد",
    sold: false,
    img: apartmentImg,
    imgs: [apartmentImg, towerImg, villImg],
  },
  // ─── إيجار > فلل ────────────────────────────────────────
  {
    id: 13,
    title: "فيلا للإيجار السنوي",
    price: "18,000 د.ك / سنة",
    catId: 2,
    subCatId: 202,
    description: "فيلا فاخرة للإيجار السنوي مع حديقة وكراج",
    sold: false,
    img: villImg,
    imgs: [villImg, towerImg],
  },
  // ─── إيجار > مكاتب ──────────────────────────────────────
  {
    id: 14,
    title: "مكتب للإيجار",
    price: "600 د.ك / شهر",
    catId: 2,
    subCatId: 203,
    description: "مكتب في منطقة تجارية حيوية مع مواقف سيارات",
    sold: false,
    img: towerImg,
    imgs: [towerImg],
  },
  // ─── إيجار > محلات ──────────────────────────────────────
  {
    id: 15,
    title: "محل تجاري للإيجار",
    price: "1,200 د.ك / شهر",
    catId: 2,
    subCatId: 204,
    description: "محل تجاري على شارع تجاري رئيسي",
    sold: false,
    img: towerImg,
    imgs: [towerImg, apartmentImg],
  },
  // ─── بدل > شقة بشقة ─────────────────────────────────────
  {
    id: 16,
    title: "بدل شقة بشقة - الجابرية",
    price: "بدل",
    catId: 3,
    subCatId: 301,
    description: "شقة 3 غرف بالجابرية مقابل شقة 3 غرف في السالمية",
    sold: false,
    img: apartmentImg,
    imgs: [apartmentImg, villImg],
  },
  // ─── بدل > فيلا بفيلا ───────────────────────────────────
  {
    id: 17,
    title: "بدل فيلا بفيلا",
    price: "بدل",
    catId: 3,
    subCatId: 302,
    description: "فيلا فاخرة في الرقة مقابل فيلا في البدع",
    sold: false,
    img: villImg,
    imgs: [villImg, towerImg],
  },
  // ─── قصائم صناعية ───────────────────────────────────────
  {
    id: 7,
    title: "قسيمة صناعية",
    price: "200,000 د.ك",
    catId: 4,
    subCatId: 401,
    description: "قسيمة صناعية في الشويخ جاهزة للاستخدام",
    sold: false,
    img: towerImg,
    imgs: [towerImg],
  },
  {
    id: 18,
    title: "مستودع كبير",
    price: "150,000 د.ك",
    catId: 4,
    subCatId: 402,
    description: "مستودع واسع مع مكتب ملحق في منطقة صناعية",
    sold: false,
    img: towerImg,
    imgs: [towerImg, villImg],
  },
  // ─── مزارع ──────────────────────────────────────────────
  {
    id: 6,
    title: "مزرعة كبيرة للبيع",
    price: "300,000 د.ك",
    catId: 5,
    subCatId: 501,
    description: "مزرعة مجهزة بالكامل مع بيت استراحة وبئر",
    sold: false,
    img: villImg,
    imgs: [villImg, towerImg, apartmentImg],
  },
  {
    id: 19,
    title: "مزرعة للإيجار الموسمي",
    price: "5,000 د.ك / موسم",
    catId: 5,
    subCatId: 502,
    description: "مزرعة جميلة للإيجار مناسبة للعائلات",
    sold: false,
    img: villImg,
    imgs: [villImg],
  },
];

