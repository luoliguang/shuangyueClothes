const adultColumns = [
  { prop: 'size', label: '尺码' },
  { prop: 'length', label: '衣长' },
  { prop: 'bust', label: '胸围' },
  { prop: 'shoulder', label: '肩宽' },
  { prop: 'height', label: '参考身高(CM)' },
  { prop: 'weight', label: '参考体重(KG)' }
]

const childrenColumns = [
  { prop: 'size', label: '尺码' },
  { prop: 'length', label: '衣长' },
  { prop: 'bust', label: '胸围' },
  { prop: 'shoulder', label: '肩宽' },
  { prop: 'age', label: '参考年龄(岁)' },
  { prop: 'height', label: '参考身高(CM)' }
]

const MaJia = {
  styles: ["马甲","风衣" ],
  adultData: [
    { size: "XS", length: 62, bust: 48, shoulder: 37, height: "150-155", weight: "85-95" },
    { size: "S", length: 64, bust: 50, shoulder: 39, height: "155-160", weight: "95-105 "},
    { size: "M", length: 66, bust: 52, shoulder: 41, height: "160-165", weight: "105-115" },
    { size: "L", length: 68, bust: 54, shoulder: 43, height: "165-170", weight: "115-125" },
    { size: "XL", length: 70, bust: 56, shoulder: 45, height:"170-175", weight: "125-135" },
    { size: "2XL", length: 72, bust: 58, shoulder: 47, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 74, bust: 60, shoulder: 49, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 76, bust: 62, shoulder: 51, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 78, bust: 64, shoulder: 53, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 80, bust: 66, shoulder: 55, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 82, bust: 68, shoulder: 57, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S", length: 42, bust: 34, shoulder: 23, age: "2-4", height: "85-95 "},
    { size: "M", length: 45, bust: 36, shoulder: 25, age: "4-5", height: "95-105" },
    { size: "L", length: 48, bust: 38, shoulder: 27, age: "5-7", height: "105-115" },
    { size: "XL", length: 51, bust: 40, shoulder: 29, age: "7-8", height: "115-125" },
    { size: "2XL", length: 54, bust: 42, shoulder: 31, age: "8-9", height: "125-135" },
    { size: "3XL", length: 57, bust: 44, shoulder: 33, age: "9-10", height: "135-145" },
    { size: "4XL", length: 60, bust: 46, shoulder: 35, age: "10-11", height: "145-150" },
  ]
}


export {
  adultColumns,
  childrenColumns,
  MaJia,
}