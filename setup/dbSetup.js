db.getSiblingDB('admin').dropUser('root');

db.getSiblingDB('admin').createUser({
  user: 'root',
  pwd: 'test1234',
  roles: [{ role: 'root', db: 'admin' }]
});

db.getSiblingDB('test').dropUser('test');

db.getSiblingDB('test').createUser({
  user: 'test',
  pwd: 'test1234',
  roles: ['readWrite', 'userAdmin']
});

db.getSiblingDB('test').users.drop();
db.getSiblingDB('test').businesses.drop();
db.getSiblingDB('test').staffs.drop();

db.getSiblingDB('test').users.insert({
  _id: ObjectId('5ba1a2f9461fa20d1f40cb7c'),
  password: '$2b$10$L/ob8iCadRusCzICb2htpOWomuZtGKuyzZDbWjfLCqw1FAzIHoIxC',
  name: '',
  removed: false,
  isPending: false,
  futureBWX: 0,
  bluePoint: 113921189,
  userTokenId: '',
  bankAccoundToken: '',
  prepaidCardToken: '',
  bankCardToken: '',
  hyperWalletAsset: '',
  toBeAccumulatedBp: 53220,
  phone: '01042992920',
  email: 'test@test.com',
  userType: 'ADMIN',
  business: ObjectId('5ba1a375461fa20d1f40cb1a'),
  passwordChangedTime: ISODate('2018-10-16T14:39:28.254Z'),
  pushSettings: null,
  ctime: ISODate('2018-10-16T14:39:28.254Z'),
  mtime: ISODate('2018-10-16T14:39:28.254Z'),
  createdAt: 1539700768254.0,
  updatedAt: 1539700768254.0,
  __v: 0,
  statInfo: {
    totalDeposit: 13505,
    totalWithdrawal: 895630
  },
  stripeInfo: {},
  fcmToken: 'abc',
  sixDigitPassword: '000000',
  name: '',
  status: 'ACTIVATED'
});

db.getSiblingDB('test').users.insert({
  _id: ObjectId('5bf2147b6a618f3ca495e501'),
  password: '$2b$10$ZrhT0oBipb64G6ALwmn7S.wrk5k6nY7FjcyJWRnrhZUBbgBgFqHYK',
  name: '(주) 블루웨일',
  status: 'ACTIVATED',
  pushSettings: {
    NOTICE: true,
    EVENT: true,
    PAYMENT: true
  },
  bluePoint: 997815932,
  statInfo: {
    totalDeposit: 56324,
    totalWithdrawal: 0
  },
  phone: '1542786337432CKEZ0Gktp2',
  email: 'admin@bluewhale.foundation',
  userType: 'ADMIN',
  passwordChangedTime: ISODate('2018-11-21T07:45:37.435Z'),
  createdAt: 1542786337435.0,
  updatedAt: 1542786337435.0,
  __v: 0
});

db.getSiblingDB('test').users.insert(
  {
    _id: ObjectId('5bee189563d6d335d7bffe7c'),
    password: '$2b$10$L/ob8iCadRusCzICb2htpOWomuZtGKuyzZDbWjfLCqw1FAzIHoIxC',
    firstName: 'sdf',
    lastName: 'sdf',
    removed: false,
    isPending: false,
    futureBWX: 0,
    bluePoint: 1000000,
    userTokenId: '',
    bankAccoundToken: '',
    prepaidCardToken: '',
    bankCardToken: '',
    hyperWalletAsset: '',
    toBeAccumulatedBp: 704,
    phone: '01012492920',
    email: 'tesdet@test.com',
    userType: 'NORMAL',
    business: ObjectId('5ba1a375461fa20d1f40cb7d'),
    passwordChangedTime: ISODate('2018-10-16T14:39:28.254Z'),
    pushSettings: null,
    ctime: ISODate('2018-10-16T14:39:28.254Z'),
    mtime: ISODate('2018-10-16T14:39:28.254Z'),
    createdAt: 1539700768254.0,
    updatedAt: 1539700768254.0,
    __v: 0,
    stripeInfo: {},
    fcmToken: 'abc',
    sixDigitPassword: '000000'
  },
  {}
);

