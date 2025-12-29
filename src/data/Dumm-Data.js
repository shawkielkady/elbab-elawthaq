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

export const products = [
  {
    id: 1,
    title: "فيلا فاخرة",
    price: "250,000 د.ك",
    catId: 1,
    description: "فيلا واسعة مع حديقة",
    sold: false,
    img: villImg,
  },
  {
    id: 2,
    title: "شقة حديثة",
    price: "120,000 د.ك",
    catId: 1,
    description: "شقة مطلة على البحر",
    sold: false,
    img: villImg,
  },
  {
    id: 3,
    title: "منزل ريفي",
    price: "80,000 د.ك",
    catId: 2,
    description: "منزل هادئ في الريف",
    sold: true,
    img: villImg,
  },
  {
    id: 4,
    title: "قصر فاخر",
    price: "500,000 د.ك",
    catId: 1,
    description: "قصر مع مسبح وحديقة كبيرة",
    sold: false,
    img: villImg,
  },
  {
    id: 5,
    title: "شقة صغيرة",
    price: "90,000 د.ك",
    catId: 2,
    description: "شقة مناسبة للعائلات الصغيرة",
    sold: false,
    img: villImg,
  },
  {
    id: 6,
    title: "مزرعة كبيرة",
    price: "300,000 د.ك",
    catId: 5,
    description: "مزرعة مجهزة بالكامل",
    sold: false,
    img: villImg,
  },
  {
    id: 7,
    title: "قسيمة صناعية",
    price: "200,000 د.ك",
    catId: 4,
    description: "مساحة صناعية جاهزة",
    sold: false,
    img: villImg,
  },
];
