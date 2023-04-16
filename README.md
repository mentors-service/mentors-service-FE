# mentors 프로젝트

## Introduce
멘토링 서비스 컨셉의 커뮤니티

## Installation
```
1. git clone https://github.com/mentors-service/mentors-service-FE.git

2. cd mentors-service-FE

3. npm install

4. npm run start
```

## Setting
```
# .env.development.local

REACT_APP_BASE_URL=백엔드 API 주소
REACT_APP_KAKAO_OAUTH_URL=백엔드 카카오 OAuth 주소
```

## 💻 Web Languages / Libraries

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white) ![ReactQuery](https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)

![ReactRouterDom](https://img.shields.io/badge/React%20Router%20DOM-4A154B.svg?style=for-the-badge&logo=react&logoColor=white)

![StyledComponents](https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)

# 🗂️ 프로젝트 구조

<pre>
📦src
 ┣ 📂api
 ┃ ┣ 📜article.ts
 ┃ ┣ 📜comment.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜recruit.ts
 ┃ ┣ 📜scrap.ts
 ┃ ┣ 📜setting.ts
 ┃ ┗ 📜user.ts
 ┣ 📂assets
 ┃ ┗ 📂svgs
 ┃ ┃ ┣ 📜bookmark.svg
 ┃ ┃ ┣ 📜comment.svg
 ┃ ┃ ┣ 📜group.svg
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜keyboard-arrow-down.svg
 ┃ ┃ ┣ 📜logout.svg
 ┃ ┃ ┣ 📜profile.svg
 ┃ ┃ ┣ 📜profileImg.svg
 ┃ ┃ ┣ 📜scrap.svg
 ┃ ┃ ┗ 📜search.svg
 ┣ 📂components
 ┃ ┣ 📂Dropdown
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜Button.style.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Icon
 ┃ ┃ ┃ ┣ 📜Icon.style.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂List
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜List.style.tsx
 ┃ ┃ ┣ 📂Text
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜Text.style.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.style.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Toast
 ┃ ┃ ┣ 📂ListItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜ListItem.style.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜type.ts
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┃ ┣ 📜authContext.ts
 ┃ ┃ ┃ ┗ 📜useAuth.ts
 ┃ ┃ ┣ 📂Dropdown
 ┃ ┃ ┃ ┣ 📜dropdownContext.ts
 ┃ ┃ ┃ ┗ 📜useDropdown.ts
 ┃ ┃ ┣ 📂Markdown
 ┃ ┃ ┃ ┣ 📜markdownContext.ts
 ┃ ┃ ┃ ┗ 📜useMarkdown.ts
 ┃ ┃ ┣ 📂Toast
 ┃ ┃ ┃ ┣ 📜toastContext.ts
 ┃ ┃ ┃ ┗ 📜useToast.ts
 ┃ ┃ ┣ 📂UserInfo
 ┃ ┃ ┃ ┣ 📜userInfoContext.ts
 ┃ ┃ ┃ ┗ 📜useUserInfo.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜useIntersectionObserver.ts
 ┣ 📂pages
 ┃ ┣ 📂article
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂ArticleInfo
 ┃ ┃ ┃ ┃ ┣ 📜ArticleInfo.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┃ ┣ 📜Button.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂CommentForm
 ┃ ┃ ┃ ┃ ┣ 📜CommentForm.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂CommentList
 ┃ ┃ ┃ ┃ ┣ 📂CommentListItem
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CommentListItem.style.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CommentList.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂UserInfo
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UserInfo.style.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜Article.style.tsx
 ┃ ┃ ┣ 📜Article.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜KakaoLogin.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜Home.style.tsx
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📂me
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Input.style.tsx
 ┃ ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜tab.style.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜Me.style.tsx
 ┃ ┃ ┗ 📜Me.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📜Profile.style.tsx
 ┃ ┃ ┗ 📜Profile.tsx
 ┃ ┣ 📂write
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Input.style.tsx
 ┃ ┃ ┃ ┣ 📂Markdown
 ┃ ┃ ┃ ┃ ┣ 📜ImageDnDWrapper.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ImageUpload.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜MarkdownEditor.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Result.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┣ 📜Write.style.tsx
 ┃ ┃ ┗ 📜Write.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂providers
 ┃ ┣ 📜AuthProvider.tsx
 ┃ ┣ 📜ToastProvider.tsx
 ┃ ┗ 📜UserInfoProvider.tsx
 ┣ 📂store
 ┃ ┣ 📜data.ts
 ┃ ┣ 📜hooks.ts
 ┃ ┗ 📜store.ts
 ┣ 📂styles
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜colors.ts
 ┃ ┃ ┗ 📜fonts.ts
 ┃ ┣ 📂custom
 ┃ ┃ ┗ 📜status.ts
 ┃ ┣ 📂effects
 ┃ ┃ ┗ 📜animations.tsx
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜common.ts
 ┃ ┗ 📜user.ts
 ┣ 📂utils
 ┃ ┣ 📜formUtil.ts
 ┃ ┗ 📜time.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜reportWebVitals.ts
</pre>
