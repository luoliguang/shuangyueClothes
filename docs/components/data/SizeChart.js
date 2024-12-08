const adultColumns = [
  { prop: 'size', label: '尺码' },
  { prop: 'length', label: '衣长' },
  { prop: 'bust', label: '胸围' },
  { prop: 'shoulder', label: '肩宽' },
  { prop: 'height', label: '参考身高(CM)' },
  { prop: 'weight', label: '参考体重(斤)' }
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
const FengYi = {
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
const BasketBall = {
  styles: ["篮球服套装","篮球服背心","篮球服短裤"],
  adultData: [
    { size: "XS",  length: 65, bust: 45, shoulder: 45, height: "150-155", weight: "85-95" },
    { size: "S",   length: 67, bust: 48, shoulder: 48, height: "155-160", weight: "95-105 "},
    { size: "M",   length: 69, bust: 49, shoulder: 49, height: "160-165", weight: "105-115" },
    { size: "L",   length: 71, bust: 51, shoulder: 51, height: "165-170", weight: "115-125" },
    { size: "XL",  length: 73, bust: 53, shoulder: 53, height: "170-175", weight: "125-135" },
    { size: "2XL", length: 75, bust: 55, shoulder: 55, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 77, bust: 57, shoulder: 57, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 79, bust: 59, shoulder: 59, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 81, bust: 61, shoulder: 61, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 83, bust: 63, shoulder: 63, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 85, bust: 65, shoulder: 65, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S",   length: 44, bust: 31, shoulder: 25, age: "2-4",   height: "85-95 "},
    { size: "M",   length: 47, bust: 33, shoulder: 28, age: "4-5",   height: "95-105" },
    { size: "L",   length: 50, bust: 35, shoulder: 31, age: "5-7",   height: "105-115" },
    { size: "XL",  length: 53, bust: 37, shoulder: 34, age: "7-8",   height: "115-125" },
    { size: "2XL", length: 56, bust: 39, shoulder: 37, age: "8-9",   height: "125-135" },
    { size: "3XL", length: 59, bust: 41, shoulder: 40, age: "9-10",  height: "135-145" },
    { size: "4XL", length: 62, bust: 43, shoulder: 43, age: "10-11", height: "145-150" },
  ]
}
const Sweater = {
  styles: ["圆领卫衣","套头卫衣","拉链卫衣","棒球服","翻领卫衣","七分袖卫衣"],
  adultData: [
    { size: "XS",  length: 60, bust: 48, shoulder: 42, height: "150-155", weight: "85-95" },
    { size: "S",   length: 62, bust: 50, shoulder: 44, height: "155-160", weight: "95-105 "},
    { size: "M",   length: 64, bust: 52, shoulder: 46, height: "160-165", weight: "105-115" },
    { size: "L",   length: 66, bust: 54, shoulder: 48, height: "165-170", weight: "115-125" },
    { size: "XL",  length: 68, bust: 56, shoulder: 50, height: "170-175", weight: "125-135" },
    { size: "2XL", length: 70, bust: 58, shoulder: 52, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 72, bust: 60, shoulder: 54, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 74, bust: 62, shoulder: 56, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 76, bust: 64, shoulder: 58, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 78, bust: 66, shoulder: 60, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 80, bust: 68, shoulder: 62, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S",   length: 40, bust: 34, shoulder: 28, age: "2-4",   height: "85-95 "},
    { size: "M",   length: 43, bust: 36, shoulder: 30, age: "4-5",   height: "95-105" },
    { size: "L",   length: 46, bust: 38, shoulder: 32, age: "5-7",   height: "105-115" },
    { size: "XL",  length: 49, bust: 40, shoulder: 34, age: "7-8",   height: "115-125" },
    { size: "2XL", length: 52, bust: 42, shoulder: 36, age: "8-9",   height: "125-135" },
    { size: "3XL", length: 55, bust: 44, shoulder: 38, age: "9-10",  height: "135-145" },
    { size: "4XL", length: 58, bust: 46, shoulder: 40, age: "10-11", height: "145-150" },
  ]
}
const Shirt = {
  styles: ["衬衫短袖","衬衫五分袖","衬衫长袖"],
  adultData: [
    { size: "XS",  length: 64, bust: 50, shoulder: 40, height: "150-155", weight: "85-95" },
    { size: "S",   length: 66, bust: 52, shoulder: 42, height: "155-160", weight: "95-105 "},
    { size: "M",   length: 68, bust: 54, shoulder: 44, height: "160-165", weight: "105-115" },
    { size: "L",   length: 70, bust: 56, shoulder: 46, height: "165-170", weight: "115-125" },
    { size: "XL",  length: 72, bust: 58, shoulder: 48, height: "170-175", weight: "125-135" },
    { size: "2XL", length: 74, bust: 60, shoulder: 50, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 76, bust: 62, shoulder: 52, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 78, bust: 64, shoulder: 54, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 80, bust: 66, shoulder: 56, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 82, bust: 68, shoulder: 58, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 84, bust: 70, shoulder: 60, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S",   length: 44, bust: 36, shoulder: 26, age: "2-4",   height: "85-95 "},
    { size: "M",   length: 47, bust: 38, shoulder: 38, age: "4-5",   height: "95-105" },
    { size: "L",   length: 50, bust: 40, shoulder: 30, age: "5-7",   height: "105-115" },
    { size: "XL",  length: 53, bust: 42, shoulder: 32, age: "7-8",   height: "115-125" },
    { size: "2XL", length: 56, bust: 44, shoulder: 34, age: "8-9",   height: "125-135" },
    { size: "3XL", length: 59, bust: 46, shoulder: 36, age: "9-10",  height: "135-145" },
    { size: "4XL", length: 62, bust: 48, shoulder: 38, age: "10-11", height: "145-150" },
  ]
}
const Shorts = {
  styles: ["排球裤","短裤"],
  adultData: [
    { size: "XS",  length: 38, height: "150-155", weight: "85-95" },
    { size: "S",   length: 40, height: "155-160", weight: "95-105 "},
    { size: "M",   length: 42, height: "160-165", weight: "105-115" },
    { size: "L",   length: 44, height: "165-170", weight: "115-125" },
    { size: "XL",  length: 46, height: "170-175", weight: "125-135" },
    { size: "2XL", length: 48, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 50, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 52, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 54, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 56, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 58, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S",   length: 18, age: "2-4",   height: "85-95 "},
    { size: "M",   length: 21, age: "4-5",   height: "95-105" },
    { size: "L",   length: 24, age: "5-7",   height: "105-115" },
    { size: "XL",  length: 27, age: "7-8",   height: "115-125" },
    { size: "2XL", length: 30, age: "8-9",   height: "125-135" },
    { size: "3XL", length: 30, age: "9-10",  height: "135-145" },
    { size: "4XL", length: 36, age: "10-11", height: "145-150" },
  ],
  adultColumns: [
    { prop: 'size', label: '尺码' },
    { prop: 'length', label: '裤长' },
    { prop: 'height', label: '参考身高(CM)' },
    { prop: 'weight', label: '参考体重(斤)' }
  ],
  childrenColumns: [
    { prop: 'size', label: '尺码' },
    { prop: 'length', label: '裤长' },
    { prop: 'age', label: '参考年龄(岁)' },
    { prop: 'height', label: '参考身高(CM)' }
  ]
}
const ShortSleeveSeries = {
  styles: ["圆领短袖","圆领五分袖","圆领长袖",
           "翻领短袖","翻领五分袖","翻领长袖",
          "溜肩五分袖","V领短袖","插肩短袖","假两件短袖","假两件五分袖"],
  adultData: [
    { size: "XS",  length: 59, bust: 44, shoulder: 42, height: "150-155", weight: "85-95" },
    { size: "S",   length: 59, bust: 46, shoulder: 44, height: "155-160", weight: "95-105 "},
    { size: "M",   length: 61, bust: 48, shoulder: 46, height: "160-165", weight: "105-115" },
    { size: "L",   length: 63, bust: 50, shoulder: 48, height: "165-170", weight: "115-125" },
    { size: "XL",  length: 65, bust: 52, shoulder: 50, height: "170-175", weight: "125-135" },
    { size: "2XL", length: 67, bust: 54, shoulder: 52, height: "175-180", weight: "135-145" },
    { size: "3XL", length: 69, bust: 56, shoulder: 54, height: "180-185", weight: "145-155" },
    { size: "4XL", length: 71, bust: 58, shoulder: 56, height: "185-190", weight: "155-165" },
    { size: "5XL", length: 73, bust: 60, shoulder: 58, height: "190-200", weight: "165-175" },
    { size: "6XL", length: 75, bust: 62, shoulder: 60, height: "200-210", weight: "175-185" },
    { size: "7XL", length: 77, bust: 64, shoulder: 62, height: "210-220", weight: "185-195" },
  ],
  childrenData: [
    { size: "S",   length: 37, bust: 30, shoulder: 28, age: "2-4",   height: "85-95 "},
    { size: "M",   length: 40, bust: 32, shoulder: 30, age: "4-5",   height: "95-105" },
    { size: "L",   length: 43, bust: 34, shoulder: 32, age: "5-7",   height: "105-115" },
    { size: "XL",  length: 46, bust: 36, shoulder: 34, age: "7-8",   height: "115-125" },
    { size: "2XL", length: 49, bust: 38, shoulder: 36, age: "8-9",   height: "125-135" },
    { size: "3XL", length: 52, bust: 40, shoulder: 38, age: "9-10",  height: "135-145" },
    { size: "4XL", length: 55, bust: 42, shoulder: 40, age: "10-11", height: "145-150" },
  ]
}
  const Trousers = {
    styles: ["长裤"],
    adultData: [
      { size: "XS",  length: 91, height: "150-155", weight: "85-95" },
      { size: "S",   length: 93, height: "155-160", weight: "95-105 "},
      { size: "M",   length: 95, height: "160-165", weight: "105-115" },
      { size: "L",   length: 97, height: "165-170", weight: "115-125" },
      { size: "XL",  length: 99, height: "170-175", weight: "125-135" },
      { size: "2XL", length: 101, height: "175-180", weight: "135-145" },
      { size: "3XL", length: 103, height: "180-185", weight: "145-155" },
      { size: "4XL", length: 105, height: "185-190", weight: "155-165" },
      { size: "5XL", length: 107, height: "190-200", weight: "165-175" },
      { size: "6XL", length: 109, height: "200-210", weight: "175-185" },
      { size: "7XL", length: 111, height: "210-220", weight: "185-195" },
    ],
    childrenData: [
      { size: "S",   length: 63, age: "2-4",   height: "85-95 "},
      { size: "M",   length: 67, age: "4-5",   height: "95-105" },
      { size: "L",   length: 71, age: "5-7",   height: "105-115" },
      { size: "XL",  length: 75, age: "7-8",   height: "115-125" },
      { size: "2XL", length: 79, age: "8-9",   height: "125-135" },
      { size: "3XL", length: 83, age: "9-10",  height: "135-145" },
      { size: "4XL", length: 87, age: "10-11", height: "145-150" },
    ],
    adultColumns: [
      { prop: 'size', label: '尺码' },
      { prop: 'length', label: '裤长' },
      { prop: 'height', label: '参考身高(CM)' },
      { prop: 'weight', label: '参考体重(斤)' }
    ],
    childrenColumns: [
      { prop: 'size', label: '尺码' },
      { prop: 'length', label: '裤长' },
      { prop: 'age', label: '参考年龄(岁)' },
      { prop: 'height', label: '参考身高(CM)' }
    ]
  }

export {
  adultColumns,
  childrenColumns,
  MaJia,
  FengYi,
  BasketBall,
  Sweater,
  Shirt,
  Shorts,
  ShortSleeveSeries,
  Trousers
  
}