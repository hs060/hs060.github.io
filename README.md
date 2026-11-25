# Lab 7 — Personal Learning Archive

박현석의 자료구조와 알고리즘 학습 과정을 소개하는 반응형 웹사이트입니다. 주제 네트워크에서 시작점과 도착점을 고르면 BFS가 그래프를 탐색해 간선 수가 가장 적은 학습 경로를 표시합니다.

## 실행 및 수정

1. `index.html`을 브라우저에서 열어 확인합니다.
2. `script.js`의 `graph` 객체에서 주제와 연결 관계를 수정할 수 있습니다. 화면에 표시되는 노드와 설명도 `index.html`에서 함께 바꿉니다.
3. GitHub 저장소에 푸시한 뒤 Netlify에서 저장소를 연결하거나, Netlify Drop에 `personal-website` 폴더를 업로드합니다.
4. 공개된 Netlify 주소를 `submission.txt`에 입력해 Autolab에 제출합니다.

## 알고리즘 성능

BFS는 인접 리스트로 표현한 비가중치 그래프의 최단 경로를 찾습니다. 시간 복잡도는 `O(V + E)`, 공간 복잡도는 `O(V)`입니다. 여기서 `V`는 주제(정점)의 수, `E`는 주제 연결(간선)의 수입니다.
