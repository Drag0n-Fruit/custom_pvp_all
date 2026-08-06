
const CHARACTERS = [
  {
    id: "moon",
    name: "달의 전사",
    creator: "트작",
    role: "근접 딜러",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 1,
    releaseDate: 12,
    portrait: "images/chr1.png",
    hp: 32,
    story: "달빛 검술을 익힌 떠돌이 검사. 어린 시절 스승 이클립서의 문하에서 솔리스와 함께 수련을 받았으며,\n그의 실종 이후 둘은 행방을 찾기 위한 여정을 시작했다. 그러나 솔리스가 스승을 찾기 위해 스스로를 희생하는 모습을 보자,\n그는 더 이상의 희생은 의미 없다며 수색을 포기했고, 결국 신념의 차이로 서로 다른 길을 걷게 되었다.",
    weapon: {
      name: "달빛 검",
      type: "근접 무기",
      description: "달빛이 깃든 검"
    },
    skills: [
      {
        name: "달빛 베기", cooldown: "⌛9s", description: "전방으로 돌진한다<br>돌진 경로에 있는 모든 적을 공격한다" },
      {
        name: "달빛 정화", cooldown: "⌛20s", description: "재생과 성급함, 신속을 얻는다<br>자신의 디버프를 제거한다" }
    ],
    ultimate: {
      name: "달 가르기",
      gauge: "🔋2000p",
      description: "전방을 크게 베며 공격한다<br>달빛 베기의 쿨타임이 초기화된다<br>해당 스킬로 적 처치 시, 달 가르기 스킬을 회수한다"
    },
    passive: null
  },
  {
    id: "axe",
    name: "버서커",
    creator: "영과",
    role: "근접 딜러",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 2,
    releaseDate: 1,
    portrait: "images/chr2.png",
    hp: 40,
    story: "저주받은 문양을 지니고 태어나 가문에서 버림받은 전사. 죽음의 문턱에서 분노를 힘으로 바꾸는 저주의 힘을 각성했고,\n거대한 도끼를 휘두르는 광전사가 되었다. 자신을 버리고 모든 것을 빼앗아 간 가문을 향한 복수만을 품은 채,\n분노를 불태우며 전장을 떠돌고 있다.",
    weapon: {
      name: "으스러진 도끼",
      type: "근접 무기",
      description: "무겁고 느리지만 강력한 도끼"
    },
    skills: [
      { name: "내려찍기", cooldown: "⌛6s", description: "전방을 내려찍어 공격하고 적을 기절시킨다<br>체력이 낮을 수록 피해량이 증가한다" },
      { name: "광폭화", cooldown: "⌛30s", description: "힘과 추가 체력, 신속을 얻는다<br>체력이 낮을 수록 버프의 효과가 증가한다" }
    ],
    ultimate: {
      name: "분쇄",
      gauge: "🔋4500p",
      description: "잠깐의 딜레이 후, 전방을 크게 내려찍는다<br>범위 안에 있는 모든 적에게 피해를 입히고 기절시킨다"
    },
    passive: {
      name: "분노의 무게", description: "기본 이동속도가 감소한다" }
  },
  {
    id: "paladin",
    name: "팔라딘",
    creator: "세토",
    role: "탱커",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 3,
    releaseDate: 4,
    portrait: "images/chr3.png",
    hp: 50,
    story: "신을 섬기는 기사단의 최후의 기사. 성물 '아이기스의 방패'​의 주인으로 선택받아 수많은 전장에서 사람들을 지켜냈다.\n그러나 신전이 멸망한 뒤에도 그는 신의 뜻을 따르며 방패를 들고 싸움을 멈추지 않는다. 언젠가 세상을 심판할\n악을 마주할 그날까지, 누구보다 앞에서 동료들을 지키는 것이 그의 사명이다.",
    weapon: {
      name: "성검",
      type: "근접 무기",
      description: "성스러운 힘이 깃든 검"
    },
    skills: [
      { name: "수호의 방패", cooldown: "⌛8s", description: "가장 가까운 아군과 자신에게 일시적으로 추가 생명력을 부여한다" },
      { name: "신의 심판", cooldown: "⌛40s", description: "지정한 위치에 잠깐의 딜레이 후, 모든 적에게 최대 체력의 50% 만큼의 피해를 가하고 기절을 부여한다" }
    ],
    ultimate: {
      name: "아이기스의 방패",
      gauge: "🔋4000p",
      description: "전방으로 빠르게 돌진하며 적을 공격한다<br>돌진 후, 자신의 위치에 아이기스의 방패를 설치한다.<br>아이기스의 방패 안에 있는 모든 아군은 저항을 얻는다"
    },
    passive: {
      name: "신의 가호", description: "받은 피해에 비례해 궁극기를 충전한다"
    }
  },
  {
    id: "jack",
    name: "잭 더 리퍼",
    creator: "낫",
    role: "암살자",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 4,
    releaseDate: 7,
    portrait: "images/chr4.png",
    hp: 24,
    story: "안개가 짙게 깔린 도시의 뒷골목에서 활동하던 정체불명의 연쇄 살인마. 누구도 그의 이름과 얼굴을 알지 못한 채,\n사람들은 그를 잭 더 리퍼라 부르기 시작했다. 어느 날 홀연히 자취를 감춘 그는 세월이 흐른 지금도 피 묻은 칼을 손에 쥔 채 모습을 드러낸다.\n목표를 노리는 순간, 그는 그림자처럼 접근해 흔적 하나 남기지 않고 사라진다.",
    weapon: {
      name: "녹슬고 피 묻은 칼",
      type: "근접 무기",
      description: "피로 물든 녹슨 칼"
    },
    skills: [
      { name: "목표 포착", cooldown: "⌛8s", description: "전방으로 탄환을 발사한다<br>적 적중 시, 피해를 입히고 구속을 부여한다"},
      { name: "습격 준비", cooldown: "⌛25s", description: "은신과 대량의 신속을 얻는다"}
    ],
    ultimate: {
      name: "암살",
      gauge: "🔋3500p",
      description: "일시적으로 기습 태세에 돌입한다<br>기습 태세 동안 대량의 신속을 획득하고, 공격 시 추가 피해를 가한다.<br>공격 종료 후, 기습 태세가 해제된다"
    },
    passive: null
  },
  {
    id: "tempest",
    name: "템페스트",
    creator: "트작",
    role: "저격수",
    keywords: [{ emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 5,
    releaseDate: 32,
    portrait: "images/chr5.png",
    hp: 26,
    story: "엘프들의 고향 '실바니아 숲'​의 파수꾼인 엘프 소녀. 뛰어난 활 솜씨와 밝은 성격으로 모두의 신뢰를 받았지만,\n숲이 머지않아 타락한다는 고대의 예언만큼은 믿지 않았다. 자신의 믿음이 옳다는 것을 증명하기 위해 숲을 떠나\n세상을 여행하며 예언의 진실을 직접 확인하고 있다.",
    weapon: {
      name: "바람의 활",
      type: "원거리 무기",
      description: "고대 엘프의 무기"
    },
    skills: [
      {
        name: "순풍", cooldown: "⌛10s", description: "자신의 다음 일반 공격을 강화한다<br>주변 적에게 광역으로 피해를 입힌 후 넉백시킨다" },
      { name: "폭풍", cooldown: "⌛25s", description: "잠깐의 딜레이 후, 주변을 광역으로 공격하고 적을 밀쳐내며 구속을 부여한다" }
    ],
    ultimate: {
      name: "태풍 화살",
      gauge: "🔋3000p",
      description: "전방으로 태풍 화살을 발사한다<br>태풍 화살 주변에 있는 모든 적을 끌어당기고 이후 폭발하며 광역으로 피해를 준다"
    },
    passive: {
      name: "활공", description: "공중에서 웅크리기 시, 천천히 활공한다"
    }
  },
  {
    id: "gunner",
    name: "거너",
    creator: "영과",
    role: "저격수",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 6,
    releaseDate: 2,
    portrait: "images/chr6.png",
    hp: 22,
    story: "펑크 시티 정부 산하 특무대 소속 저격수. 어린 시절 집을 떠난 두 누나인 메리와 크리스를 그리워하며 자랐다.\n고향을 지키는 것이 정의라 믿고 정부의 명령에 따라 방아쇠를 당겨왔지만, 자신이 겨눈 총구가 진실을 향하고 있었다는 사실을 깨닫는다.\n결국 펑크 시티를 떠난 그는 두 누나의 흔적을 쫓으며, 자신만의 정의를 찾기 위한 여정을 시작한다.",
    weapon: {
      name: "리볼버",
      type: "히트스캔 무기",
      description: "탄환: 6발<br>치명타 배율: 1.5배<br>명사수의 리볼버"
    },
    skills: [
      { name: "목표 추적", cooldown: "⌛20s", description: "가장 가까운 적 한명에게 발광과 취약을 부여한다" },
      { name: "무차별 난사", cooldown: "⌛35s", description: "전방으로 탄환을 난사하며 뒤로 물러난다" }
    ],
    ultimate: {
      name: "저격",
      gauge: "🔋4000p",
      description: "전방으로 피해량과 사거리가 긴 탄환을 발사한다"
    },
    passive: null
  },
  {
    id: "solis",
    name: "솔리스",
    creator: "세토",
    role: "마법사",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 7,
    releaseDate: 17,
    portrait: "images/chr7.png",
    hp: 26,
    story: "전쟁 고아였던 그녀는 이클립서에게 거두어져 태양 마법을 배우며 성장한 천재 마법사였다.\n스승이 실종되자 달의 전사와 함께 행방을 쫓았지만, 달의 전사가 스승의 죽음을 받아들이고 수색을 포기하자 이를 끝내 받아들이지 못한다.\n설령 자신의 목숨을 잃더라도 스승을 반드시 찾겠다며 스스로를 갉아먹는 길을 선택했고, 결국 두 사람은 서로 다른 길을 걷게 되었다.",
    weapon: {
      name: "솔라 스태프",
      type: "투사체 무기",
      description: "탄환: 20발<br>점화 충전율: 20%<br>이클립서가 물려준 지팡이"
    },
    skills: [
      { name: "흑점 폭발", cooldown: "⌛9s", description: "지정한 위치에 잠깐의 딜레이 후, 광역으로 피해를 주며 화상을 부여한다" },
      { name: "채층", cooldown: "⌛25s", description: "일시적으로 채층 보호막을 형성한다<br>채층이 유지되는 동안 피해량이 증가하며, 피해를 받을 경우 받는 피해를 1회 경감시키고 주변 적에게 광역으로 화상 피해를 가한다" }
    ],
    ultimate: {
      name: "태양풍",
      gauge: "🔋4000p",
      description: "전방으로 폭발성 구체를 발사하며, 구조물에 닿을 시, 광역으로 폭발하며 적에게 열상을 부여한다<br>열상이 부여된 적은 느려지며, 일정 피해가 누적되거나, 화상이 부여될 경우 폭발하며 주변으로 광역 피해를 입힌다"
    },
    passive: null
  },
  {
    id: "bard",
    name: "바드",
    creator: "세토",
    role: "서포터",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 8,
    releaseDate: 9,
    portrait: "images/chr8.png",
    hp: 22,
    story: "엘프 숲 실바니아 출신의 음유시인. 아름다운 선율로 사람들의 마음을 움직이며, 세상의 이야기와 전설을 기록하는 것을 사명으로 삼고 있다.\n잊혀진 영웅들과 숨겨진 진실을 찾아 여행을 떠났으며, 자신의 노래로 그들의 이야기를 영원히 남기려 한다.",
    weapon: {
      name: "뿔피리",
      type: "근접 무기",
      description: "전투보다 연주에 어울린다"
    },
    skills: [
      { name: "행진곡", cooldown: "⌛12s", description: "연주의 효과를 강화하고, 각 선율에 추가 효과를 부여한다<br>치유의 선율: 사용 즉시 대상의 체력을 회복시킨다<br>질풍의 선율: 힘 버프를 추가로 부여한다" },
      { name: "불협화음", cooldown: "⌛25s", description: "잠깐의 딜레이 후, 주변 모든 적에게 피해를 주고 버프를 제거한다" }
    ],
    ultimate: {
      name: "앙코르",
      gauge: "🔋5000p",
      description: "잠깐의 딜레이 후, 주변 모든 아군에게 대량의 추가 체력을 준다"
    },
    passive: {
      name: "연주", description: "주변 아군에게 버프를 지속적으로 제공한다. 양손들기로 연주의 종류를 변경할 수 있다<br>치유의 선율 - 주변 아군에게 재생을 부여한다<br>질풍의 선율 - 주변 아군에게 신속을 부여한다"
    }
  },
  {
    id: "gambler",
    name: "도박사",
    creator: "[검열]",
    role: "컨트롤러",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 9,
    releaseDate: 20,
    portrait: "images/chr9.png",
    hp: 30,
    story: "펑크 시티 출신의 도박사. 사라진 첫째 누나 메리의 행방을 찾기 위해 오래전 고향을 떠났다.\n그녀는 메리에 대한 정보를 얻기 위해 뒷세계에 몸을 담갔고, 수많은 소문과 비밀이 오가는 도박장에서 사람들의 이야기를 모으며 단서를 추적해왔다.\n수년간 도박판에서 살아남으며 돈과 정보를 얻었고, 이제 그녀는 마지막 단서를 찾기 위해 다시 움직이기 시작한다.",
    weapon: {
      name: "잭 나이프",
      type: "근접 무기",
      description: "속임수 걸리면 바로 주머니에서 갈길 준비가 되었다"
    },
    skills: [
      {
        name: "도박", cooldown: "⌛5s", description: "50% 확률로 무작위 버프를 얻는다<br>도박을 4연속 성공할 경우, 잭팟 상태가 되며 일시적으로 모든 버프를 획득한다" },
      { name: "도박장 개설", cooldown: "⌛40s", description: "전방으로 아군에게 은신을 부여하는 도박장을 설치한다" }
    ],
    ultimate: {
      name: "풀하우스",
      gauge: "🔋2500p",
      description: "일시적으로 풀 배팅 상태가 된다<br>도박의 쿨타임이 50% 감소하며, 자신이 보유한 버프를 모든 아군에게 공유한다"
    },
    passive: null
  },
  {
    id: "lunar",
    name: "루나",
    creator: "영과",
    role: "컨트롤러",
    keywords: [{ emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 10,
    releaseDate: 29,
    portrait: "images/chr10.png",
    hp: 28,
    story: "시간의 흐름을 다루는 능력을 지닌 정체불명의 소녀. 과거의 사건으로 인해 시간의 굴레에 갇혀 같은 순간을 수없이 반복했고,\n그 과정에서 기억과 존재 일부를 잃어버렸다. 긴 반복 끝에 굴레에서 벗어났지만,\n잃어버린 기억과 진실을 되찾기 위해 소중한 누군가와의 약속을 따라 홀로 여행을 이어가고 있다.",
    weapon: {
      name: "시간의 검",
      type: "근접 무기",
      description: "영겁의 시간 속에서 유일한 흐름"
    },
    skills: [
      { name: "시간 가속", cooldown: "⌛10s", description: "모든 아군에게 신속과 성급함을 부여한다<br>스킬 사용 후, 시간 감속으로 변경된다" },
      { name: "패러독스", cooldown: "⌛20s", description: "주변 모든 아군의 스킬 쿨타임을 초기화시킨다. 자신의 스킬 쿨타임을 절반 감소시킨다<br>해당 스킬로 초기화한 스킬 1개당, 대상의 체력을 4 회복시킨다" },
      { name: "시간 감속", cooldown: "⌛10s", description: "모든 적군에게 구속과 피로를 부여한다<br>스킬 사용 후, 시간 가속으로 변경된다" }
    ],
    ultimate: {
      name: "시간 정지",
      gauge: "🔋5000p",
      description: "모든 적의 시간을 3초 정지시킨다"
    },
    passive: null
  },
  {
    id: "cyber",
    name: "사이보그",
    creator: "스타",
    role: "근접 딜러",
    keywords: [{ emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 11,
    releaseDate: 30,
    portrait: "images/chr11.png",
    hp: 34,
    story: "기억을 잃고 강제로 네오 아다만트가 이식된 생체 병기. 펑크 시티의 거대 기업 클락워크 컨소시엄이 만들어낸 실험체로,\n인간과 기계가 결합된 존재였다.그러나 어느 날 의식을 되찾아 병기의 명령에서 벗어났고, 자신의 과거조차 모른 채 깨어난다.\n잃어버린 기억과 자신의 존재 이유를 찾기 위해, 그는 클락워크 컨소시엄의 숨겨진 진실을 쫓기 시작한다.",
    weapon: {
      name: "강철 팔",
      type: "근접 무기",
      description: "끊임없이 개조된 흔적"
    },
    skills: [
      {
        name: "고속 충전", cooldown: "⌛1s", description: "활성화된 동안 전력을 지속적으로 소모한다<br>힘, 저항, 신속, 발광을 얻는다<br>스킬을 재사용해 비활성화할 수 있다" },
      {
        name: "전자기 펄스", cooldown: "⌛15s", description: "전력을 20% 소모한다<br>잠깐의 딜레이 후, 전방으로 전자기 펄스를 발사해 적에게 침묵을 부여한다" }
    ],
    ultimate: {
      name: "해킹 프로토콜",
      gauge: "🔋5000p",
      description: "잠깐의 딜레이 후, 해킹 모듈을 장착한다<br>모든 적에게 침묵과 발광을 부여하고 자신은 고속 충전 상태가 지속된다"
    },
    passive: {
      name: "전력 가동", description: "초당 5씩 충전되는 전력 자원을 보유한다 (최대 100%)"
    }
  },
  {
    id: "wolf",
    name: "늑대인간",
    creator: "영과",
    role: "근접 딜러",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 12,
    releaseDate: 6,
    portrait: "images/chr12.png",
    hp: 28,
    story: "늑대의 본능을 지닌 수인. 빙설황야에서 진행된 실험으로 인해 폭주하는 힘과 야수의 모습으로 변이하는 능력을 얻게 되었다.\n인간의 모습으로는 숲속에서 사냥하며 조용히 살아가지만, 억눌린 본능과 자신의 존재에 대한 의문을 품고 있다.\n자신을 변화시킨 실험의 진실과 잃어버린 과거를 찾기 위해 세상으로 나선다.",
    weapon: [{
      name: "손도끼",
      type: "근접 무기",
      description: "야생에서 살아남기 위함"
    }, {
        name: "발톱",
        type: "근접 무기",
        description: "살점을 뜯기 적합함"
      }],
    skills: [
      {
        name: "사냥감 포착", cooldown: "⌛9s", description: "전방으로 화살을 발사한다" },
      {
        name: "갈고리 투척", cooldown: "⌛20s", description: "전방으로 갈고리를 던진다<br>적에게 닿을 시, 적을 끌어당긴다<br>오브젝트에 닿을 시, 자신을 벽으로 끌어당긴다" },
      {
        name: "포식", cooldown: "⌛6s", description: "전방으로 돌진하며 적에게 피해를 주고 출혈을 부여한다<br>적중 시, 자신의 체력을 회복한다" },
      {
        name: "하울링", cooldown: "⌛15s", description: "일시적으로 자신의 실명을 제거하고 신속을 얻는다" }
    ],
    ultimate: [{
      name: "야성 해방",
      gauge: "🔋1000p",
      description: "잠깐의 딜레이 후, 야수로 변신한다<br>최대 체력과 이동 속도가 증가하며 스킬 쿨타임이 초기화된다"
    }, {
        name: "인간화",
        gauge: "🔋1000p",
      description: "인간으로 변신한다<br>일시적으로 이동 속도가 증가하며 스킬 쿨타임이 초기화된다"
      }],
    passive: {
      name: "야수의 본능", description: "야수 상태일 때, 실명이 상시 유지된다"
    }
  },
  {
    id: "farmer",
    name: "농부",
    creator: "영과",
    role: "탱커",
    keywords: [{ emoji: "🎪", text: "커텀1" }],
    order: 13,
    releaseDate: 10,
    portrait: "images/chr13.png",
    hp: 40,
    story: "작은 동물 농장을 운영하는 평범한 농부. 어느 날 자신의 농장에서 기르던 동물들이 연달아 사라지고 죽는 사건이 발생하자,\n그는 원인을 찾기 위해 직접 밤마다 잠복하기 시작한다.\n마침내 범인이 평범한 짐승이 아닌 변이된 생명체라는 것을 알아낸 그는, 자신의 터전과 남은 동물들을 지키기 위해 그 존재를 추적하기 시작한다.",
    weapon: {
      name: "대낫",
      type: "근접 무기",
      description: "수확의 시간"
    },
    skills: [
      { name: "수확", cooldown: "⌛5s", description: "주변을 공격하고 자신의 체력을 회복한다" },
      { name: "노동요", cooldown: "⌛25s", description: "자신과 주변 아군에게 추가 생명력과 신속을 부여한다" }
    ],
    ultimate: {
      name: "풍년",
      gauge: "🔋3500p",
      description: "전방으로 낫을 크게 돌리면서 돌진한다<br>적에게 피해를 주고 맹독을 부여하고 재생을 얻는다"
    },
    passive: {
      name: "사냥개", description: "공격한 적을 추적하는 사냥개를 소환한다<br>일정 이상의 피해를 받으면 기절하며, 일정 시간 후 다시 행동한다"
    }
  },
  {
    id: "vampire",
    name: "뱀파이어",
    creator: "세토",
    role: "암살자",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 14,
    releaseDate: 11,
    portrait: "images/chr14.png",
    hp: 24,
    story: "잊혀진 전쟁 속에서 죽음을 앞두고 있던 소녀. 생명을 이어가기 위해 정체불명의 존재와 계약을 맺고 흡혈귀가 되었으며,\n이후 오랜 세월을 자신의 저택에서 홀로 살아왔다. 긴 시간 동안 잊혀진 과거의 흔적을 쫓던 그녀는,\n자신을 흡혈귀로 만든 존재와 그날의 진실을 찾기 위해 다시 세상 밖으로 나선다.",
    weapon: {
      name: "핏빛 잔",
      type: "근접 무기",
      description: "인공 혈액으로 만들어졌다"
    },
    skills: [
      {
        name: "흡혈", cooldown: "⌛7s", description: "전방을 공격하고 출혈을 부여한다<br>체력을 흡혈한다" },
      { name: "박쥐화", cooldown: "⌛20s", description: "잠깐의 딜레이 후, 가장 가까운 적에게 순간이동 한 뒤 은신을 얻는다" }
    ],
    ultimate: {
      name: "피의 갈망",
      gauge: "🔋3000p",
      description: "전방을 크게 두 번 할퀸다<br>적에게 피해를 주고 출혈을 부여한다<br>체력을 흡혈한다"
    },
    passive: {
      name: "혈귀", description: "적 처치 시, 재생과 신속을 획득한다"
    }
  },
  {
    id: "speed",
    name: "잭스",
    creator: "스타/준우",
    role: "암살자",
    keywords: [{ emoji: "📋", text: "커컴CWC" }],
    order: 15,
    releaseDate: 45,
    portrait: "images/chr15.png",
    hp: 16,
    story: "펑크 시티에서 제작된 특수 부츠를 사용하는 속도의 달인. 뛰어난 기동력과 감각으로 누구보다 빠르게 목표를 찾아내는 떠돌이 탐험가이다.\n도시의 뒷골목과 황무지를 누비며 다양한 의뢰를 해결하던 그는, 우연히 여러 사건 속에 숨겨진 거대한 흐름을 마주하게 된다.\n새로운 길과 미지의 흔적을 쫓으며, 세상 곳곳에 남겨진 진실을 찾기 위해 오늘도 끝없이 달려나간다.",
    weapon: {
      name: "창",
      type: "근접 무기",
      description: "가속도를 이용한 찌르기 특화"
    },
    skills: [
      { name: "정찰", cooldown: "⌛3s (3회 충전)", description: "전방으로 돌진한다" },
      { name: "추적", cooldown: "⌛20s", description: "일시적으로 대량의 신속을 얻는다" }
    ],
    ultimate: {
      name: "돌파",
      gauge: "🔋4000p",
      description: "잠깐의 딜레이 후, 돌파 상태에 돌입한다<br>이동 속도가 증가하며, 모든 이동 속도 감소 디버프를 무시한다"
    },
    passive: null
  },
  {
    id: "magic",
    name: "마술사",
    creator: "영과",
    role: "저격수",
    keywords: [{ emoji: "💡", text: "커텀2" }, { emoji: "📋", text: "커컴CWC" }],
    order: 16,
    releaseDate: 33,
    portrait: "images/chr16.png",
    hp: 24,
    story: "과거 떠돌이였던 그는 우연히 만난 메리의 제안으로 그녀의 조수가 되어 함께 활동하며, 그녀가 세상을 바라보는 방식에 동화되게 된다.\n그러나 메리가 사망했다는 소식을 듣게 되고, 그녀의 죽음에는 석연치 않은 점이 많다는 것을 알게 된다.\n진실을 밝히기 위해 메리의 활동명인 체스터를 자신의 가명으로 삼아, 마술사로서 세상을 떠돌며 그녀의 흔적과 숨겨진 사건의 뒤를 쫓기 시작한다.",
    weapon: {
      name: "카드",
      type: "투사체 무기",
      description: "탄환: 30발<br>3연발 공격<br>평범한 트럼프 카드"
    },
    skills: [
      {
        name: "플러리쉬", cooldown: "⌛8s", description: "전방으로 카드를 여러 개 던진다<br>길게 누를 수록 집탄율이 증가한다" },
      {
        name: "트릭", cooldown: "⌛20s", description: "가장 가까운 아군에게 이동된다<br>양손들기 시, 대신 가장 가까운 아군을 자신의 위치로 이동시킨다<br>트릭 대상이 된 플레이어의 디버프를 제거한다" }
    ],
    ultimate: {
      name: "조커 카드",
      gauge: "🔋3500p",
      description: "전방으로 카드를 투척해 적에게 조커를 부여한다<br>조커가 지속되는 동안 대상이 받은 피해를 누적하며, 조커 종료 시 누적된 피해를 한 번에 입힌다"
    },
    passive: null
  },
  {
    id: "yuna",
    name: "유나",
    creator: "이루렌",
    role: "마법사",
    keywords: [{ emoji: "📋", text: "커컴CWC" }],
    order: 17,
    releaseDate: 44,
    portrait: "images/chr17.png",
    hp: 22,
    story: "기억을 잃은 채 숲속에서 깨어난 정체불명의 소녀. 인간 중 유일하게 정령들과 온전히 소통할 수 있으며,\n그들의 힘을 빌릴 수 있는 특별한 능력을 지니고 있다. 그러나 그녀의 몸에는 정령들조차 알 수 없는 미지의 기운이 깃들어 있으며,\n잃어버린 기억 속에 숨겨진 자신의 정체를 찾기 위해 숲을 떠나 여행을 시작한다.",
    weapon: {
      name: "정기",
      type: "투사체 무기",
      description: "탄환: 13발<br>미지의 기운이 담겨져있다"
    },
    skills: [
      {
        name: "정령 분출", cooldown: "⌛x", description: "정령을 소모해 전방으로 분출해 피해를 입힌다<br>화염 - 폭발하며 광역으로 피해를 입힌다<br>냉기 - 구속을 부여한다<br>자연 - 투사체 속도가 빠르며 적을 관통한다" },
      {
        name: "정령 사출", cooldown: "⌛x", description: "정령을 전방으로 소환해 피해를 입힌다<br>화염 - 총 2번 폭발하며 적을 공격한다<br>냉기 - 벽을 관통하며 광역으로 구속을 부여한다<br>자연 - 일정 거리 이동 후, 갈라지며 부채꼴로 퍼지며 공격한다" }
    ],
    ultimate: {
      name: "정령 소환",
      gauge: "⌛5s",
      description: "정령을 소환한다<br>화염의 정령 → 냉기의 정령 → 자연의 정령 순서대로 소환된다<br>양손들기로 정령의 순서를 변경할 수 있다"
    },
    passive: {
      name: "속성 융합", description: "적에게 정령 적중 시, 해당 정령 속성에 부합하는 표식을 세긴다<br>두가지 다른 종류의 표식이 부여될 경우 표식이 융합되며 해당되는 효과가 발동된다<br>융해(화염 + 냉기) - 기절<br>연소(화염 + 자연) - 추가 피해<br>서리(냉기 + 자연) - 침묵 + 공포"
    }
  },
  {
    id: "cl",
    name: "시엘",
    creator: "세토",
    role: "서포터",
    keywords: [{ emoji: "📋", text: "커컴CWC" }],
    order: 18,
    releaseDate: 48,
    portrait: "images/chr18.png",
    hp: 22,
    story: "고양이 수인으로 태어난 괴짜 연금술사. 수인에 대한 차별을 피해 빙설황야 외각 오두막에서 홀로 수많은 물약과 연금술을 연구하며 살아가고 있다.\n독특한 실험과 기묘한 연구로 주변에서는 괴짜라 불리지만, 그녀가 만들어낸 물약들은 위험한 환경 속에서 많은 이들에게 도움을 주고 있다.\n자신만의 연구를 이어가던 그녀는, 빙설황야에 숨겨진 미지의 힘과 연금술의 비밀을 파헤치기 위해 새로운 실험을 시작한다.",
    weapon: {
      name: "단검",
      type: "근접 무기",
      description: "해부용 단검"
    },
    skills: [
      { name: "중독 플라스크", cooldown: "⌛10s", description: "전방에 적에게 중독을 부여하고 아군을 회복하는 물약을 던진다" },
      { name: "환영의 비약", cooldown: "⌛25s", description: "주변 아군에게 은신과 성급함을 부여한다" }
    ],
    ultimate: {
      name: "현자의 돌",
      gauge: "🔋4500p",
      description: "일시적으로 자신과 주변 아군의 스킬의 쿨타임 감소 속도를 대폭 증가시킨다"
    },
    passive: null
  },
  {
    id: "baby",
    name: "아기",
    creator: "[검열]",
    role: "서포터",
    keywords: [{ emoji: "🎪", text: "커텀1" }],
    order: 19,
    releaseDate: 8,
    portrait: "images/chr19.png",
    hp: 20,
    story: "<span style='font-size:22px;'>응애.\n내가 제대로 된 스토리를 가지고 있을 것 같애?????",
    weapon: [{
      name: "쪽쪽이",
      type: "근접 무기",
      description: "야르~~"
    }, {
        name: "응애",
        type: "범위 공격(차지형)",
        description: "아기의 울음은 피아식별이 안된다"
      }],
    skills: [
      { name: "애교", cooldown: "⌛12s", description: "전방의 적을 기절시킨다" },
      {
        name: "딸랑이", cooldown: "⌛12s", description: "자신과 주변 아군을 회복시키는 파동을 지속적으로 발동시킨다<br>스킬 시전 시, 주변 적을 밀쳐내며 공격한다" }
    ],
    ultimate: {
      name: "어부바",
      gauge: "🔋1000p",
      description: "가장 가까운 아군에게 어부바를 한다.<br>지속적으로 어부바한 아군을 치유하고, 기본 무기가 차지형 광역 무기로 변경된다"
    },
    passive: null
  },
  {
    id: "mechanic",
    name: "메카닉",
    creator: "영과/스타",
    role: "컨트롤러",
    keywords: [{ emoji: "🎪", text: "커텀1" }, { emoji: "📋", text: "커컴CWC" }],
    order: 20,
    releaseDate: 13,
    portrait: "images/chr20.png",
    hp: 30,
    story: "펑크 시티의 몰락을 막아낸 천재 메카닉. 뛰어난 기술력과 발명품으로 쇠퇴하던 산업을 되살리고, 사람들에게 새로운 미래를 보여주었다.\n그러나 클락워크 컨소시엄이 펑크 시티에 들어오며 그녀의 기술은 도시의 발전이 아닌 지배를 위한 수단으로 이용되기 시작한다.\n자신의 발명품이 잘못된 목적에 사용되는 것을 막으려던 그녀는 클락워크 컨소시엄에게 붙잡히고, 그들의 목적을 위한 강제 연구와 개발에 이용된다.",
    weapon: {
      name: "리벳 캐논",
      type: "히트스캔 무기(산탄)",
      description: "탄환: 30발<br>5연발 공격<br>볼트와 나사를 엮어 만든 산탄총"
    },
    skills: [
      { name: "펄스 폭탄", cooldown: "⌛9s", description: "전방으로 오브젝트에 닿으면 폭발하고 적에게 피해와 감전을 부여하는 펄스 폭탄을 던진다" },
      {
        name: "포탑 설치", cooldown: "⌛15s", description: "전방으로 터렛을 설치한다<br>주변 적을 자동으로 추적해 공격한다" }
    ],
    ultimate: {
      name: "봉쇄 프로토콜",
      gauge: "🔋5000p",
      description: "봉쇄 터렛을 자신의 위치에 설치한다<br>일정 시간 뒤 광범위한 범위로 모든 적을 기절시킨다"
    },
    passive: null
  }
];