db.getSiblingDB('test').users.insert(
  {
    _id: ObjectId('5ba1a2f9461fa20d1f40cb1a'),
    password: '$2b$10$L/ob8iCadRusCzICb2htpOWomuZtGKuyzZDbWjfLCqw1FAzIHoIxC',
    firstName: 'sdf',
    lastName: 'sdf',
    removed: false,
    isPending: false,
    futureBWX: 0,
    bluePoint: 115731850,
    userTokenId: '',
    bankAccoundToken: '',
    prepaidCardToken: '',
    bankCardToken: '',
    hyperWalletAsset: '',
    toBeAccumulatedBp: 704,
    phone: '01042992920',
    email: 'test@test.com',
    userType: 'NORMAL',
    business: ObjectId('5ba1a375461fa20d1f40cb7d'),
    passwordChangedTime: ISODate('2018-10-16T14:39:28.254Z'),
    pushSettings: null,
    ctime: ISODate('2018-10-16T14:39:28.254Z'),
    mtime: ISODate('2018-10-16T14:39:28.254Z'),
    createdAt: 1539700768254.0,
    updatedAt: 1539700768254.0,
    __v: 0,
    stripeInfo: {},
    fcmToken: 'abc',
    sixDigitPassword: '000000'
  },
  {}
);

db.getSiblingDB('test').users.insert(
  {
    _id: ObjectId('5ba1a2f9461fa20d1f40cb1b'),
    password: '$2b$10$L/ob8iCadRusCzICb2htpOWomuZtGKuyzZDbWjfLCqw1FAzIHoIxC',
    firstName: 'sdf',
    lastName: 'sdf',
    removed: false,
    isPending: false,
    futureBWX: 0,
    bluePoint: 115731850,
    userTokenId: '',
    bankAccoundToken: '',
    prepaidCardToken: '',
    bankCardToken: '',
    hyperWalletAsset: '',
    toBeAccumulatedBp: 704,
    phone: '01042992920',
    email: 'test@test.com',
    userType: 'NORMAL',
    business: ObjectId('5ba1a375461fa20d1f40cb7d'),
    passwordChangedTime: ISODate('2018-10-16T14:39:28.254Z'),
    pushSettings: null,
    ctime: ISODate('2018-10-16T14:39:28.254Z'),
    mtime: ISODate('2018-10-16T14:39:28.254Z'),
    createdAt: 1539700768254.0,
    updatedAt: 1539700768254.0,
    __v: 0,
    stripeInfo: {},
    fcmToken: 'abc',
    sixDigitPassword: '000000'
  },
  {}
);

db.getSiblingDB('test').businesses.insert({
  _id: ObjectId('5ba1a375461fa20d1f40cb7d'),
  storeName: '(주) 블루웨일',
  rewardRatio: 0,
  buyerDistRatio: 0,
  staffDistRatio: 0,
  businessStatus: 'ACTIVE',
  salesCount: 253,
  salesAmount: 36278,
  rating: {
    count: 1,
    total: 3,
    average: 3
  },
  bonusBpAmount: 0,
  additionalInfo: {
    boothNum: ''
  },
  location: {
    type: 'Point',
    coordinates: [null, null]
  },
  user: ObjectId('5bf2147b6a618f3ca495e501'),
  createdAt: 1542786337442.0,
  updatedAt: 1542786337442.0,
  __v: 0
});

