const scenes = [
  {
    "id": "FR-001",
    "title": "La caution prend son temps",
    "titleKo": "보증금 반환의 여유",
    "scene": "퇴거 후 집주인에게 보증금 반환을 요청했더니, 법적으로 최대 2개월 이내에 돌려주면 된다는 답변을 받았다. 즉시 반환을 기대했던 나와 달리 집주인은 전혀 서두르지 않았다.",
    "rule": "보증금 반환은 즉각적인 의무가 아니라 일정 기간 내 처리되는 행정 절차다.",
    "visibility_score": "30", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-002", "title": "Le corps non épilé", "titleKo": "제모하지 않는 몸",
    "scene": "학교에서 만난 친구들이 제모를 하지 않은 채 민소매를 입고 다녔다. 주변 누구도 인상을 찌푸리지 않았고, 당사자도 전혀 부끄러워하지 않았다.",
    "rule": "타인이 개입하거나 판단할 영역이 아니다.",
    "visibility_score": "60", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Foucault", "domain": "BODY", "observation_method": "목격"
  },
  {
    "id": "FR-003", "title": "Sans soutien-gorge", "titleKo": "노브라의 일상화",
    "scene": "수업 중 반 대다수의 여학생들이 브라를 하지 않아 유두가 셔츠 위로 표시가 났다. 아무도 이를 의식하거나 언급하지 않았다.",
    "rule": "속옷 착용 여부는 개인의 선택이며, 신체 노출은 성적인 맥락으로 자동 해석되지 않는다.",
    "visibility_score": "60", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Foucault, Hofstede", "domain": "BODY", "observation_method": "목격"
  },
  {
    "id": "FR-004", "title": "Le bruit dans les transports", "titleKo": "대중교통의 소음 허용",
    "scene": "트램 안에서 한 승객이 스피커폰으로 통화를 하고, 다른 승객은 이어폰 없이 동영상을 재생했다. 주변 승객 누구도 불쾌한 반응을 보이지 않았다.",
    "rule": "대중교통에서 개인의 소리가 타인에게 들리는 것은 크게 문제되지 않는다.",
    "visibility_score": "45", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "SPACE", "observation_method": "경험"
  },
  {
    "id": "FR-005", "title": "Le dîner, c'est une expérience", "titleKo": "저녁 식사는 경험이다",
    "scene": "프랑스 친구에게 저녁 식사에 초대받았다. 오후 8시에 시작된 자리는 10시가 다 되어 끝났다. 뉴스를 보며 대화하고, 좋아하는 영화를 소개하고, 샴페인을 마시며 우노를 했다.",
    "rule": "저녁 식사는 음식을 먹는 행위가 아니라 함께 시간을 보내는 사회적 경험이다.",
    "visibility_score": "45", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hall", "domain": "FOOD", "observation_method": "경험"
  },
  {
    "id": "FR-006", "title": "La CAF prend son temps", "titleKo": "주거보조금 처리의 느림",
    "scene": "한국에서부터 서류를 준비해 프랑스 도착 직후 CAF(주거보조금)를 신청했다. 한 달이 넘도록 아무런 업데이트가 없었고, 프랑스 친구와 직접 사무실을 방문해 문의한 후 2주 뒤에야 보조금을 받을 수 있었다.",
    "rule": "행정 처리는 '최대한 빨리'가 목표로 진행되지 않는다. 때로는 직접 찾아가는 것이 해결책이 될 수 있다.",
    "visibility_score": "15", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "4.0", "frequency": "반복", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-007", "title": "Par courrier, s'il vous plaît", "titleKo": "우편으로 처리되는 행정",
    "scene": "아멜리 카드(건강보험증) 발급을 위해 사무실에 총 두 번 우편을 보냈다. 집을 비울 때도 퇴거 의사를 최소 한 달 전에 집주인에게 우편으로 전달해야 했다.",
    "rule": "프랑스 행정에서 우편은 공식적인 의사소통 수단이다. 디지털보다 종이 문서가 법적 효력을 가진다.",
    "visibility_score": "85", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-008", "title": "On se parle dans le bus", "titleKo": "버스에서 말 걸기",
    "scene": "껑에서 파리행 버스에서 옆에 앉은 중년 남자가 먼저 말을 걸어왔다. 그는 조각가로 활동한다며 작품 사진을 보여줬고, 파리 도착 후 지하철까지 함께 타며 남은 일정을 응원해줬다.",
    "rule": "낯선 사람에게 먼저 말을 거는 것은 무례하거나 이상한 행동이 아니다.",
    "visibility_score": "70", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "일회", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-009", "title": "Bonne journée, inconnue", "titleKo": "공원에서의 인사",
    "scene": "뤽상부르 공원 벤치에 혼자 앉아 있었는데, 지나가던 또래 소녀가 \"좋은 하루 보내세요\"라고 말하고 갔다. 서로 아무 관계도 없었다.",
    "rule": "공공장소에서 모르는 사람에게 가볍게 인사하거나 따뜻한 말을 건네는 것이 자연스럽다.",
    "visibility_score": "70", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-010", "title": "Le sourire dans la rue", "titleKo": "길거리 눈인사",
    "scene": "길을 걷다 보면 서로 모르는 사이임에도 눈이 마주치면 미소를 짓거나 가볍게 인사하고 지나간다.",
    "rule": "시선이 마주쳤을 때 미소나 인사는 적대감이 아닌 일상적인 사회적 신호다.",
    "visibility_score": "60", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-011", "title": "Bonjour d'abord", "titleKo": "Bonjour가 먼저다",
    "scene": "마트에서 찾는 물건이 없어 점원에게 바로 질문했더니 점원이 “Bonjour?”라고 반문했다. 뒤늦게 인사를 하고 나서야 점원이 친절하게 답해줬다.",
    "rule": "대화는 반드시 인사로 시작해야 한다. 인사 없이 요청하는 것은 무례하다. Bonjour Effect",
    "visibility_score": "80", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-012", "title": "Pardon, toujours", "titleKo": "Pardon의 일상성",
    "scene": "사람이 많은 인도에서 어깨가 스칠 것 같으면 실제로 부딪히지 않아도 “Pardon”이라고 말하며 지나간다",
    "rule": "타인의 공간을 침범할 가능성이 생기는 순간, 말로 먼저 양해를 구하는 것이 예의다.",
    "visibility_score": "70", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "목격"
  },
  {
    "id": "FR-013", "title": "Le processus vaut le résultat", "titleKo": "비효율적인 수업 방식의 수용",
    "scene": "학기말 전시 준비를 위해 조별로 의견을 내고 발표한 뒤 직접 만들어보는 수업이 오전 9시부터 오후 6시까지 진행됐다. 누구도 비효율적이라며 불평하거나 의아해하지 않았다.",
    "rule": "과정 자체에 가치가 있다. 결과보다 경험과 참여가 우선될 수 있다.",
    "visibility_score": "25", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "일회", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-014", "title": "Bah… du coup… en fait", "titleKo": "풍부한 언어적 추임새",
    "scene": "프랑스 친구들과 대화할 때 “Bah...”, “Phhh...”, “Du coup”, “En fait” 같은 추임새와 혀 차는 소리가 자주 등장했다. 감정과 뉘앙스를 표현하는 소리가 대화 속에 자연스럽게 섞여 있었다.",
    "rule": "언어적 추임새는 감정과 태도를 전달하는 중요한 소통 수단이다. 불편한 심정을 드러내도 그걸 무례하다고 생각하지 않는다.",
    "visibility_score": "45", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-015", "title": "On fume partout", "titleKo": "어디서나 피우는 담배",
    "scene": "길거리에서 한 손에 유모차, 다른 손에 담배를 든 부모들을 자주 봤다. 카페 테라스에서는 흡연이 암묵적으로 허용되며, 비대면 수업 중에 교수님이 담배를 피우고 학생들도 함께 피웠다.",
    "rule": "흡연은 공간 곳곳에서 자연스럽게 이루어지며, 별도의 지정 구역 없이 일상 속에 존재한다.",
    "visibility_score": "60", "adopted": "낯섦", "adopted_score": "20",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Foucault", "domain": "SPACE", "observation_method": "목격"
  },
  {
    "id": "FR-016", "title": "Ma chaise, votre gratitude", "titleKo": "의자 양보가 과한 감사를 부른다",
    "scene": "워크숍에서 의자가 부족해 나이가 있는 교수님께 내 의자를 양보했더니, 교수님이 과할 정도로 감사 인사를 하셨다. 당연히 해야 할 행동이라고 생각했는데 그 반응이 의외였다.",
    "rule": "나이에 따른 자동적인 양보나 배려가 당연하지 않다. 배려는 개인의 선택이고, 받는 사람도 그것을 특별하게 인식한다.",
    "visibility_score": "30", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "일회", "theory_tag": "Hofstede", "domain": "SPACE", "observation_method": "경험"
  },
  {
    "id": "FR-017", "title": "Non, c'est non", "titleKo": "싫으면 거절하면 된다",
    "scene": "워크숍에서 교수님이 활동을 제안했는데, 하고 싶은 사람들만 따라갔다. 참여하지 않은 사람들도 아무런 눈치를 보지 않았고, 강요도 없었다.",
    "rule": "제안은 의무가 아니다. 참여 여부는 개인이 결정하며 거절해도 관계에 영향이 없다.",
    "visibility_score": "45", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "일회", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "목격"
  },
  {
    "id": "FR-018", "title": "En vacances, on ne dérange pas", "titleKo": "휴가 중엔 연락도 금물",
    "scene": "직장 동료가 휴가를 떠났다. 급한 업무가 있어도 연락하는 것이 실례라는 분위기였다. 작은 가게도 여름휴가 기간엔 문을 닫고 아무도 이를 이상하게 여기지 않았다.",
    "rule": "휴가는 침범할 수 없는 개인의 시간이다. 업무 연락은 휴가 기간 중 하지 않는 것이 예의다.",
    "visibility_score": "15", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "4.0", "frequency": "일회", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-019", "title": "Le dimanche, tout s'arrête", "titleKo": "일요일은 멈춘 날",
    "scene": "일요일에 장을 보러 마트에 갔더니 문이 닫혀 있었다. 거의 모든 가게가 문을 닫아 거리가 조용했다. 이후로 장은 토요일에 미리 봐야 한다는 것을 알게 됐다.",
    "rule": "일요일은 상업 활동이 멈추는 날이다. 개인도 사회도 쉬는 것이 당연하다.",
    "visibility_score": "75", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "TIME", "observation_method": "경험"
  },
  {
    "id": "FR-020", "title": "Tous les âges, même espace", "titleKo": "연령 구분 없는 공간",
    "scene": "테라스, 바, 펍, 클럽 어디에서나 17세부터 80세까지 다양한 연령대가 함께 어울렸다. 나이 때문에 '여기는 내가 있을 곳이 아니다'라는 분위기가 없었다.",
    "rule": "공공 유흥 공간은 나이에 따라 구분되지 않는다. 누구나 원하면 있을 수 있다.",
    "visibility_score": "60", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "SPACE", "observation_method": "목격"
  },
  {
    "id": "FR-021", "title": "Crotte sur le trottoir", "titleKo": "길거리의 강아지 똥",
    "scene": "파리 길거리를 걷다 보면 곳곳에 강아지 배변물이 치워지지 않은 채 남아 있었다. 보호자들이 치우지 않는 경우가 많았고, 주변 사람들도 별로 신경 쓰지 않는 분위기였다.",
    "rule": "반려동물 배변 처리는 보호자의 의무이지만 실제로는 개인의 선택에 맡겨진다.",
    "visibility_score": "85", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Foucault", "domain": "SPACE", "observation_method": "경험"
  },
  {
    "id": "FR-022", "title": "Le train a du retard", "titleKo": "기차는 제시간에 오지 않는다",
    "scene": "기차 지연이나 전날 갑작스러운 운행 취소가 자주 있었다. 파리에서 껑 가는 버스를 기다렸는데 예정 시간보다 1시간이나 늦게 탈 수 있었다. 이런 일이 반복되면서 일정을 믿지 않게 됐다.",
    "rule": "대중교통의 시간표는 참고 사항이지 보장이 아니다.",
    "visibility_score": "45", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "TIME", "observation_method": "경험"
  },
  {
    "id": "FR-023", "title": "Le feu vert, c'est pour les touristes", "titleKo": "초록불은 여행자의 신호",
    "scene": "프랑스 친구가 “프랑스에서 초록불을 기다리는 사람은 관광객”이라고 말했다. 실제로 파리 도착 초반 초록불을 기다리고 있었더니 옆 사람이 왜 안 건너냐고 물어봤다.",
    "rule": "횡단보도 신호는 절대 규칙이 아니다. 차가 없으면 건너는 것이 자연스럽다.",
    "visibility_score": "90", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "SPACE", "observation_method": "경험"
  },
  {
    "id": "FR-024", "title": "Nu, mais pour tous", "titleKo": "전라는 청소년 관람가",
    "scene": "프랑스에서 전라 장면이 모자이크 없이 나오는 영화가 12세 이상 관람가였다. 친구들에게 물으니 그게 왜 문제가 되냐고 되물었다.",
    "rule": "신체 노출 자체는 성적인 것이 아니다. 맥락이 선정성을 결정한다.",
    "visibility_score": "85", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "일회", "theory_tag": "Foucault", "domain": "BODY", "observation_method": "목격"
  },
  {
    "id": "FR-025", "title": "Comment vous m'appelez ?", "titleKo": "나를 뭐라고 부를까요",
    "scene": "학기 초 자기소개 시간에 친구들이 이름 외에 자신을 어떤 대명사로 불러달라고 말했다. 나중에 나에게도 어떻게 지칭하면 되냐고 물어봤다.",
    "rule": "호칭 대명사는 당사자에게 직접 묻고 따르는 것이다.",
    "visibility_score": "75", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "3.0", "frequency": "일회", "theory_tag": "Foucault", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-026", "title": "Froid mais débattable", "titleKo": "선생님은 따뜻하지 않지만 토론은 된다",
    "scene": "프랑스에서 교수님과의 관계는 철저히 학문적이었다. 개인적인 대화는 거의 없었다. 반면 수업 중에는 교수의 의견에 반박하거나 토론하는 것이 장려됐다.",
    "rule": "프랑스에서 친밀함과 비판은 별개다. 교수와 개인적으로 가깝지 않아도 수업 중 반박은 자연스럽다.",
    "visibility_score": "30", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-027", "title": "On s'habille comme on veut", "titleKo": "입고 싶은걸 입는다",
    "scene": "학교에서 만난 친구 중 생물학적으로 남성인데 치마를 입고 다니는 사람이 있었다. 본인도 전혀 거리낌이 없었고, 주변 누구도 이상하게 보거나 반응하지 않았다.",
    "rule": "옷차림은 성별이나 타인의 시선이 아니라 자신이 원하는 것에서 출발한다.",
    "visibility_score": "90", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Foucault", "domain": "BODY", "observation_method": "목격"
  },
  {
    "id": "FR-028", "title": "Cette table est à moi", "titleKo": "식당 자리는 내 것이다",
    "scene": "카페에서 식사를 마친 후에도 한참 앉아 대화를 나눴다. 직원이 서두르게 하거나 계산서를 먼저 가져오는 일이 없었다.",
    "rule": "식당 자리는 음식을 먹는 동안만이 아니라 손님이 원하는 만큼 머무는 공간이다.",
    "visibility_score": "45", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hall", "domain": "FOOD", "observation_method": "경험"
  },
  {
    "id": "FR-029", "title": "Se reposer sans culpabilité", "titleKo": "쉬는 것에 죄책감이 없다",
    "scene": "프랑스 친구들은 주말에 아무것도 하지 않거나 낮잠을 자면서 하루를 보내도 자책하지 않았다. “오늘 아무것도 안 했어”를 문제가 아닌 사실로 말했다.",
    "rule": "일하지 않는 시간은 낭비가 아니다. 쉬는 것은 삶의 정상적인 상태다.",
    "visibility_score": "25", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "TIME", "observation_method": "목격"
  },
  {
    "id": "FR-030", "title": "La lenteur est naturelle", "titleKo": "느림은 자연스러운 상태다",
    "scene": "카페에서 커피 한 잔을 시켜놓고 두 시간째 앉아 있는 사람, 천천히 걷다 멈추고 창을 구경하는 사람들. 서두르는 사람이 오히려 눈에 띄었다.",
    "rule": "느리게 움직이는 것은 비효율이 아니다.",
    "visibility_score": "25", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hall", "domain": "TIME", "observation_method": "목격"
  },
  {
    "id": "FR-031", "title": "Ça dépend", "titleKo": "Ça dépend — 정답은 없다",
    "scene": "프랑스에서 행정 처리나 규칙에 대해 물으면 종종 “Ça dépend(경우에 따라 다르다)”는 답이 돌아왔다. 안 된다고 들었어도 직접 찾아가 물어보면 되는 경우가 있었다.",
    "rule": "규칙은 절대적이지 않다. 상황과 담당자에 따라 결과가 달라질 수 있으므로 직접 부딪혀봐야 한다.",
    "visibility_score": "25", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-032", "title": "La grève fait partie de la vie", "titleKo": "파업은 삶의 일부다",
    "scene": "프랑스 체류 중 크고 작은 파업을 여러 번 겪었다. 사람들은 “C'est comme ça, c'est la vie”라며 담담하게 받아들였다.",
    "rule": "파업과 시위는 사회적 권리의 표현이다. 불편하더라도 그 자체를 부정적으로 보지 않는다.",
    "visibility_score": "90", "adopted": "인지", "adopted_score": "40",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-033", "title": "Le quart d'heure de politesse", "titleKo": "저녁 초대에는 15분 늦게 가라",
    "scene": "프랑스 친구 집 저녁 식사에 초대받아 정시에 도착했더니 호스트가 아직 준비 중이었다. 나중에 알고 보니 10~15분 늦게 도착하는 것이 오히려 예의로 여겨진다.",
    "rule": "'예의 바른 15분(quart d'heure de politesse)'은 호스트에게 준비할 여유를 주는 사회적 규칙이다.",
    "visibility_score": "65", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hall", "domain": "TIME", "observation_method": "경험"
  },
  {
    "id": "FR-034", "title": "Normalement…", "titleKo": "normalement은 '아마도 안 될 거야'",
    "scene": "테크니션에게 작업을 맡긴 뒤 “오후 6시에 준비될 거예요, normalement”이라고 했다면, 백업 플랜을 세워둬라.",
    "rule": "'Normalement'은 '아마도 안 될 수도 있어요'의 완곡한 표현이다. 확답이 아닌 가능성의 언어다.",
    "visibility_score": "15", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hall", "domain": "WORK", "observation_method": "경험"
  },
  {
    "id": "FR-035", "title": "Les yeux dans les yeux", "titleKo": "건배할 땐 눈을 마주쳐야 한다",
    "scene": "프랑스 친구들과 건배를 하는데 잠깐 시선을 돌렸더니 친구가 “눈 마주쳐야 해, 안 그러면 7년간 불운이야”라고 했다.",
    "rule": "건배할 때는 잔을 부딪치는 상대방과 반드시 눈을 맞추어야 한다.",
    "visibility_score": "90", "adopted": "내면화", "adopted_score": "85",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "FOOD", "observation_method": "경험"
  },
  {
    "id": "FR-036", "title": "Satire et critique", "titleKo": "풍자와 비판",
    "scene": "Charlie Hebdo 표지는 매주 프랑스 사회의 금기를 건드린다. 이게 가능한 건 “불쾌함도 표현의 자유”라는 사회적 합의가 있기 때문이다.",
    "rule": "프랑스에서 풍자와 비판은 언론의 자유의 핵심이다. 불편하거나 충격적인 표현도 표현의 자유로 보호된다.",
    "visibility_score": "75", "adopted": "해당없음", "adopted_score": "해당없음",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Foucault", "domain": "LANG", "observation_method": "목격"
  },
  {
    "id": "FR-037", "title": "Monsieur, pas Professeur", "titleKo": "호칭",
    "scene": "수업 중 교수님을 부를 때 “Professeur”라고 했는데, 주변 프랑스 친구들은 모두 “Monsieur”라고 부르고 있었다.",
    "rule": "프랑스에서 교수도, 의사도, 변호사도 Monsieur/Madame으로 부른다. 직책이 아니라 사람으로 호칭한다.",
    "visibility_score": "80", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "3.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  },
  {
    "id": "FR-038", "title": "S'interrompre, c'est participer", "titleKo": "끼어드는 것은 관심의 표현",
    "scene": "프랑스 대화 스타일의 가장 큰 특징은 대화 중 끼어드는 것이 허용될 뿐 아니라 오히려 환영받는다는 것이다. 침묵이 길어지면 주제가 재미없다는 신호로 읽힌다.",
    "rule": "대화 중 끼어드는 것은 적극적인 참여의 신호다.",
    "visibility_score": "60", "adopted": "수용", "adopted_score": "65",
    "emotional_intensity": "2.0", "frequency": "반복", "theory_tag": "Hofstede", "domain": "LANG", "observation_method": "경험"
  }
];

const TILE_W = 3800;
const TILE_H = 2600;
const MIN_SCALE = 0.40;
const MAX_SCALE = 1.65;

const IMAGE_POOL = [
  ...Array.from({ length: 38 }, (_, i) => `./images/FR-${String(i + 1).padStart(3, "0")}.jpeg`)
  
];

const traceData = [];

const entryPage = document.getElementById("entry-page");
const mainPage = document.getElementById("main-page");
const archivePage = document.getElementById("archive-page");
const bonjourInput = document.getElementById("bonjour-input");
const viewport = document.getElementById("world-viewport");
const world = document.getElementById("world");
const titlesLayer = document.getElementById("titles-layer");
const imagesLayer = document.getElementById("images-layer");
const scenePanel = document.getElementById("scene-panel");

let view = { x: 0, y: 0, scale: MIN_SCALE };
let zCounter = 20;
let titleNodes = [];
let titleMap = new Map();
let isPanning = false;
let panStart = { x: 0, y: 0, vx: 0, vy: 0 };
let activeImage = null;
let dragRaf = null;
let lastImageByRule = {};
const DODGE_ATTEMPTS = 0;

bonjourInput.addEventListener("input", () => {
  if (bonjourInput.value.trim().toLowerCase() === "bonjour") {
    setTimeout(() => {
      entryPage.classList.add("hidden");
      mainPage.classList.remove("hidden");
      resetView();
    }, 350);
  }
});

function resetView() {
  view.scale = MIN_SCALE;
  view.x = (window.innerWidth - TILE_W * view.scale) / 2;
  view.y = (window.innerHeight - TILE_H * view.scale) / 2;
  applyView();
  ensureVisibleTitles();
}

let ensureTimer = null;

function applyView() {
  world.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.scale})`;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function screenToWorld(clientX, clientY) {
  return {
    x: (clientX - view.x) / view.scale,
    y: (clientY - view.y) / view.scale
  };
}

function zoomAt(clientX, clientY, factor) {
  const before = screenToWorld(clientX, clientY);
  const nextScale = clamp(view.scale * factor, MIN_SCALE, MAX_SCALE);
  view.scale = nextScale;
  view.x = clientX - before.x * view.scale;
  view.y = clientY - before.y * view.scale;
  applyView();
}

function seededPosition(index) {
  const cols = 8;
  const rows = 5;
  const col = index % cols;
  const row = Math.floor(index / cols);
  const cellW = TILE_W / cols;
  const cellH = TILE_H / rows;
  const jitterX = Math.sin(index * 12.9898) * 0.5 + 0.5;
  const jitterY = Math.sin(index * 78.233) * 0.5 + 0.5;

  return {
    x: col * cellW + cellW * (0.18 + jitterX * 0.64),
    y: row * cellH + cellH * (0.18 + jitterY * 0.64)
  };
}

function createTitle(scene, index, tileX, tileY) {
  const base = seededPosition(index);
  const x = base.x + tileX * TILE_W;
  const y = base.y + tileY * TILE_H;
  const key = `${tileX}:${tileY}:${scene.id}`;

  const el = document.createElement("button");
  el.className = "rule-title";
  el.textContent = scene.title;
  el.dataset.id = scene.id;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;

  const r = Math.random();
  let fontSize;

  if (r < 0.15) fontSize = 26 + Math.random() * 10;
  else if (r < 0.7) fontSize = 42 + Math.random() * 22;
  else fontSize = 62 + Math.random() * 42;

  el.style.setProperty("--fs", `${fontSize}px`);

  const ink = Math.random();
  let inkValue;

  if (ink < 0.15) inkValue = "rgba(0,0,0,0.55)";
  else if (ink < 0.35) inkValue = "rgba(0,0,0,0.72)";
  else inkValue = "rgba(0,0,0,1)";

  el.style.setProperty("--ink", inkValue);

  const node = {
    key,
    el,
    scene,
    baseX: x,
    baseY: y,
    phase: index * 0.71 + tileX * 0.33 + tileY * 0.47,
    amp: 32 + (index % 7) * 9,
    evadeX: 0,
    evadeY: 0,
    dodgeCount: 0,
    dodgeLimit: DODGE_ATTEMPTS
  };

  let holdTimer = null;
  let holdReady = false;

  el.addEventListener("mouseenter", (e) => {
    const p = screenToWorld(e.clientX, e.clientY);

    const traceImage = pickImage(scene);

    const scaleType = Math.random();
    let tracePrintW;
    let tracePrintH;

    if (scaleType < 0.25) {
      tracePrintW = 140 + Math.random() * 120;
      tracePrintH = 100 + Math.random() * 100;
    } else if (scaleType < 0.75) {
      tracePrintW = 280 + Math.random() * 260;
      tracePrintH = 200 + Math.random() * 220;
    } else {
      tracePrintW = 760 + Math.random() * 520;
      tracePrintH = 520 + Math.random() * 420;
    }

    traceData.push({
      type: "hover",
      printW: tracePrintW,
      printH: tracePrintH,
      id: scene.id,
      title: scene.title,
      sceneText: scene.scene,
      image: traceImage,
      x: e.clientX,
      y: e.clientY,
      worldX: p.x,
      worldY: p.y,
      viewportW: window.innerWidth,
      viewportH: window.innerHeight,
      order: traceData.length + 1,
      time: Date.now()
    });

    const count = Math.floor(Math.random() * 2) + 1;

    for (let i = 0; i < count; i++) {
      setTimeout(() => spawnMemoryImage(scene, e), i * 80);
    }

    if (node.dodgeCount < node.dodgeLimit) {
      node.dodgeCount += 1;
      dodgeTitle(node, e);
      return;
    }

    holdReady = false;
    el.classList.add("holding");

    holdTimer = setTimeout(() => {
      holdReady = true;
      el.classList.add("hold-ready");
    }, 1000);
  });

  el.addEventListener("mouseleave", () => {
    clearTimeout(holdTimer);
    holdReady = false;
    el.classList.remove("holding");
    el.classList.remove("hold-ready");
  });

  el.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!holdReady) return;

    const p = screenToWorld(e.clientX, e.clientY);

    const lastImg = Array.from(
      document.querySelectorAll(`.memory-image[data-id="${scene.id}"]`)
    ).at(-1);

    const clickPrintW = lastImg ? Number(lastImg.dataset.printW) : 520;
    const clickPrintH = lastImg ? Number(lastImg.dataset.printH) : 360;

    traceData.push({
      type: "click",
      printW: clickPrintW,
      printH: clickPrintH,
      id: scene.id,
      title: scene.title,
      sceneText: scene.scene,
      image: lastImageByRule[scene.id] || pickImage(scene),
      x: e.clientX,
      y: e.clientY,
      worldX: p.x,
      worldY: p.y,
      viewportW: window.innerWidth,
      viewportH: window.innerHeight,
      order: traceData.length + 1,
      time: Date.now()
    });

    openPanel(scene);
  });

  titlesLayer.appendChild(el);
  titleMap.set(key, node);
  titleNodes.push(node);
}

function dodgeTitle(node, event) {
  const p = screenToWorld(event.clientX, event.clientY);
  const vx = node.baseX - p.x;
  const vy = node.baseY - p.y;
  const dist = Math.max(1, Math.hypot(vx, vy));
  const force = 180 + Math.random() * 120;
  const side = Math.random() > 0.5 ? 1 : -1;

  node.evadeX = (vx / dist) * force + (-vy / dist) * force * 0.45 * side;
  node.evadeY = (vy / dist) * force + (vx / dist) * force * 0.45 * side;

  node.el.classList.add("dodging");
  setTimeout(() => node.el.classList.remove("dodging"), 280);
}

function ensureVisibleTitles() {
  if (!titlesLayer) return;

  const left = -view.x / view.scale;
  const top = -view.y / view.scale;
  const right = left + window.innerWidth / view.scale;
  const bottom = top + window.innerHeight / view.scale;

  const minTileX = Math.floor(left / TILE_W) - 1;
  const maxTileX = Math.floor(right / TILE_W) + 1;
  const minTileY = Math.floor(top / TILE_H) - 1;
  const maxTileY = Math.floor(bottom / TILE_H) + 1;

  const needed = new Set();

  for (let tx = minTileX; tx <= maxTileX; tx++) {
    for (let ty = minTileY; ty <= maxTileY; ty++) {
      scenes.forEach((scene, index) => {
        const key = `${tx}:${ty}:${scene.id}`;
        needed.add(key);

        if (!titleMap.has(key)) {
          createTitle(scene, index, tx, ty);
        }
      });
    }
  }

  for (const [key, node] of titleMap.entries()) {
    if (!needed.has(key)) {
      node.el.remove();
      titleMap.delete(key);
    }
  }

  titleNodes = titleNodes.filter(node => titleMap.has(node.key));
}

function createTitles() {
  titlesLayer.innerHTML = "";
  titleNodes = [];
  titleMap.clear();
  ensureVisibleTitles();
}

function animateTitles(t) {
  titleNodes.forEach((d) => {
    d.evadeX *= 0.94;
    d.evadeY *= 0.94;

    d.el.style.transform =
      `translate(calc(-50% + ${d.evadeX}px), calc(-50% + ${d.evadeY}px))`;
  });

  requestAnimationFrame(animateTitles);
}

function pickImage(scene) {
  let img;

  for (let i = 0; i < 8; i++) {
    img = IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];

    if (img !== lastImageByRule[scene.id]) break;
  }

  lastImageByRule[scene.id] = img;
  return img;
}

function spawnMemoryImage(scene, event) {
  const p = screenToWorld(event.clientX, event.clientY);
  const img = document.createElement("img");

  img.className = "memory-image";
  img.src = pickImage(scene);
  img.alt = "";
  img.dataset.id = scene.id;

  const scaleType = Math.random();
  let w, h;

  if (scaleType < 0.25) {
    w = 140 + Math.random() * 120;
    h = 100 + Math.random() * 100;
  } else if (scaleType < 0.75) {
    w = 280 + Math.random() * 260;
    h = 200 + Math.random() * 220;
  } else {
    w = 760 + Math.random() * 520;
    h = 520 + Math.random() * 420;
  }

  const rotation = (Math.random() * 12 - 6).toFixed(2);

  img.style.setProperty("--w", `${w}px`);
  img.style.setProperty("--h", `${h}px`);
  img.style.setProperty("--r", `${rotation}deg`);
  img.style.setProperty("--z", ++zCounter);

  img.dataset.printW = w;
  img.dataset.printH = h;

  img.style.left = `${p.x + Math.random() * 120 - 60}px`;
  img.style.top = `${p.y + Math.random() * 100 - 50}px`;

  img.addEventListener("pointerdown", startImageDrag);
  img.addEventListener("dblclick", () => openPanel(scene));
  img.onerror = () => {
    img.style.display = "none";
  };

  imagesLayer.appendChild(img);

  requestAnimationFrame(() => {
    img.classList.add("visible");
  });
}

function startImageDrag(e) {
  e.preventDefault();
  e.stopPropagation();

  const img = e.currentTarget;

  img.style.zIndex = ++zCounter;
  img.classList.add("dragging");

  const startPointer = screenToWorld(e.clientX, e.clientY);
  const startLeft = parseFloat(img.style.left) || 0;
  const startTop = parseFloat(img.style.top) || 0;

  function onMove(ev) {
    ev.preventDefault();

    const nowPointer = screenToWorld(ev.clientX, ev.clientY);

    img.style.left = `${startLeft + nowPointer.x - startPointer.x}px`;
    img.style.top = `${startTop + nowPointer.y - startPointer.y}px`;
  }

  function onUp() {
    img.classList.remove("dragging");
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
  }

  window.addEventListener("pointermove", onMove, { passive: false });
  window.addEventListener("pointerup", onUp);
}

function smoothImageDrag() {
  if (!activeImage) {
    dragRaf = null;
    return;
  }

  activeImage.currentLeft += (activeImage.targetLeft - activeImage.currentLeft) * 0.45;
  activeImage.currentTop += (activeImage.targetTop - activeImage.currentTop) * 0.45;

  activeImage.img.style.left = `${activeImage.currentLeft}px`;
  activeImage.img.style.top = `${activeImage.currentTop}px`;

  dragRaf = requestAnimationFrame(smoothImageDrag);
}

window.addEventListener("pointermove", (e) => {
  if (activeImage) {
    const now = screenToWorld(e.clientX, e.clientY);

    activeImage.targetLeft = activeImage.left + now.x - activeImage.start.x;
    activeImage.targetTop = activeImage.top + now.y - activeImage.start.y;

    if (!dragRaf) dragRaf = requestAnimationFrame(smoothImageDrag);

    return;
  }

  if (isPanning) {
    view.x = panStart.vx + (e.clientX - panStart.x);
    view.y = panStart.vy + (e.clientY - panStart.y);
    applyView();
  }
});

window.addEventListener("pointerup", () => {
  if (activeImage) activeImage.img.classList.remove("dragging");

  activeImage = null;
  isPanning = false;
  viewport.classList.remove("dragging");
});

viewport.addEventListener("pointerdown", (e) => {
  if (
    e.target.closest(".rule-title") ||
    e.target.closest(".memory-image") ||
    e.target.closest("#top-nav")
  ) return;

  isPanning = true;
  panStart = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
  viewport.classList.add("dragging");
});

window.addEventListener("wheel", (e) => {
  if (!archivePage.classList.contains("hidden")) return;
  if (scenePanel.classList.contains("active")) return;

  e.preventDefault();

  const speed = 3.2;

  view.x -= e.deltaX * speed;
  view.y -= e.deltaY * speed;

  applyView();

  clearTimeout(ensureTimer);

  ensureTimer = setTimeout(() => {
    ensureVisibleTitles();
  }, 40);
}, { passive: false });

window.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "=") {
    zoomAt(window.innerWidth / 2, window.innerHeight / 2, 1.12);
  }

  if (e.key === "-" || e.key === "_") {
    zoomAt(window.innerWidth / 2, window.innerHeight / 2, 0.88);
  }

  if (e.key === "0") {
    resetView();
  }
});

function openPanel(scene) {
  document.getElementById("panel-title").textContent = scene.title;
  document.getElementById("panel-scene").textContent = scene.scene;

  mainPage.classList.add("scene-open");

  scenePanel.classList.remove("hidden");
  scenePanel.classList.add("active");
}

const TOOLTIP = {
  observation_method: {
    "경험": "내가 직접 체험하며 발견한 규칙",
    "목격": "타인의 행동을 관찰하며 발견한 규칙"
  },
  adopted: {
    "낯섦": "낯섦 · 20점\n규칙의 존재를 인지하지 못했거나\n충격으로 받아들임",
    "인지": "인지 · 40점\n규칙이 있다는 걸 알게 됐지만\n거리감이 있음",
    "수용": "수용 · 65점\n규칙을 이해하고 상황에 따라\n따르게 됨",
    "내면화": "내면화 · 85점\n의식하지 않아도\n자연스럽게 따름",
    "해당없음": "직접 경험하지 않아\n적응도 측정 불가"
  },
  
  domain: {
    "WORK": "업무 · 행정",
    "BODY": "신체 · 외모",
    "SPACE": "공간 · 이동",
    "LANG": "언어 · 소통",
    "FOOD": "식사 · 음식",
    "TIME": "시간 · 일정"
  }
};

function createMetadata(sortType = "default") {
  const table = document.getElementById("metadata-table");

  table.innerHTML = "";

  let orderedScenes = [...scenes];

  if (sortType === "visibility") {
    orderedScenes.sort((a, b) => Number(b.visibility_score) - Number(a.visibility_score));
  }

  if (sortType === "adopted") {
    orderedScenes.sort((a, b) => {
      const scoreA = Number(a.adopted_score);
      const scoreB = Number(b.adopted_score);

      if (Number.isNaN(scoreA) && Number.isNaN(scoreB)) return 0;
      if (Number.isNaN(scoreA)) return 1;
      if (Number.isNaN(scoreB)) return -1;

      return scoreB - scoreA;
    });
  }

  orderedScenes.forEach((scene) => {
    const item = document.createElement("article");

    item.className = "archive-item";

    item.innerHTML = `
      <div class="archive-row-main">
        <div class="archive-id">${scene.id}</div>
        <div class="archive-title">${scene.title}</div>
        <div class="archive-meta-line">
          <span class="has-tip" data-tip="${TOOLTIP.observation_method[scene.observation_method] || ""}">${scene.observation_method}</span>
          <span class="has-tip" data-tip="가시성 점수 ${scene.visibility_score}/100&#10;인식 시점 + 행동 가시성&#10;+ 언어화 가능성의 합산">${scene.visibility_score}</span>
          <span class="has-tip" data-tip="${(TOOLTIP.adopted[scene.adopted] || "").replace(/\n/g, "&#10;")}">${scene.adopted}</span>
          <span class="has-tip" data-tip="${TOOLTIP.domain[scene.domain] || ""}">${scene.domain}</span>
        </div>
      </div>

      <div class="archive-row-detail">
        <div class="archive-detail-inner">
          <div class="archive-section">
            <div class="archive-label">SCENE</div>
            <p>${scene.scene}</p>
          </div>

          <div class="archive-section">
            <div class="archive-label">RULE</div>
            <p>${scene.rule}</p>
          </div>
        </div>
      </div>
    `;

    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });

    table.appendChild(item);
  });
}

const metaBtn = document.getElementById("meta-btn");
const backMainBtn = document.getElementById("back-main-btn");

if (metaBtn) {
  metaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    archivePage.classList.remove("hidden");
    archivePage.classList.add("active");

    document.documentElement.classList.add("archive-open");
  });
}

if (backMainBtn) {
  backMainBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    archivePage.classList.add("hidden");
    archivePage.classList.remove("active");

    document.documentElement.classList.remove("archive-open");
  });
}

document.getElementById("clear-images-btn").addEventListener("click", () => {
  imagesLayer.innerHTML = "";
  zCounter = 20;

  traceData.length = 0;

  const traceLayer = document.getElementById("print-trace");

  if (traceLayer) {
    traceLayer.innerHTML = "";
  }
});

document.getElementById("reset-view-btn").addEventListener("click", resetView);

document.getElementById("close-panel").addEventListener("click", () => {
  scenePanel.classList.remove("active");
  scenePanel.classList.add("hidden");
});

document.getElementById("sort-reset-btn").addEventListener("click", () => createMetadata());
document.getElementById("sort-visibility-btn").addEventListener("click", () => createMetadata("visibility"));
document.getElementById("sort-adopted-btn").addEventListener("click", () => createMetadata("adopted"));

window.addEventListener("resize", resetView);

createTitles();
createMetadata();
requestAnimationFrame(animateTitles);

function closeScenePanel() {
  scenePanel.classList.remove("active");
  scenePanel.classList.add("hidden");
  mainPage.classList.remove("scene-open");
}

document.addEventListener("click", (e) => {
  if (!scenePanel.classList.contains("active")) return;

  if (
    e.target.closest("#scene-panel") ||
    e.target.closest(".rule-title")
  ) {
    return;
  }

  closeScenePanel();
});

function buildPrintTrace() {
  const traceLayer = document.getElementById("print-trace");
  if (!traceLayer) return;

  traceLayer.innerHTML = "";
  if (traceData.length === 0) return;

  const printW = 420;
  const printH = 297;

  const hoverItems = traceData.filter(item => item.type === "hover");
  const clickItems = traceData.filter(item => item.type === "click");

  const printItems = [...hoverItems, ...clickItems];

  const baseW = printItems[0]?.viewportW || window.innerWidth;
  const baseH = printItems[0]?.viewportH || window.innerHeight;

  const scaleX = printW / baseW;
  const scaleY = printH / baseH;

  const hoverImageCount = new Map();

  printItems.forEach((item, index) => {
    if (!Number.isFinite(item.x) || !Number.isFinite(item.y)) return;

    if (item.type === "hover") {
      const currentCount = hoverImageCount.get(item.id) || 0;
      if (currentCount >= 3) return;
      hoverImageCount.set(item.id, currentCount + 1);
    }

    const block = document.createElement("div");
    block.classList.add("trace-block", item.type);

    const left = item.x * scaleX;
    const top = item.y * scaleY;

    block.style.left = `${left}mm`;
    block.style.top = `${top}mm`;

    const rawW = Number(item.printW) || (item.type === "click" ? 520 : 280);
    const rawH = Number(item.printH) || (item.type === "click" ? 360 : 200);

    const pxToMm = item.type === "click" ? 0.13 : 0.095;

    let wMm = rawW * pxToMm;
    let hMm = rawH * pxToMm;

    const maxW = item.type === "click" ? 92 : 58;
    const maxH = item.type === "click" ? 68 : 52;
    const minW = item.type === "click" ? 46 : 24;
    const minH = item.type === "click" ? 32 : 18;

    const fit = Math.min(1, maxW / wMm, maxH / hMm);

    wMm *= fit;
    hMm *= fit;

    wMm = Math.max(minW, wMm);
    hMm = Math.max(minH, hMm);

    block.style.width = `${wMm}mm`;
    block.style.height = `${hMm}mm`;

    if (item.type === "hover") {
      const hoverIndex = hoverItems.indexOf(item);
      const hoverTotal = Math.max(1, hoverItems.length - 1);

      const opacity =
        0.35 +
        (hoverIndex / hoverTotal) *
        (0.45 - 0.35);

      block.style.setProperty("--image-opacity", opacity.toFixed(3));
      block.style.zIndex = index + 1;
    } else {
      block.style.setProperty("--image-opacity", "0.75");
      block.style.zIndex = "9999";
    }

    block.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="trace-text">
        <h2>${item.title}</h2>
        ${
          item.type === "click"
            ? `<p class="trace-scene">${item.sceneText}</p>`
            : ""
        }
      </div>
    `;

    traceLayer.appendChild(block);
  });
}

window.addEventListener("beforeprint", buildPrintTrace);

function waitForTraceImages() {
  const images = Array.from(
    document.querySelectorAll("#print-trace img")
  );

  return Promise.all(
    images.map(img => {
      if (img.complete && img.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        img.onload = resolve;

        img.onerror = () => {
          img.closest(".trace-block")?.remove();
          resolve();
        };
      });
    })
  );
}

const printBtn = document.getElementById("print-btn");

if (printBtn) {
  printBtn.addEventListener("click", async () => {
    buildPrintTrace();
    await waitForTraceImages();
    window.print();
  });
}

const archivePrintBtn = document.getElementById("archive-print-btn");

if (archivePrintBtn) {
  archivePrintBtn.addEventListener("click", async () => {
    buildPrintTrace();
    await waitForTraceImages();
    window.print();
  });
}

archivePrintBtn.addEventListener("click", () => {
  window.open("Archive_Hardcopy.pdf", "_blank");
});