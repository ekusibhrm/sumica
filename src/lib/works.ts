export type Work = {
  slug: string;
  title: string;
  category: "住宅" | "店舗" | "オフィス";
  description: string;
  area: string;
  duration: string;
  image: string;
};

export const works: Work[] = [
  {
    slug: "vintage-mansion",
    title: "都心のヴィンテージマンションリノベーション",
    category: "住宅",
    description:
      "築45年のヴィンテージマンションを、素材の経年変化を活かしながら再構築しました。",
    area: "78㎡",
    duration: "工期 約2ヶ月",
    image: "/images/works/work-01.jpg",
  },
  {
    slug: "machiya-cafe",
    title: "町屋を活かした自家焙煎カフェ",
    category: "店舗",
    description:
      "梁と土壁を残しながら、光の入り方にこだわった落ち着きのある内装に仕上げました。",
    area: "42㎡",
    duration: "工期 約1.5ヶ月",
    image: "/images/works/work-02.jpg",
  },
  {
    slug: "wood-office",
    title: "木の温もりをまとうオフィス",
    category: "オフィス",
    description:
      "無垢材と間接照明を中心に、働く時間に静けさをもたらす執務空間を設計しました。",
    area: "120㎡",
    duration: "工期 約2.5ヶ月",
    image: "/images/works/work-03.jpg",
  },
  {
    slug: "two-family-house",
    title: "光を取り込む二世帯住宅リフォーム",
    category: "住宅",
    description:
      "世帯間の心地よい距離感を保ちながら、共有の光庭を中心に間取りを再構成しました。",
    area: "156㎡",
    duration: "工期 約3ヶ月",
    image: "/images/works/work-04.jpg",
  },
  {
    slug: "select-shop",
    title: "静けさをまとうセレクトショップ",
    category: "店舗",
    description:
      "商品よりも「間」を魅せる什器配置と陰影のデザインを意識した内装です。",
    area: "58㎡",
    duration: "工期 約1ヶ月",
    image: "/images/works/work-05.jpg",
  },
  {
    slug: "kaiyu-house",
    title: "回遊動線の戸建てリノベーション",
    category: "住宅",
    description:
      "家事動線と回遊性を両立させた、日々の暮らしやすさを追求した間取りです。",
    area: "98㎡",
    duration: "工期 約2ヶ月",
    image: "/images/works/work-06.jpg",
  },
];