db.getSiblingDB('test').businesses.insert({
  _id: ObjectId('5ba1a375461fa20d1f40cb1a'),
  rewardRatio: 0.1,
  buyerDistRatio: 0.1,
  staffDistRatio: 0.2,
  businessStatus: 'ACTIVE',
  salesCount: 686,
  salesAmount: 460108,
  createdAt: 1537319658705.0,
  updatedDate: 1537319658705.0,
  rating: {
    count: 2,
    total: 8,
    average: 4
  },
  user: ObjectId('5ba1a2f9461fa20d1f40cb1a'),
  category: '헤어',
  storeName: '좋은가게',
  __v: 0,
  authorizedStaffList: [],
  payrollDay: {
    FULLTIME: [18],
    PARTTIME: [12, 16],
    WEEKEND: [12, 16],
    FREELANCE: [18]
  },
  updatedAt: 1538638151945.0,
  storeAddress: {
    postcode: '151-836',
    postcode1: '151',
    postcode2: '836',
    postcodeSeq: '011',
    zonecode: '08786',
    address: '서울 관악구 청룡1길 33',
    addressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    addressType: 'R',
    bcode: '1162010100',
    bname: '봉천동',
    bname1: '',
    bname2: '봉천동',
    sido: '서울',
    sigungu: '관악구',
    sigunguCode: '11620',
    userLanguageType: 'K',
    query: '청룡1길 33',
    buildingName: '관악하우팰리스',
    buildingCode: '1162010100108830008034156',
    apartment: 'N',
    jibunAddress: '서울 관악구 봉천동 883-8',
    jibunAddressEnglish: '883-8, Bongcheon-dong, Gwanak-gu, Seoul, Korea',
    roadAddress: '서울 관악구 청룡1길 33',
    roadAddressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    autoRoadAddress: '',
    autoRoadAddressEnglish: '',
    autoJibunAddress: '',
    autoJibunAddressEnglish: '',
    userSelectedType: 'R',
    hname: '',
    roadnameCode: '4160718',
    roadname: '청룡1길',
    detailedAddress: '101'
  },
  location: {
    type: 'Point',
    coordinates: [127.022835, 37.519596]
  },
  workTimeTable: {
    mon: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    tue: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    wed: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    thr: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    fri: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sat: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sun: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    }
  },
  bonusBpAmount: 250
});

db.getSiblingDB('test').businesses.insert({
  _id: ObjectId('5ba1a375461fa20d1f40cb1b'),
  rewardRatio: 0.1,
  buyerDistRatio: 0.1,
  staffDistRatio: 0.2,
  businessStatus: 'ACTIVE',
  salesCount: 686,
  salesAmount: 460108,
  createdAt: 1537319658705.0,
  updatedDate: 1537319658705.0,
  rating: {
    count: 2,
    total: 8,
    average: 4
  },
  user: ObjectId('5ba1a2f9461fa20d1f40cb1b'),
  category: '헤어',
  storeName: '좋은가게',
  __v: 0,
  authorizedStaffList: [],
  payrollDay: {
    FULLTIME: [18],
    PARTTIME: [12, 16],
    WEEKEND: [12, 16],
    FREELANCE: [18]
  },
  updatedAt: 1538638151945.0,
  storeAddress: {
    postcode: '151-836',
    postcode1: '151',
    postcode2: '836',
    postcodeSeq: '011',
    zonecode: '08786',
    address: '서울 관악구 청룡1길 33',
    addressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    addressType: 'R',
    bcode: '1162010100',
    bname: '봉천동',
    bname1: '',
    bname2: '봉천동',
    sido: '서울',
    sigungu: '관악구',
    sigunguCode: '11620',
    userLanguageType: 'K',
    query: '청룡1길 33',
    buildingName: '관악하우팰리스',
    buildingCode: '1162010100108830008034156',
    apartment: 'N',
    jibunAddress: '서울 관악구 봉천동 883-8',
    jibunAddressEnglish: '883-8, Bongcheon-dong, Gwanak-gu, Seoul, Korea',
    roadAddress: '서울 관악구 청룡1길 33',
    roadAddressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    autoRoadAddress: '',
    autoRoadAddressEnglish: '',
    autoJibunAddress: '',
    autoJibunAddressEnglish: '',
    userSelectedType: 'R',
    hname: '',
    roadnameCode: '4160718',
    roadname: '청룡1길',
    detailedAddress: '101'
  },
  location: {
    type: 'Point',
    coordinates: [127.022835, 37.519596]
  },
  workTimeTable: {
    mon: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    tue: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    wed: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    thr: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    fri: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sat: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sun: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    }
  },
  bonusBpAmount: 9999999
});

