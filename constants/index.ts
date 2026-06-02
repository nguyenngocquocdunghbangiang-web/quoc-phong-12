import { Question } from '@/types';

export const INITIAL_QUESTIONS: Question[] = [
  // Bài 1: Lịch sử, truyền thống của Quân đội và Công an nhân dân Việt Nam
  {
    id: 1,
    text: 'Quân đội nhân dân Việt Nam được thành lập vào ngày tháng năm nào?',
    options: ['22/12/1944', '19/8/1945', '2/9/1945', '7/5/1954'],
    correctIndex: 0,
  },
  {
    id: 2,
    text: 'Công an nhân dân Việt Nam được thành lập vào ngày tháng năm nào?',
    options: ['22/12/1944', '19/8/1945', '2/9/1945', '7/5/1954'],
    correctIndex: 1,
  },
  {
    id: 3,
    text: 'Ai là người sáng lập và rèn luyện Quân đội nhân dân Việt Nam?',
    options: ['Đại tướng Võ Nguyên Giáp', 'Chủ tịch Hồ Chí Minh', 'Đại tướng Nguyễn Chí Thanh', 'Tổng Bí thư Trường Chinh'],
    correctIndex: 1,
  },
  {
    id: 4,
    text: 'Đội Việt Nam Tuyên truyền Giải phóng quân là tiền thân của lực lượng nào?',
    options: ['Công an nhân dân', 'Quân đội nhân dân', 'Dân quân tự vệ', 'Bộ đội biên phòng'],
    correctIndex: 1,
  },
  {
    id: 5,
    text: 'Truyền thống nào sau đây KHÔNG phải là truyền thống của Quân đội nhân dân Việt Nam?',
    options: ['Trung với Đảng, hiếu với dân', 'Quyết chiến, quyết thắng', 'Đoàn kết quốc tế', 'Làm giàu bằng mọi giá'],
    correctIndex: 3,
  },
  {
    id: 6,
    text: 'Ngày truyền thống của Quân đội nhân dân Việt Nam là ngày nào?',
    options: ['19/8', '22/12', '2/9', '30/4'],
    correctIndex: 1,
  },
  {
    id: 7,
    text: 'Ngày truyền thống của Công an nhân dân Việt Nam là ngày nào?',
    options: ['19/8', '22/12', '2/9', '30/4'],
    correctIndex: 0,
  },
  {
    id: 8,
    text: '6 điều Bác Hồ dạy Công an nhân dân được ban hành năm nào?',
    options: ['1945', '1946', '1948', '1950'],
    correctIndex: 2,
  },

  // Bài 2: Nội dung cơ bản một số luật về quốc phòng và an ninh
  {
    id: 9,
    text: 'Luật Quốc phòng được Quốc hội thông qua năm nào?',
    options: ['2005', '2013', '2018', '2020'],
    correctIndex: 2,
  },
  {
    id: 10,
    text: 'Theo Luật Quốc phòng, quốc phòng là gì?',
    options: [
      'Công cuộc giữ nước bằng sức mạnh tổng hợp của toàn dân tộc',
      'Hoạt động của quân đội',
      'Nhiệm vụ của lực lượng vũ trang',
      'Bảo vệ biên giới quốc gia'
    ],
    correctIndex: 0,
  },
  {
    id: 11,
    text: 'Luật Nghĩa vụ quân sự quy định độ tuổi thực hiện nghĩa vụ quân sự của công dân nam là bao nhiêu?',
    options: ['Từ 17 đến 25 tuổi', 'Từ 18 đến 25 tuổi', 'Từ 18 đến 27 tuổi', 'Từ 17 đến 27 tuổi'],
    correctIndex: 2,
  },
  {
    id: 12,
    text: 'Thời hạn phục vụ tại ngũ trong thời bình của hạ sĩ quan, binh sĩ là bao lâu?',
    options: ['18 tháng', '24 tháng', '30 tháng', '36 tháng'],
    correctIndex: 1,
  },
  {
    id: 13,
    text: 'Theo Luật An ninh quốc gia, an ninh quốc gia bao gồm những nội dung nào?',
    options: [
      'An ninh chính trị và an ninh kinh tế',
      'An ninh chính trị, kinh tế, tư tưởng văn hóa, xã hội',
      'An ninh chính trị và an ninh quân sự',
      'An ninh nội bộ và an ninh biên giới'
    ],
    correctIndex: 1,
  },
  {
    id: 14,
    text: 'Luật Giáo dục quốc phòng và an ninh quy định giáo dục quốc phòng và an ninh là môn học gì?',
    options: ['Môn học tự chọn', 'Môn học bắt buộc', 'Hoạt động ngoại khóa', 'Môn học bổ trợ'],
    correctIndex: 1,
  },
  {
    id: 15,
    text: 'Công dân có quyền và nghĩa vụ gì trong công tác quốc phòng?',
    options: [
      'Chỉ có nghĩa vụ, không có quyền',
      'Chỉ có quyền, không có nghĩa vụ',
      'Vừa có quyền vừa có nghĩa vụ',
      'Không có quyền và nghĩa vụ'
    ],
    correctIndex: 2,
  },
  {
    id: 16,
    text: 'Lực lượng nòng cốt trong xây dựng nền quốc phòng toàn dân là?',
    options: ['Quân đội nhân dân', 'Công an nhân dân', 'Quân đội và Công an nhân dân', 'Dân quân tự vệ'],
    correctIndex: 2,
  },

  // Bài 3: Ma túy và phòng chống ma túy
  {
    id: 17,
    text: 'Ma túy là gì?',
    options: [
      'Chất gây nghiện có nguồn gốc tự nhiên',
      'Chất gây nghiện có nguồn gốc tổng hợp',
      'Chất gây nghiện, gây ảo giác, có nguồn gốc tự nhiên hoặc tổng hợp',
      'Thuốc chữa bệnh có tác dụng giảm đau'
    ],
    correctIndex: 2,
  },
  {
    id: 18,
    text: 'Heroin thuộc nhóm ma túy nào?',
    options: ['Ma túy tổng hợp', 'Ma túy bán tổng hợp', 'Ma túy tự nhiên', 'Ma túy kích thích'],
    correctIndex: 1,
  },
  {
    id: 19,
    text: 'Tác hại của ma túy đối với bản thân người sử dụng là gì?',
    options: [
      'Chỉ ảnh hưởng đến sức khỏe',
      'Chỉ ảnh hưởng đến tinh thần',
      'Ảnh hưởng đến sức khỏe, tinh thần, nhân cách và tương lai',
      'Không có tác hại gì nghiêm trọng'
    ],
    correctIndex: 2,
  },
  {
    id: 20,
    text: 'Biện pháp phòng chống ma túy hiệu quả nhất với học sinh là gì?',
    options: [
      'Tránh xa hoàn toàn các chất ma túy',
      'Thử một lần để biết',
      'Sử dụng ma túy có kiểm soát',
      'Chỉ sử dụng ma túy tự nhiên'
    ],
    correctIndex: 0,
  },
  {
    id: 21,
    text: 'Hành vi nào sau đây vi phạm pháp luật về phòng chống ma túy?',
    options: ['Tuyên truyền về tác hại ma túy', 'Tàng trữ chất ma túy', 'Tố giác hành vi mua bán ma túy', 'Tham gia cai nghiện ma túy'],
    correctIndex: 1,
  },
  {
    id: 22,
    text: 'Đặc điểm của ma túy tổng hợp (ma túy đá) là gì?',
    options: [
      'Gây nghiện chậm, dễ cai',
      'Gây nghiện nhanh, khó cai, tác hại nghiêm trọng',
      'Không gây nghiện',
      'Có thể sử dụng làm thuốc'
    ],
    correctIndex: 1,
  },
  {
    id: 23,
    text: 'Khi phát hiện người thân sử dụng ma túy, hành động đúng nhất là?',
    options: [
      'Giấu kín, không cho ai biết',
      'Báo công an ngay lập tức',
      'Động viên, giúp đỡ và đưa đi cai nghiện',
      'Xa lánh, không quan tâm'
    ],
    correctIndex: 2,
  },
  {
    id: 24,
    text: 'Ngày toàn dân phòng chống ma túy là ngày nào?',
    options: ['26/6', '1/6', '15/5', '10/12'],
    correctIndex: 0,
  },

  // Bài 4: Phòng chống vi phạm pháp luật về trật tự an toàn giao thông
  {
    id: 25,
    text: 'Người điều khiển xe máy khi tham gia giao thông phải đủ bao nhiêu tuổi?',
    options: ['16 tuổi', '18 tuổi', '17 tuổi', '15 tuổi'],
    correctIndex: 1,
  },
  {
    id: 26,
    text: 'Nồng độ cồn cho phép khi điều khiển xe máy là bao nhiêu?',
    options: ['Dưới 50mg/100ml máu', 'Dưới 80mg/100ml máu', 'Bằng 0', 'Dưới 40mg/100ml máu'],
    correctIndex: 2,
  },
  {
    id: 27,
    text: 'Hành vi nào sau đây vi phạm luật giao thông đường bộ?',
    options: [
      'Đội mũ bảo hiểm khi đi xe máy',
      'Vượt đèn đỏ',
      'Nhường đường cho người đi bộ',
      'Đi đúng làn đường quy định'
    ],
    correctIndex: 1,
  },
  {
    id: 28,
    text: 'Tốc độ tối đa cho phép của xe máy trong khu dân cư là bao nhiêu?',
    options: ['40 km/h', '50 km/h', '60 km/h', '30 km/h'],
    correctIndex: 1,
  },
  {
    id: 29,
    text: 'Nguyên nhân chính gây tai nạn giao thông là gì?',
    options: [
      'Do thời tiết xấu',
      'Do đường xá xuống cấp',
      'Do ý thức chấp hành luật kém của người tham gia giao thông',
      'Do phương tiện không an toàn'
    ],
    correctIndex: 2,
  },
  {
    id: 30,
    text: 'Khi gặp xe ưu tiên đang làm nhiệm vụ, người điều khiển phương tiện phải làm gì?',
    options: [
      'Tăng tốc vượt lên',
      'Giảm tốc độ, đi sát lề đường bên phải và nhường đường',
      'Dừng xe tại chỗ',
      'Tiếp tục đi bình thường'
    ],
    correctIndex: 1,
  },
  {
    id: 31,
    text: 'Biển báo hình tròn, nền màu đỏ là loại biển báo gì?',
    options: ['Biển báo nguy hiểm', 'Biển báo cấm', 'Biển báo hiệu lệnh', 'Biển chỉ dẫn'],
    correctIndex: 1,
  },
  {
    id: 32,
    text: 'Người đi bộ phải đi như thế nào trên đường không có vỉa hè?',
    options: [
      'Đi giữa đường',
      'Đi bên phải theo chiều đi của mình',
      'Đi sát mép đường bên phải',
      'Đi bất kỳ vị trí nào'
    ],
    correctIndex: 2,
  },

  // Bài 5: Bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội
  {
    id: 33,
    text: 'An ninh quốc gia là gì?',
    options: [
      'Sự ổn định, phát triển bền vững của chế độ xã hội chủ nghĩa và Nhà nước',
      'Sự an toàn của quân đội',
      'Sự bình yên của nhân dân',
      'Sự vững mạnh của nền kinh tế'
    ],
    correctIndex: 0,
  },
  {
    id: 34,
    text: 'Đối tượng xâm phạm an ninh quốc gia bao gồm những ai?',
    options: [
      'Chỉ có các thế lực thù địch nước ngoài',
      'Chỉ có các phần tử phản động trong nước',
      'Các thế lực thù địch, phản động trong và ngoài nước',
      'Chỉ có tội phạm hình sự'
    ],
    correctIndex: 2,
  },
  {
    id: 35,
    text: 'Trật tự an toàn xã hội là gì?',
    options: [
      'Trạng thái xã hội bình yên',
      'Trạng thái xã hội có trật tự, kỷ cương theo quy định của pháp luật',
      'Trạng thái không có tội phạm',
      'Trạng thái kinh tế phát triển'
    ],
    correctIndex: 1,
  },
  {
    id: 36,
    text: 'Nhiệm vụ bảo vệ an ninh quốc gia là của ai?',
    options: [
      'Chỉ của lực lượng công an',
      'Chỉ của lực lượng quân đội',
      'Của toàn dân, trong đó công an, quân đội làm nòng cốt',
      'Của cơ quan nhà nước'
    ],
    correctIndex: 2,
  },
  {
    id: 37,
    text: 'Hành vi nào sau đây xâm phạm an ninh quốc gia?',
    options: [
      'Phát tán thông tin chống phá Nhà nước trên mạng xã hội',
      'Phê bình, góp ý xây dựng chính sách',
      'Tham gia các hoạt động từ thiện',
      'Khiếu nại, tố cáo theo quy định'
    ],
    correctIndex: 0,
  },
  {
    id: 38,
    text: 'Học sinh có trách nhiệm gì trong bảo vệ an ninh quốc gia?',
    options: [
      'Không có trách nhiệm vì còn nhỏ',
      'Chấp hành pháp luật, cảnh giác, phát hiện và báo cáo hành vi vi phạm',
      'Chỉ cần học tập tốt',
      'Tham gia lực lượng vũ trang'
    ],
    correctIndex: 1,
  },
  {
    id: 39,
    text: 'Âm mưu "diễn biến hòa bình" của các thế lực thù địch là gì?',
    options: [
      'Tấn công quân sự trực tiếp',
      'Chuyển hóa chế độ chính trị bằng các biện pháp phi quân sự',
      'Xây dựng quan hệ hữu nghị',
      'Hợp tác kinh tế'
    ],
    correctIndex: 1,
  },
  {
    id: 40,
    text: 'Biện pháp nào sau đây góp phần bảo vệ trật tự an toàn xã hội?',
    options: [
      'Tự xử lý khi bị xâm hại',
      'Chấp hành pháp luật và tham gia phong trào bảo vệ an ninh',
      'Không quan tâm đến người khác',
      'Sử dụng mạng xã hội tùy ý'
    ],
    correctIndex: 1,
  },

  // Bài 6: Một số hiểu biết về chiến lược "Diễn biến hòa bình"
  {
    id: 41,
    text: '"Diễn biến hòa bình" là chiến lược của ai?',
    options: [
      'Các nước xã hội chủ nghĩa',
      'Các thế lực thù địch, đứng đầu là Mỹ',
      'Các tổ chức quốc tế',
      'Các nước đang phát triển'
    ],
    correctIndex: 1,
  },
  {
    id: 42,
    text: 'Mục tiêu của chiến lược "Diễn biến hòa bình" là gì?',
    options: [
      'Phát triển kinh tế các nước',
      'Xóa bỏ chế độ xã hội chủ nghĩa',
      'Hợp tác quốc tế',
      'Bảo vệ hòa bình thế giới'
    ],
    correctIndex: 1,
  },
  {
    id: 43,
    text: 'Lĩnh vực nào KHÔNG phải là mục tiêu tấn công của "Diễn biến hòa bình"?',
    options: ['Chính trị, tư tưởng', 'Kinh tế', 'Văn hóa, xã hội', 'Thể dục thể thao'],
    correctIndex: 3,
  },
  {
    id: 44,
    text: 'Thủ đoạn chính của "Diễn biến hòa bình" trên lĩnh vực tư tưởng là gì?',
    options: [
      'Tấn công quân sự',
      'Truyền bá tư tưởng tự do, dân chủ theo kiểu phương Tây',
      'Viện trợ kinh tế',
      'Hợp tác giáo dục'
    ],
    correctIndex: 1,
  },
  {
    id: 45,
    text: 'Đối tượng mà "Diễn biến hòa bình" nhắm vào nhiều nhất là ai?',
    options: ['Người già', 'Thanh niên, học sinh, sinh viên', 'Nông dân', 'Công nhân'],
    correctIndex: 1,
  },
  {
    id: 46,
    text: 'Biện pháp phòng chống "Diễn biến hòa bình" hiệu quả nhất là gì?',
    options: [
      'Đóng cửa không giao lưu quốc tế',
      'Nâng cao nhận thức, bản lĩnh chính trị và cảnh giác cách mạng',
      'Tăng cường lực lượng quân sự',
      'Hạn chế sử dụng internet'
    ],
    correctIndex: 1,
  },
  {
    id: 47,
    text: 'Hành vi nào sau đây là biểu hiện bị tác động của "Diễn biến hòa bình"?',
    options: [
      'Tin tưởng vào sự lãnh đạo của Đảng',
      'Hoài nghi, phủ nhận vai trò lãnh đạo của Đảng',
      'Tích cực học tập, lao động',
      'Tham gia hoạt động xã hội'
    ],
    correctIndex: 1,
  },
  {
    id: 48,
    text: 'Học sinh cần làm gì để phòng chống "Diễn biến hòa bình"?',
    options: [
      'Không sử dụng internet',
      'Rèn luyện bản lĩnh, tỉnh táo trước thông tin xấu độc',
      'Không giao lưu với người nước ngoài',
      'Không quan tâm đến chính trị'
    ],
    correctIndex: 1,
  },

  // Bài 7: Các tư thế, động tác cơ bản vận động trong chiến đấu
  {
    id: 49,
    text: 'Tư thế đi khom được áp dụng trong trường hợp nào?',
    options: [
      'Khi địa hình bằng phẳng',
      'Khi vật che đỡ thấp ngang ngực',
      'Khi vật che đỡ cao quá đầu',
      'Khi đang bị địch bắn'
    ],
    correctIndex: 1,
  },
  {
    id: 50,
    text: 'Tư thế bò cao được sử dụng khi nào?',
    options: [
      'Khi vật che đỡ cao',
      'Khi vật che đỡ thấp ngang hông',
      'Khi vật che đỡ thấp ngang đầu gối',
      'Khi đang chạy'
    ],
    correctIndex: 1,
  },
  {
    id: 51,
    text: 'Tư thế bò thấp khác với bò cao ở điểm nào?',
    options: [
      'Tốc độ di chuyển',
      'Độ cao của thân người so với mặt đất',
      'Hướng di chuyển',
      'Loại vũ khí mang theo'
    ],
    correctIndex: 1,
  },
  {
    id: 52,
    text: 'Khi chạy trong chiến đấu, điều quan trọng nhất là gì?',
    options: [
      'Chạy càng nhanh càng tốt',
      'Chạy thẳng tắp',
      'Lợi dụng địa hình, địa vật che đỡ',
      'Chạy theo nhóm đông'
    ],
    correctIndex: 2,
  },
  {
    id: 53,
    text: 'Động tác lăn trong chiến đấu dùng để làm gì?',
    options: [
      'Di chuyển nhanh',
      'Tránh đạn và thay đổi vị trí nhanh chóng',
      'Tập thể dục',
      'Quan sát địch'
    ],
    correctIndex: 1,
  },
  {
    id: 54,
    text: 'Khi trườn, tư thế của thân người như thế nào?',
    options: [
      'Thân người cao',
      'Thân người áp sát mặt đất',
      'Thân người nghiêng',
      'Thân người quỳ'
    ],
    correctIndex: 1,
  },

  // Bài 8: Kỹ thuật cấp cứu và chuyển thương
  {
    id: 55,
    text: 'Khi gặp người bị thương chảy máu động mạch, cần làm gì đầu tiên?',
    options: [
      'Gọi xe cấp cứu',
      'Băng ép hoặc garô cầm máu',
      'Cho uống nước',
      'Để nạn nhân nằm yên'
    ],
    correctIndex: 1,
  },
  {
    id: 56,
    text: 'Garô cầm máu được đặt ở vị trí nào?',
    options: [
      'Ngay tại vết thương',
      'Phía trên vết thương (gần tim hơn)',
      'Phía dưới vết thương',
      'Xa vết thương'
    ],
    correctIndex: 1,
  },
  {
    id: 57,
    text: 'Thời gian tối đa đặt garô là bao lâu?',
    options: ['30 phút', '1 giờ', '1 giờ 30 phút', '2 giờ'],
    correctIndex: 2,
  },
  {
    id: 58,
    text: 'Khi nẹp cố định xương gãy, nẹp phải như thế nào?',
    options: [
      'Chỉ cần cố định tại chỗ gãy',
      'Cố định cả khớp trên và khớp dưới chỗ gãy',
      'Cố định toàn bộ chi',
      'Không cần nẹp, chỉ cần băng'
    ],
    correctIndex: 1,
  },
  {
    id: 59,
    text: 'Khi chuyển thương nạn nhân gãy cột sống, cần lưu ý điều gì?',
    options: [
      'Cõng nạn nhân',
      'Để nạn nhân nằm cáng cứng, cố định cổ',
      'Vác nạn nhân trên vai',
      'Để nạn nhân tự đi'
    ],
    correctIndex: 1,
  },
  {
    id: 60,
    text: 'Phương pháp hô hấp nhân tạo phổ biến nhất là gì?',
    options: [
      'Ấn ngực',
      'Hà hơi thổi ngạt',
      'Dội nước lạnh',
      'Xoa bóp toàn thân'
    ],
    correctIndex: 1,
  },
];

export const FLOWER_EMOJIS = ['🌸', '🌺', '🌻', '🌼', '🌷', '💐', '🪻', '🪷', '🌹', '💮'];

export const FLOWER_COLORS = [
  '#FF6B9D', // Pink
  '#FF8E53', // Orange
  '#FFD93D', // Yellow
  '#6BCB77', // Green
  '#4D96FF', // Blue
  '#9B59B6', // Purple
  '#E74C3C', // Red
  '#1ABC9C', // Teal
  '#F39C12', // Gold
  '#3498DB', // Light Blue
];
