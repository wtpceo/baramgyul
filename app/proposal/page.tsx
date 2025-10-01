export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 문제 제기 */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            매출 극대화의<br />정답은 없습니다
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
            과장되게 실적을 말하는 회사보다
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
            정답을 찾으려 함께 뛰는 회사를 선택해야 합니다
          </p>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              함께 뛰며 정답을 빠르게 찾으려면<br />
              <span className="font-semibold text-gray-900">외주로 부분부분 맡기는 회사보다</span><br />
              <span className="font-semibold text-gray-900">자체적으로 모든 것을 움직일 수 있는 회사</span>를 선택해야 합니다
            </p>
          </div>
        </div>
      </section>

      {/* 차별점 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              우리의 차별점
            </h2>
            <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-500">
              인하우스 올인원 팀의 강점
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "디자인팀",
                desc: "in-house",
                color: "from-pink-500 to-rose-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              },
              {
                title: "웹/앱 개발팀",
                desc: "in-house",
                color: "from-blue-500 to-cyan-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              },
              {
                title: "영상 제작팀",
                desc: "in-house",
                color: "from-purple-500 to-indigo-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              },
              {
                title: "사진 촬영팀",
                desc: "in-house",
                color: "from-orange-500 to-amber-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              },
              {
                title: "편집팀",
                desc: "in-house",
                color: "from-green-500 to-emerald-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              {
                title: "퍼포먼스 마케팅팀",
                desc: "in-house",
                color: "from-violet-500 to-purple-500",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              }
            ].map((team, index) => (
              <div key={index} className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${team.color} rounded-lg mb-4 flex items-center justify-center text-white`}>
                  {team.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{team.title}</h3>
                <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full">
                  {team.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "합리적인 가격",
                  desc: "외주 마진 제거",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "빠른 대응",
                  desc: "실시간 커뮤니케이션",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
                {
                  title: "즉각 개선",
                  desc: "즉각적인 수정/개선",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                },
                {
                  title: "통합 전략",
                  desc: "데이터 기반 전략 수립",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-white/50 backdrop-blur rounded-xl mx-auto mb-3 flex items-center justify-center text-gray-700">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-base mb-1 text-gray-900">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 제품 분석 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              브리즈밴드 제품 분석
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">편안한 호흡, 행복한 수면</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">제품 핵심 가치</h3>
              <ul className="space-y-3">
                {[
                  "편안한 수면을 위한 집중력 코골이 방지",
                  "시원한 호흡과 통쾌한 숙면",
                  "코골이 완화 효과",
                  "합리적인 가격 (44,500원, 54% 할인)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">타겟 고객층</h3>
              <ul className="space-y-3">
                {[
                  "코골이로 고민하는 30-50대",
                  "수면의 질 개선이 필요한 직장인",
                  "집중력 향상이 필요한 학생",
                  "편안한 호흡을 원하는 모든 분"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3"></div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 제품 이미지 추가 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop&q=80" alt="수면" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80" alt="건강" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80" alt="휴식" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 마케팅 전략 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              마케팅 전략 제안
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">데이터 기반 통합 마케팅 솔루션</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "1",
                title: "콘텐츠 마케팅",
                color: "from-blue-500 to-cyan-500",
                items: [
                  "숏폼 영상: \"코골이 해결 비포/애프터\" 스토리",
                  "사용 후기 영상 제작 (실제 고객 인터뷰)",
                  "수면 건강 정보 콘텐츠 (블로그/SNS)"
                ]
              },
              {
                num: "2",
                title: "퍼포먼스 마케팅",
                color: "from-green-500 to-emerald-500",
                items: [
                  "네이버 검색광고: \"코골이 방지\", \"비강확장기\" 등",
                  "메타/인스타그램 광고: 타겟 연령층 집중 공략",
                  "리타게팅 캠페인: 장바구니 이탈 고객 전환"
                ]
              },
              {
                num: "3",
                title: "크리에이티브 전략",
                color: "from-purple-500 to-pink-500",
                items: [
                  "제품 상세 페이지 리뉴얼 (전환율 최적화)",
                  "제품 촬영 & 라이프스타일 이미지 제작",
                  "할인/프로모션 배너 디자인"
                ]
              },
              {
                num: "4",
                title: "데이터 분석 & 최적화",
                color: "from-orange-500 to-red-500",
                items: [
                  "실시간 광고 성과 모니터링",
                  "A/B 테스트를 통한 크리에이티브 최적화",
                  "주간/월간 리포트 및 전략 조정"
                ]
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${strategy.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {strategy.num}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
                </div>

                <ul className="space-y-2">
                  {strategy.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2"></div>
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 경쟁사 분석 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              경쟁사 분석 & 포지셔닝
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">실제 시장 조사를 통한 차별화 전략 수립</p>
          </div>

          {/* 분석 프로세스 강조 */}
          <div className="mb-12 p-6 bg-white rounded-xl border-l-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-3 text-gray-900">분석 프로세스</h3>
            <p className="text-gray-600 leading-relaxed">
              아래 표는 <span className="font-semibold text-gray-900">예시 데이터</span>입니다.
              실제로는 시장 조사를 통해 <span className="font-semibold text-gray-900">경쟁사의 가격, 리뷰, 마케팅 채널, SNS 활동, 컨텐츠 전략</span> 등을
              면밀히 분석하여 최적의 포지셔닝을 찾아냅니다.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-semibold text-gray-900">항목</th>
                  <th className="p-4 text-center font-semibold text-gray-900">브리즈밴드 V4</th>
                  <th className="p-4 text-center font-semibold text-gray-900">경쟁사 A</th>
                  <th className="p-4 text-center font-semibold text-gray-900">경쟁사 B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "가격", us: "44,500원 (54% 할인)", a: "58,000원", b: "52,000원" },
                  { item: "제품 구성", us: "90일분 세트", a: "30일분", b: "60일분" },
                  { item: "판매자 평가", us: "95% (21건)", a: "88% (156건)", b: "92% (89건)" },
                  { item: "마케팅 채널", us: "쿠팡, 네이버", a: "쿠팡", b: "네이버, 11번가" },
                  { item: "SNS 활동", us: "미흡", a: "활발", b: "보통" },
                  { item: "컨텐츠 마케팅", us: "부재", a: "블로그 운영", b: "유튜브 리뷰" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">{row.item}</td>
                    <td className="p-4 text-center bg-blue-50 font-medium text-gray-900">{row.us}</td>
                    <td className="p-4 text-center text-gray-600">{row.a}</td>
                    <td className="p-4 text-center text-gray-600">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 italic text-center">
              * 위 데이터는 예시이며, 실제 분석 시 정확한 시장 조사 데이터를 활용합니다
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">발견된 강점</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 가격 경쟁력 우수</li>
                <li>• 높은 판매자 평가</li>
                <li>• 장기 사용 세트 구성</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">개선 필요 영역</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SNS 마케팅 부재</li>
                <li>• 컨텐츠 마케팅 미흡</li>
                <li>• 브랜드 인지도 낮음</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">차별화 전략</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 숏폼 컨텐츠 집중</li>
                <li>• 후기 마케팅 강화</li>
                <li>• 검색광고 최적화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 타겟 채널 상세 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              타겟 채널 상세 전략
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">채널별 맞춤 전략</p>
          </div>

          <div className="space-y-6">
            {[
              {
                channel: "메타/인스타그램 광고",
                color: "from-pink-500 to-rose-500",
                budget: "월 150만원",
                strategy: [
                  "타겟: 30-40대 직장인, 수면 고민 관심사",
                  "소재: 숏폼 영상 (비포/애프터)",
                  "최적화: 타겟 오디언스 세분화"
                ],
                kpi: "CPA 15,000원 이하"
              },
              {
                channel: "유튜브 숏츠",
                color: "from-red-500 to-pink-500",
                budget: "월 100만원",
                strategy: [
                  "컨텐츠: 사용 후기, 효과 인증",
                  "협업: 마이크로 인플루언서 (1-10만)",
                  "최적화: 숏폼 바이럴 전략"
                ],
                kpi: "조회수 10만+ / 영상"
              },
              {
                channel: "커뮤니티 바이럴 마케팅",
                color: "from-indigo-500 to-violet-500",
                budget: "월 80만원",
                strategy: [
                  "맘카페, 육아 커뮤니티 타겟 (남편 코골이 고민)",
                  "자연스러운 사용 후기 형식 바이럴 게시글",
                  "체험단 운영 및 실제 후기 확보"
                ],
                kpi: "월 20개 이상 게시글, 댓글 참여율 30%+"
              },
              {
                channel: "미디어보드 & 타운보드",
                color: "from-blue-500 to-cyan-500",
                budget: "협의 가능",
                strategy: [
                  "아파트 엘레베이터 모니터 영상 광고",
                  "타겟: 거주민 반복 노출 (출퇴근 시간대)",
                  "생활 밀착형 광고로 브랜드 인지도 상승"
                ],
                kpi: "주거 지역 타겟 도달률 70%+"
              },
              {
                channel: "카카오택시 미디어보드",
                color: "from-yellow-500 to-amber-500",
                budget: "협의 가능",
                strategy: [
                  "택시 뒷자석 모니터 영상 광고",
                  "타겟: 이동 중 승객 (평균 15-20분 노출)",
                  "출퇴근, 이동 시간대 집중 광고"
                ],
                kpi: "승객 주목도 60%+, 브랜드 인지도 상승"
              },
              {
                channel: "CGV & 메가박스 상영 전 광고",
                color: "from-purple-500 to-pink-500",
                budget: "협의 가능",
                strategy: [
                  "영화 상영 전 영상 광고 (15-30초)",
                  "타겟: 영화 관람객 (고몰입 환경)",
                  "주말 및 저녁 시간대 집중 노출"
                ],
                kpi: "관람객 몰입도 85%+, 광고 회상률 향상"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.channel}</h3>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 text-sm mb-2">전략</h4>
                  <ul className="space-y-2">
                    {item.strategy.map((s, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2"></div>
                        <span className="text-sm text-gray-600">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-gray-700">KPI: </span>
                  <span className="text-gray-600">{item.kpi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 레퍼런스 포트폴리오 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              레퍼런스 포트폴리오
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">유사 제품 마케팅 성공 사례</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "볼뉴머 (의료기기)",
                category: "헬스케어",
                period: "진행중",
                status: "진행중",
                results: [
                  { label: "블로그", value: "상위노출" },
                  { label: "맘카페", value: "바이럴" },
                  { label: "SEO", value: "최적화" }
                ],
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop&q=80",
                highlight: true
              },
              {
                title: "짜죽 (단호박죽)",
                category: "식품",
                period: "진행중",
                status: "진행중",
                results: [
                  { label: "아파트광고", value: "진행중" },
                  { label: "릴스/숏츠", value: "운영중" },
                  { label: "후기", value: "바이럴" }
                ],
                image: "/zzajuk.png",
                highlight: true
              },
              {
                title: "실리콘 빨대 (시즌1)",
                category: "라이프스타일",
                period: "6개월",
                status: "완료",
                results: [
                  { label: "누적 판매", value: "10만개+" },
                  { label: "릴스 조회수", value: "300만+" },
                  { label: "후기 게시글", value: "500건+" }
                ],
                image: "/silicone-straws.png",
                highlight: true
              },
              {
                title: "실리콘 빨대 시즌2 (개선 버전)",
                category: "라이프스타일",
                period: "진행중",
                status: "진행중",
                results: [
                  { label: "출시일", value: "최근" },
                  { label: "영상 촬영", value: "완료" },
                  { label: "캠페인", value: "런칭중" }
                ],
                image: "/silicone-straws.png",
                highlight: true,
                current: true
              }
            ].map((project, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden ${project.current ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-900">
                    {project.category}
                  </div>
                  {project.current && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold animate-pulse">
                      현재 진행중
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      project.status === '진행중'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">캠페인 기간: {project.period}</p>

                  {project.current && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-900 leading-relaxed">
                        <span className="font-semibold">시즌1의 성공</span>을 바탕으로 개선된 제품 출시<br />
                        영상 촬영 완료 및 퍼포먼스 마케팅 런칭 진행 중
                      </p>
                    </div>
                  )}

                  {project.title.includes('볼뉴머') && (
                    <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-900 leading-relaxed">
                        <span className="font-semibold">블로그 마케팅 & SEO 최적화</span><br />
                        검색 엔진 상위 노출 및 맘카페 바이럴 마케팅 진행 중
                      </p>
                    </div>
                  )}

                  {project.title.includes('짜죽') && (
                    <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-900 leading-relaxed">
                        <span className="font-semibold">아파트 영상광고 & SNS 마케팅</span><br />
                        엘레베이터 미디어보드, 릴스/숏츠, 후기 바이럴 진행 중
                      </p>
                    </div>
                  )}

                  {project.highlight && !project.current && !project.title.includes('볼뉴머') && !project.title.includes('짜죽') && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-900 leading-relaxed">
                        <span className="font-semibold">릴스 & 후기 마케팅</span>을 통한 바이럴 성공<br />
                        인스타그램, 유튜브 숏츠, 커뮤니티 집중 전략
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-3">
                    {project.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold mb-1 text-gray-900">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">성과 목표</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              * 제품 특성 및 시장 상황에 따라 달라질 수 있습니다
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">150-250%</div>
                <div className="text-sm text-gray-500">ROAS 목표</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">2-4%</div>
                <div className="text-sm text-gray-500">전환율 목표</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">지속 성장</div>
                <div className="text-sm text-gray-500">점진적 매출 증가</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">3-6개월</div>
                <div className="text-sm text-gray-500">최적화 기간</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 리스크 관리 계획 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              리스크 관리 계획
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">예상 리스크와 대응 전략</p>
          </div>

          <div className="space-y-6">
            {[
              {
                risk: "광고 성과 미달",
                level: "중",
                color: "from-orange-500 to-amber-500",
                impact: "ROAS 목표 미달성, ROI 하락",
                solution: [
                  "주간 단위 성과 모니터링 및 즉각 대응",
                  "A/B 테스트를 통한 소재/타겟 최적화",
                  "저성과 캠페인 즉시 중단 및 재배치"
                ],
                prevention: "1주차부터 소규모 테스트 캠페인 운영"
              },
              {
                risk: "경쟁사 가격 인하",
                level: "중",
                color: "from-yellow-500 to-orange-500",
                impact: "가격 경쟁력 저하, 전환율 감소",
                solution: [
                  "가치 기반 마케팅으로 전환 (품질, 구성 강조)",
                  "번들 상품 또는 사은품 전략",
                  "리뷰/후기 중심의 신뢰도 마케팅"
                ],
                prevention: "주간 경쟁사 모니터링 시스템 구축"
              },
              {
                risk: "시즌 비수기",
                level: "낮음",
                color: "from-blue-500 to-cyan-500",
                impact: "검색량 감소, 광고 효율 저하",
                solution: [
                  "선제적 콘텐츠 마케팅 (SEO 블로그)",
                  "리타게팅 캠페인 강화",
                  "신규 타겟층 발굴 (학생, 여성 등)"
                ],
                prevention: "연중 콘텐츠 마케팅으로 자연 유입 확보"
              },
              {
                risk: "제작 리소스 부족",
                level: "낮음",
                color: "from-green-500 to-emerald-500",
                impact: "콘텐츠 제작 지연, 캠페인 일정 차질",
                solution: [
                  "우선순위 기반 제작 일정 조정",
                  "기존 소재 활용 및 리사이클링",
                  "외부 협력사 긴급 투입"
                ],
                prevention: "2주 선행 제작 버퍼 확보"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.risk}</h3>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                    위험도: {item.level}
                  </span>
                </div>

                <div className="mb-4 p-3 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-sm text-gray-900 mb-1">영향</h4>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-sm text-gray-900 mb-2">대응 방안</h4>
                  <ul className="space-y-1.5">
                    {item.solution.map((s, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2"></div>
                        <span className="text-sm text-gray-600">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm">
                  <span className="font-medium text-gray-700">예방책: </span>
                  <span className="text-gray-600">{item.prevention}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실행 프로세스 Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              실행 프로세스
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">체계적인 4주 프로세스</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                week: "1주차",
                title: "킥오프 & 분석",
                tasks: ["제품/시장 분석", "경쟁사 리서치", "타겟 페르소나 정의"]
              },
              {
                week: "2주차",
                title: "크리에이티브 제작",
                tasks: ["촬영 진행", "영상/이미지 편집", "광고 소재 제작"]
              },
              {
                week: "3주차",
                title: "캠페인 런칭",
                tasks: ["광고 세팅", "랜딩페이지 최적화", "캠페인 시작"]
              },
              {
                week: "4주차~",
                title: "최적화 & 성장",
                tasks: ["데이터 분석", "A/B 테스트", "지속적 개선"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{phase.week}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2"></div>
                      <span className="text-sm text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기대 효과 & CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              기대 효과
            </h2>
            <p className="text-gray-400 text-lg">데이터 기반 성과 목표</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { metric: "점진적 개선", label: "데이터 기반 최적화" },
              { metric: "투명한 소통", label: "주간 성과 리포트" },
              { metric: "지속 성장", label: "장기적 관점" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="text-2xl font-bold mb-3 text-white">
                  {item.metric}
                </div>
                <div className="text-gray-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-10 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              함께 성장하는 파트너가 되겠습니다
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              과장된 약속 대신, 데이터와 경험을 바탕으로<br />
              <span className="font-semibold text-gray-900">매출 극대화의 정답을 함께 찾아가겠습니다</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© 2025 Performance Marketing Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