db.getSiblingDB('test').businesses.insert({
  _id: ObjectId('5bc6a30704f3050023171285'),
  rewardRatio: 0.1,
  buyerDistRatio: 0.1,
  staffDistRatio: 0.2,
  businessStatus: 'ACTIVE',
  salesCount: 686,
  salesAmount: 460108,
  createdAt: 1537319658705.0,
  updatedDate: 1537319658705.0,
  rating: {
    count: 2,
    total: 8,
    average: 4
  },
  user: ObjectId('5bee189563d6d335d7bffe7c'),
  category: '헤어',
  storeName: '좋은가게',
  __v: 0,
  authorizedStaffList: [],
  payrollDay: {
    FULLTIME: [18],
    PARTTIME: [12, 16],
    WEEKEND: [12, 16],
    FREELANCE: [18]
  },
  updatedAt: 1538638151945.0,
  storeAddress: {
    postcode: '151-836',
    postcode1: '151',
    postcode2: '836',
    postcodeSeq: '011',
    zonecode: '08786',
    address: '서울 관악구 청룡1길 33',
    addressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    addressType: 'R',
    bcode: '1162010100',
    bname: '봉천동',
    bname1: '',
    bname2: '봉천동',
    sido: '서울',
    sigungu: '관악구',
    sigunguCode: '11620',
    userLanguageType: 'K',
    query: '청룡1길 33',
    buildingName: '관악하우팰리스',
    buildingCode: '1162010100108830008034156',
    apartment: 'N',
    jibunAddress: '서울 관악구 봉천동 883-8',
    jibunAddressEnglish: '883-8, Bongcheon-dong, Gwanak-gu, Seoul, Korea',
    roadAddress: '서울 관악구 청룡1길 33',
    roadAddressEnglish: '33, Cheongnyong 1-gil, Gwanak-gu, Seoul, Korea',
    autoRoadAddress: '',
    autoRoadAddressEnglish: '',
    autoJibunAddress: '',
    autoJibunAddressEnglish: '',
    userSelectedType: 'R',
    hname: '',
    roadnameCode: '4160718',
    roadname: '청룡1길',
    detailedAddress: '101'
  },
  location: {
    type: 'Point',
    coordinates: [127.022835, 37.519596]
  },
  workTimeTable: {
    mon: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    tue: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    wed: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    thr: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    fri: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sat: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    },
    sun: {
      active: true,
      start: {
        hour: 2,
        min: 23
      },
      end: {
        hour: 8,
        min: 23
      }
    }
  },
  bonusBpAmount: 250
});

db.getSiblingDB('test').staffs.insert({
  _id: ObjectId('5ba1f40d73ac4345441d5268'),
  business: ObjectId('5b74dd6338e3ab3f4294891a'),
  user: ObjectId('5bc6a39e04f3050023171287'),
  phone: '12312',
  name: 'namhoon',
  payrollType: 'MONTHLY',
  position: '대리',
  workTimeTable: {
    mon: {
      start: 3,
      end: 8
    }
  },
  employType: 'FULLTIME',
  address: 'Sdf',
  fileList: [],
  status: 'UNREGISTERED',
  workingPeriod: {
    start: '',
    end: ''
  },
  __v: 0,
  auth: {
    staffManage: true,
    salaryManage: false,
    attendanceManage: true,
    vacationManage: true,
    compensationManage: true
  },
  additionalSalaryInfoList: [
    {
      key: 'sdsdf',
      value: 'sdf'
    }
  ]
});
