//商品分类模拟数据
var menuData = [{
  'typeName': '家用电器', 'subMenu': [{
    'type': '电话', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '冰箱',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '洗衣机',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '电脑',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '微波炉',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '开水壶', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '吹风机',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '缝纫机', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '手机、运营商、数码', 'subMenu': [{
    'type': '对讲机', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '京东通信',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '充电线',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '户外器材',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '微波炉',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '麦克风', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '运动跟踪器',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '电子词典', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '电脑、办公', 'subMenu': [{
    'type': '手机维修', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '办套餐',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '苹果周边',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '冲印服务',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '读卡器',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': 'MP3/MP4', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '体感车',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '点读机/笔', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '家居、家具、家装、厨具', 'subMenu': [{
    'type': '对讲机', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '固话/宽带',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '手机饰品',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '摄像机',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '滤镜',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '麦克风', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '健康监测',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '早教益智', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '男装、女装、童装、内衣', 'subMenu': [{
    'type': '以旧换新', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '合约机',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '数据线',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '户外器材',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '机身附件',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '收音机', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '智能眼镜',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '电纸书', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '化妆、清洁、宠物', 'subMenu': [{
    'type': '充电线', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '贴膜',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '合约机',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '电脑',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '收音机',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '滤镜', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '录音笔',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '健康监测', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '运动户外、钟表', 'subMenu': [{
    'type': '手机耳机', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '相机包',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '任意配件',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '办套餐',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '录音笔',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '运动跟踪器', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '收音机',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '镜头', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '汽车、汽车用品', 'subMenu': [{
    'type': '中国移动', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '数据线',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '拍立得',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '单反相机',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '滤镜',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '智能眼镜', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '智能家居',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '收音机', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '母婴、玩具乐器', 'subMenu': [{
    'type': '手机耳机', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '冰箱',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '数码相机',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '收音机',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '手机壳',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '录音笔', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '吹风机',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '健康监测', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '食品、酒类、生鲜、特产', 'subMenu': [{
    'type': '读卡器', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '收音机',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '专业音频',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '苹果周边',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '电子词典',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '京东通信', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '吹风机',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '专业音频', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '医药保健', 'subMenu': [{
    'type': '单反相机', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '镜头',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '音箱/音响',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '电脑',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '选号码',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '任意配件', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '早教益智',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '缝纫机', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '图书、音像、电子书', 'subMenu': [{
    'type': '冲印服务', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '冰箱',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '手机电池',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '相机包',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '收音机',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '滤镜', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '早教益智',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '收音机', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '彩票、旅行、充值、票务', 'subMenu': [{
    'type': '以旧换新', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '中国联通',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '任意配件',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '拍立得',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '机身附件',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '专业音频', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '智能眼镜',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '早教益智', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}, {
  'typeName': '理财、众筹、白条、保险', 'subMenu': [{
    'type': '以旧换新', 'data': ['手机', '对讲机', '以旧换新', '手机维修']
  }, {
    'type': '170选号',
    'data': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话/宽带', '京东通信', '中国移动', '中国联通', '中国电信']
  }, {
    'type': '贴膜',
    'data': ['手机壳', '贴膜', '手机储存卡', '数据线', '充电线', '手机耳机', '任意配件', '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载配件', '拍照配件']
  }, {
    'type': '单反相机',
    'data': ['数码相机', '单电/微单相机', '单反相机', '拍立得', '运动相机', '摄像机', '镜头', '户外器材', '摄影器材', '冲印服务', '数码相框']
  }, {
    'type': '相机包',
    'data': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/手柄', '相机清洁/贴膜', '机身附件', '镜头附件', '读卡器', '支架', '电池/充电器']
  }, {
    'type': '收音机', 'data': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
  }, {
    'type': '智能手表',
    'data': ['智能手环', '智能手表', '智能眼镜', '智能机器人', '运动跟踪器', '健康监测', '智能配饰', '智能家居', '体感车', '无人机', '其他配件']
  }, {
    'type': '录音笔', 'data': ['学生平板', '点读机/笔', '早教益智', '录音笔', '电纸书', '电子词典', '复读机']
  }]
}];

$(function () {
  var banner = $('.banner');
  var menu = banner.find('.left>.menu');//商品分类
  var subMenu = menu.next();//子商品分类

  var middleInner = banner.find('.middleInner');//轮播图
  var mImgs = middleInner.find('.imgBox div');
  var mDots = middleInner.find('.dots div');
  var mPrev = middleInner.children('.prev');
  var mNext = middleInner.children('.next');

  var mTimer = null;
  var mIndex = 0;

  ctrlBanner();

  function ctrlBanner() {
    setMenuData();
    setSubMenuData();

    setMenuCss();
    setSubMenuCss();

    changeBannerImg();
  }

  /*添加左侧商品分类数据*/
  function setMenuData() {
    menu.append(function () {
      var ul = $('<ul></ul>');

      for (var i = 0; i < menuData.length; i++) {
        var li = $('<li></li>').addClass('menuItem');
        var data = menuData[i];
        var array = data.typeName.split('、');

        for (var j = 0; j < array.length; j++) {
          var a = $('<a></a>').addClass('typeName');
          var str = array[j];
          a.text(str);
          a.appendTo(li);
          if (j !== array.length - 1) {
            $('<span></span>').text('、').appendTo(li);
          }
        }

        $('<span></span>').text('>').addClass('arrow').appendTo(li);

        li.appendTo(ul);
      }

      return ul;
    })
  }

  /*设置左侧商品分类样式*/
  function setMenuCss() {
    menu.children('ul').css('height', 450);
    var li = menu.find('ul>li');

    li.css({
      'height': 32.2,
      'line-height': '32.2px',
      'font-size': '14px',
      'padding-left': '20px',
      'position': 'relative'
    }).children('a').css('color', '#FFF').attr('href', 'javascript:void(0)')
        .end().children('span').css('color', '#FFF');

    li.children('.arrow').css({
      'position': 'absolute', 'right': '10px'
    });

    setMenuHover(menu, li);

  }

  /**
   * 鼠标进入li时改变li颜色样式并显示subMenu，
   * 离开li去其他li时仅改变颜色样式不隐藏subMenu，
   * 当鼠标离开整个menu时才隐藏subMenu
   * */
  function setMenuHover(menu, li) {
    li.hover(function () {
      $(this).css('background', '#FFF');
      $(this).children().css('color', 'red');
      var index = $(this).index();

      setSubMenuHover(li, index);
    }, function () {
      $(this).css('background', 'red');
      $(this).children().css('color', '#FFF');
    });

    menu.hover(null, function () {
      subMenu.hide();
    });
  }

  /*添加左侧子商品分类数据*/
  function setSubMenuData() {
    for (var i = 0; i < menuData.length; i++) {
      var innerDiv = $('<div></div>').addClass('innerSubMenu');
      var data = menuData[i];
      var subMenuData = data.subMenu;

      for (var j = 0; j < subMenuData.length; j++) {
        var row = $('<div></div>').addClass('subMenuRow');
        var item = subMenuData[j];
        var type = item.type;
        var typeArray = item.data;

        $('<div></div>').append($('<a></a>').text(type).attr('href', 'javascript:void(0)')).addClass('bold').appendTo(row);

        var types = $('<div></div>').addClass('types').appendTo(row);
        var sumWidth = 0;

        for (var k = 0; k < typeArray.length; k++) {
          var t = typeArray[k];
          sumWidth += get_tex_width(t, '14px "微软雅黑"') + 10;
          if (sumWidth > 500) {
            $('</br>').appendTo(types);
            sumWidth = 0;
          }

          var a = $('<a></a>');

          a.text(t);
          a.attr('href', 'javascript:void(0)');

          a.appendTo(types);
        }

        row.appendTo(innerDiv);
      }

      innerDiv.appendTo(subMenu);
    }
  }

  /*计算文字宽度*/
  function get_tex_width(txt, font) {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext("2d");
    this.context.font = font;
    return this.context.measureText(txt).width;
  }

  /**
   * 鼠标进入li时subMenu显示，并遍历显示对应的innerSubMenu，
   * 鼠标离开li进入subMenu时继续显示，并遍历找到对应的li使其颜色样式不变，
   * 鼠标离开subMenu时隐藏subMenu，恢复li颜色样式为原样
   */
  function setSubMenuHover(li, index) {
    subMenu.show();
    subMenu.children().each(function () {
      if ($(this).index() === index) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    subMenu.hover(function () {
      $(this).show();

      li.each(function () {
        if ($(this).index() === index) {
          $(this).css('background', '#FFF');
          $(this).children().css('color', 'red');
        } else {
          $(this).css('background', 'red');
          $(this).children().css('color', '#FFF');
        }
      })
    }, function () {
      $(this).hide();

      li.css('background', 'red');
      li.children().css('color', '#FFF');
    })
  }

  /*设置左侧子商品分类样式*/
  function setSubMenuCss() {
    var innerSubMenu = subMenu.children();

    innerSubMenu.hide();

    innerSubMenu.children().css({//subMenuRow样式
      'padding': '15px 0', 'font-size': '14px', 'display': 'table'
    }).children('.bold').css({
      'width': 80,
      'vertical-align': 'middle',
      'display': 'table-cell',
      'font-weight': 'bold',
      'text-align': 'right'
    }).end().children('.types').css({
      'width': 500,
      'vertical-align': 'middle',
      'display': 'table-cell',
      'padding-left': '20px',
      'line-height': '20px'
    }).children('a').css({
      'margin-right': '10px'
    }).hover(function () {
      $(this).css('color', 'red');
    }, function () {
      $(this).css('color', '#4B4B4B');
    });
  }

  function changeBannerImg() {
    startTimer();

    middleInner.mouseleave(function () {
      startTimer();
    });

    middleInner.mouseenter(function () {
      stopTimer();
    });

    clickPrev();
    clickNext();

    clickDot();
  }

  /*开始循环*/
  function startTimer() {
    mTimer = setInterval(function () {
      mIndex++;
      if (mIndex > mImgs.length - 1) {
        mIndex = 0;
      }

      imgChange();
      dotsChange();
    }, 2000);
  }

  /*停止循环*/
  function stopTimer() {
    if (mTimer !== null) {
      clearInterval(mTimer);
    }
  }

  /*图片变换*/
  function imgChange() {
    mImgs.each(function (arg1) {
      if (arg1 === mIndex) {
        $(this).addClass('imgActive');
      } else {
        $(this).removeClass('imgActive');
      }
    })
  }

  /*小圆点变换*/
  function dotsChange() {
    mDots.eq(mIndex).addClass('dotActive').siblings().removeClass('dotActive');
  }

  /*上一页*/
  function clickPrev() {
    mPrev.click(function () {
      mIndex--;
      if (mIndex < 0) {
        mIndex = mImgs.size() - 1;
      }

      imgChange();
      dotsChange();
    });
  }

  /*下一页*/
  function clickNext() {
    mNext.click(function () {
      mIndex++;
      if (mIndex > mImgs.size() - 1) {
        mIndex = 0;
      }

      imgChange();
      dotsChange();
    });
  }

  /*点击小圆点变换图片*/
  function clickDot() {
    mDots.click(function () {
      mIndex = $(this).index();

      imgChange();
      dotsChange();
    })
  }
});