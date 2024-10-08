'use server';

// 최신 버전 가져오기
export const getVersion = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  );
  const data = await response.json();
  const version = data[0];

  return version;
};

// 챔피언 목록 데이터 가져오기(ISR)
export const getChampion = async () => {
  const newVersion = await getVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`챔피언 목록 불러오기 에러: ${response.status}`);
  }

  return data;
};

// 챔피언 상세 정보 가져오기(SSR)
export const getDetail = async (id: string) => {
  const newVersion = await getVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/champion/${id}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`챔피언 상세 정보 불러오기 에러: ${response.status}`);
  }
  return data;
};

// 아이템 목록 정보 가져오기(SSG)
export const getItem = async () => {
  const newVersion = await getVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/item.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`아이템 목록 불러오기 에러: ${response.status}`);
  }
  return data;
};
